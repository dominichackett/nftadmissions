import Head from 'next/head'
import Header from '../components/Header/header'
import Footer from '@/components/Footer/footer'
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';

export default function CheckIn() {
  const [data, setData] = useState('No result');

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
                  className="mb-3 text-3xl font-bold text-white sm:mb-0 sm:text-[38px] lg:text-3xl xl:text-[38px]"
                >
                  Scan QR Code
                </h2>
          </div>
         <div
          className=" w-1/4  rounded-lg "
        >
          <QrReader
              ViewFinder={function noRefCheck(){}}

        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      /></div> 
      <p>{data}</p>
          </div>
          </div>
          </section> 
    <Footer />
  </main>
    </>
  )
}
