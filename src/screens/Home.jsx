import { useState } from 'react'

import HomeBanner from '../components/HomeBanner'
import HomeImage from '../components/HomeImage'
import FormModal from '../components/FormModal'
import HomeAdCard from '../components/HomeAdCard'
import Testimonials from '../components/Testimonials'
import HomeList from '../components/HomeList'
import Footer from '../components/Footer'
//TODO: move homebanner to app component
//TODO: move footer to app component
export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {showModal && <FormModal showModal={setShowModal} />}
      <HomeBanner />
      <HomeImage showModal={setShowModal} />
      <HomeAdCard showModal={setShowModal} />
      <Testimonials />
      <HomeList />
      <Footer />
    </>
  )
}
