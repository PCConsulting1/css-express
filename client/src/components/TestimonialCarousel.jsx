import { useState } from 'react'

import TestimonialCard from './TestimonialCard'

export default function () {
  const [slide, setSlide] = useState(0)

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          {slide === 0 ? (
            <TestimonialCard
              color="#7b90f3"
              name={'Testimonial 1'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in. Lacus vestibulum sed arcu non.'
              }
            />
          ) : slide === 1 ? (
            <TestimonialCard
              name={'Testimonial 2'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            />
          ) : (
            <TestimonialCard
              color="#2f44a7"
              name={'Testimonial 3'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit utaliquam purus sit amet luctus venenatis.'
              }
            />
          )}
        </div>
        <button
          className="btn-next"
          onClick={() => {
            setSlide(slide < 3 ? slide + 1 : 0)
          }}
        >
          {'>'}
        </button>
        <button
          className="btn-prev"
          onClick={() => {
            setSlide(slide > 0 ? slide - 1 : 3)
          }}
        >
          {'<'}
        </button>
      </div>
    </div>
  )
}
