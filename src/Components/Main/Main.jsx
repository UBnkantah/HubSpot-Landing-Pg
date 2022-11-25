import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import CRMHeading from '../CRMHeading/CRMHeading'
import MarkHub from '../MarkHub/MarkHub'
import LeaAGrw from '../LeaAGrw/LeaAGrw'
import LearnAndGrow from '../LearnAndGrow/LearnAndGrow'
import Partners from '../Partners/Partners'
import Profile from '../Profile/Profile'
import Footer from "../FooterData/FooterData"
import FooterSoc from '../FooterSoc/FooterSoc'

function Main() {
  return (
    <div>
      <Navbar />
      <Header />
      <CRMHeading />
      <MarkHub />
      <LeaAGrw />
      <LearnAndGrow />
      <Partners />
      <Profile />
      <Footer />
      <FooterSoc />
    </div>
  )
}

export default Main
