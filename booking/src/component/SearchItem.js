import React from 'react'

function SearchItem() {
  return (
    <div className='bg-slate-600 flex border border-white border-[2px] text-white gap-5 justify-between rounded-xl overflow-hidden my-4 mx-4'>
        <div>

      <img className='h-[200px] w-[200px] rounded-xl' src="https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/activities/m_Tanah Lot Temple_5_l_374_567.jpg"></img>
        </div>
     
      <div className='flex flex-col gap-4'>
        <span className='text-3xl font-serif'> Dooars Overview</span>
        <span className='font-bold font-serif'>	West Bengal</span>
        <span className='font-serif'>Best Time to Explore Places to visit in Dooars</span>
        <span className='text-sm'>How to Reach the Places to Visit in Dooars</span>
        <span className='bg-orange-500 w-24 text-center rounded-md'>Freepickup</span>
        <span className='bg-green-700 w-24 mb-5 text-center'>Freedrop</span>
      </div>
  
     <div className='flex flex-col justify-between mx-5'>
      <div className='flex justify-between m-4 gap-4'>
        <span className='text-xl font-serif'>Excelent</span>
        <button className="px-[5px] cursor-pointer rounded-md bg-white text-slate-500">8.9</button>
      </div>
      <div className='mb-5 flex flex-col gap-1 '>
        <span>$221</span>
        <span className='tex'>include in all tax</span>
        <button className="px-[5px] py-[10px]  cursor-pointer rounded-md bg-white text-slate-500">see availability</button>
      </div>
     </div>
  
    </div>
  )
}

export default SearchItem
