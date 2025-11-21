import styles from "./AppDownloadSection.module.css"

export default function AppDownloadSection() {
  return (
    <section className={styles.appDownload}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.mobileImage}>
            <img src="/images/mobile-app.jpg" alt="Yatri Cabs Mobile App" />
          </div>

          <div className={styles.info}>
            <h2 className={styles.title}>
              GET YOUR
              <br />
              <span className={styles.brand}>YATRI CABS</span>
              <br />
              APP NOW!
            </h2>

            <p className={styles.promo}>
              USE CODE <span className={styles.code}>WELCOMEYATRI</span> AND
              <br />
              GET <span className={styles.discount}>FLAT 05% OFF*</span> ON YOUR FIRST
              <br />
              INTERCITY TRIP WITH THE APP!
            </p>

            <p className={styles.downloadText}>Download Now!</p>

            <div className={styles.buttons}>
              <img src="/google-play-store-badge.png" alt="Get it on Google Play" className={styles.badge} />
              <img src="/apple-app-store-badge.png" alt="Download on the App Store" className={styles.badge} />
            </div>
          </div>

          <div className={styles.driverSection}>
            <h2 className={styles.driverTitle}>
              BECOME A <span className={styles.highlight}>DRIVER</span> PARTNER
            </h2>
            <p className={styles.driverText}>
              Join <span className={styles.brand}>Yatri Car Rental</span> And Attach Your Car To Our Platform. Earn More
              By Serving Our Passengers And Benefit From Our Extensive Customer Base.
            </p>
            <button className={styles.downloadAppBtn}>DOWNLOAD THE APP</button>
          </div>
        </div>
      </div>
    </section>
  )
}
