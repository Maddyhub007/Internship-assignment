import styles from "./WhyChooseYatri.module.css"

export default function WhyChooseYatri() {
  const reasons = [
    {
      title: "Service You Can Trust",
      description:
        "At Yatri Car Rental, We Are Dedicated To Providing Dependable Services In INDIA. We Guarantee That We Won't Cancel Any Bookings Without Advance Notification, And Our Rental Cars Are Meticulously Maintained To Ensure A Seamless And Stress-Free Journey For Our Clients.",
    },
    {
      title: "Safety Is Our Priority",
      description:
        "Safety And Comfort Are Paramount At Yatri Car Rental In INDIA. We Exclusively Hire Experienced And Skilled Drivers Who Possess In-Depth Knowledge Of Roads And Traffic Regulations. Our Drivers Are Committed To Delivering Excellent Customer Service And Ensuring A Comfortable And Stress-Free Travel Experience For Passengers.",
    },
    {
      title: "Expert Chauffeurs At Your Service",
      description:
        "Yatri Car Rental Takes Pride In Selecting Only The Most Skilled, Knowledgeable, And Courteous Drivers To Enhance The Convenience Of Our Clients During Their Car Hire.",
    },
    {
      title: "Extensive Industry Experience",
      description:
        "With Over 10 Years Of Industry Expertise, Yatri Car Rental Is Your Go-To Choice For Premium Car Hire Services.",
    },
    {
      title: "Proven Track Record",
      description:
        "We Place A Strong Emphasis On Transparency In Our Billing System And Consistently Strive To Provide A Seamless And Satisfactory Experience For Our Customers. Our Commitment To Customer Comfort And Satisfaction Is Evident In Our Outstanding Google Ratings, Where We Consistently Receive Ratings Of 4.8 Stars Or Higher.",
    },
  ]

  return (
    <section className={styles.whyChooseYatri}>
      <div className="container">
        <div className={styles.banner}>
          <h2 className={styles.bannerTitle}>WHY CHOOSE YATRI CAR RENTAL?</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.reasons}>
            {reasons.map((reason, index) => (
              <div key={index} className={styles.reason}>
                <h3 className={styles.reasonTitle}>
                  <span className={styles.bullet}>•</span>
                  {reason.title}
                </h3>
                <p className={styles.reasonDesc}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
