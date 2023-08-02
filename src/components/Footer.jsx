import ContactForm from './ContactForm'
import CompanyInfo from './CompanyInfo'
export default function ({ showModal }) {
  const handleClick = (e) => {
    e.currentTarget.blur()
    showModal(true)
  }
  return (
    <div className="footer">
      <div>
        <CompanyInfo />
      </div>
      <div>
        {/* <ContactForm /> */}
        <button onClick={(e) => handleClick(e)}>
          FILE WITH AN EXPERT TODAY
        </button>
      </div>
    </div>
  )
}
