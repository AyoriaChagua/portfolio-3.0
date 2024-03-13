import React from 'react'
import { background_dark } from '../../utils/colors'
import { useScroll } from '../../hooks/use-scroll'
import { FaMoon } from "react-icons/fa";


export default function CustomNavbar() {
  const { showNavItem } = useScroll();
  return (
    <div className={`bg-[#2e2e3e] bg-opacity-50 w-full fixed top-0 z-10 blur-background h-12`}>
      <div className='flex h-full items-center xl:w-1/3 lg:w-2/5 md:w-4/6  sm:w-5/6 w-11/12 mx-auto max-w-1/3  justify-between text-white'>
        <div>
          {showNavItem && <>"Ayoria XCh"</>}
        </div>
        <div>
          <FaMoon size={23} color='#413DF9'/>
        </div>
      </div>
    </div>
  )
}
