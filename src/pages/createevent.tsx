import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import { useState,useEffect } from 'react'
import Notification from '@/components/Notification/Notification'
import { NFTStorage } from "nft.storage";
import { useSigner  } from 'wagmi'
import { ethers } from 'ethers'
import { TicketManagerContractAddress,TicketManagerContractABI } from '@/components/Contracts/contracts'
import { useRouter } from 'next/router'

export default function CreateEvent() {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [isSaving,setIsSaving] = useState(false)
  const { data: signer} = useSigner()

  const [nftstorage] = useState(
    new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY })
  );
// NOTIFICATIONS functions
const [notificationTitle, setNotificationTitle] = useState();
const [notificationDescription, setNotificationDescription] = useState();
const [dialogType, setDialogType] = useState(1);
const [show, setShow] = useState(false);
const close = async () => {
  setShow(false);
};

 const  [tickets,setTickets] = useState([{name:"General",price:12,numberOfTickets:200,image:undefined}])
 const addTicketClass = (e) => {
   e.preventDefault()
   // alert("Test")
    let tcks = [...tickets];
    tcks.push({name:"",price:tcks.length+1,numberOfTickets:200,image:undefined}) 
    setTickets(tcks)
    console.log(tcks)
 }

 const deleteTicketClass = (e,id) =>{
  e.preventDefault() 
     if(tickets.length == 1)
     return 
   let tcks = [...tickets]
   console.log(tcks)
   tcks.splice(id,1);
   console.log(tcks)
   setTickets(tcks)
 }
 function nameChanged(event,index){
   let tcks = [...tickets]
   tcks[index].name = event.target.value
   setTickets(tcks)
 }

 
 function priceChanged(event,index){
  let tcks = [...tickets]
  tcks[index].price= event.target.value
  setTickets(tcks)
}



