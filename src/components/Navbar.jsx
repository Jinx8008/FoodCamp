import React from 'react'
import {MenuIcon } from 'lucide-react'
import Button from './Button'
const Navbar = () => {
  return (
   <>
    <div className="flex justify-between items-center mx-8 mt-4">
        <div>
            <p>Logo</p>
        </div>
        <div className='flex list-none gap-3 text-lg font-bold'>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </div>
        <div className=''>
                <Button message={"Get the App"} bgColor={" bg-[#f76806]"}/>
                <MenuIcon/>
        </div>
    </div>
   </>
  )
}

export default Navbar
