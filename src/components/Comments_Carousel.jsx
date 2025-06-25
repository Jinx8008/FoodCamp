import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, Link,  } from 'lucide-react'
import { useState } from 'react'
import profileOne from '../assets/profile1.jpg'
import profileTwo from '../assets/profile2.jpg'
import profileThree from '../assets/profile3.jpg'
import profileFour from '../assets/profile4.jpg'
import profileFive from '../assets/profile5.webp'
 

const CommentsCarousel = () => {
    const [liked1, setLiked1] = useState(false)
    const [countLiked1, setCountLiked1] = useState(0)
    
    const [liked2, setLiked2] = useState(false)
    const [countLiked2, setCountLiked2] = useState(0)

    const [liked3, setLiked3] = useState(false)
    const [countLiked3, setCountLiked3] = useState(0)

    const [liked4, setLiked4] = useState(false)
    const [countLiked4, setCountLiked4] = useState(0)

    const [liked5, setLiked5] = useState(false)
    const [countLiked5, setCountLiked5] = useState(0)



  return (
    <>
        <div className='overflow-x-hidden overflow-y-hidden pl-5 pb-5'>
            <div className="flex gap-5">
                {/* slide start */}
                <div id='One'>
                    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <img className="rounded-t-lg" src={profileOne} alt="" />
                        <div class="p-5">
                            <p className="mb-2">“Every bite packed more punch than one of my stunts!”"The spring rolls had me flipping out. This catering team’s got more moves than I do."</p>
                            
                            <h5 className="text-2xl mb-4">- Jay Chou (周杰伦) </h5>
                            <div className='flex gap-5'>
                                <button onClick={() => {setLiked1(!liked1), setCountLiked1(countLiked1 + 1)}}>{liked1 ?(<HeartIcon />) : (<HeartIcon className='text-red-500' />) }</button>
                                <p>{countLiked1 <= 1 ? countLiked1 + '  like' : countLiked1 + "  likes"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='Two'>
                    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <img className="rounded-t-lg " src={profileTwo} alt="" />
                        <div class="p-5">
                            <p className="mb-2">"Twice as satisfying.”"The dishes reflect harmony between flavor and presentation. A banquet fit for enlightened minds."</p>
                            
                            <h5 className="text-2xl mb-4">- Gong Li (巩俐) </h5>
                            <div className='flex gap-5'>
                                <button onClick={() => {setLiked2(!liked2), setCountLiked2(countLiked2 + 1)}}>{liked2 ?(<HeartIcon />) : (<HeartIcon className='text-red-500' />) }</button>
                                <p>{countLiked2 <= 1 ? countLiked2 + '  like' : countLiked2 + "  likes"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='Three'>
                    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <img className="rounded-t-lg" src={profileThree} alt="" />
                        <div class="p-5">
                            <p className="mb-2">“Delicious... and trending across Weibo!”"From the spicy stir-fry to the dumplings, this food deserves its own fan club. #Obsessed."</p>
                            
                            <h5 className="text-2xl mb-4">- Eileen Gu (谷爱凌) </h5>
                            <div className='flex gap-5'>
                                <button onClick={() => {setLiked3(!liked3), setCountLiked3(countLiked3 + 1)}}>{liked3 ?(<HeartIcon />) : (<HeartIcon className='text-red-500' />) }</button>
                                <p>{countLiked3 <= 1 ? countLiked3 + '  like' : countLiked3 + "  likes"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='Four' className="swiper-slide tranding-slide">
                    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <img className="rounded-t-lg" src={profileFour} alt="" />
                        <div class="p-5">
                            <p className="mb-2">“Delicious... and trending across Weibo!”"From the spicy stir-fry to the dumplings, this food deserves its own fan club. #Obsessed."</p>
                            
                            <h5 className="text-2xl mb-4">- Li Na (李娜) </h5>
                            <div className='flex gap-5'>
                                <button onClick={() => {setLiked4(!liked4), setCountLiked4(countLiked4 + 1)}}>{liked4 ?(<HeartIcon />) : (<HeartIcon className='text-red-500' />) }</button>
                                <p>{countLiked4 <= 1 ? countLiked4 + '  like' : countLiked4 + "  likes"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='Five' className="swiper-slide tranding-slide">
                    <div className="w-80 h-107 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <img className="rounded-t-lg h-54 " src={profileFive} alt="" />
                        <div class="p-5">
                            <p className="mb-2">“Efficiency, elegance, excellence.”"Like a well-run business, their service and flavors are on point. Truly impressive."</p>
                            
                            <h5 className="text-2xl mb-4">- Li Ka-shing (李嘉诚)  </h5>
                            <div className='flex gap-5'>
                                <button onClick={() => {setLiked5(!liked5), setCountLiked5(countLiked5 + 1)}}>{liked5 ?(<HeartIcon />) : (<HeartIcon className='text-red-500' />) }</button>
                                <p>{countLiked5 <= 1 ? countLiked5 + '  like' : countLiked5 + "  likes"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> 

        <div className='flex justify-center mt-10 navigationContainer'>
            {/* <button className='bg-white rounded-full shadow-lg mt-5 p-1 cursor-pointer hover:scale-130 hover:bg-blue-500 hover:text-white' onClick={()=>{}}><ChevronLeftIcon /></button>
            <button className='bg-white rounded-full shadow-lg mt-5 p-1 cursor-pointer hover:scale-130 hover:bg-blue-500 hover:text-white' onClick={(e)=>{SlideCarousel(e); SlideCarousel2(e)}}><ChevronRightIcon /></button> */}

            <button><a href="#One" className='bg-white p-2 hover:text-2xl' >1</a></button>
            <button><a href="#Two" className='bg-white  p-2 hover:text-2xl' >2</a></button>
            <button><a href="#Three" className='bg-white p-2 hover:text-2xl' >3</a></button>
            <button><a href="#Four" className='bg-white p-2 hover:text-2xl' >4</a></button>
            <button><a href="#Five" className='bg-white p-2 hover:text-2xl'  >5</a></button>
        </div><br /><br />
        
       
    </>
)
}

export default CommentsCarousel