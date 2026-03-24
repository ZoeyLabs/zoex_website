‘use client’

import { useState } from ‘react’
import styles from ‘./CTA.module.css’

export default function CTA() {
const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
const form = e.currentTarget
const name = (form.elements.namedItem(‘name’) as HTMLInputElement).value
const email = (form.elements.namedItem(‘email’) as HTMLInputElement).value
const message = (form.elements.namedItem(‘message’) as HTMLTextAreaElement).value

```
const subject = encodeURIComponent(`Project inquiry from ${name}`)
const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
window.location.href = `mailto:hello@zoex.io?subject=${subject}&body=${body}`

setSubmitted(true)
```

}

return (
<section className={styles.cta} id="contact">
<h2 className="fade-in">
Ready to<br /><span className={styles.accent}>build?</span>
</h2>
<p className="fade-in">Let's talk about your project. No fluff, just real conversation about what you need.</p>

```
  {submitted ? (
    <div className={`fade-in ${styles.successMsg}`}>
      <p>Thanks! Your email client should have opened. We&apos;ll be in touch soon.</p>
      <a href="mailto:hello@zoex.io" className={styles.btn}>hello@zoex.io →</a>
    </div>
  ) : (
    <form className={`fade-in ${styles.form}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building?"
          className={styles.textarea}
        />
      </div>
      <button type="submit" className={styles.btn}>Send message →</button>
    </form>
  )}
</section>
)
}