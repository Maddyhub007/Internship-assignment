"use client"

import styles from "./HeroSection.module.css"
import BookingForm from "./BookingForm"

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            INDIA'S <span className={styles.highlight}>LEADING</span>
            <br />
            <span className={styles.highlight}>ONE WAY INTERCITY</span>
            <br />
            CAB SERVICE PROVIDER
          </h1>

          <BookingForm />

          <div className={styles.features}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Transparent Billing</h3>
              <p className={styles.featureText}>GPS Based Billing | No Km Tampering</p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Download Now!</h3>
              <div className={styles.appButtons}>
                <img src="/google-play-store-badge.png" alt="Get it on Google Play" />
                <img src="/apple-app-store-badge.png" alt="Download on the App Store" />
              </div>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>No return fare</h3>
              <p className={styles.featureText}>Oneway Cab Fare | No Hidden Charges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
