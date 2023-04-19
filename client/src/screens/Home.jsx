import './Home.css'
import picture from '../assets/moneyPic.jpg'
export default function Home() {
  return (
    <>
      <div className="banner">
        <p>
          Do your top choice college's require <span>CSS Profile</span>{' '}
          application
        </p>
      </div>
      <div className="banner-logo">
        <h3>CSS Profile Express</h3>
      </div>
      <div className="welcome-container">
        {/* <div className="spacer">Darken Whole image</div> */}
        <div className="spacer-alt">Darken Only Necessary</div>
      </div>
    </>
  )
}
