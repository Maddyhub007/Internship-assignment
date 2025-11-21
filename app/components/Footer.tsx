import styles from "./Footer.module.css"

export default function Footer() {
  const footerLinks = {
    company: ["Home", "About", "Services", "Career", "Contact"],
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoBox}>
                <span className={styles.logoText}>YATRI</span>
                <span className={styles.logoSubtext}>CABS</span>
              </div>
            </div>
          </div>

          <nav className={styles.nav}>
            <a href="#" className={styles.link}>
              Home
            </a>
            <a href="#" className={styles.link}>
              About
            </a>
            <a href="#" className={styles.link}>
              Services
            </a>
            <a href="#" className={styles.link}>
              Career
            </a>
            <a href="#" className={styles.link}>
              Contact
            </a>
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
            <a href="#" className={styles.link}>
              Terms & Condition
            </a>
          </nav>
        </div>

        <div className={styles.copyright}>
          <p>All Copyright are reserved by YATRI CABS</p>
        </div>
      </div>
    </footer>
  )
}
