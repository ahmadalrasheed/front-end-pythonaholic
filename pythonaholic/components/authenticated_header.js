import MyDropDown from "../components/drop_down_menu";
import Image from 'next/image'
export default function PostAuthenticationHeader(props) {
  return (
    <>
      <div className="bg-purple-600 ">   
          <div className="flex items-center justify-between py-6 md:justify-start ">
              <img src="logo.png" className="h-24 ml-20"/>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
             
          <a
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white hover:text-xl"
          >
            Home
          </a>
         </div>

            <a
            href="/complain"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white hover:text-xl"
          >
            Complaints
          </a>
            <a
            href="/explore"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white hover:text-xl"
          >
            Explore
          </a>
            <a
            href="/explore"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white hover:text-xl"
          >
            profile
          </a>
 
          </div>
      
      </div>
      </>
      )
}

