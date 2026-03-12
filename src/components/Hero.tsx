'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.badge}>Code. Craft. Deploy.</div>
        <h1>
          Build.<br />
          <span className={styles.accent}>Ship.</span><br />
          <span className={styles.dim}>Integrate.</span>
        </h1>
        <p className={styles.desc}>
          Mobile apps, SaaS products, APIs, or deep healthcare integrations — if it needs to be built and shipped, we do it.
        </p>
        <div className={styles.actions}>
          <button
            className={styles.btnPrimary}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a project
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See what we do →
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <span className={styles.terminalTitle}>zoex — app.ts</span>
          </div>
          <div className={styles.terminalBody}>
            <span className={styles.tLine}><span className={styles.tComment}>// ZoeX — build anything.</span></span>
            <span className={styles.tLine}>&nbsp;</span>
            <span className={styles.tLine}><span className={styles.tKeyword}>import</span> {'{'}  <span className={styles.tFn}>buildApp</span> {'}'} <span className={styles.tKeyword}>from</span> <span className={styles.tString}>&apos;@zoex/core&apos;</span></span>
            <span className={styles.tLine}><span className={styles.tKeyword}>import</span> {'{'}  <span className={styles.tFn}>FHIRClient</span> {'}'} <span className={styles.tKeyword}>from</span> <span className={styles.tString}>&apos;@zoex/fhir&apos;</span></span>
            <span className={styles.tLine}>&nbsp;</span>
            <span className={styles.tLine}><span className={styles.tKeyword}>const</span> <span className={styles.tVar}>app</span> = <span className={styles.tKeyword}>await</span> <span className={styles.tFn}>buildApp</span>({'{'}</span>
            <span className={styles.tLine}>&nbsp;&nbsp;<span className={styles.tVar}>type</span>: <span className={styles.tString}>&apos;mobile&apos;</span>, <span className={styles.tComment}>// saas | api | fhir</span></span>
            <span className={styles.tLine}>&nbsp;&nbsp;<span className={styles.tVar}>stack</span>: <span className={styles.tString}>&apos;react-native&apos;</span>,</span>
            <span className={styles.tLine}>&nbsp;&nbsp;<span className={styles.tVar}>ship</span>: <span className={styles.tKeyword}>true</span>,</span>
            <span className={styles.tLine}>{'}'})</span>
            <span className={styles.tLine}>&nbsp;</span>
            <span className={styles.tLine}><span className={styles.tComment}>// ✓ Shipped. <span className={styles.cursorBlink} /></span></span>
          </div>
        </div>
        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statNum}>Apps</span>
            <span className={styles.statLabel}>Mobile & Web</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>FHIR</span>
            <span className={styles.statLabel}>R4 Certified</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>∞</span>
            <span className={styles.statLabel}>Integrations</span>
          </div>
        </div>
      </div>
    </section>
  )
}
