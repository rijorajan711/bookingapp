import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import SearchItem from "../component/SearchItem"
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
function HotelList() {
  const location=useLocation()
  const [dateView,setDateView]=useState(false)
  const [date,setDate]=useState(location.state.date)
  const [place,setPlace]=useState(location.state.place)
  const [persons,setPerson]=useState(location.state.requiredDeatail)



  return (  
    <div>
      
      <Navbar></Navbar>
        <Header title={"hotellist"}></Header>
         <div className=' flex   mt-28 justify-center'>
            <div className='flex items-start  w-[100%] max-w-[1024px] gap-3'>
                <div className='flex-1 sticky top-[70px]   rounded-3xl  bg-slate-600 text-lg text-white mb-5' >
                       <h1 className='text-amber-600 text-5xl ml-5 font-bold'>Search </h1>
                       <div className='flex ml-5 mt-3 flex-col gap-5'>
                        <span>Search Place</span>
                        <input className='w-60 block   rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6' placeholder={place}></input>
                        </div>

                        <div className='ralative ml-5 mt-3 flex flex-col gap-3 '>
                            <label>Date</label>
                            <span onClick={()=>setDateView(!dateView)} className='w-60 rounded-md py-1.5 bg-white text-black'> {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                                          date[0].endDate,"dd/MM/yyyy")}`}</span>
                        {dateView&&<div className='relative bottom-[15px]'>

                             <DateRange  
                className="absolute top-8"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />              
                            </div>   }
                                         
                        </div>
                        <div className='flex flex-col gap-5 ml-5 text-lg text-white mb-5'>
                          <label>
                            operation
                          </label>
                          <div className='flex'>
                            <span className='flex-1'>Price <small>perDay</small></span>
                            <input className='w-16 mx-5 flex-1 text-black rounded-md' ></input>
                          </div>

                        
                          <div className='flex '> 
                            <span className='flex-1'>Adult </span>
                            <input type='number' min={0} className='text-center  mx-5 flex-1 text-black rounded-md' placeholder={persons.adult}></input>
                          </div>

                          <div className='flex'>
                            <span className='flex-1'>Children </span>
                          
                            <input type='number' min={0} className='text-center  mx-5 flex-1 text-black rounded-md' placeholder={persons.children}></input>
                           
                          </div>

                          <div className='flex'>
                            <span className='flex-1'>Rooms</span>
                            <input  type='number' min={0} className=' text-center mx-5 flex-1 text-black rounded-md' placeholder={persons.rooms}></input>
                          </div>
                      </div>
                       <button className="px-[5px] py-[10px] mx-10 my-3 mt-8 cursor-pointer rounded-md bg-white w-[80%] text-black font-bold">Seach</button>
                </div>
                <div className='flex-auto shadow-2xl bg-white'> 
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>

                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>

                </div>
            </div>
         </div>

    </div>
  )
}

export default HotelList
