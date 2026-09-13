import { useState } from 'react'
import { ArrowUpRight, Check, Send } from 'lucide-react'

const emailAddress = 'gokulgk0666@gmail.com'
export const gmailComposeUrl = (subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const submitContact = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      const subject = `Portfolio enquiry from ${form.name}`
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      setStatus('sent')
      window.location.assign(gmailComposeUrl(subject, body))
    } catch {
      setStatus('error')
    }
  }
  return (
    <section className="contact section" id="contact">
      <div className="contact-intro">
        <div className="section-label">07 — Contact</div>
        <h2>
          Let&apos;s build
          <br />
          <em>something useful.</em>
        </h2>
        <p>
          Have a project, role, or idea in mind? I&apos;d love to hear about it.
        </p>
        <a
          href={gmailComposeUrl()}
          target="_blank"
          rel="noreferrer"
          className="email-link"
        >
          Email me via Gmail <ArrowUpRight size={18} />
        </a>
        <a href="tel:+919500483963" className="email-link">
          +91 9500483963 <ArrowUpRight size={18} />
        </a>
      </div>
      <form className="contact-form" onSubmit={submitContact}>
        <label>
          Your name
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Gokul S"
          />
        </label>
        <label>
          Email address
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Tell me about it
          <textarea
            required
            rows="3"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="A few words about your project..."
          />
        </label>
        <button className="button button-dark" disabled={status === 'sending'}>
          {status === 'sending' ? (
            'Sending…'
          ) : status === 'sent' ? (
            <>
              <Check size={17} /> Message sent
            </>
          ) : (
            <>
              <Send size={16} /> Send message
            </>
          )}
        </button>
        {status === 'error' && (
          <p className="form-error">
            Something went wrong. Please email me directly.
          </p>
        )}
      </form>
    </section>
  )
}
