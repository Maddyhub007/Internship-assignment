import styles from "./OperationalCities.module.css"

export default function OperationalCities() {
  const cities = ["Lucknow", "Ayodhya", "Gorakhpur", "Varanasi", "Allahabad (Prayagraj)", "Kanpur"]

  return (
    <section className={styles.cities}>
      <div className="container">
        <div className={styles.citiesBar}>
          <span className={styles.label}>Operational Cities :</span>
          <div className={styles.cityList}>
            {cities.map((city, index) => (
              <span key={index} className={styles.city}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
