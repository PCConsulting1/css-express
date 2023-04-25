import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import {
  validateName,
  validateEmail,
  validatePhone,
} from '../functions/validate'

const SERVICE_ID = 'service_wh2pn4h'
const PUBLIC_KEY = 'jfsrsbTBUoAqFCd_e'
const TEMPLATE_ID = 'contact_form'

export default function () {
  const form = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // check form validity before sending
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.status)
      })
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
            <input type="text" name="user_email" required />
          </label>
          <label>
            Phone*
            <input type="text" name="user_phone" required />
          </label>
        </div>
        <button type="submit" style={{ backgroundColor: 'green', margin: 5 }}>
          Submit
        </button>
      </form>
    </>
  )
}
