"use client"
import styles from "./TestimonialsSection.module.css"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Vikram Kukarni",
      location: "Lucknow",
      rating: 5,
      text: "I used Yatri Cabs for my one-way trip from Lucknow to Ayodhya, and I was genuinely surprised by how affordable it was. The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional. Highly recommend!",
    },
    {
      name: "Rajesh Kunwant",
      location: "Gorakhpur",
      rating: 5,
      text: "The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters but with Yatri Cabs, everything was transparent and real-time. It gave me complete peace of mind. Excellent service for my trip to Ayodhya!",
    },
    {
      name: "Anjali Mishra",
      location: "Varanasi",
      rating: 5,
      text: "Traveling with my family from Gorakhpur to Varanasi was so comfortable with Yatri Car Rental. We chose the SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made our pilgrimage stress-free and enjoyable.",
    },
    {
      name: "Siddharth Vaidya",
      location: "Allahabad",
      rating: 5,
      text: "As a frequent business traveler, finding a reliable one-way cab service that doesn't charge a fortune for return journey is crucial. Yatri Cabs delivers exactly that. Their 24/7 support and easy booking process through the app make my life so much simpler. They're my go-to for all business trips!",
    },
  ]

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Customer Testimonials</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <p className={styles.name}>{testimonial.name}</p>
                <p className={styles.location}>{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
