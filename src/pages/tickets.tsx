import Head from 'next/head'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import { ethers } from 'ethers'
import { NFTTicketContractABI,TicketManagerContractAddress,TicketManagerContractABI } from '@/components/Contracts/contracts'
import { useSigner,useContractRead,useAccount  } from 'wagmi'
import {useState, useEffect } from 'react'
import Notification from '@/components/Notification/Notification'
import SearchBar from '@/components/SearchBar/searchbar'
import Link from 'next/link'
export default function Tickets() {
  const [tickets,setTickets] = useState([])
  const [refreshData,setRefresData] = useState(new Date())
  const { data: signer} = useSigner()


 // NOTIFICATIONS functions
const [notificationTitle, setNotificationTitle] = useState();
const [notificationDescription, setNotificationDescription] = useState();
const [dialogType, setDialogType] = useState(1);
const [show, setShow] = useState(false);
const close = async () => {
  setShow(false);
};


useEffect(()=>{
  async function getTickets(){
       
   //console.log(signer)   
   //event TicketMinted(address indexed owner,address indexed eventId,uint256 ticketId,uint256 dateMinted);
   const contract = new ethers.Contract(
    TicketManagerContractAddress,
    TicketManagerContractABI,
    signer)   
   const filter =  contract.filters.TicketMinted(await signer?.getAddress(),null,null,null)
   const results = await contract?.queryFilter(filter,0,'latest');
 //  alert(results.length)
   //console.log(results)
   let _tickets = []
   let ticketMap = new Map()
   for(const index in results){
    const nftContract = new ethers.Contract(
      results[index].args.eventId,
      NFTTicketContractABI,
      signer)   

      const tx = await nftContract.balanceOf(results[index].args.owner,parseInt(results[index].args.ticketId)+1)
    //  alert(tx.toNumber())
      console.log(tx)
      if(tx.toNumber() > 0 && !ticketMap[results[index].args.eventId])
      {
         const eventData = await contract.getEvent(results[index].args.eventId)
         console.log(eventData)
         const ticketMetadata = await nftContract.uri(parseInt(results[index].args.ticketId)+1)
         console.log(ticketMetadata)
         const url =ticketMetadata.replace("ipfs://" ," https://nftstorage.link/ipfs/")
         const data = await fetch(url)
         const metadata = await data.json()
         console.log(metadata)
         const image = metadata.image.replace("ipfs://" ," https://nftstorage.link/ipfs/")
         _tickets.push({eventName:eventData.name,ticketName:metadata.name,eventId:results[index].args.eventId,
          ticketId:results[index].args.ticketId, startdate:new Date(metadata.attributes[0].value)
           ,enddate:new Date(metadata.attributes[1].value),image:image,price:metadata.price})
         ticketMap[results[index].args.eventId] = true
      }
    }
   console.log(_tickets)
   setTickets(_tickets)
  
  }
  if(signer)
  getTickets()
},[signer])
  const refundTicket = async(eventid,ticketid) =>{
    try {

      const nftContract =  new ethers.Contract(eventid,NFTTicketContractABI,signer)
      let trans =  await nftContract.callStatic.setApprovalForAll(TicketManagerContractAddress,true,{
        gasLimit: 3000000})
      
      let trans2 =  await nftContract.setApprovalForAll(TicketManagerContractAddress,true,{
          gasLimit: 3000000})
      await trans2.wait()      
          
      const contract = new ethers.Contract(
        TicketManagerContractAddress,
        TicketManagerContractABI,
        signer
      );
      
  
      let tx = await contract.callStatic.refund(eventid,ticketid,{
        gasLimit: 3000000})
        
      let transaction = await contract.refund(eventid,ticketid,{
        gasLimit: 3000000})
        
      
      await transaction.wait();
          setDialogType(1) //Success
          setNotificationTitle("Refund Ticket")
          setNotificationDescription("Ticket Refunded.")
          setShow(true)
          setRefresData(new Date())
          setTickets([])
          
      
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
      setNotificationTitle("Refund Ticket Error")
  
      setShow(true)
      
  
    }
    }
  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NFT Tailwind Template</title>
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
              <Link
                href="/"
                className="text-white hover:text-primary"
              >
                Home
              </Link>
              <span className="px-3"> / </span>
            </li>
            <li
              className="flex items-center text-base font-medium text-white"
            >
              My Tickets 
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="pt-8 pb-24">
      <div className="container">
      <SearchBar />
        <div className="-mx-4 flex flex-wrap">
         {tickets.map((item,index)=> <div key={item.eventId} className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]"
            >
              <div className="mb-5 max-h-[290px] min-h-[290px] relative   rounded-lg">
              <Link
                 href={`/eventdetail/${item.eventId}`}>
                <img
                  src={item.image}
                  alt="Ticket"
                  className="w-full h-[280px]"
                  />
                </Link>
                <button
                  className="absolute right-4 top-4 inline-flex items-center rounded-md bg-white px-2 py-1"
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
              <div>
                <h3>
                  <span
                    className=" inline-block text-lg font-semibold text-white "
                  >
                    {item.eventName}
                  </span>
                </h3>
                <div className="mb-2 flex items-center justify-between">

                <div className="w-full">
                        <h4 className=" text-sm font-semibold text-white">
                          {item.ticketName}

                        
                        </h4>
                     
                      </div>

                      <div className="w-full">
                      <h4 className="text-right text-sm font-semibold text-white">
                        {item.price} FTM

                       
                      </h4>
                    </div>     
                </div>                    
                <div className="mb-6 flex items-center justify-between">
                 
                <div className="w-full">
                    <h5
                      className="text-xs font-semibold text-white"
                    >
                      Start Date

                      <span
                        className="mt-2 block text-xs font-medium text-body-color"
                      >
                        {item.startdate.toString()}
                      </span>
                    </h5>
                  </div>
                  <div className="w-full">
                    <h5
                      className="text-right text-xs font-semibold text-white"
                    >
                      End Date

                      <span
                        className="mt-2 block text-xs font-medium text-body-color"
                      >
                        {item.enddate.toString()}
                      </span>
                    </h5>
                  </div>
                
                </div>

                <div
                  className="flex items-center justify-between border-t-2 border-stroke pt-5"
                >
                  <Link
                 href={`/eventdetail/${item.eventId}`}
                 className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                  >
                    View Event
                  </Link>
                  <button
                    onClick={()=>refundTicket(item.eventId,item.ticketId)}
                    className="flex items-center justify-center rounded-md py-3 px-4 text-sm font-semibold text-white hover:text-primary sm:px-5"
                  >
                    <span className="pr-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Refund Ticket
                  </button>

                </div>
                
              </div>
            </div>
          </div>)}
         
         
         
         
         
          
         

         
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
  </main>
    </>
  )
}
