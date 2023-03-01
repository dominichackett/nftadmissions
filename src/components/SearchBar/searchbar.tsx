export default function SearchBar(){
  return(  <div
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
            Virtual
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary"
          >
            In Person
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary"
          >
            Conference
          </button>
        </div>
      </div>
      <div className="w-full px-4 lg:w-5/12">
        <div className="flex space-x-3 lg:justify-end">
          <div className="relative inline-flex">
            <select
              className="appearance-none rounded-md bg-[#353444] py-3 pl-5 pr-10 text-base font-semibold text-white outline-none"
            >
               <option value="">Date Desc.</option>
              <option value="">Date Asc.</option>
              <option value="">Name Asc.</option>
              <option value="">Name Desc.</option>
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
)
} 
