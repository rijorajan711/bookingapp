import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import HomeData from '../component/HomeData'
import HomeDataList from '../component/HomeDataList'
import HomedataDetailList from '../component/HomedataDetailList'
import BottomSearh from "../component/BottomSearh"
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='mt-[50px] flex flex-col items-center gap-30px'>
      <HomeData  />
      <h1 className="w-[1024px] mt-8 text-xl font-semibold">Dubai Holidays</h1>
      <HomeDataList ></HomeDataList>
      <HomedataDetailList></HomedataDetailList>
      </div>
      <BottomSearh ></BottomSearh>

      
    </div>
  )
}

export default Home
