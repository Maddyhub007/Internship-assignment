import styles from "./WhyYatriSection.module.css"

export default function WhyYatriSection() {
  const features = [
    {
      icon: "⚡",
      title: "FAST RESPONSE TIME",
      description:
        "Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly.",
    },
    {
      icon: "🚗",
      title: "VAST FLEET",
      description:
        "We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Car Hire Needs.",
    },
    {
      icon: "📱",
      title: "EASY TO ORDER",
      description:
        "Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team.",
    },
    {
      icon: "💰",
      title: "GREAT TARIFFS",
      description:
        "Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental.",
    },
  ]

  return (
    <section className={styles.whyYatri}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          WHY <span className="green-text">YATRI</span> ?
        </h2>

        <div className={styles.content}>
          <div className={styles.carImage}>
            <img src="/images/car-image.jpg" alt="Yatri Cabs Car" />
          </div>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
