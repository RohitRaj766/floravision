import Navbar from "../layouts/Navbar";
import HeroSection from "../sections/HeroSection";
import TopSelling from "../sections/TopSelling";
import TestimonialCards from "../cards/TestimonialCards";
import OxygenPlants from "../sections/OxygenPlants";
import Footer from "../layouts/Footer";
import TrendingPlants from "../sections/TrendingPlants";
const LandingPage = () => {
  return (
    <div>
      <main
        className="
        bg-[url('/images/hero/hero-bg.svg')]
        bg-cover
        bg-top
        bg-no-repeat
        w-full "
      >
        <Navbar />
        <HeroSection />
        <TrendingPlants />
      </main>

      <TopSelling />
      <TestimonialCards />
      <OxygenPlants />
      <Footer />
    </div>
  )
}
export default LandingPage