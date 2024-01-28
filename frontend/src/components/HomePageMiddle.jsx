import React from 'react'
import HomePageHeader from './HomePageHeader'
import HomePagePost from './HomePagePost'

const HomePageMiddle = () => {
  return (
    <div className="w-[84%] h-auto absolute left-[16%] bg-black z-20">
        <HomePageHeader/>
        <section className="w-[100%] h-auto  flex justify-center mt-16">
        <HomePagePost/>
        </section>
       
    </div>
  )
}

export default HomePageMiddle