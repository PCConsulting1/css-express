import '../styles/Home.styles.css'
export default function ({ showModal }) {
  const handleClick = (e) => {
    e.currentTarget.blur()
    showModal(true)
  }
  return (
    <div className="welcome-container">
      <div className="spacer">
        <h2>Don't miss out on Financial Aid.</h2>
        <p className="text-lg">We're ready to assist you</p>
        <button onClick={(e) => handleClick(e)}>File with an expert</button>
      </div>
    </div>
  )
}
