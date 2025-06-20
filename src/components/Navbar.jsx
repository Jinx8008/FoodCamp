import React from 'react'
import {MenuIcon } from 'lucide-react'
import Button from './Button'
const Navbar = () => {
  return (
   <>
    <div className="flex justify-between items-center mx-8 mt-4">
        <div>
            <p className='sm:text-red-500 lg:text-blue-400 '>Logo</p>
        </div>
        <div className='list-none gap-3 text-lg font-bold hidden lg:flex'>
            <li><a href="About">About</a></li>
            <li>Contact</li>
            <li>Services</li>
        </div>
        <div>
                <div className='hidden lg:block'>
                    <Button message={"Get the App"} bgColor={" bg-[#f76806]"}/>
                </div>
                  <div className='block lg:hidden'>
                <MenuIcon/>
                </div>
        </div>
    </div>
   </>
  )
}

export default Navbar
