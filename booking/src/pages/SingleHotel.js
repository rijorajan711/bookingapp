import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import BottomSearh from '../component/BottomSearh'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faLocationPin,faArrowRight,faArrowLeft,faXmark} from "@fortawesome/free-solid-svg-icons";

function SingleHotel() {
   const[slideIndex,setSlideIndex]=useState(0)
   const[slideOpen,setSlideOpen]=useState(false)
   const dataurl=[{src:"https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/activities/m_Tanah Lot Temple_5_l_374_567.jpg"},
                  {src:"https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/activities/m_Tanah Lot Temple_7_l_352_527.jpg"},
                  {src:"https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/activities/m_Tanah Lot Temple_5_l_374_567.jpg"},
                  {src:"https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/activities/m_Tanah Lot Temple_5_l_374_567.jpg"}  
                 ]

                 const handleSlideOpen =(index)=>{
                    setSlideIndex(index)
                    setSlideOpen(true)
                 }

                 const slideMovee=(side)=>{
          
                   let newIndex
                  if(side==="left"){
                    newIndex= slideIndex===0?dataurl.length-1:slideIndex-1
                    setSlideIndex(newIndex)
                  }else{
                   
                    newIndex= slideIndex===dataurl.length-1? 0:slideIndex+1
                    setSlideIndex(newIndex)
                  }

                }
                  
            
  return (
    <div>
        <Navbar></Navbar>
        <Header title={"hotellist"}></Header>
        <div className='flex justify-center  relative my-8 bg-slate-200'>
      
      {
        slideOpen&&<div className='absolute   w-[70%] z-20 '>
        <div onClick={()=>slideMovee("left")}  className='cursor-pointer absolute text-4xl font-bold top-80 left-[-50px] text-red-500'  >        <FontAwesomeIcon   icon={faArrowLeft }  />
</div>  
         <FontAwesomeIcon className='cursor-pointer absolute right-[-200px] font-bold text-4xl m-3 text-gray-500'  onClick={()=>setSlideOpen(false)} icon={faXmark} />
          
           <div>
            <img className='w-[100%] ' src={dataurl[slideIndex].src}></img>
           </div>
           <div onClick={()=>slideMovee("right")}  className='cursor-pointer absolute text-4xl font-bold top-80 right-[-50px] z-10 text-gray-500'  >     <FontAwesomeIcon    icon={faArrowRight}  /> </div>
     
            </div>
      } 
          <div className='w-[100%] max-w-[1024px] flex flex-col gap-3'>

            <h1 className='text-3xl font-extrabold'>Grand Hotel</h1>
            <div className='flex gap-3 '>
              <span><FontAwesomeIcon icon={faLocationPin} /></span>
              <span className='text-sm font-light'>India Kerala Malappuram</span>
            </div>
            <span className='text-cyan-500 font-semibold'>Location is near to MBH hospital</span>
            <span className='text-3xl'>Located at a height of 3, 000 ft. and surrounded by lush vegetation</span>
            <div className='flex gap-5 flex-wrap '>
              {
                 dataurl.map((data,index)=>(

                    <div className='w-[30%]'> <img key={data.name} onClick={()=>handleSlideOpen(index)} className='w-[100%] hover:scale-[1.1]' src={data.src} alt='sory'></img> </div>
                 ))
              }
            </div>
            <div>
             <div>
             
             <h1 className='font-extrabold'>Grand Hotel</h1>
             <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
             
             </div>
             <div>
            <button className='w-[100%] bg-slate-500 mt-9 h-24 rounded-xl text-5xl font-serif text-white hover:scale-[1.1]'>Book Now</button>
             </div>



            </div>

          </div>
        </div>
        <BottomSearh></BottomSearh>
        
      
    </div>
  )
}

export default SingleHotel
