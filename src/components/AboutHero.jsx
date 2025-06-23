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
       <img src={Image} alt="" className='w-300 h-100 rounded-4 shadow-lg p-4 bg-grey' />
       </div>
                   
              <div className="flex justify-around items-center bg-orange-300 w-full h-50 py-4 flex-wrap">
                
              <p className='flex gap-2 font-bold'>  <UtensilsIcon  />Crave It!</p>
                <p className='flex gap-2 font-bold'><LeafIcon /> Get It!</p>
                <p className='flex gap-2 font-bold'><FishIcon /> Eat Happy!</p>

               <p className='flex gap-2 font-bold'> <StarIcon />Food that wows</p>
                <p className='flex gap-2 font-bold'><ForkKnifeCrossedIcon />Simply Delicious</p>

                
              </div>
            </div>

    </section>
  )
}

export default AboutHero