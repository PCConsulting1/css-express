import ContactForm from './ContactForm'
import CompanyInfo from './CompanyInfo'
export default function () {
  return (
    <div className="footer">
      <div>
        <CompanyInfo />
      </div>
      {/* <div style={{ flexGrow: 1 }} /> */}
      <div>
        <ContactForm />
      </div>
    </div>
  )
}
