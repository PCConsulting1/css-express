import image from '../assets/deskGirlImg.jpg'
import '../styles/Home.styles.css'
export default function () {
  return (
    <div className="card-container">
      <div>
        <h2 className="image-heading">We do your CSS Profile for you</h2>
      </div>
      <div className="card">
        <div className="card-content">
          <p className="card-text" style={{ fontSize: '1.5rem' }}>
            Have a dedicated CSS Profile counselor handle everything from start
            to finish
          </p>
          <button className="card-btn">Get Started</button>
        </div>
        <div className="card-image-container">
          <img
            className="card-image"
            src={image}
            width="500"
            height="200"
          ></img>
        </div>
      </div>
    </div>
  )
}
