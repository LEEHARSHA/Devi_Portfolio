import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [isLoading, setIsLoading] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus('idle')
      return
    }

    setIsLoading(true)
    setStatus('loading')

    await new Promise((resolve) => setTimeout(resolve, 700))

    const serviceConfigured = false

    if (!serviceConfigured) {
      setStatus('error')
      setIsLoading(false)
      return
    }

    setStatus('success')
    setIsLoading(false)
    setForm(initialState)
  }

  const handleClear = () => {
    setForm(initialState)
    setErrors({})
    setStatus('idle')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-grid">
        <label>
          <span>NAME</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>

        <label>
          <span>EMAIL</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email ? <small>{errors.email}</small> : null}
        </label>
      </div>

      <label>
        <span>SUBJECT</span>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          aria-invalid={Boolean(errors.subject)}
          className={errors.subject ? 'input-error' : ''}
        />
        {errors.subject ? <small>{errors.subject}</small> : null}
      </label>

      <label>
        <span>MESSAGE</span>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          className={errors.message ? 'input-error' : ''}
        />
        {errors.message ? <small>{errors.message}</small> : null}
      </label>

      <div className="form-actions">
        <button type="submit" className="button primary" disabled={isLoading}>
          {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
        <button type="button" className="button secondary" onClick={handleClear}>
          CLEAR
        </button>
      </div>

      {status === 'error' ? (
        <p className="form-message error">Contact service is not configured yet.</p>
      ) : null}
      {status === 'success' ? (
        <p className="form-message success">Message sent successfully.</p>
      ) : null}
    </form>
  )
}

export default ContactForm
