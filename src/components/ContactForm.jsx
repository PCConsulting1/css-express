import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { validateEmail, validatePhone } from '../functions/validate'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID

export default function ({ submitted }) {
  const [errors, setErrors] = useState({
    email: false,
    phone: false,
    form: false,
  })

  const form = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const emailValue = event.currentTarget.elements[2].value
    const phoneValue = event.currentTarget.elements[3].value
    // check form validity before sending

    if (validateEmail(emailValue) || validatePhone(phoneValue)) {
      setErrors({
        email: validateEmail(emailValue),
        phone: validatePhone(phoneValue),
      })
    } else {
      setErrors({
        email: false,
        phone: false,
        form: false,
      })
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          form.reset()
          submitted(true)
        })
        .catch((err) => {
          setErrors({ form: true })
        })
      setErrors({ form: true })
    }
  }

  return (
    <>
      <h3 className="text-centered">Contact Us</h3>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="column">
          <label>
            First Name*
            <input type="text" name="first_name" required />
          </label>
          <label>
            Last Name*
            <input type="text" name="last_name" required />
          </label>
        </div>
        <div className="column">
          <label>
            Email*
            <input type="email" name="user_email" required />
          </label>
          {errors.email && (
            <p className="error">Please enter a valid email address</p>
          )}
          <label>
            Phone*
            <input type="tel" name="user_phone" required />
          </label>
          {errors.phone && (
            <p className="error">Please enter a valid phone number</p>
          )}
        </div>
        {errors.form ? (
          <p className="error text-centered">
            Something went wrong, please try again later
          </p>
        ) : (
          <div className="center-item">
            <button
              type="submit"
              style={{ backgroundColor: 'green', margin: 5 }}
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </>
  )
}
