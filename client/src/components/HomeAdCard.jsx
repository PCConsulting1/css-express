import image from '../assets/deskGirlImg.jpg'
import '../styles/Home.styles.css'
export default function () {
  return (
    <div className="ad-container">
      <div>
        <h2>We do your CSS Profile for you</h2>
      </div>
      <div className="card">
        <div className="ad card-content">
          <p className="text-lg text-centered">
            Have a dedicated CSS Profile counselor handle everything from start
            to finish
          </p>
          <button>Get Started</button>
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
