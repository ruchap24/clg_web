import React, {useState} from 'react'

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaUserAlt, FaSignInAlt } from 'react-icons/fa';


function Navigation() {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    const handleClose = () => {
      setNav(false);
    };


  return (
    // Navigation bar on large screen
    <div className='w-screen bg-gray-100 h-[70px] z-10 fixed drop-shadow-lg'>

    <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
      <h1 className='text-3xl font-bold text-black mr-4 sm:text-4xl'>Websites.</h1>
      <ul className='hidden text-black md:flex'>
        <li className='cursor-pointer hover:bg-white hover:text-green-600 hover:rounded-lg'>
            Home
        </li>
        <li className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'>
            About Us
        </li>
        <li className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'>
            Contact Us
        </li>
        <li className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'>
            Services
        </li>
      </ul>
    </div>
        <div className='hidden md:flex pr-4'>

            <a
            className="flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600"
            type="submit"
            >
            <FaSignInAlt className='lg:w-5 lg:h-5 mx-2' />
            <span className="text-sm font-medium">
            Login
            </span>
            </a>

            <a
            className="block cursor-pointer shrink-0 rounded-lg bg-white p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600"
          >
            <span className="sr-only">Account</span>
            <FaUserAlt className='lg:w-5 lg:h-5' />
          </a>

        </div>

        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 text-black' /> : <div className='flex'>

            <a
            className="flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600"
            type="submit"
            >
            <FaSignInAlt className='lg:w-5 lg:h-5 mx-2' />
            <span className="text-sm font-medium">
            Login
            </span>
            </a>

            <a
            className="block cursor-pointer shrink-0 rounded-lg bg-white mr-4 p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600"
          >
            <span className="sr-only">Account</span>
            <FaUserAlt className='lg:w-5 lg:h-5' />
          </a>
                <XIcon className='w-5 text-black' /> 
            </div>}

        </div>

        </div>


        {/* Navigation on small screens */}
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>
              Home
            </li>

            <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>
              About Us
            </li>

            <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>
              Contact Us
            </li>

            <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>
              Services
            </li>
          </ul>

    </div>
  )
}

export default Navigation