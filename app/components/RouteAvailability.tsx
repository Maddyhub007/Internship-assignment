import styles from "./RouteAvailability.module.css"

export default function RouteAvailability() {
  const features = [
    {
      icon: "🙌",
      title: "RETURN FARE, NOT FAIR!",
      description:
        "Why Pay For Return Journey When You Are Only Taking AC Train For One-Way Trip At Just Half Of The Round Trip Cost For Your One Way Travel.",
    },
    {
      icon: "📍",
      title: "GPS BASED BILLING SYSTEM",
      description:
        "Our Site Now Also Captures The Actual Distance And Time Travelled, It Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing.",
    },
    {
      icon: "🚗",
      title: "NOW AVAILABLE ROUTES ARE!",
      description: "Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly",
    },
  ]

  return (
    <section className={styles.routes}>
      <div className="container">
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
