import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import { useRouter } from 'next/router'
export default function Home() {
  const router  = useRouter()
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
              Event Details
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
              className="max-h-[480px] min-h-[480px] mb-12  flex  w-full items-center justify-center rounded-xl border border-stroke bg-bg-color py-8 sm:py-14 md:py-24 lg:mb-0 lg:py-16 xl:py-28"
            >
              <img src="images/ticket.png"  alt="details image" />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="xl:pl-8">
              <div className="mb-9 justify-between sm:flex">
                <h2
                  className="mb-3 text-3xl font-bold text-white sm:mb-0 sm:text-[38px] lg:text-3xl xl:text-[38px]"
                >
                  3d locker illustration
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
                      src="images/picks/creator-01.png"
                      alt="creator"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="text-base font-semibold text-white">
                      @Devid_Mill...

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sodales mi felis, pretium tincidunt lorem varius ac. Curabitur
                mauris lacus, pretium vel neque nec, blandit pharetra nulla.
              </p>

              <div
                className="mb-6 flex flex-wrap items-center justify-between rounded-lg border border-stroke bg-bg-color"
              >
                <div className="w-full sm:w-1/2">
                  <div
                    className="space-y-2 border-stroke p-6 sm:border-r"
                  >
                    <p className="text-base font-semibold text-body-color">
                      Start Date : <span className="text-white">12/12/2023 6:30PM </span>
                    </p>
                   
                    
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:text-center">
                  <div className="space-y-3 p-6">
                    
                  <p className="text-base font-semibold text-body-color">
                      End Date : <span className="text-white">12/12/203 10:00PM</span>
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
                          src="images/picks/creator-01.png"
                          alt="creator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-sm font-semibold text-white">
                          @Devid_Mill...

                          <span
                            className="block text-sm font-medium text-body-color"
                          >
                            5 Hours ago
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <h5 className="text-sm font-semibold text-white">
                        4.75 FTM

                        <span
                          className="block text-sm font-medium text-body-color"
                        >
                          = $12.246
                        </span>
                      </h5>
                    </div>
                    
                  </div>
                  <p
                className="mb-4 mt-4 px-4 text-base font-medium leading-relaxed text-body-color"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sodales mi felis, pretium tincidunt lorem varius ac. Curabitur
                mauris lacus, pretium vel neque nec, blandit pharetra nulla.
              </p>

                    </div>

              <div
                  className="-5 flex w-full flex-wrap items-center border-b border-stroke px-5 pb-4 pt-1"
                >
                
                  <button
                className="w-full items-center justify-center rounded-md bg-primary p-[14px] text-base font-semibold text-white hover:bg-opacity-90"
              >
               Purchase
              </button>
                 
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
     <Footer /></main>
     
     </>)
     }