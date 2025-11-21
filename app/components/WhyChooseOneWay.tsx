import styles from "./WhyChooseOneWay.module.css"

export default function WhyChooseOneWay() {
  const benefits = [
    "Instant Booking & Confirmation",
    "Confirmed Booking Immediately",
    "No Return Fare For One-Way Trip",
    "Clean & Professional Cab Services",
    "Transparent Billing With GPS Based Billing System",
  ]

  const rightBenefits = [
    "Pick-Up From Your House",
    "Dedicated Cab Just For You",
    "Drop To Your Desired Destination",
    "Completed More Than 20,000+ Oneway Trips",
    "Multiple Payment Option Including Credit Card",
  ]

  return (
    <section className={styles.whyChoose}>
      <div className="container">
        <h2 className={styles.title}>WHY CHOOSE ONE WAY CAB?</h2>

        <div className={styles.content}>
          <div className={styles.benefitsLeft}>
            <ul className={styles.list}>
              {benefits.map((benefit, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet}>•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.illustration}>
            <img src="/images/one-way-illustration.jpg" alt="One Way Cab" />
          </div>

          <div className={styles.benefitsRight}>
            <ul className={styles.list}>
              {rightBenefits.map((benefit, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet}>•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.banner}>
          <p className={styles.bannerText}>
            DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <span className={styles.highlight}>INTERCITY CAR RENTAL</span>{" "}
            IN INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!
          </p>
        </div>

        <div className={styles.exploreSection}>
          <h3 className={styles.exploreTitle}>
            EXPLORING INDIA'S AMAZING LANDSCAPES, FROM THE MOUNTAINS TO THE BEACHES, ONE MEMORABLE ROAD TRIP AT A TIME
          </h3>

          <div className={styles.explorePoints}>
            <ul className={styles.pointsList}>
              <li>
                Experience The Thrill Of Road Travel With Our Reliable Car Rental And Taxi Service As We Explore The
                Diverse Landscapes Of India Together. We're Passionate About Making Car Hire Accessible And Enjoyable
                For Everyone.
              </li>
              <li>
                Instead Of Worrying About The Road, Relax In Our Chauffeur-Driven Cabs On Your Next Vacation. With A
                Presence In Over 2000 Cities Across India, We Ensure Your Heart Desires With Our Luxury Car Rental
                Services.
              </li>
              <li>
                We Cherish The Freedom To Stop, Breathe In The Fresh Air, Immerse In Local Cultures, And Savor Regional
                Cuisines Along The Way. These Moments Of Discovery Enrich Your Travels And Create Lasting Memories
                Through Our Rent A Car Service.
              </li>
              <li>
                No Destination Is Too Far Or Too Close; We Encourage You To Explore The Beauty Around You With Our Car
                Hire Options. Pack Your Bags, Set Out On Weekend Getaways, And Uncover The Gems In Your Vicinity With
                Our Taxi Service.
              </li>
              <li>
                Planning Your Trip Is A Breeze With Our User-Friendly Website, Or You Can Chat With Our Travel Experts
                At <strong>7860663399</strong> For Personalized Guidance On Car Rental. Our Cab Booking App Simplifies
                The Process, Ensuring A Hassle-Free Experience When You Rent A Car.
              </li>
              <li>
                Our Experienced Drivers Are Your Companions On The Road, Guiding You Through India's Best Experiences
                With Our Car Rental And Taxi Service. From Booking To Your Safe Return Home, We're Dedicated To Ensuring
                You Have An Exceptional Road Trip.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
