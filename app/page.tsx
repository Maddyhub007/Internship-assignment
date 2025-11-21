import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import IntroSection from "./components/IntroSection"
import WhyYatriSection from "./components/WhyYatriSection"
import PricingTable from "./components/PricingTable"
import WhyChooseOneWay from "./components/WhyChooseOneWay"
import BenefitsSection from "./components/BenefitsSection"
import WhyChooseYatri from "./components/WhyChooseYatri"
import TestimonialsSection from "./components/TestimonialsSection"
import AppDownloadSection from "./components/AppDownloadSection"
import RouteAvailability from "./components/RouteAvailability"
import ACBusComparison from "./components/ACBusComparison"
import CarRentalInfo from "./components/CarRentalInfo"
import OperationalCities from "./components/OperationalCities"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <IntroSection />
      <WhyYatriSection />
      <PricingTable />
      <WhyChooseOneWay />
      <ACBusComparison />
      <BenefitsSection />
      <CarRentalInfo />
      <WhyChooseYatri />
      <TestimonialsSection />
      <AppDownloadSection />
      <RouteAvailability />
      <OperationalCities />
      <Footer />
    </main>
  )
}
