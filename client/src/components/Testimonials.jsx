import '../styles/Home.styles.css'

//TODO: Create component for each testimonial
export default function () {
  return (
    <div className="testimonials-section">
      <h2>Here's what customers are saying:</h2>
      <div className="testimonials-container">
        <div className="card">
          <div className="card-heading">
            <h3>Testimonial 1</h3>
          </div>
          <div className="card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis
            nunc sed id semper risus in. Lacus vestibulum sed arcu non.
          </div>
        </div>
        <div className="card">
          <div className="card-heading">
            <h3>Testimonial 2</h3>
          </div>
          <div className="card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="card">
          <div className="card-heading">
            <h3>Testimonial 3</h3>
          </div>
          <div className="card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut
            aliquam purus sit amet luctus venenatis.
          </div>
        </div>
      </div>
    </div>
  )
}
