import Head from 'next/head'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import {QrReader}  from 'react-qr-reader';
import { useState,useEffect } from 'react';
import { XCircleIcon ,CheckCircleIcon,QuestionMarkCircleIcon} from "@heroicons/react/24/solid";
import { ethers } from 'ethers';
import { TicketManagerContractAddress,TicketManagerContractABI } from '@/components/Contracts/contracts'
import { useSigner  } from 'wagmi'
import Link from 'next/link';
function CheckInSuccess(props:any){
  return( <div   className=" m-6 items-center justify-center ">
  
  <h3>
          <p
            className="mt-5 mb-3 inline-block text-lg font-semibold text-white "
          >
            {props.event.name}
          </p>
        </h3>
        <p><CheckCircleIcon className='inline-block h-[200px] text-[#a3e635]'/></p>
        <p
            className="mt-5 mb-3 inline-block text-lg font-semibold text-white "
          >
            Checkin Successful 
          </p>
  
  </div>)
  }
  
function ConfirmCheckIn(props:any){
useEffect(()=>{
   props.callback()
},[])
return( <div   className=" m-6 items-center justify-center ">

<h3>
        <p
          className="mt-5 mb-3 inline-block text-lg font-semibold text-white "
        >
          {props.event.name}
        </p>
      </h3>
      <p><QuestionMarkCircleIcon className='inline-block h-[200px] text-[#60a5fa]'/></p>
      <p
          className="mt-5 mb-3 inline-block text-lg font-semibold text-white "
        >
          Confirming Checkin
        </p>

</div>)
}

function CheckInError(props:any){
    return( <div onClick={props.reloadScanner}   className=" m-6 items-center justify-center ">
     {props.event?.name && <><h3>
          <p
            className="mt-5 mb-3 inline-block text-lg font-semibold text-white "
          >
            {props?.event?.name}
          </p>
        </h3></>}
    <h3>
            <p
              className="mt-2 mb-3 inline-block text-lg font-semibold text-white "
            >
              {props.errorString}
            </p>
          </h3>
          <p><XCircleIcon className='inline-block h-[200px] text-[#ef4444]'/></p>
          <p
              className="mt-5 mb-3 inline-block text-lg font-semibold text-white "
            >
              {props.error}
            </p>
    
    </div>)
    }
    
export default function CheckIn() {
  const { data: signer} = useSigner()

  const [isLoaded,setIsloaded] = useState(false)
  const [isScanned,setIsScanned] = useState(false)
  const [isError,setIsError]  = useState(false)
  const [showScanner,setShowScanner] = useState(true)
  const [errorString,setErrorString] = useState("")
  const [event,setEvent] = useState()
  const [checkedIn,setCheckedIn] = useState(false)
  const [isCheckingIn, setIsCheckingIn] = useState(false)
  const reloadScanner = () =>{
      setIsError(false)
      setIsScanned(false)
      setErrorString()
  }
  const handleScan = (data:any,error:any) => {
   
    console.log(error)
    console.log(data)
    
    if(data)
    {
      console.log(data)

       let _event 
      setIsScanned(true)
      try
      {
           _event = JSON.parse(data?.text)
      
          if(!_event?.eventid || !ethers.utils.isAddress(_event?.eventid) || !_event?.name)
          {
              throw new Error("Qr Code is not valid.")
              
          }
      }catch(_error)
      {      
        setIsError(true)
        setErrorString("Qr Code is not valid.")
        return
          
      }
      setEvent(_event)
    } 
  }

  const handleError = (err:any) =>{
    setIsError(true)
    setErrorString("Qr Code is not valid.")
  
  }
  

  const previewStyle = {
    height: 320,
    width: 320
  }

  useEffect(()=>setIsloaded(true),[])
  
  
  //Check into event
  const checkInToEvent= async () => {
    try {
      const contract = new ethers.Contract(
       TicketManagerContractAddress,
       TicketManagerContractABI,
       signer
     );
      
   const filter =  contract.filters.TicketMinted(await signer?.getAddress(),event.eventid,null,null)
   const results = await contract?.queryFilter(filter,0,'latest');
    if(results.length <= 0)
       throw new Error("You do not have a ticket for this event.")
      
     let tx = await contract.callStatic.checkInToEvent(event.eventid,results[0].args.ticketId,{
       gasLimit: 3000000})
       
     let transaction = await contract.checkInToEvent(event.eventid,results[0].args.ticketId,{
 gasLimit: 3000000})
       
     
     await transaction.wait();
         setCheckedIn(true)     
         
     
   } catch (error) {
 
    
     if (error.code === 'TRANSACTION_REVERTED') {
       console.log('Transaction reverted');
       let revertReason = ethers.utils.parseRevertReason(error.data);
       setErrorString(revertReason);
     }  else if (error.code === 'ACTION_REJECTED') {
     setErrorString('Transaction rejected by user');
   }else {
    console.log(error)
    //const errorMessage = ethers.utils.revert(error.reason);
     setErrorString(`${error.reason}`);
   
 }
     setIsError(true) 
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
              Check In
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="pb-24">
      <div className="container ">
        <div
          className="rounded-xl bg-bg-color flex flex-col items-center justify-center "
        >
          <div className='mt-14'>
          <h2
                  className=" mb-3 text-3xl font-bold text-white sm:mb-0 sm:text-[38px] lg:text-3xl xl:text-[38px]"
                >
                  Scan QR Code
                </h2>
          </div>
       
            <div                       className=" mt-6 mb-14 items-center justify-center rounded-lg border border-dashed border-[#A1A0AE] bg-[#353444] p-12 text-center"
>
         {isLoaded && !isScanned? <div className='container' >
        
<QrReader
containerStyle={previewStyle}

constraints={{ facingMode: 'environment' }}
delay={500}

             onError={handleError}
             onResult={handleScan}
             onLoad={()=>alert(true)}
              /> { showScanner == true &&<div className='scan-line mx-14'></div>}
              </div>: null} {(isScanned  && !isError && !checkedIn) &&          <ConfirmCheckIn callback={checkInToEvent} event={event}/>
            }
            {(isScanned && isError) && <CheckInError event={event} reloadScanner={reloadScanner} errorString={errorString} error="Can't login to Event"/>
            }
            {checkedIn && <CheckInSuccess  event={event}/>}
            </div>
             </div>
          </div>
          </section> 
    <Footer />
  </main>
    </>
  )
}
