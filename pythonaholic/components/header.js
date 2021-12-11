import Link from "next/link";
import { useRouter } from "next/router";
import MyDropDown from "../components/drop_down_menu";
import { Navbar, Nav, Container } from "react-bootstrap";
export default function Header(props) {
  return (
    <>
      <Popover className="relative bg-purple-600">
 
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
         
          <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
            
            <a
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white hover:text-xl"
          >
            Connect
          </a>
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
              >
                <MyDropDown />
              </a>
            </div>
          </div>
        </div>
      </Popover>
      )
    </>
  );
}
import { Popover, Transition } from "@headlessui/react";
