import React from 'react'

function Navbar() {
  return (
    <div className='z-30 h-[50px] bg-gray-400 flex  justify-center sticky top-0 '>
    <div className='w-[100%] max-w-[1024px] text-white flex justify-between items-center'>
        <span className='font-semibold'>G Shopping</span>
        <div>
            <button className='ml-[20px] px-[5px] py-[10px] cursor-pointer rounded-md bg-white text-slate-300'>Signin</button>
            <button className='ml-[20px] px-[5px] py-[10px] cursor-pointer rounded-md bg-white text-slate-300'>Login</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar
