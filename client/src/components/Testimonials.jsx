import '../styles/Home.styles.css'
import TestimonialCard from './TestimonialCard'

//TODO: change render based on screen size
export default function () {
  return (
    <>
      <h2 className="text-centered">Here's what customers are saying:</h2>
      <div className="testimonials-container">
        <TestimonialCard
          color="#7b90f3"
          name={'Testimonial 1'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in. Lacus vestibulum sed arcu non.'
          }
        />
        <TestimonialCard
          name={'Testimonial 2'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <TestimonialCard
          color="#2f44a7"
          name={'Testimonial 3'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit utaliquam purus sit amet luctus venenatis.'
          }
        />
      </div>
    </>
  )
}
