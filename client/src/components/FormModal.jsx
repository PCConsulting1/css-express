import { useEffect, useState } from 'react'
import ContactForm from './ContactForm'
import SuccessPage from './SuccessPage'

export default function ({ showModal }) {
  const [submitted, SetSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="backdrop" onClick={() => showModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="btn-modal" onClick={() => showModal(false)}>
          X
        </button>
        {submitted ? <SuccessPage /> : <ContactForm submitted={SetSubmitted} />}
      </div>
    </div>
  )
}
