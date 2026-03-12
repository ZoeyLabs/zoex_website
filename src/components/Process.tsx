'use client'

import { useEffect, useRef } from 'react'
import styles from './Process.module.css'

export default function Process() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = i * 0.15 + 's'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.process} id="process" ref={ref}>
      <p className={`${styles.label} fade-in`}>// how it works</p>
      <h2 className={`${styles.title} fade-in`}>Three words.<br />One process.</h2>
      <p className={`${styles.sub} fade-in`}>Simple because the work is already complex enough.</p>

      <div className={styles.steps}>
        <div className={`${styles.step} fade-in`}>
          <div className={styles.stepNum}>01</div>
          <h3>Build</h3>
          <p>We scope your project, design the architecture, and build with the standards and stack that fits your environment.</p>
        </div>
        <div className={`${styles.step} fade-in`}>
          <div className={styles.stepNum}>02</div>
          <h3>Ship</h3>
          <p>Rapid iteration, real-world testing, and a deployment pipeline that gets you to production fast without cutting corners.</p>
        </div>
        <div className={`${styles.step} fade-in`}>
          <div className={styles.stepNum}>03</div>
          <h3>Integrate</h3>
          <p>We don&apos;t just hand it off. We ensure your product is stable, monitored, and ready to scale as you grow.</p>
        </div>
      </div>
    </section>
  )
}
