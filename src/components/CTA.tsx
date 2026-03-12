import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta} id="contact">
      <h2 className="fade-in">
        Ready to<br /><span className={styles.accent}>build?</span>
      </h2>
      <p className="fade-in">Let&apos;s talk about your project. No fluff, just real conversation about what you need.</p>
      <div className="fade-in">
        <a href="mailto:hello@zoex.io" className={styles.btn}>hello@zoex.io →</a>
      </div>
    </section>
  )
}
