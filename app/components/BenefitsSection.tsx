import styles from "./BenefitsSection.module.css"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "💰",
      title: "For Any Budget",
      description:
        "Choose From Hatchbacks, Sedans, Mini SUVs, Prime SUVs, And Mini Buses Like Tempo Travellers 12-Seater To 25-Seater To Find A Ride Within Your Budget And At Your Convenience With Our Car Rental And Cab Service Options.",
    },
    {
      icon: "📍",
      title: "For Any Distance",
      description:
        "Book Daily Rides With Multiple Stops Within The City Or Travel To Your Favourite Destinations Across The Country With Our Oneway Or Round Trip Car Rental Service. Enjoy Seamless Cab Booking For All Your Travel Needs.",
    },
    {
      icon: "⏱️",
      title: "For Any Duration",
      description:
        "Plan A Day Out With Our Hourly-Based Packages For Local City Tours Or Book Our Car Rental Services With A Driver For Long Or Multiple-Day Trips. Our Taxi Service Ensures Reliable Transportation Tailored To Your Car Hire Needs.",
    },
  ]

  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{benefit.icon}</div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDesc}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
