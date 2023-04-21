import { useState } from 'react'
import {
  validateName,
  validateEmail,
  validatePhone,
} from '../functions/validate'

export default function () {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <h3 className="text-centered">Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="column">
          <label>
            First Name*
            <input
              id="firstName"
              type="text"
              value={state.firstName}
              onChange={(e) => {
                validateName(e.target.value) &&
                  setState({ firstName: e.target.value })
              }}
            />
          </label>
          <label>
            Last Name*
            <input
              type="text"
              value={state.lastName}
              onChange={(e) => {
                validateName(e.target.value) &&
                  setState({ lastName: e.target.value })
              }}
            />
          </label>
        </div>
        <div className="column">
          <label>
            Email*
            <input
              type="text"
              value={state.email}
              onChange={(e) => {
                validateEmail(e.target.value) &&
                  setState({ email: e.target.value })
              }}
            />
          </label>
          <label>
            Phone*
            <input
              type="text"
              value={state.phone}
              onChange={(e) => {
                validatePhone(e.target.value) &&
                  setState({ phone: e.target.value })
              }}
            />
          </label>
        </div>
        <button type="submit" style={{ backgroundColor: 'green', margin: 5 }}>
          Submit
        </button>
      </form>
    </>
  )
}
