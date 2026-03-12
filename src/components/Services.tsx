'use client'

import { useEffect, useRef } from 'react'
import styles from './Services.module.css'

const services = [
  {
    icon: '📱',
    num: '01',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile apps that feel great on any device. From concept to App Store — we handle the whole journey.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: '🚀',
    num: '02',
    title: 'SaaS Products',
    desc: 'We build SaaS from the ground up — auth, billing, dashboards, and the core product. Architected to scale from day one.',
    tags: ['Next.js', 'Stripe', 'Multi-tenant'],
  },
  {
    icon: '🔗',
    num: '03',
    title: 'APIs & Integrations',
    desc: 'Connect anything to anything. We design and build robust APIs and integration pipelines that stay reliable at scale.',
    tags: ['REST', 'GraphQL', 'Webhooks'],
  },
  {
    icon: '⚡',
    num: '04',
    title: 'Healthcare / FHIR',
    desc: 'Our specialty. FHIR R4, HL7, EHR integrations — we speak the language of healthcare data fluently and ship fast.',
    tags: ['FHIR R4', 'HL7', 'SMART on FHIR'],
  },
  {
    icon: '🧩',
    num: '05',
    title: 'Third-party Integrations',
    desc: 'Stripe, Twilio, Salesforce, EHRs — we connect your product to the tools your business already runs on.',
    tags: ['Stripe', 'Twilio', 'Salesforce'],
  },
  {
    icon: '🔒',
    num: '06',
    title: 'Security & Compliance',
    desc: 'HIPAA, SOC 2, GDPR — built in from the start, not bolted on at the end. Ship with confidence.',
    tags: ['HIPAA', 'SOC 2', 'GDPR'],
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = (i % 4) * 0.1 + 's'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.services} id="services" ref={ref}>
      <p className={`${styles.label} fade-in`}>// what we do</p>
      <h2 className={`${styles.title} fade-in`}>We build software<br />for any problem.</h2>
      <p className={`${styles.sub} fade-in`}>Mobile, SaaS, APIs, or deep healthcare integrations — if it needs to be built and shipped, we do it.</p>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.num} className={`service-card ${styles.card} fade-in`}>
            <div className={styles.icon}>{s.icon}</div>
            <div className={styles.num}>{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className={styles.tags}>
              {s.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
