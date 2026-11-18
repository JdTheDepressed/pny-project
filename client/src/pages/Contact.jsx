import { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('')
    setSending(true)

    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
    }

    setSending(false)
  }

  return (
    <section className="section">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-sub">Send us a message and we will get back to you.</p>

      <div className="contact-wrap">
        <div className="contact-info">
          <h3>Head Office</h3>
          <p>Lahore, Pakistan</p>
          <p>UAN: 0300-0000000</p>
          <p>info@technest.com</p>
          <p>Mon - Sat, 9am to 6pm</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Your name *" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your email *" value={form.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} />
          <input name="subject" placeholder="Subject *" value={form.subject} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Your message *" value={form.message} onChange={handleChange} required />

          <button type="submit" className="btn btn-orange" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && <p className="msg-success">Message sent. We will contact you soon.</p>}
          {status === 'error' && <p className="error">Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact