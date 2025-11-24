import React from 'react'
import Hero from '../../Components/Students/Hero'
import Companies from '../../Components/Students/Companies'
import CourseSection from '../../Components/Students/CourseSection'
import TastimonialSection from '../../Components/Students/TastimonialSection'
import CallToAction from '../../Components/Students/CallToAction'
import Footer from '../../Components/Students/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center ' >
    <Hero/>
    <Companies/>
    <CourseSection/>
    <TastimonialSection/>
    <CallToAction/>
    <Footer/>
    </div>
  )
}

export default Home