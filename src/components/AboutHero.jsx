import React from 'react'
import { FishIcon, LeafIcon, UtensilsIcon, StarIcon, ForkKnifeCrossedIcon  } from 'lucide-react';
import Image from "../assets/about.jpg"
import Navbar from './Navbar';


const AboutHero = () => {

  return (
    <section className='container text-center mx-auto bg-white shadow-lg rounded-lg mt-8'>
      
        <Navbar/>
        <div className="text-start  py-6 px-4" >
        <h1 className="text-3xl md:text-5xl font-bold">
          WELCOME TO <span className="italic font-light">FoodCamp...</span>
        </h1>
      </div>

       <div className="">
       <div className='flex justify-center items-center gap-4 mt-6 translate-y-[40px] '>
       <img  src={Image} alt="" className='image-fluid w-300 h-100 rounded-4 shadow-lg p-4 bg-grey' />
       </div>
                   
              <div className="flex justify-around items-center bg-orange-300 w-full h-50 py-4">
                
          <div className='Animation flex justify-around items-center gap-10'>
                <p className=' flex gap-1 font-bold flex-none'>  <UtensilsIcon  />Crave It!</p>
                <p className='flex gap-1 font-bold flex-none'><LeafIcon /> Get It!</p>
                <p className=' flex gap-1 font-bold flex-none'><FishIcon /> Eat Happy!</p>

               <p className='flex gap-1 font-bold flex-none'> <StarIcon />Food that wows</p>
                <p className='flex gap-1 font-bold flex-none'><ForkKnifeCrossedIcon />Simply Delicious</p>
          </div>

                
              </div>
            </div>

    </section>
  )
}

export default AboutHero