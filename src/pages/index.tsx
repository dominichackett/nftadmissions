import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import Features from '@/components/Features/feature'
import Link from 'next/link'
export default function Home() {
 
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
     {/*<!-- ==== Hero Section Start ==== -->*/}
    <section
      id="home"
      className= " bg-[url('/images/hero/common-bg.jpg')] relative z-10 overflow-hidden bg-cover bg-top bg-no-repeat pt-[150px] pb-24"
          >
      <div
        className="grade absolute left-0 top-0 -z-10 h-full w-full"
       
        
      ></div>      
      <div
        className="absolute left-0 top-0 -z-10 h-full w-full"
      
      ></div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h1
                className="mb-4 text-[40px] font-bold leading-tight text-white md:text-[50px] lg:text-[40px] xl:text-[46px] 2xl:text-[50px] sm:text-[46px]"
              >
                Event Ticket Management Platform on the Fantom Blockchain
              </h1>
              <p
                className="mb-8 text-lg font-medium leading-relaxed text-body-color md:pr-14"
              >
NFT Admissions is a decentralized application (dApp) that uses non-fungible tokens (NFTs) as digital tickets to enter events. Built on the Fantom blockchain, NFT Admissions offers a secure and transparent platform for event organizers to issue, sell and manage NFT tickets.             </p>
              <div className="flex flex-wrap items-center">
                <Link
                  href="/events"
                  className="mr-5 mb-5 inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary py-3 px-7 text-base font-semibold text-white transition-all hover:bg-opacity-90"
                >
                  View Events
                </Link>
                <Link
                  href="create-item.html"
                  className="mb-5 inline-flex items-center justify-center rounded-md border-2 border-white py-3 px-7 text-base font-semibold text-white transition-all hover:border-primary hover:bg-primary"
                >
                  About
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="text-center">
              <img
                src="images/ticket.png"
                alt="hero image"
                className="mx-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-4 top-28 -z-10">
          <svg
            width="111"
            height="115"
            viewBox="0 0 111 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_21_53)">
              <g filter="url(#filter1_i_21_53)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M73.287 91.7144C92.1417 80.8286 98.5953 56.729 87.7122 37.8789C76.8291 19.0288 52.7314 12.568 33.8767 23.4537C15.0312 34.3342 8.56843 58.4391 19.4515 77.2892C30.3346 96.1393 54.4415 102.595 73.287 91.7144Z"
                  fill="url(#paint0_linear_21_53)"
                />
              </g>
              <path
                opacity="0.7"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M69.4961 86.3067C86.2379 76.6408 91.9683 55.2418 82.3048 38.5041C72.6412 21.7663 51.244 16.0295 34.5021 25.6954C17.7685 35.3566 12.0299 56.7603 21.6934 73.498C31.357 90.2358 52.7625 95.9679 69.4961 86.3067Z"
                fill="url(#paint1_radial_21_53)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_21_53"
                x="-3.83423"
                y="0.165771"
                width="114.834"
                height="114.834"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="9"
                  result="effect1_foregroundBlur_21_53"
                />
              </filter>
              <filter
                id="filter1_i_21_53"
                x="14.1658"
                y="10.1658"
                width="86.8342"
                height="86.8342"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="8" dy="-8" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0 0.321569 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_21_53"
                />
              </filter>
              <linearGradient
                id="paint0_linear_21_53"
                x1="31.6878"
                y1="19.1263"
                x2="63.3007"
                y2="99.1224"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EBC77A" />
                <stop offset="0.541667" stop-color="#CA3F8D" />
                <stop offset="1" stop-color="#5142FC" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_21_53"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(56.6039 36.9093) rotate(63.4349) scale(29.0091)"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </span>
        <div
          className="absolute left-0 top-0 -z-10 flex h-full w-full justify-around opacity-20"
        >
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent hidden lg:flex"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent hidden lg:flex"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent hidden lg:flex"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent hidden md:flex"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent hidden md:flex"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent hidden md:flex"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
          <span
            className="h-full w-[1.1px] bg-gradient-to-b from-white to-transparent"
          >
          </span>
        </div>
      </div>
    </section>
    <Features />
    <Footer />
  </main>
    </>
  )
}
