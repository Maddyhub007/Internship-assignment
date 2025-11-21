"use client"

import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoBox}>
              <span className={styles.logoText}>YATRI</span>
              <span className={styles.logoSubtext}>CABS</span>
            </div>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.support}>
              <div className={styles.supportBadge}>
                <span className={styles.availability}>24</span>
                <span className={styles.separator}>×</span>
                <span className={styles.availability}>7</span>
              </div>
              <span className={styles.phone}>+917860663399</span>
            </div>

            <button className={styles.downloadBtn}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2v12M10 14l-4-4M10 14l4-4M3 18h14" stroke="currentColor" strokeWidth="2" />
              </svg>
              Download App
            </button>

            <div className={styles.profile}>
              <div className={styles.profileIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 18c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span>Hi, Ravi</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
