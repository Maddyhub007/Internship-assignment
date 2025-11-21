import styles from "./PricingTable.module.css"

export default function PricingTable() {
  const carTypes = [
    {
      type: "AC Sedans",
      models: "Etios, Amaze, Dzire etc.",
      passengers: "4 Pax",
      idealFor: "Comfortable trips with small families",
      fare: "Rs.11/KM",
    },
    {
      type: "AC Hatchbacks",
      models: "Wagon R, Celerio, Micra etc.",
      passengers: "4 Pax",
      idealFor: "Budget trips over short distances",
      fare: "Rs.11/KM",
    },
    {
      type: "AC SUV",
      models: "Ertiga, Xylo etc.",
      passengers: "6-7 Pax",
      idealFor: "Premium trips with large families",
      fare: "Rs.13/KM",
    },
  ]

  return (
    <section className={styles.pricing}>
      <div className="container">
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.headerCell}>CAR TYPE</th>
                <th className={styles.headerCell}>MODEL INCLUDES</th>
                <th className={styles.headerCell}>PASSENGERS</th>
                <th className={styles.headerCell}>IDEAL FOR</th>
                <th className={styles.headerCell}>FARE</th>
              </tr>
            </thead>
            <tbody>
              {carTypes.map((car, index) => (
                <tr key={index} className={styles.row}>
                  <td className={styles.cell}>{car.type}</td>
                  <td className={styles.cell}>{car.models}</td>
                  <td className={styles.cell}>{car.passengers}</td>
                  <td className={styles.cell}>{car.idealFor}</td>
                  <td className={styles.cell}>{car.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
