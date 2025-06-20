import React from 'react'
import Button from './Button'
import Image from "../assets/food.png"
import { StarIcon } from 'lucide-react'
const Hero = () => {
  return (
   <>
   <div className="flex items-center flex-col-reverse lg:flex-row mt-8 justify-center gap-20 px-12" style={{
    // background:"../assets/food.png"
   }}>
    <div>
        <h1 className='playfair text-primary text-6xl text-center !font-bold leading-20'>Your Favorite Food <br className='hidden lg:block'/> Delivered Hot and Fresh</h1>
        <p className='playfair text-center my-4 mb-12'>Best food catering service in town.We are ready to serve to  your desire.The <br className='hidden lg:block'/> ultimate destination for all your healthy food delivery needs.</p>
        <div className="flex justify-center gap-4">
            <Button message={"Order Now"} bgColor={"bg-[#f76806]"}/>
                <Button message={"See the menus"} bgColor={"bg-[#000]"}/>
        </div>

       <div className=' flex gap-4 items-center justify-center mt-6'>
         <div className='flex justify-start  mt-6'>
            <img src={Image} width={50} /> 
              <img src={Image} width={50} className='ml-[-10px]'/>
        <img src={Image} width={50} className='ml-[-10px]'/>
        </div>

        <div>
            <p className='!font-bold playfair text-[.9rem]'>Our Happy Customers</p>
            <div className="flex items-center mt-2 gap-2 playfair text-sm">
                <StarIcon className='text-yellow-400' size={20}/>
            <span>4.9(9k reviews)</span>
            </div>
        </div>
       </div>

        


    </div>
    <div>
        <img src={Image} alt="" />
    </div>
   </div>
   </>
  )
}

export default Hero
