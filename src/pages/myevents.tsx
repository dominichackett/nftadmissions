import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import { ethers } from 'ethers'
import { TicketManagerContractAddress,TicketManagerContractABI } from '@/components/Contracts/contracts'
import { useSigner  } from 'wagmi'
import {useState, useEffect } from 'react'
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
              My Events 
            </li>


          </ul>
          <div className="flex space-x-3 lg:justify-end">
          <a
             href="/createevent"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                    >
                  Create Event
                </a>
   </div>
        </div>
     
      </div>
    </section>
    <section className="pt-8 pb-24">
      <div className="container">
        <div
          className="mb-14 rounded-lg border-2 border-stroke py-4 px-5 "
        >
          <div
            className="-mx-4 flex flex-wrap items-center justify-between"
          >
            <div className="w-full px-4 lg:w-7/12">
              <div
                className="flex space-x-3 overflow-x-auto pb-8 lg:pb-0"
              >
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary"
                >
                  All
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary"
                >
                  Digital Art
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary"
                >
                  Music
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary"
                >
                  3D Illustration
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="flex space-x-3 lg:justify-end">
                <div className="relative inline-flex">
                  <select
                    className="appearance-none rounded-md bg-[#353444] py-3 pl-5 pr-10 text-base font-semibold text-white outline-none"
                  >
                    <option value="">All Artworks</option>
                    <option value="">Digital</option>
                    <option value="">Illustration</option>
                  </select>
                  <span
                    className="absolute right-5 top-1/2 -translate-y-1/2"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="relative inline-flex">
                  <select
                    className="appearance-none rounded-md bg-[#353444] py-3 pl-5 pr-10 text-base font-semibold text-white outline-none"
                  >
                    <option value="" selected>Sort By</option>
                    <option value="">Top rate</option>
                    <option value="">Mid rate</option>
                    <option value="">Low rate</option>
                  </select>
                  <span
                    className="absolute right-5 top-1/2 -translate-y-1/2"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
         
         {events.map((item,index)=>
         <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
         <div
           className=" rounded-xl border border-stroke bg-bg-color p-[18px]"
         >
           <div className="  relative mb-5  rounded-lg">
           <a
                 href={`/eventdetail/${item.eventId}`}>
           
             <img
               src={item.image}
               alt="auctions"
               className="w-full"
             /></a>
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
               <a
                 href="item-details.html"
                 className=" mb-5 inline-block text-lg font-semibold text-white hover:text-primary"
               >
                 {item.name}
               </a>
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
               <a
                 href={`/eventdetail/${item.eventId}`}
                 className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
               >
                 View Event
               </a>
               
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
