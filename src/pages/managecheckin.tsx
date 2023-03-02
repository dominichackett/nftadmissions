import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import Link from 'next/link'
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
              Manage Check Ins
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="pt-8 pb-24">
      <div className="container">
        <div
          className="mb-14 rounded-lg border-2 border-stroke py-4 px-5"
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
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]"
            >
              <div className="max-h-[290px] min-h-[290px] relative mb-5  rounded-lg">
                <img
                  src="images/ticket.png"
                  alt="auctions"
                  className="w-full"
                />
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
                    href="item-details.html"
                    className="mt-5 mb-3 inline-block text-lg font-semibold text-white hover:text-primary"
                  >
                    3d abstract illustration
                  </Link>
                </h3>
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div
                        className="mr-2 h-8 w-full max-w-[32px] rounded-md"
                      >
                        <img
                          src="images/picks/creator-01.png"
                          alt="creator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-xs font-semibold text-white">
                          @Devid_Mill...

                          <span
                            className="block text-xs font-medium text-body-color"
                          >
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <h5
                      className="text-right text-xs font-semibold text-white"
                    >
                      Date

                      <span
                        className="block text-xs font-medium text-body-color"
                      >
                        12-12-2023 11:59 PM
                      </span>
                    </h5>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between border-t-2 border-stroke pt-5"
                >
                  <Link
                    href="/eventcheckin"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                  >
                    Check In
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]"
            >
              <div className="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="images/picks/image-02.svg"
                  alt="auctions"
                  className="w-full"
                />
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
                    1.6K
                  </span>
                </button>
              </div>
              <div>
                <h3>
                  <Link
                    href="item-details.html"
                    className="mb-3 inline-block text-lg font-semibold text-white hover:text-primary"
                  >
                    3d abstract illustration
                  </Link>
                </h3>
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div
                        className="mr-2 h-8 w-full max-w-[32px] rounded-md"
                      >
                        <img
                          src="images/picks/creator-02.png"
                          alt="creator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-xs font-semibold text-white">
                          @Wilium_de...

                          <span
                            className="block text-xs font-medium text-body-color"
                          >
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <h5
                      className="text-right text-xs font-semibold text-white"
                    >
                      2.85 ETH

                      <span
                        className="block text-xs font-medium text-body-color"
                      >
                        Current Bit
                      </span>
                    </h5>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between border-t-2 border-stroke pt-5"
                >
                  <Link
                    href="javascript:void(0)"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                  >
                    Place Bid
                  </Link>
                  <Link
                    href="javascript:void(0)"
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
                    View History
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]"
            >
              <div className="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="images/picks/image-03.svg"
                  alt="auctions"
                  className="w-full"
                />
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
                    href="item-details.html"
                    className="mb-3 inline-block text-lg font-semibold text-white hover:text-primary"
                  >
                    3d abstract illustration
                  </Link>
                </h3>
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div
                        className="mr-2 h-8 w-full max-w-[32px] rounded-md"
                      >
                        <img
                          src="images/picks/creator-03.png"
                          alt="creator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-xs font-semibold text-white">
                          @Nicolo_Tes...

                          <span
                            className="block text-xs font-medium text-body-color"
                          >
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <h5
                      className="text-right text-xs font-semibold text-white"
                    >
                      7.82 ETH

                      <span
                        className="block text-xs font-medium text-body-color"
                      >
                        Current Bit
                      </span>
                    </h5>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between border-t-2 border-stroke pt-5"
                >
                  <Link
                    href="javascript:void(0)"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                  >
                    Place Bid
                  </Link>
                  <Link
                    href="javascript:void(0)"
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
                    View History
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]"
            >
              <div className="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="images/picks/image-04.svg"
                  alt="auctions"
                  className="w-full"
                />
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
                    href="item-details.html"
                    className="mb-3 inline-block text-lg font-semibold text-white hover:text-primary"
                  >
                    3d abstract illustration
                  </Link>
                </h3>
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div
                        className="mr-2 h-8 w-full max-w-[32px] rounded-md"
                      >
                        <img
                          src="images/picks/creator-04.png"
                          alt="creator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-xs font-semibold text-white">
                          @Liza_Auro...

                          <span
                            className="block text-xs font-medium text-body-color"
                          >
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <h5
                      className="text-right text-xs font-semibold text-white"
                    >
                      0.25 ETH

                      <span
                        className="block text-xs font-medium text-body-color"
                      >
                        Current Bit
                      </span>
                    </h5>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between border-t-2 border-stroke pt-5"
                >
                  <Link
                    href="javascript:void(0)"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                  >
                    Place Bid
                  </Link>
                  <Link
                    href="javascript:void(0)"
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
                    View History
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]"
            >
              <div className="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="images/picks/image-05.svg"
                  alt="auctions"
                  className="w-full"
                />
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
                    href="item-details.html"
                    className="mb-3 inline-block text-lg font-semibold text-white hover:text-primary"
                  >
                    3d abstract illustration
                  </Link>
                </h3>
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div
                        className="mr-2 h-8 w-full max-w-[32px] rounded-md"
                      >
                        <img
                          src="images/picks/creator-05.png"
                          alt="creator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-xs font-semibold text-white">
                          @Lathium_Lui...

                          <span
                            className="block text-xs font-medium text-body-color"
                          >
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <h5
                      className="text-right text-xs font-semibold text-white"
                    >
                      3.24 ETH

                      <span
                        className="block text-xs font-medium text-body-color"
                      >
                        Current Bit
                      </span>
                    </h5>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between border-t-2 border-stroke pt-5"
                >
                  <Link
                    href="javascript:void(0)"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                  >
                    Place Bid
                  </Link>
                  <Link
                    href="javascript:void(0)"
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
                    View History
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]"
            >
              <div className="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="images/picks/image-06.svg"
                  alt="auctions"
                  className="w-full"
                />
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
                    href="item-details.html"
                    className="mb-3 inline-block text-lg font-semibold text-white hover:text-primary"
                  >
                    3d abstract illustration
                  </Link>
                </h3>
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div
                        className="mr-2 h-8 w-full max-w-[32px] rounded-md"
                      >
                        <img
                          src="images/picks/creator-06.png"
                          alt="creator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-xs font-semibold text-white">
                          @Marko...

                          <span
                            className="block text-xs font-medium text-body-color"
                          >
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <h5
                      className="text-right text-xs font-semibold text-white"
                    >
                      4.55 ETH

                      <span
                        className="block text-xs font-medium text-body-color"
                      >
                        Current Bit
                      </span>
                    </h5>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between border-t-2 border-stroke pt-5"
                >
                  <Link
                    href="javascript:void(0)"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                  >
                    Place Bid
                  </Link>
                  <Link
                    href="javascript:void(0)"
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
                    View History
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]"
            >
              <div className="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="images/picks/image-07.svg"
                  alt="auctions"
                  className="w-full"
                />
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
                    href="item-details.html"
                    className="mb-3 inline-block text-lg font-semibold text-white hover:text-primary"
                  >
                    3d abstract illustration
                  </Link>
                </h3>
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div
                        className="mr-2 h-8 w-full max-w-[32px] rounded-md"
                      >
                        <img
                          src="images/picks/creator-07.png"
                          alt="creator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-xs font-semibold text-white">
                          @Andrio_Hev...

                          <span
                            className="block text-xs font-medium text-body-color"
                          >
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <h5
                      className="text-right text-xs font-semibold text-white"
                    >
                      0.89 ETH

                      <span
                        className="block text-xs font-medium text-body-color"
                      >
                        Current Bit
                      </span>
                    </h5>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between border-t-2 border-stroke pt-5"
                >
                  <Link
                    href="javascript:void(0)"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                  >
                    Place Bid
                  </Link>
                  <Link
                    href="javascript:void(0)"
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
                    View History
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]"
            >
              <div className="relative mb-5 overflow-hidden rounded-lg">
                <img
                  src="images/picks/image-08.svg"
                  alt="auctions"
                  className="w-full"
                />
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
                    href="item-details.html"
                    className="mb-3 inline-block text-lg font-semibold text-white hover:text-primary"
                  >
                    3d abstract illustration
                  </Link>
                </h3>
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div
                        className="mr-2 h-8 w-full max-w-[32px] rounded-md"
                      >
                        <img
                          src="images/picks/creator-08.png"
                          alt="creator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-xs font-semibold text-white">
                          @Mariya_Hie...

                          <span
                            className="block text-xs font-medium text-body-color"
                          >
                            creator
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <h5
                      className="text-right text-xs font-semibold text-white"
                    >
                      1.75 ETH

                      <span
                        className="block text-xs font-medium text-body-color"
                      >
                        Current Bit
                      </span>
                    </h5>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between border-t-2 border-stroke pt-5"
                >
                  <Link
                    href="javascript:void(0)"
                    className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
                  >
                    Place Bid
                  </Link>
                  <Link
                    href="javascript:void(0)"
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
                    View History
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="pt-8 text-center">
              <Link
                href="javascript:void(0)"
                className="inline-flex items-center justify-center rounded-md border-2 border-white py-3 px-7 text-base font-semibold text-white transition-all hover:border-primary hover:bg-primary"
              >
                Load More...
              </Link>
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
