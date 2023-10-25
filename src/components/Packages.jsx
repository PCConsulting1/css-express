import TestimonialCard from './TestimonialCard'
const option1 = [
  'Provide a critique of your essays before submission to the colleges and universities',
  'Provide ACT or SAT preparation booklet',
  'Two 30-minute consultations to answer any questions you may have',
  'We file FAFSA for all undergraduate years for no charge',
]
const option2 = [
  'Provide a critique of your essays before submission to the colleges and universities',
  'Provide ACT or SAT preparation booklet',
  'Two 30-minute consultations to answer any questions you may have',
  'We file FAFSA for all undergraduate years for no charge',
  'We file CSS Profile for 2024-25 academic year',
]
export default function () {
  return (
    <div
      className="testimonials-container"
      style={{ display: 'flex', flexWrap: 'wrap', marginTop: 50 }}
    >
      <TestimonialCard name={'Option 1'} description={option1} />
      <TestimonialCard name={'Option 2'} description={option2} />
    </div>
  )
}
