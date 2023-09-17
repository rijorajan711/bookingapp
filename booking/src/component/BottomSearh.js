import React from 'react'

function BottomSearh() {
  return (
    <div className='w-[100%] bg-gray-400 flex flex-col items-center gap-[21px] mt-16 h-[200px]'>
        <h1 className="text-xl font-extrabold mt-[20px]">The journey of a thousand miles begins with a single step.</h1>
        <span className="text-xl mt-[20px]">The journey of a thousand miles begins with a single step.</span>
        <div className='flex gap-3'>
            <input className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6' type='text' placeholder='Search'></input>
            <button className='bg-black w-36 rounded-xl text-white hover:scale-[1.1]'>Search</button>
        </div>
    </div>
  )
}

export default BottomSearh
