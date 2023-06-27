import TestimonialCard from './TestimonialCard'
export default function () {
  return (
    <div className="testimonials-container">
      <TestimonialCard
        color="#7b90f3"
        name={'March 2023'}
        description={
          'Your company really helped me take the fear and anxiety over answering those complicated questions the CSS Profile asks of us.'
        }
      />
      <TestimonialCard
        name={'October 2022'}
        description={
          'It was a great help to have one of your team members fill out the 3+ hour form for us.'
        }
      />
      <TestimonialCard
        color="#2f44a7"
        name={'October 2022'}
        description={
          'I didn’t know where to even begin to start answering the difficult CSS Profile questions and what the correct information was for the boxes. Thank you so much for doing this application for us.'
        }
      />
    </div>
  )
}
