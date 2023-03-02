import Head from 'next/head'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import { ethers } from 'ethers'
import { TicketManagerContractAddress,TicketManagerContractABI } from '@/components/Contracts/contracts'
import { useSigner  } from 'wagmi'
import {useState, useEffect } from 'react'
import SearchBar from '@/components/SearchBar/searchbar'
import Link from 'next/link'
export default function MyEvents() {
  const [events,setEvents] = useState([])

  const { data: signer} = useSigner()
  useEffect(()=>{
     async function getEvents(){
          
    const contract = new ethers.Contract(
      TicketManagerContractAddress,
      TicketManagerContractABI,
      signer)   
      //console.log(signer)   
      const filter =  contract.filters.EventCreated(await signer?.getAddress(),null,null,null,null,null)
      const results = await contract?.queryFilter(filter,0,'latest');
      //console.log(results)
      let _events = []
      for(const index in results){
        const url = results[index].args.uri.replace("ipfs://" ," https://nftstorage.link/ipfs/")
        const data = await fetch(url)
        const metadata = await data.json()
        console.log(metadata)
       const image = metadata.image.replace("ipfs://" ," https://nftstorage.link/ipfs/")
      _events.push({name:results[index].args.name,eventId:results[index].args.eventId,
        startdate:new Date(results[index].args.startdate.toNumber())
        ,enddate:new Date(results[index].args.enddate.toNumber()),image:image})
      }
      console.log(_events)
      setEvents(_events)
     //console.log(filter)
     // console.log(contract.filters)
     }
     if(signer)
     getEvents()
  },[signer])
 
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
      <div className="container ">
        <div
          className="rounded-lg border-2 border-stroke bg-bg-color py-5 px-4 flex flex-wrap items-center justify-between"
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
              My Events 
            </li>


          </ul>
          <div className="flex space-x-3 lg:justify-end">
          <Link
             href="/createevent"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                    >
                  Create Event
                </Link>
   </div>
        </div>
     
      </div>
    </section>
    <section className="pt-8 pb-24">
      <div className="container">
       <SearchBar />

        <div className="-mx-4 flex flex-wrap">
         
         {events.map((item,index)=>
         <div key={item.eventId} className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
         <div
           className=" rounded-xl border border-stroke bg-bg-color p-[18px]"
         >
           <div className="  relative mb-5  rounded-lg">
           <Link
                 href={`/eventdetail/${item.eventId}`}>
           
             <img
               src={item.image}
               alt="auctions"
               className="w-full"
             /></Link>
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
               <Link
                 href={`/eventdetail/${item.eventId}`}
                 className=" mb-5 inline-block text-lg font-semibold text-white hover:text-primary"
               >
                 {item.name}
               </Link>
             </h3>
             <div className="mb-6 flex items-center justify-between">
               <div className="w-full">
                 <div className="flex items-center">
                  
                  
                   <div className="w-full">
                 <h5
                   className=" text-xs font-semibold text-white"
                 >
                   Start Date

                   <span
                     className="mt-2 block text-xs font-medium text-body-color"
                   >
                    {item.startdate.toString()}
                   </span>
                 </h5>
               </div>

                 </div>
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
               
             </div>
           </div>
         </div>
       </div>
         )} 
         
         
        </div>
      </div>
    </section>
    <Footer />
  </main>
    </>
  )
}
