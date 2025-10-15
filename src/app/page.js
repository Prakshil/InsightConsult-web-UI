import Banner from '@/components/Banner/Banner'
import Header from '@/components/common/Header'
import About from '@/components/About/About'
import React from 'react'
import Activities from '@/components/Activities/Activities'
import Works from '@/components/Works/Works'
import Pricing from '@/components/Pricing/Pricing'
import Feedbacks from '@/components/Feedback/Feedbacks'
import Footer from '@/components/common/Footer'

const page = () => {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Activities />
    <Works />
    <Pricing />
    <Feedbacks />
    <Footer />
    </>
  )
}

export default page