import Head from 'next/head'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import { useRouter } from 'next/router'
import { TicketManagerContractAddress,TicketManagerContractABI } from '@/components/Contracts/contracts'
import { useSigner,useContractRead  } from 'wagmi'
import {useRef,useState, useEffect } from 'react'
import QRCode from "react-qr-code";
import {ClipboardDocumentIcon}  from  '@heroicons/react/24/solid'
import {ethers} from 'ethers'
import Notification from '@/components/Notification/Notification'

export default function EventDetail() {
  const [event,setEvent] = useState()
  const [refreshData,setRefresData] = useState(new Date())
  const [settiingCheckin,setSettingCheckin] = useState(false)
  const { data: signer} = useSigner()
  const router  = useRouter()
  const {eventid} = router.query  
  const [profile,setProfile] = useState()
  const [tickets,setTickets] = useState([])
  const [selectedFile,setSelectedFile]  = useState()
  const [preview, setPreview] = useState()
  const svgRef = useRef(null);

  const contractReadEvent= useContractRead({
    address:TicketManagerContractAddress,
    abi: TicketManagerContractABI,
    functionName: 'getEvent',
    enabled:false,
    args:[eventid]
    
  })


  // NOTIFICATIONS functions
const [notificationTitle, setNotificationTitle] = useState();
const [notificationDescription, setNotificationDescription] = useState();
const [dialogType, setDialogType] = useState(1);
const [show, setShow] = useState(false);
const close = async () => {
  setShow(false);
};


  useEffect(()=>{
    async function getEvent(){
      const _event = await contractReadEvent.refetch()
      console.log(_event);
      const url = _event.data.uri.replace("ipfs://" ," https://nftstorage.link/ipfs/")
          const data = await fetch(url)
          const metadata = await data.json()
          console.log(metadata)
         const image = metadata.image.replace("ipfs://" ," https://nftstorage.link/ipfs/")
        let eventData ={..._event.data}
        eventData.image = image
        eventData.description = metadata.description
        console.log(eventData)
      setEvent(eventData)
    }
   if (eventid)
     getEvent() 
  },[eventid,refreshData])

  useEffect(()=>{
    async function getProfile() {
      if(event?.ownerProfile)
      {
        const url = event.ownerProfile.replace("ipfs://" ," https://nftstorage.link/ipfs/")
        fetch(url)
        .then((response) => response.json())
        .then(async (data) => { 
          console.log(data)
           setProfile( {name:data.name,
           description: data.description}) 
           const imageUrl = data.image.replace("ipfs://" ," https://nftstorage.link/ipfs/")
           const image =  await fetch(imageUrl)
           if(image.ok)
           {
              
                 setSelectedFile(await image.blob())
                 }   
  
        });
      }
  
  
   }
  
     if(event) 
        getProfile()
  }
  
  
  ,[event])



  
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

//Get Ticket Data


useEffect(()=>{
  async function getTickets() {
    let _tickets = []
    for(const index in event.metadataURI){
      const url = event.metadataURI[index].replace("ipfs://" ," https://nftstorage.link/ipfs/")

      const data = await fetch(url)
      const metadata = await data.json()
      metadata.image = metadata.image.replace("ipfs://" ," https://nftstorage.link/ipfs/")
      _tickets.push(metadata)
    }
    setTickets(_tickets)
  }

  if(event)
    getTickets()
},[event])

const copyToClipboard = async () => {
  const svg = svgRef.current;
  const svgData = new XMLSerializer().serializeToString(svg);

  // create a canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // create an image element from the SVG data
  const img = new Image();
  img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;

  // wait for the image to load
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });

  // set the canvas size to the image size
  canvas.width = img.width;
  canvas.height = img.height;

  // draw the image onto the canvas
  ctx.drawImage(img, 0, 0);

  // convert the canvas to a Blob
  canvas.toBlob((blob) => {
    const clipboardData = [
      new ClipboardItem({
        [blob.type]: blob
      })
    ];
    navigator.clipboard.write(clipboardData);

  });  
};


