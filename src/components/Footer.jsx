import ContactForm from './ContactForm'
import CompanyInfo from './CompanyInfo'
export default function () {
  return (
    <div className="footer">
      <div>
        <CompanyInfo />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  )
}
