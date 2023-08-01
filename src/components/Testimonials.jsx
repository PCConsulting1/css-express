import { useState, useEffect } from 'react'
import '../styles/Home.styles.css'
import TestimonialList from './TestimonialList'
import TestimonialCarousel from './TestimonialCarousel'
import TestimonialVideo from './TestimonialVideo'

//TODO: change render based on screen size

export default function () {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1450)
  const updateScreen = () => {
    setIsDesktop(window.innerWidth > 1450)
  }

  useEffect(() => {
    window.addEventListener('resize', updateScreen)
    return () => window.removeEventListener('resize', updateScreen)
  })
  return (
    <>
      <h2 className="text-centered">Here's what customers are saying:</h2>
      {/* {isDesktop ? <TestimonialList /> : <TestimonialCarousel />} */}
      <TestimonialVideo />
    </>
  )
}
