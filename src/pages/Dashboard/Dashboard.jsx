import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Body from '../../components/Body/Body'
import Footer from '../../components/Footer/Footer'
import Mask from '../../components/Mask/Mask'
import Photos from '../../components/photos/Photos'
import Photos1 from '../../components/Photos1/Photos1'
import Photos2 from '../../components/Photos2/Photos2'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Body/>
      <Mask/>
      <Photos/>
      <Photos1/>
      <Photos2/>
      <Footer/>
    </div>
  )
}

export default Dashboard