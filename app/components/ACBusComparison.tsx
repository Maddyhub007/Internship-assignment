import styles from "./ACBusComparison.module.css"

export default function ACBusComparison() {
  return (
    <section className={styles.comparison}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              WHY CHOOSE AC BUS OR AC TRAIN
              <br />
              FOR YOUR <span className={styles.highlight}>ONE-WAY JOURNEY?</span>
            </h2>
            <p className={styles.description}>
              Our Oneway Car Rental Service Is Cheaper Than AC Bus And 2-Tier AC Train Ticket Fares. It Reduces Your
              Travel Time, And You Travel In Your Own Private Space, Allowing You To Fully Enjoy Your Journey. Our One
              Way Taxi Will Come To Your Doorstep And Take You To Your Desired Destination. So, Book Your Cheapest One
              Way Cab From Lucknow To Gorakhpur Or Varanasi To Ayodhya With Our Reliable Oneway Car Rental Service With
              Driver. Experience The Convenience Of Our Taxi Service, Where You Can Rent A Car Effortlessly And Enjoy
              Seamless Cab Booking. Choose Our Car Hire Option For A Hassle-Free And Comfortable Travel Experience. We
              Offer Outstation Cab And Intercity Car Rental Services, Ensuring A Smooth And Enjoyable Luxury Ride
              Wherever You Need To Go.
            </p>
          </div>

          <div className={styles.illustration}>
            <img src="/car-with-location-pin-illustration.jpg" alt="One Way Journey" />
          </div>
        </div>
      </div>
    </section>
  )
}
