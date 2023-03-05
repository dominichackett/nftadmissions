


export default function Features(){
 return( <section id="features" className="pt-[90px]">
 <div className="container">
   <div className="mx-auto mb-14 max-w-[650px] text-center">
     <h2
       className="mb-4 text-4xl font-bold leading-tight text-white sm:text-[42px]"
     >
       Core Features
     </h2>
     <p className="text-lg font-medium text-body-color">
     Here are four of the key features that NFT Admissions provides.
     </p>
   </div>

   <div className="-mx-4 flex flex-wrap">
   <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
       <div
         className="group mb-10 rounded-xl border border-stroke bg-bg-color p-7 transition-all hover:border-white hover:bg-white"
       >
         <div
           className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#E1DDFF]"
         >
           <svg
             width="34"
             height="34"
             viewBox="0 0 34 34"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M7.79168 9.91671C7.22809 9.91671 6.68759 9.69282 6.28907 9.29431C5.89056 8.89579 5.66668 8.35529 5.66668 7.79171C5.66668 7.22812 5.89056 6.68762 6.28907 6.28911C6.68759 5.89059 7.22809 5.66671 7.79168 5.66671C8.35526 5.66671 8.89576 5.89059 9.29428 6.28911C9.69279 6.68762 9.91668 7.22812 9.91668 7.79171C9.91668 8.35529 9.69279 8.89579 9.29428 9.29431C8.89576 9.69282 8.35526 9.91671 7.79168 9.91671ZM30.3308 16.405L17.5808 3.65504C17.0708 3.14504 16.3625 2.83337 15.5833 2.83337H5.66668C4.09418 2.83337 2.83334 4.09421 2.83334 5.66671V15.5834C2.83334 16.3625 3.14501 17.0709 3.66918 17.5809L16.405 30.3309C16.9292 30.8409 17.6375 31.1667 18.4167 31.1667C19.1958 31.1667 19.9042 30.8409 20.4142 30.3309L30.3308 20.4142C30.855 19.9042 31.1667 19.1959 31.1667 18.4167C31.1667 17.6234 30.8408 16.915 30.3308 16.405Z"
               fill="#5142FC"
             />
           </svg>
         </div>
         <h3
           className="mb-2 text-xl font-bold text-white transition group-hover:text-black"
         > Ticket Management         </h3>

         <p className="h-[130px] text-base font-medium text-body-color">
         A comprehensive ticket management system, allowing event organizers to track ticket sales, issue refunds, and manage the transfer of NFT tickets between users.         </p>
       </div>
     </div>
     <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
       <div
         className="group mb-10 rounded-xl border border-stroke bg-bg-color p-7 transition-all hover:border-white hover:bg-white"
       >
         <div
           className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#FFF6DD]"
         >
           <svg
             width="34"
             height="34"
             viewBox="0 0 34 34"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M4.25 15.5833H15.5833V4.25H4.25V15.5833ZM4.25 29.75H15.5833V18.4167H4.25V29.75ZM18.4167 29.75H29.75V18.4167H18.4167V29.75ZM18.4167 4.25V15.5833H29.75V4.25"
               fill="#F5B70A"
             />
           </svg>
         </div>
         <h3
           className="mb-2 text-xl font-bold text-white transition group-hover:text-black"
         >
           Event Check In
         </h3>

         <p className="h-[130px] text-base font-medium text-body-color">
         A secure and efficient method for ticket redemption at the event, using QR codes and other methods to verify ticket ownership.         </p>
       </div>
     </div>
     <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
       <div
         className="group mb-10 rounded-xl border border-stroke bg-bg-color p-7 transition-all hover:border-white hover:bg-white"
       >
         <div
           className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#EDF8F4]"
         >
           <svg
             width="34"
             height="34"
             viewBox="0 0 34 34"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M12.0417 19.125L15.5833 23.375L20.5417 17L26.9167 25.5H7.08333L12.0417 19.125ZM29.75 26.9167V7.08333C29.75 5.51083 28.475 4.25 26.9167 4.25H7.08333C6.33189 4.25 5.61122 4.54851 5.07986 5.07986C4.54851 5.61122 4.25 6.33189 4.25 7.08333V26.9167C4.25 27.6681 4.54851 28.3888 5.07986 28.9201C5.61122 29.4515 6.33189 29.75 7.08333 29.75H26.9167C27.6681 29.75 28.3888 29.4515 28.9201 28.9201C29.4515 28.3888 29.75 27.6681 29.75 26.9167Z"
               fill="#06DE90"
             />
           </svg>
         </div>
         <h3
           className="mb-2 text-xl font-bold text-white transition group-hover:text-black"
         >
           Collectable NFT Tickets
         </h3>

         <p className="h-[130px] text-base font-medium text-body-color">
         The platform  allows event organizers to create NFT tickets for their events, defining the ticket type, price, and number of tickets available.         </p>
       </div>
     </div>
     <div className="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
            <div
              className="group mb-10 rounded-xl border border-stroke bg-bg-color p-7 transition-all hover:border-white hover:bg-white"
            >
              <div
                className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#FFF0E9]"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.75 25.5V26.9167C29.75 27.6681 29.4515 28.3888 28.9201 28.9201C28.3888 29.4515 27.6681 29.75 26.9167 29.75H7.08333C5.51083 29.75 4.25 28.475 4.25 26.9167V7.08333C4.25 6.33189 4.54851 5.61122 5.07986 5.07986C5.61122 4.54851 6.33189 4.25 7.08333 4.25H26.9167C27.6681 4.25 28.3888 4.54851 28.9201 5.07986C29.4515 5.61122 29.75 6.33189 29.75 7.08333V8.5H17C15.4275 8.5 14.1667 9.775 14.1667 11.3333V22.6667C14.1667 23.4181 14.4652 24.1388 14.9965 24.6701C15.5279 25.2015 16.2486 25.5 17 25.5H29.75ZM17 22.6667H31.1667V11.3333H17V22.6667ZM22.6667 19.125C22.1031 19.125 21.5626 18.9011 21.1641 18.5026C20.7656 18.1041 20.5417 17.5636 20.5417 17C20.5417 16.4364 20.7656 15.8959 21.1641 15.4974C21.5626 15.0989 22.1031 14.875 22.6667 14.875C23.2303 14.875 23.7708 15.0989 24.1693 15.4974C24.5678 15.8959 24.7917 16.4364 24.7917 17C24.7917 17.5636 24.5678 18.1041 24.1693 18.5026C23.7708 18.9011 23.2303 19.125 22.6667 19.125Z"
                    fill="#FF766A"
                  />
                </svg>
              </div>
              <h3
                className="mb-2 text-xl font-bold text-white transition group-hover:text-black"
              >
                Blockchain Security
              </h3>

              <p className="h-[130px] text-base font-medium text-body-color">
              Using state-of-the-art security measures to protect user data, prevent counterfeiting, and secure the NFT ticket transfer process.
              </p>
            </div>
          </div>
   </div>
 </div>
</section>)   
}