function ticketsChanged(event,index){
  let tcks = [...tickets]
  tcks[index].numberOfTickets= event.target.value
  setTickets(tcks)
}
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }
  
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
  
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
        return
    }
  
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
  }

  function ticketImageSelected(e,index)  {
    if (!e.target.files || e.target.files.length === 0) {
        return
    }

    let tcks = [...tickets]
    const objectUrl = URL.createObjectURL(e.target.files[0])
    tcks[index].image= objectUrl
    tcks[index].file = e.target.files[0]
    setTickets(tcks)
    
  }

  const saveEvent= async (e)=>{
    e.preventDefault()
    setIsSaving(true)
    setDialogType(3) //Information
    setNotificationTitle("Uploading Event.")
    setNotificationDescription("Saving Event Information.")
    setShow(true)
    const eventdata = {name:document.getElementById("eventName").value, description: document.getElementById("description").value,
    image: selectedFile,starttime:document.getElementById("startDate").value,endtime:document.getElementById("endDate").value
    ,token:document.getElementById("tokenName").value,symbol:document.getElementById("symbol").value,ticketClasses:tickets.length  
  }
    console.log(eventdata)
    const eventMetadata = await nftstorage.store(eventdata)

    let ticketClasses = []
    let metadataURI = []
    let _tickets = Array.from(tickets)
    
    for(let index in _tickets)
    {
      let atrributes =[]
      
      let ticket = _tickets[index]
       ticket.description = eventdata.description
       atrributes.push({trait_type:"Start Date",value: eventdata.starttime})
       atrributes.push({trait_type:"End Date",value: eventdata.endtime})
       atrributes.push({trait_type:"Token",value: eventdata.token})
       atrributes.push({trait_type:"Symbol",value: eventdata.symbol})
       ticket.attributes= atrributes
       console.log(ticket)
      ticket.image =ticket.file
      //delete ticket.file
     const ticketMetadata = await nftstorage.store(ticket)
     metadataURI.push(ticketMetadata.url)
     ticketClasses.push(  [ticket.name,
       ethers.utils.parseEther(ticket.price),
       ticket.numberOfTickets,
      0,
      0,
    true])
    }

    try {
      const contract = new ethers.Contract(
        TicketManagerContractAddress,
        TicketManagerContractABI,
        signer
      );
      
      let transaction = await contract.createEvent(eventdata.name,eventdata.token,eventdata.symbol,metadataURI
        ,new Date(eventdata.starttime).getTime()
        ,new Date(eventdata.endtime).getTime(),ticketClasses,eventMetadata.url, {
        gasLimit: 3000000})
        
      

      await transaction.wait();
          setDialogType(1) //Success
          setNotificationTitle("Create Event")
          setNotificationDescription("Event successfully Created.")
          setShow(true)
          setIsSaving(false)
          setTimeout(()=> router.push("/myevents"), 1000); // go to my events page in  1 second

      
    } catch (_error) {
      setDialogType(2) //Error
      setNotificationTitle("Save Profile Error")

      setNotificationDescription(
        _error.data ? _error.data.message : _error.message
      );
      setShow(true)
      setIsSaving(false)

 
    }
  
  

 } 
 return (
    <>
      <Head>
      <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NFT Admissions - NFT Ticket Management on Fantom Blockchain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black"
       
     >
     <Header/>
     {/*<!-- ==== Breadcrumb Section Start ==== -->*/}
    <section className="pt-[150px] pb-24">
      <div className="container">
        <div
          className="rounded-lg border-2 border-stroke bg-bg-color py-5 px-8"
        >
          <ul className="flex items-center">
            <li
              className="flex items-center text-base font-medium text-white"
            >
              <a
                href="javascript:void(0)"
                className="text-white hover:text-primary"
              >
                Home
              </a>
              <span className="px-3"> / </span>
            </li>
            <li
              className="flex items-center text-base font-medium text-white"
            >
              Create Event
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/*<!-- ==== Breadcrumb Section End ==== -->*/}

    <section className="pb-24">
      <div className="container">
        <div
          className="relative  overflow-hidden rounded-xl bg-bg-color"
        >
          <form className="p-8 sm:p-10"  onSubmit={ saveEvent}>
            <div className="-mx-5 flex flex-wrap xl:-mx-8">
              <div className="w-full px-5 lg:w-5/12 xl:px-8">
              <div className="mb-12 lg:mb-0">
                  <div className="mb-8">
                    <input
                      disabled={isSaving }
                      required={!selectedFile ? true: false}
                      type="file"
                      name="eventImage"
                      id="eventImage"
                      className="sr-only"
                      onChange={onSelectFile}
                    />
                    <label
                      for="eventImage"
                      className="cursor-pointer relative flex h-[480px] min-h-[200px] items-center justify-center rounded-lg border border-dashed border-[#A1A0AE] bg-[#353444] p-12 text-center"
                    >
                     <img src={preview ? preview: '/images/default-image.jpg'}/>
                    </label>
                  </div>

            

                  <div className="rounded-md bg-[#4E4C64] py-4 px-8">
                   
                  <div className="pt-2">
                    <button disabled={isSaving }
                      className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                        Save Event
                    </button>
                  </div>                    
                   
                  </div>
                </div>
              </div>
              <div className="w-full px-5 lg:w-7/12 xl:px-8">
                <div>
                  <div className="mb-5">
                    <label
                      for="eventName"
                      className="mb-2 block text-base font-medium text-white"
                    >
                      Event Name
                    </label>
                    <input
                      disabled={isSaving }
                      required
                      type="text"
                      name="eventName"
                      id="eventName"
                      placeholder="Enter event name"
                      className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                    />
                  </div>
                 
                  <div className="mb-5">
                    <label
                      for="description"
                      className="mb-2 block text-base font-medium text-white"
                    >
                      Description
                    </label>
                    <textarea
                      disabled={isSaving }
                      required
                      rows="4"
                      name="description"
                      id="description"
                      placeholder="Type event description"
                      className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                    ></textarea>
                  </div>
                  <div className="mb-5 pt-2">
                    <p className="text-xl font-bold text-white">
                      NFT Token Details
                    </p>
                  </div>

                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 md:w-1/2">
                      <div className="mb-5">
                        <label
                          for="tokenName"
                          className="mb-2 block text-base font-medium text-white"
                        >
                          Name
                        </label>
                        <input
                        disabled={isSaving }
                          required
                          type="text"
                          name="tokenName"
                          id="tokenName"
                          placeholder="Enter token name"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <div className="mb-5">
                        <label
                          for="symbol"
                          className="mb-2 block text-base font-medium text-white"
                        >
                          Symbol
                        </label>
                        <input
                        disabled={isSaving }
                          required   
                          type="text"
                          name="symbol"
                          id="symbol"
                          placeholder="e.g. 'ETHT'"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                    </div>
                  </div>
     
                  <div className="mb-5 pt-2">
                    <p className="text-xl font-bold text-white">
                      Time
                    </p>
                  </div>

                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 md:w-1/2">
                      <div className="mb-5">
                        <label
                          for="startDate"
                          className="mb-2 block text-base font-medium text-white"
                        >
                          Starting date
                        </label>
                        <input
                        disabled={isSaving }
                         required
                          type="datetime-local"
                          name="startDate"
                          id="startDate"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <div className="mb-5">
                        <label
                          for="expireDate"
                          className="mb-2 block text-base font-medium text-white"
                        >
                          Ending date
                        </label>
                        <input
                          disabled={isSaving }
                           required
                          type="datetime-local"
                          name="endDate"
                          id="endDate"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 pt-2">
                    <p className="text-xl font-bold text-white">
                      Ticket Types
                    </p>
                  </div>
                  {tickets.map((item,index)=>(
                  <div key={index} className='mb-5'>
                  <div
                    className="mb-5 rounded-md bg-[#4E4C64] py-4 px-8"
                  >
                    <div className="flex items-center justify-end">
                     
                      <button disabled={isSaving }  onClick={(e)=>deleteTicketClass(e,index)} className="text-white">
                      
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill="currentColor"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      
                    </div>
                    <div className="mb-5">
                    <label
                      for="name"
                      className="mb-2 block text-base font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                     disabled={isSaving }
                      onChange={(e)=>nameChanged(e,index)}
                      type="text"
                      name="name"
                      required
                      value={item.name}
                      id="name"
                      placeholder="Enter ticket name"
                      className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                    />
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 md:w-1/2">
                      <div className="mb-5">
                        <label
                          for="price"
                          
                          className="mb-2 block text-base font-medium text-white"
                        >
                          Price
                        </label>
                        <input
                        onChange={(e)=>priceChanged(e,index)}
                        disabled={isSaving }
                          required
                          min="1"
                          value={item.price}
                          type="number"
                          name="price"
                          id="price"
                          placeholder="5"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <div className="mb-5">
                        <label
                          for="numTickets"
                          className="mb-2 block text-base font-medium text-white"
                        >
                          Number of Tickets
                        </label>
                        <input
                         onChange={(e)=>ticketsChanged(e,index)}
                         disabled={isSaving }  
                          type="number"
                          name="numTickets"
                          id="numTickets"
                          required
                          value={item.numberOfTickets}
                          min="1"
                          placeholder="100"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                      
                    </div>
                  </div>
                  <div className="mb-12 lg:mb-0">
                  <div className="mb-8">
                    <input
                      disabled={isSaving }
                       required={!item.image ? true: false}
                      type="file"
                      name={`file${index}`}
                      id={`file${index}`}
                      className="sr-only"
                      onChange={(e)=>ticketImageSelected(e,index)}
                    />
                    <label
                      for={`file${index}`}
                      className="cursor-pointer relative flex h-[190px] min-h-[50px]  items-center justify-center rounded-lg border border-dashed border-[#A1A0AE] bg-[#353444] p-12 text-center"
                    >
                     <img src={item.image ? item.image: '/images/default-image.jpg'}className="max-h-[160px]"/>
                    </label>
                  </div>

            

                 
                </div>
                 {/* Place Upload Button Here */}
                  </div>
                  
                  </div>))}
                  <div className="pt-2">
                    <button
                    disabled={isSaving }
                      onClick={addTicketClass}
                      className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Add Ticket Type
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

     <Footer />
     <Notification
        type={dialogType}
        show={show}
        close={close}
        title={notificationTitle}
        description={notificationDescription}
      />
     </main></>
     )
     }