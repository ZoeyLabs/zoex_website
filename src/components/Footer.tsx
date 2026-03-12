import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Zoe<span>X</span></div>
      <p>Named after a very good dog. 🐾</p>
      <p>© 2026 ZoeX. Build. Ship. Integrate.</p>
    </footer>
  )
}
