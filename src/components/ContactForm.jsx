import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  validateEmail,
  validatePhone,
  validateTest,
} from '../functions/validate'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID

const generateUserTest = () => {
  return [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]
}

export default function ({ submitted }) {
  const [errors, setErrors] = useState({
    email: false,
    phone: false,
    form: false,
  })
  const [test] = useState(generateUserTest)

  const form = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const honeyPotOne = event.currentTarget.elements[2].value
    const emailValue = event.currentTarget.elements[3].value
    const phoneValue = event.currentTarget.elements[4].value
    const testValue = event.currentTarget.elements[5].value
    const honeyPotTwo = event.currentTarget.elements[6].value
    // check form input validity
    if (
      validateEmail(emailValue) ||
      validatePhone(phoneValue) ||
      validateTest(testValue)
    ) {
      setErrors({
        email: validateEmail(emailValue),
        phone: validatePhone(phoneValue),
      })
    }
    //check fake inputs
    else if (honeyPotOne || honeyPotTwo) {
      setErrors({ form: true })
    } else {
      setErrors({
        email: false,
        phone: false,
        form: false,
      })
      submitted(true)
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          submitted(true)
        })
        .catch((err) => {
          setErrors({ form: true })
          console.log(err)
        })
    }
  }

  return (
    <>
      <h3 className="text-centered">Contact Us</h3>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="column">
          <label>
            First Name*
            <input type="text" name="firstrifname" required />
          </label>
          <label>
            Last Name*
            <input type="text" name="lastrifname" required />
          </label>
          <label>
            <input
              className="hpinvis"
              type="text"
              autoComplete="off"
              tabIndex="-1"
            />
          </label>
        </div>
        <div className="column">
          <label>
            Email*
            <input type="email" name="userrifemail" required />
          </label>
          {errors.email && (
            <p className="error">Please enter a valid email address</p>
          )}
          <label>
            Phone*
            <input type="tel" name="userrifphone" required />
          </label>
          {errors.phone && (
            <p className="error">Please enter a valid phone number</p>
          )}
          <label>
            <label>
              {test[0] + ' + ' + test[1] + ' = ?'}
              <input type="text" name="test" required />
            </label>
            <input
              className="hpinvis"
              type="email"
              autoComplete="off"
              tabIndex="-1"
            />
          </label>
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
