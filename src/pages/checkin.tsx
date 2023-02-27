import Head from 'next/head'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import QrReader  from 'react-qr-scanner';
import { useState,useEffect } from 'react';
import { XCircleIcon ,CheckCircleIcon} from "@heroicons/react/24/solid";
function ConfirmCheckIn(props){
return( <div   className=" m-6 items-center justify-center ">

<h3>
        <p
          className="mt-5 mb-3 inline-block text-lg font-semibold text-white "
        >
          {props.eventName}
        </p>
      </h3>
      <p><CheckCircleIcon className='inline-block h-[200px] text-[#a3e635]'/></p>
      <p
          className="mt-5 mb-3 inline-block text-lg font-semibold text-white "
        >
          Confirming Checkin
        </p>

</div>)
}

function CheckInError(props){
    return( <div onClick={props.reloadScanner}   className=" m-6 items-center justify-center ">
    
    <h3>
            <p
              className="mt-5 mb-3 inline-block text-lg font-semibold text-white "
            >
              {props.eventName}
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
  const [isLoaded,setIsloaded] = useState()
  const [isScanned,setIsScanned] = useState()
  const [isError,setIsError]  = useState()
  const [showScanner,setShowScanner] = useState(false)

  const reloadScanner = () =>{
      setIsError(false)
      setIsScanned(false)
  }
  const handleScan = (data) => {
    if(data)
    {
      console.log(data)

       setIsScanned(true)
       setIsError(true)
    }   
  }

  const handleError = (err) =>{
     console.log(`This is your error : ${err}`)
     
  }
  const previewStyle = {
    height: 240,
    width: 320
  }

  useEffect(()=>setIsloaded(true),[])
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
                href="/"
                className="text-white hover:text-primary"
              >
                Home
              </a>
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
         { showScanner == true &&<div class='scan-line ml-4 '></div>}
 
<QrReader
style={previewStyle}

delay={500}

             onError={handleError}
             onScan={handleScan}
             onLoad={()=> setShowScanner(true)}
              /></div>: null} {(isScanned  && !isError) &&          <ConfirmCheckIn eventName="Ash Wednesday Maracas"/>
            }
            {(isScanned && isError) && <CheckInError reloadScanner={reloadScanner} eventName="Ash Wednesday Maracas" error="Can't login to Event"/>
            }
            </div> </div>
          </div>
          </section> 
    <Footer />
  </main>
    </>
  )
}