const setCheckIns = async() =>{
   
  try {
     const contract = new ethers.Contract(
      TicketManagerContractAddress,
      TicketManagerContractABI,
      signer
    );
     
    const checkIn = event.checkInsAllowed
   
    let tx = await contract.callStatic.setCheckIns(eventid,!event.checkInsAllowed,{
      gasLimit: 3000000})
      
    let transaction = await contract.setCheckIns(eventid,!event.checkInsAllowed,{
gasLimit: 3000000})
      
    
    await transaction.wait();
        setDialogType(1) //Success
        setNotificationTitle("Checkin")
        setNotificationDescription(`${checkIn==true ? 'Check in Disabled':  'Check in Enabled'}`)
        setShow(true)
        setSettingCheckin(false)
        setRefresData(new Date())         
        
    
  } catch (error) {

   
    if (error.code === 'TRANSACTION_REVERTED') {
      console.log('Transaction reverted');
      let revertReason = ethers.utils.parseRevertReason(error.data);
      setNotificationDescription(revertReason);
    }  else if (error.code === 'ACTION_REJECTED') {
    setNotificationDescription('Transaction rejected by user');
  }else {
   console.log(error)
   //const errorMessage = ethers.utils.revert(error.reason);
    setNotificationDescription(`Transaction failed with error: ${error.reason}`);
  
}
    setDialogType(2) //Error
    setNotificationTitle("Check in Error")
    setSettingCheckin(false)
    setShow(true)


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
              Event Check In
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="pt-8 pb-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className=" w-full px-4 lg:w-1/2 ">
            <div
              className="relative max-h-[480px] min-h-[480px] mb-12  flex  w-full items-center justify-center rounded-xl border border-stroke bg-white py-8 sm:py-14 md:py-24 lg:mb-0 lg:py-16 xl:py-28"
            >
              <div className="absolute top-2 right-2" ><ClipboardDocumentIcon title="Click to Copy" onClick={copyToClipboard}  className='hover:text-[#64748b] cursor-pointer text-[#cbd5e1]  h-[30px]' /></div>
               {event && <div style={{  height: "auto", margin: "0 auto", maxWidth: 128, width: "100%" }}>
<QRCode
    size={256}
    style={{height: "auto", maxWidth: "100%", width: "100%",cursor:"pointer" }}
    value={JSON.stringify({eventid:eventid,name:event.name})}
    viewBox={`0 0 256 256`}
    title="Click to Copy"
    ref={svgRef}
    onClick={copyToClipboard}
    /><div className='mt-5'>Scan to Check in</div></div>}
      </div>


           
      <div className="mt-6 rounded-md bg-[#4E4C64] py-4 px-8">
                   
                   <div className="pt-2">
                      <button
                       onClick={setCheckIns}
                       disabled={settiingCheckin}
                       title={event?.checkInsAllowed ==true? 'Click to Disable': 'Click to Enable' }

                       className={` ${event?.checkInsAllowed==true ? 'bg-[#4ade80]' :'bg-[#ef4444]' }  hover:shadow-form w-full rounded-md  py-3 px-8 text-center text-base font-semibold text-white outline-none`}
                     >  
                         {event?.checkInsAllowed==true ? 'Check in Enabled' : 'Check in Disabled'}
                     </button>
 
                    
                   </div>                    
                    
                   </div>

            
            
          </div>
          
         
          <div className="w-full px-4 lg:w-1/2">
            <div className="xl:pl-8">
              <div className="mb-9 justify-between sm:flex">
                <h2
                  className="mb-3 text-3xl font-bold text-white sm:mb-0 sm:text-[38px] lg:text-3xl xl:text-[38px]"
                >
                  {event?.name}
                </h2>
                <button
                  className="inline-flex items-center rounded-md bg-white px-2 py-1"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99999 11.8709L6.15416 11.1009C3.14999 8.37675 1.16666 6.57425 1.16666 4.37508C1.16666 2.57258 2.57832 1.16675 4.37499 1.16675C5.38999 1.16675 6.36416 1.63925 6.99999 2.38008C7.63582 1.63925 8.60999 1.16675 9.62499 1.16675C11.4217 1.16675 12.8333 2.57258 12.8333 4.37508C12.8333 6.57425 10.85 8.37675 7.84582 11.1009L6.99999 11.8709Z"
                      fill="#F85486"
                    />
                  </svg>

                  <span
                    className="pl-1 text-xs font-semibold text-black"
                  >
                    4.6K
                  </span>
                </button>
              </div>

              <div className="mb-9 sm:flex">
                <div
                  className="flex items-center  pr-0 pb-3  sm:pr-8 sm:pb-0"
                >
                  <div
                    className="mr-2 h-11 w-full max-w-[44px] rounded-md"
                  >
                                      

                    <img
                      src={preview ? preview: '/images/profile.jpg'}
                      alt="creator"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="text-base font-semibold text-white">
                      {profile?.name}

                      <span
                        className="block text-base font-medium text-body-color"
                      >
                        Owned by
                      </span>
                    </h3>
                  </div>
                </div>

               
              </div>

              <p
                className="mb-9 text-base font-medium leading-relaxed text-body-color"
              >
                {event?.description}
              </p>

              <div
                className="mb-6 flex flex-wrap items-center justify-between rounded-lg border border-stroke bg-bg-color"
              >
                <div className="w-full sm:w-1/2">
                  <div
                    className="space-y-2 border-stroke p-6 sm:border-r"
                  >
                    <p className="text-base font-semibold text-body-color">
                      Start Date : <span className="text-white">{new Date(event?.startdate.toNumber()).toString()}</span>
                    </p>
                   
                    
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:text-center">
                  <div className="space-y-3 p-6">
                    
                  <p className="text-base font-semibold text-body-color">
                      End Date : <span className="text-white">{new Date(event?.enddate.toNumber()).toString()}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-4 justify-between sm:flex">
                <h2
                  className="mb-3 mt-3 text-2xl font-bold text-white sm:mb-0 sm:text-[34px] lg:text-2xl xl:text-[34px]"
                >
                  Tickets
                </h2>
                
              </div>
              {tickets.map((item,index)=>

              <div
                className="mb-8 overflow-hidden rounded-lg border border-stroke bg-bg-color"
              >
               

                <div className="py-2">
                 
                  <div
                    className="flex justify-between py-[10px] px-4 transition hover:bg-stroke"
                  >
                    <div className="flex items-center">
                      <div
                        className="mr-2 h-10 w-full max-w-[40px] rounded-md"
                      >
                        <img
                          src={item.image}
                          alt="category"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-semibold text-white">
                          {item.name}

                          <span
                            className="block text-sm font-medium text-body-color"
                          >
                            # Tickets
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <h5 className="text-sm font-semibold text-white">
                        {item.price} FTM

                        <span
                          className="block text-sm font-medium text-body-color"
                        >
                          {item.numberOfTickets}
                        </span>
                      </h5>
                    </div>
                    
                  </div>
                 

                    </div>

              
              </div>
              )}
            </div>
          </div>
         
        </div>
        
      </div>
    </section>
     <Footer /> <Notification
        type={dialogType}
        show={show}
        close={close}
        title={notificationTitle}
        description={notificationDescription}
      /></main>
     </>)
     }