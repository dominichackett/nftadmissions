import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import Features from '@/components/Features/feature'
export default function CheckIn() {
 
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
              Support
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="pb-24">
      <div className="container">
        <div
          className="relative z-10 overflow-hidden rounded-xl bg-bg-color"
        >
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-8 lg:w-5/12 xl:w-4/12">
              <div
                className="relative z-10 flex flex-col justify-between py-20 pr-10 lg:text-right"
              >
                <div className="mb-14 lg:mb-56">
                  <h2
                    className="mb-4 text-3xl font-bold text-white sm:text-[40px]"
                  >
                    Contact Info
                  </h2>
                  <p
                    className="text-base font-medium text-white text-opacity-90"
                  >
                    Lorem ipsum dolor sit amet, consectetur. In non dui aliquet,
                    pellentesque
                  </p>
                </div>
                <div>
                  <div className="mb-14">
                    <p
                      className="text-base font-semibold text-white sm:text-xl"
                    >
                      <span className="block"> info@yourmail.com </span>
                      <span className="block"> +24 968 0572 </span>
                      <span className="block"> Open from Mo. Till Fri. </span>
                      <span className="block"> 09.00 - 17.00 </span>
                    </p>
                  </div>

                  <div>
                    <p
                      className="mb-3 text-xl font-semibold text-white"
                    >
                      Follow us on
                    </p>
                    <div
                      className="flex items-center space-x-4 lg:justify-end"
                    >
                      <a
                        href="javascript:void(0)"
                        className="text-white hover:text-opacity-80"
                      >
                        <svg
                          viewBox="0 0 10 18"
                          className="h-5 w-5 fill-current"
                        >
                          <path
                            d="M9.00007 6.82105H7.50006H6.96434V6.27097V4.56571V4.01562H7.50006H8.62507C8.91971 4.01562 9.16078 3.79559 9.16078 3.46554V0.550085C9.16078 0.247538 8.9465 0 8.62507 0H6.66969C4.55361 0 3.08038 1.54024 3.08038 3.82309V6.21596V6.76605H2.54466H0.72322C0.348217 6.76605 0 7.06859 0 7.50866V9.48897C0 9.87402 0.294645 10.2316 0.72322 10.2316H2.49109H3.02681V10.7817V16.31C3.02681 16.6951 3.32145 17.0526 3.75003 17.0526H6.26791C6.42862 17.0526 6.56255 16.9701 6.66969 16.8601C6.77684 16.7501 6.8572 16.5576 6.8572 16.3925V10.8092V10.2591H7.4197H8.62507C8.97328 10.2591 9.24114 10.0391 9.29471 9.709V9.6815V9.65399L9.66972 7.7562C9.6965 7.56367 9.66972 7.34363 9.509 7.1236C9.45543 6.98608 9.21436 6.84856 9.00007 6.82105Z"
                          />
                        </svg>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-white hover:text-opacity-80"
                      >
                        <svg
                          viewBox="0 0 19 15"
                          className="h-5 w-5 fill-current"
                        >
                          <path
                            d="M16.2622 3.17884L17.33 1.93299C17.6391 1.59557 17.7234 1.33602 17.7515 1.20624C16.9085 1.67343 16.1217 1.82917 15.6159 1.82917H15.4192L15.3068 1.72534C14.6324 1.18028 13.7894 0.894775 12.8902 0.894775C10.9233 0.894775 9.37779 2.40018 9.37779 4.13919C9.37779 4.24301 9.37779 4.39874 9.40589 4.50256L9.49019 5.02167L8.90009 4.99571C5.30334 4.89189 2.35288 2.03681 1.87518 1.54366C1.08839 2.84142 1.53799 4.08728 2.01568 4.86594L2.97107 6.31943L1.45369 5.54077C1.48179 6.6309 1.93138 7.48742 2.80247 8.11035L3.56116 8.62945L2.80247 8.91496C3.28017 10.2387 4.34795 10.7837 5.13474 10.9914L6.17443 11.2509L5.19094 11.8739C3.61736 12.9121 1.65039 12.8342 0.779297 12.7563C2.54957 13.8984 4.65705 14.1579 6.11823 14.1579C7.21412 14.1579 8.02901 14.0541 8.2257 13.9762C16.0936 12.2632 16.4589 5.77437 16.4589 4.47661V4.29492L16.6275 4.1911C17.5829 3.36053 17.9763 2.91929 18.2011 2.65974C18.1168 2.68569 18.0044 2.7376 17.892 2.76356L16.2622 3.17884Z"
                          />
                        </svg>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-white hover:text-opacity-80"
                      >
                        <svg
                          viewBox="0 0 18 18"
                          className="h-5 w-5 fill-current"
                        >
                          <path
                            d="M8.91688 12.4993C10.6918 12.4993 12.1306 11.091 12.1306 9.35366C12.1306 7.61637 10.6918 6.20801 8.91688 6.20801C7.14197 6.20801 5.70312 7.61637 5.70312 9.35366C5.70312 11.091 7.14197 12.4993 8.91688 12.4993Z"
                          />
                          <path
                            d="M12.4078 0.947266H5.37075C2.57257 0.947266 0.300781 3.17092 0.300781 5.90981V12.7435C0.300781 15.5366 2.57257 17.7603 5.37075 17.7603H12.3524C15.2059 17.7603 17.4777 15.5366 17.4777 12.7977V5.90981C17.4777 3.17092 15.2059 0.947266 12.4078 0.947266ZM8.91696 13.4757C6.56206 13.4757 4.70584 11.6045 4.70584 9.35377C4.70584 7.10299 6.58976 5.23187 8.91696 5.23187C11.2165 5.23187 13.1004 7.10299 13.1004 9.35377C13.1004 11.6045 11.2442 13.4757 8.91696 13.4757ZM14.735 5.61152C14.4579 5.90981 14.0423 6.07252 13.5714 6.07252C13.1558 6.07252 12.7402 5.90981 12.4078 5.61152C12.103 5.31322 11.9368 4.93357 11.9368 4.47257C11.9368 4.01157 12.103 3.65904 12.4078 3.33363C12.7125 3.00821 13.1004 2.84551 13.5714 2.84551C13.9869 2.84551 14.4302 3.00821 14.735 3.30651C15.012 3.65904 15.2059 4.06581 15.2059 4.49969C15.1782 4.93357 15.012 5.31322 14.735 5.61152Z"
                          />
                          <path
                            d="M13.5985 3.82178C13.2383 3.82178 12.9336 4.12007 12.9336 4.4726C12.9336 4.82513 13.2383 5.12343 13.5985 5.12343C13.9587 5.12343 14.2634 4.82513 14.2634 4.4726C14.2634 4.12007 13.9864 3.82178 13.5985 3.82178Z"
                          />
                        </svg>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-white hover:text-opacity-80"
                      >
                        <svg
                          viewBox="0 0 18 18"
                          className="h-5 w-5 fill-current"
                        >
                          <path
                            d="M16.7821 0.947266H1.84847C1.14272 0.947266 0.578125 1.49735 0.578125 2.18496V16.7622C0.578125 17.4223 1.14272 17.9999 1.84847 17.9999H16.7257C17.4314 17.9999 17.996 17.4498 17.996 16.7622V2.15745C18.0525 1.49735 17.4879 0.947266 16.7821 0.947266ZM5.7442 15.442H3.17528V7.32825H5.7442V15.442ZM4.44563 6.20058C3.59873 6.20058 2.94944 5.54047 2.94944 4.74285C2.94944 3.94523 3.62696 3.28513 4.44563 3.28513C5.26429 3.28513 5.94181 3.94523 5.94181 4.74285C5.94181 5.54047 5.32075 6.20058 4.44563 6.20058ZM15.4835 15.442H12.9146V11.5089C12.9146 10.5738 12.8864 9.33606 11.5596 9.33606C10.2045 9.33606 10.0069 10.3812 10.0069 11.4264V15.442H7.438V7.32825H9.95046V8.45592H9.9787C10.3457 7.79582 11.1644 7.13572 12.4347 7.13572C15.0601 7.13572 15.54 8.78598 15.54 11.0413V15.442H15.4835Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-0 right-0 -z-10 h-full w-[500%] bg-primary"
                ></div>
                <div>
                  <span className="absolute left-3 bottom-6 -z-10">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.2">
                        <circle
                          cx="49.4072"
                          cy="49.1352"
                          r="2.3604"
                          transform="rotate(180 49.4072 49.1352)"
                          fill="white"
                        />
                        <circle
                          cx="49.4072"
                          cy="33.5439"
                          r="2.3604"
                          transform="rotate(180 49.4072 33.5439)"
                          fill="white"
                        />
                        <circle
                          cx="49.4072"
                          cy="17.9521"
                          r="2.3604"
                          transform="rotate(180 49.4072 17.9521)"
                          fill="white"
                        />
                        <circle
                          cx="49.4072"
                          cy="2.36054"
                          r="2.3604"
                          transform="rotate(180 49.4072 2.36054)"
                          fill="white"
                        />
                        <circle
                          cx="33.8154"
                          cy="49.1352"
                          r="2.3604"
                          transform="rotate(180 33.8154 49.1352)"
                          fill="white"
                        />
                        <circle
                          cx="33.8154"
                          cy="33.5439"
                          r="2.3604"
                          transform="rotate(180 33.8154 33.5439)"
                          fill="white"
                        />
                        <circle
                          cx="33.8154"
                          cy="17.9521"
                          r="2.3604"
                          transform="rotate(180 33.8154 17.9521)"
                          fill="white"
                        />
                        <circle
                          cx="33.8154"
                          cy="2.36054"
                          r="2.3604"
                          transform="rotate(180 33.8154 2.36054)"
                          fill="white"
                        />
                        <circle
                          cx="18.2246"
                          cy="49.1352"
                          r="2.3604"
                          transform="rotate(180 18.2246 49.1352)"
                          fill="white"
                        />
                        <circle
                          cx="18.2246"
                          cy="33.5439"
                          r="2.3604"
                          transform="rotate(180 18.2246 33.5439)"
                          fill="white"
                        />
                        <circle
                          cx="18.2246"
                          cy="17.9521"
                          r="2.3604"
                          transform="rotate(180 18.2246 17.9521)"
                          fill="white"
                        />
                        <circle
                          cx="18.2246"
                          cy="2.36054"
                          r="2.3604"
                          transform="rotate(180 18.2246 2.36054)"
                          fill="white"
                        />
                        <circle
                          cx="2.63178"
                          cy="49.1352"
                          r="2.3604"
                          transform="rotate(180 2.63178 49.1352)"
                          fill="white"
                        />
                        <circle
                          cx="2.63178"
                          cy="33.5439"
                          r="2.3604"
                          transform="rotate(180 2.63178 33.5439)"
                          fill="white"
                        />
                        <circle
                          cx="2.63178"
                          cy="17.9521"
                          r="2.3604"
                          transform="rotate(180 2.63178 17.9521)"
                          fill="white"
                        />
                        <circle
                          cx="2.63178"
                          cy="2.36054"
                          r="2.3604"
                          transform="rotate(180 2.63178 2.36054)"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </span>

                  <span className="absolute right-0 bottom-1/2 -z-10">
                    <svg
                      width="42"
                      height="84"
                      viewBox="0 0 42 84"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M41.6701 65.7105C54.9472 65.7105 65.7105 54.9472 65.7105 41.6701C65.7105 28.3929 54.9472 17.6296 41.6701 17.6296C28.3929 17.6296 17.6296 28.3929 17.6296 41.6701C17.6296 54.9472 28.3929 65.7105 41.6701 65.7105ZM41.6701 83.3401C64.6838 83.3401 83.3401 64.6838 83.3401 41.6701C83.3401 18.6563 64.6838 0 41.6701 0C18.6563 0 0 18.6563 0 41.6701C0 64.6838 18.6563 83.3401 41.6701 83.3401Z"
                        fill="white"
                      />
                    </svg>
                  </span>

                  <span className="absolute left-1/4 bottom-1/2 -z-10">
                    <svg
                      width="38"
                      height="43"
                      viewBox="0 0 38 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.603113 42.934L0.0175629 0.151691L37.9464 22.0499L0.603113 42.934ZM8.06121 30.0162L7.83208 13.2753L22.6738 21.8442L8.06121 30.0162Z"
                        fill="white"
                      />
                    </svg>
                  </span>

                  <span className="absolute left-0 bottom-1/4 -z-10">
                    <svg
                      width="45"
                      height="25"
                      viewBox="0 0 45 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.8491 0.752473L17.349 11.5414L28.2503 7.5717L32.1815 19.8781L41.4238 16.1193C42.3861 15.7279 43.4836 16.1907 43.8749 17.1531C44.2663 18.1154 43.8035 19.2128 42.8411 19.6042L29.8343 24.8941L25.8581 12.4467L14.9733 16.4104L11.4934 5.68309L2.63079 9.07682C1.6606 9.44833 0.572928 8.96301 0.201416 7.99281C-0.170096 7.02262 0.315231 5.93495 1.28543 5.56344L13.8491 0.752473Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full px-8 lg:w-7/12 xl:w-8/12">
              <div className="py-20">
                <div className="mb-14 max-w-[410px]">
                  <h2
                    className="mb-4 text-3xl font-bold text-white sm:text-[40px]"
                  >
                    Get in touch
                  </h2>
                  <p
                    className="text-base font-medium text-body-color text-opacity-80"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    non dui aliquet, pellentesque tellus ac, faucibus ex.
                  </p>
                </div>
                <form>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 md:w-1/2">
                      <div className="mb-5">
                        <label
                          for="name"
                          className="mb-3 block text-base font-medium text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your name"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <div className="mb-5">
                        <label
                          for="email"
                          className="mb-3 block text-base font-medium text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-8">
                        <label
                          for=""
                          className="mb-3 block text-base font-medium text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          rows="5"
                          name="message"
                          id="message"
                          placeholder="Type your message"
                          className="w-full resize-none rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <button
                        className="rounded bg-primary py-3 px-11 text-base font-medium text-white hover:bg-opacity-90"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
    </>
  )
}
