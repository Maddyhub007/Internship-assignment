import styles from "./IntroSection.module.css"

export default function IntroSection() {
  return (
    <section className={styles.intro}>
      <div className="container">
        <h2 className={styles.title}>INDIA'S PREMIER INTERCITY AND LOCAL TAXI SERVICES</h2>
        <p className={styles.description}>
          At Yatri Cabs, We Pride Ourselves On Being A Top-Tier Online Oneway Cab Booking Service, Delivering Reliable
          And Premium Intercity And Local Taxi Services. With Over A Decade Of Experience, Instead Of Self-Drive Car
          Rental, We Have Become The Leading Driver- Driven One Way Car Rental Company In India, Renowned For Our
          Extensive Coverage Across The Country
        </p>
      </div>
    </section>
  )
}
