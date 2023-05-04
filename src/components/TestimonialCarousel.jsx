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
              name={'March 2023'}
              description={
                'Your company really helped me take the fear and anxiety over the answering those complicated questions the CSS Profile asks of us.'
              }
            />
          ) : slide === 1 ? (
            <TestimonialCard
              name={'October 2022'}
              description={
                'It was a great help to have one of your team members fill out the 3+ hour form for us.'
              }
            />
          ) : (
            <TestimonialCard
              color="#2f44a7"
              name={'October 2022'}
              description={
                'I didn’t know where to even begin to start answering the difficult CSS Profile questions and what the correct information was for the boxes. Thank you so much for doing this application for us.'
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
