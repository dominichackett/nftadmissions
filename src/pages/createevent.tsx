import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import Features from '@/components/Features/feature'
import { useState } from 'react'
export default function CreateEvent() {
 const  [tickets,setTickets] = useState([{name:"General",price:12,numberOfTickets:200}])
 const addTicketClass = (e) => {
   e.preventDefault()
   // alert("Test")
    let tcks = [...tickets];
    tcks.push({name:"",price:12,numberOfTickets:200}) 
    setTickets(tcks)
    console.log(tcks)
 }

 const deleteTicketClass = (e,id) =>{
  e.preventDefault() 
    alert(id)
     if(tickets.length == 1)
     return 
   let tcks = [...tickets]
   tcks.splice(id,1);
   setTickets(tcks)
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
          className="relative z-10 overflow-hidden rounded-xl bg-bg-color"
        >
          <form className="p-8 sm:p-10">
            <div className="-mx-5 flex flex-wrap xl:-mx-8">
              <div className="w-full px-5 lg:w-5/12 xl:px-8">
                <div className="mb-12 lg:mb-0">
                  <div className="mb-8">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="sr-only"
                    />
                    <label
                      for="file"
                      className="relative flex h-[480px] min-h-[200px] items-center justify-center rounded-lg border border-dashed border-[#A1A0AE] bg-[#353444] p-12 text-center"
                    >
                      <div>
                        <div className="mb-4 text-center">
                          <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            className="mx-auto"
                          >
                            <path
                              d="M28.3333 45L36.6667 55L48.3333 40L63.3333 60H16.6667L28.3333 45ZM70 63.3333V16.6667C70 12.9667 67 10 63.3333 10H16.6667C14.8986 10 13.2029 10.7024 11.9526 11.9526C10.7024 13.2029 10 14.8986 10 16.6667V63.3333C10 65.1014 10.7024 66.7971 11.9526 68.0474C13.2029 69.2976 14.8986 70 16.6667 70H63.3333C65.1014 70 66.7971 69.2976 68.0474 68.0474C69.2976 66.7971 70 65.1014 70 63.3333Z"
                              fill="#4D4C5A"
                            />
                          </svg>
                        </div>
                        <span
                          className="mb-2 block text-xl font-semibold text-white"
                        >
                           Event Image
                        </span>
                        <span
                          className="mb-3 block text-base font-medium text-body-color"
                        >
                          PNG, JPG, GIF or WEBP. Max 200mb.
                        </span>
                        <span
                          className="mb-3 block text-base font-medium text-body-color"
                        >
                          Choose a file
                        </span>
                        <span
                          className="inline-flex rounded bg-white py-2 px-5 text-base font-semibold text-black"
                        >
                          Browse
                        </span>
                      </div>
                    </label>
                  </div>

            

                  <div className="rounded-md bg-[#4E4C64] py-4 px-8">
                   
                  <div className="pt-2">
                    <button
                      className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Create Event
                    </button>
                  </div>                    
                   
                  </div>
                </div>
              </div>
              <div className="w-full px-5 lg:w-7/12 xl:px-8">
                <div>
                  <div className="mb-5">
                    <label
                      for="name"
                      className="mb-2 block text-base font-medium text-white"
                    >
                      Event Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
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
                          type="datetime-local"
                          name="expireDate"
                          id="expireDate"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 pt-2">
                    <p className="text-xl font-bold text-white">
                      Tickets
                    </p>
                  </div>
                  {tickets.map((item,index)=>(
                  <div key={index} className='mb-5'>
                  <div
                    className="mb-5 rounded-md bg-[#4E4C64] py-4 px-8"
                  >
                    <div className="flex items-center justify-end">
                     
                      <button onClick={(e)=>deleteTicketClass(e,index)} className="text-white">
                      
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
                      type="text"
                      name="name"

                      value={item.name}
                      id="name"
                      placeholder="Enter event name"
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
                          type="number"
                          name="numTickets"
                          id="numTickets"
                          placeholder="100"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                      
                    </div>
                  </div>
                  <div className="mb-8">
                    <label for="file">   <span className='bg-primary py-3 px-8 text-center text-base font-semibold cursor-pointer hover:shadow-form   rounded-md text-white'> Select Picture </span>                   
             <input
                      type="file"
                      name="file"
                      id="file"
                      className='ml-2 file:hidden text-white font-semibold'                 />
                  </label>
                   </div>
                 {/* Place Upload Button Here */}
                  </div>
                  
                  </div>))}
                  <div className="pt-2">
                    <button
                      onClick={addTicketClass}
                      className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Add Ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

     <Footer /></main></>
     )
     }