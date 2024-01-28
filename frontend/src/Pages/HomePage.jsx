import React from 'react'
import HomePageLeft from '../components/HomePageLeft'
import HomePageMiddle from '../components/HomePageMiddle'
import HomePageRight from '../components/HomePageRight'

const HomePage = () => {
  return (
   
       <div className='flex justify-start ' >
        <HomePageLeft/>
        <HomePageMiddle/>
        <HomePageRight/>
    
    </div>
   
  )
}

export default HomePage