import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Zoe<span>X</span></div>
      <ul className={styles.links}>
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#standards">Standards</a></li>
        <li><a href="#contact" className={styles.cta}>Get in touch</a></li>
      </ul>
    </nav>
  )
}
