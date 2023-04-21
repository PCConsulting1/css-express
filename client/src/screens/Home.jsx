import HomeBanner from '../components/HomeBanner'
import HomeImage from '../components/HomeImage'
import HomeAdCard from '../components/HomeAdCard'
import Testimonials from '../components/Testimonials'
import HomeList from '../components/HomeList'
import Footer from '../components/Footer'
//TODO: move homebanner to app component
//TODO: move footer to app component
export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeImage />
      <HomeAdCard />
      <Testimonials />
      <HomeList />
      <Footer />
    </>
  )
}
