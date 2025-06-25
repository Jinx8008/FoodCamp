import React from 'react'
import Navbar from '../components/Navbar'
import { StarIcon,PlayIcon } from 'lucide-react'
import QuoteImage from '../assets/Screenshot_2025-06-20_220428-removebg-preview.png'
import CommentsCarousel from '../components/Comments_Carousel'

const Testimonial = () => {
  
    // let displayImage = document.getElementById(myImage);
    // displayImage.onchange = function() {
    //     displayPicture(this)
    // }
    // function displayPicture(input) {
    //     if(input.file && input.files[0]) {
    //         const toRaedFile = new FileReader()

    //     }
    // }


    
  return (
   <>
    <Navbar />
            <div className='grid grid-cols-1 lg:grid-cols-10 gap-5 bg-[#3679bc] p-8 sm:p-10 md:p-12 lg:p-20 mt-14'>
                <img src={QuoteImage} width={100} className='absolute top-17 left-10'/>
                <div className='lg:col-span-3 md:col-span-3 sm:col-span-10 mt-10'>


                    <h3 className='mb-2 text-2xl font-semibold'>What they say about us 👌 </h3>
                    <span className='flex items-center ml-5 mb-5 gap-4 text-2xl font-semibold'>4.5k reviews <StarIcon className='text-yellow-500'/><StarIcon className='text-yellow-500'/><StarIcon className='text-yellow-500'/></span>
                    <p className='mb-5 text-2xl'>"Every dish had a story, and every guest left asking for their number. We've already booked them for our next event."</p>
                    <button className='flex items-center text-2xl font-bold border-2 rounded-2xl w-60 gap-3 justify-center'>Connect now <PlayIcon className='border rounded-2xl p-1' /></button>
                </div>

                <div className='lg:col-span-7 md:col-span-7 sm:col-span-10'>
                    <CommentsCarousel />
                </div>
            </div>

                     {/* <input 
                        id="myImage"
                        class="photo-upload"
                        type="file"
                        accept="image/*, image/jpeg">
                    </input>

                    <img id="the-picture" width="200" /> */}












    {/* <h3 className='text-center text-4xl font-bold mt-10 text-[#b0b2b6]'>Don't take our word for it. <br /> Over 100+ people trust us.</h3>
    <div className='flex mt-15'>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quis voluptas id quo est soluta esse vitae aliquid ullam omnis.</p>
            <div className='flex gap-7'>
                <div className='flex'>
                    <img src={Image} width={50}/>
                    <p>Mickeal Grants <br /> CEO of Apple's </p>
                </div>                
                <div className='flex mt-3'>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                </div>                
            </div>
        </div>

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quis voluptas id quo est soluta esse vitae aliquid ullam omnis.</p>
            <div className='flex gap-7'>
                <div className='flex'>
                    <img src={Image} width={50}/>
                    <p>Mickeal Grants <br /> CEO of Tesla</p>
                </div>                
                <div className='flex mt-3'>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                </div>                
            </div>
        </div>

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quis voluptas id quo est soluta esse vitae aliquid ullam omnis.</p>
            <div className='flex gap-5'>
                <div className='flex'>
                    <img src={Image} width={50}/>
                    <p>Mickeal Grants <br /> CEO of Rad5 Tech Hub</p>
                </div>                
                <div className='flex mt-3'>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                    <StarIcon className='text-yellow-500'/>
                </div>                
            </div>
        </div>
    </div> */}
   </>
  )
}

export default Testimonial