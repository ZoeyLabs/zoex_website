'use client'

import { useEffect, useRef } from 'react'
import styles from './Standards.module.css'

export default function Standards() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.standards} id="standards" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.text} fade-in`}>
          <p className={styles.label}>// the standards</p>
          <h2 className={styles.title}>
            We speak<br />healthcare&apos;s<br />
            <span className={styles.accent}>native language.</span>
          </h2>
          <p className={styles.sub}>
            FHIR R4, HL7 v2, CDA, DICOM — we&apos;ve worked with them all. No learning curve on our end means faster delivery on yours.
          </p>
          <button className={styles.btn}>Talk to us about your stack</button>
        </div>

        <div className={`${styles.visual} fade-in`}>
          <div className={styles.hl7Badge}>✓ HL7 v2.5.1 Valid</div>
          <div className={styles.fhirBox}>
            <span className={styles.jKey}>{'{'}</span><br />
            &nbsp;&nbsp;<span className={styles.jKey}>&quot;resourceType&quot;</span>: <span className={styles.jStr}>&quot;Patient&quot;</span>,<br />
            &nbsp;&nbsp;<span className={styles.jKey}>&quot;id&quot;</span>: <span className={styles.jStr}>&quot;zoex-pt-001&quot;</span>,<br />
            &nbsp;&nbsp;<span className={styles.jKey}>&quot;name&quot;</span>: [{'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.jKey}>&quot;family&quot;</span>: <span className={styles.jStr}>&quot;Martinez&quot;</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.jKey}>&quot;given&quot;</span>: [<span className={styles.jStr}>&quot;Sofia&quot;</span>]<br />
            &nbsp;&nbsp;{'}'}],<br />
            &nbsp;&nbsp;<span className={styles.jKey}>&quot;birthDate&quot;</span>: <span className={styles.jStr}>&quot;1988-04-12&quot;</span>,<br />
            &nbsp;&nbsp;<span className={styles.jKey}>&quot;status&quot;</span>: <span className={styles.jVal}>active</span><br />
            <span className={styles.jKey}>{'}'}</span>
          </div>
          <div className={styles.floatingBadge}>✓ FHIR R4 Validated</div>
        </div>
      </div>
    </section>
  )
}
