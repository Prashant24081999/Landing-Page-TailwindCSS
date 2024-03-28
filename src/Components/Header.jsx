import React from 'react'
import { FaBars } from "react-icons/fa6";

function Header() {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-cente gap-2'>
            <img src="../../src/assets/logo.png" alt="logo" className='w-24 rounded-xl bg-amber-50' />
            <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white p-2 rounded-2xl'>Hoster is hiring</button>
        </div>
        <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Find Domain</a></li>
            <li><a href="#">Why Hostinger</a></li>
        </ul>
        <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
            <a href="#" className='text-gray-400'>Sign in</a>
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </div>
        <div className='lg:hidden'>
            <FaBars className='mt-6'/>
        </div>
    </div>
  )
}

export default Header
