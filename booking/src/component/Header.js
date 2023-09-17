import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate=useNavigate()
  const [place,setplace]=useState("") 
  const [requiredDeatail,setRequiredDeatail]=useState(
    {
      adult:1,
      children:5,
      rooms:1

    }
  )
  const [viewRequiredDeatail,setviewRequiredDeatail]=useState(false)
  const updateRequiredDeatail=(name,operation)=>{
    console.log("this is uppdating")
    setRequiredDeatail((prev)=>{
        return{
          ...prev,[name] : operation==="incre"?requiredDeatail[name]+1:requiredDeatail[name]-1
        }
    })
  }
  const [viewDate, setViewDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);         

  const dtatasend=()=>{
     navigate("/hotellist",{state:{date,place,requiredDeatail}})
  }
   
  return (
    <div className="relative shadow-2xl bg-gray-400 text-white flex justify-center">
      <div className="w-[100%] max-w-[1024px] mt-[20px] mb-[100px] ">
        <div className="flex gap-[40px]">
          <div className="flex gap-[10px] hover:border border-white rounded-md hover:text-black">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>

          <div className="flex gap-[10px] hover:border border-white rounded-md hover:text-black  ">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>

          <div className="flex gap-[10px] hover:border border-white rounded-md hover:text-black ">
            <FontAwesomeIcon icon={faCar} />
            <span>Car</span>
          </div>

          <div className="flex gap-[10px] hover:border border-white rounded-md hover:text-black ">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi Car</span>
          </div>
        </div>


        {

          !props.title &&  <>             
         <h1 className="text-4xl font-semibold mt-[20px]">
          The journey of a thousand miles begins with a single step.
        </h1>
        <p className="text-xl mt-[20px]">
          {" "}
          Some beautiful paths can’t be discovered without getting lost.Collect
          Moments, Not Things.”
        </p>
        <button className="px-[5px] py-[10px] mt-8 cursor-pointer rounded-md bg-white text-slate-300">
          Signin/Register
        </button>
        <div className="z-10 absolute max-w-[1020px] w-[100%] bottom-[0] mt-8 flex justify-evenly h-[40px] bg-white text-black items-center border border-teal-200 shadow-2xl">
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <input
              onChange={(e)=>setplace(e.target.value)}
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your place"
              type="text"
            ></input>
          </div>

          <div className="flex gap-2 relative">
            <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
            <span
              onClick={() => {setViewDate(!viewDate);setviewRequiredDeatail(false)}}
              className="text-slate-400 cursor-pointer"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            {viewDate && (
              <>
              <DateRange
                className="absolute top-8"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
              <div className="absolute w-[100%] left-16 bottom-[-375px]">
               <button onClick={()=>setViewDate(!viewDate)} className="w-[100%] py-[7px] cursor-pointer rounded-md bg-gray-600  text-slate-300">submit</button>
               </div>
              </>
              
            )}
          </div>

          <div className="flex gap-2">
            <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
            <span className="text-slate-400" onClick={()=>{setviewRequiredDeatail(!viewRequiredDeatail) ;setViewDate(false)}}> {`Adult:${requiredDeatail.adult} Children:${requiredDeatail.children} Rooms:${requiredDeatail.rooms}`} </span>
            
           { viewRequiredDeatail&& 
              <div className="w-[250px] absolute bg-white shadow-2xl rounded-lg top-[50px]">

              <div className="flex justify-between m-1">
                <span>Adult</span>
                <div  className="flex gap-3 ">
                  <button disabled={requiredDeatail.adult<=0} onClick={()=>updateRequiredDeatail("adult","dec")} className="px-[10px] py-[7px] cursor-pointer rounded-md border bg-gray-600  text-slate-300">-</button>
                  <span>{requiredDeatail.adult}</span>
                  <button onClick={()=>updateRequiredDeatail("adult","incre")} className="px-[10px] py-[7px] cursor-pointer rounded-md bg-gray-600  text-slate-300">+</button>
                </div>
              </div>

              <div className="flex justify-between m-1">
                <span>Children</span>
                <div className="flex gap-3">
                 <button disabled={requiredDeatail.children<=0} onClick={()=>updateRequiredDeatail("children","dec")} className="px-[10px] py-[7px] cursor-pointer rounded-md bg-gray-600  text-slate-300">-</button>
                  <span>{requiredDeatail.children}</span>
                  <button onClick={()=>updateRequiredDeatail("children","incre")} className="px-[10px] py-[7px] cursor-pointer rounded-md bg-gray-600  text-slate-300">+</button >
                </div>
              </div>

              <div className="flex justify-between m-1">
                <span>Rooms</span>
                <div className="flex gap-3">
                  <button disabled={requiredDeatail.rooms<=0} onClick={()=>updateRequiredDeatail("rooms","dec")} className="px-[10px] py-[7px] cursor-pointer rounded-md bg-gray-600  text-slate-300">-</button>
                  <span >{requiredDeatail.rooms}</span>
                  <button onClick={()=>updateRequiredDeatail("rooms","incre")} className="px-[10px] py-[7px] cursor-pointer rounded-md bg-gray-600  text-slate-300">+</button>
                </div>
              </div>
               
               <div>
               <button onClick={()=>{setviewRequiredDeatail(!viewRequiredDeatail)}} className="w-[100%] py-[7px] cursor-pointer rounded-md bg-gray-600  text-slate-300">submit</button>
               </div>
           
            </div>
               }
          </div>
            
          
        
          <div>

          <button onClick={dtatasend} className="px-[10px] py-[7px] cursor-pointer rounded-md bg-gray-600  text-slate-300">
            Search
          </button>
            </div>
       
        </div>
             </>
        }
      </div>
    </div>
  );
}

export default Header;
