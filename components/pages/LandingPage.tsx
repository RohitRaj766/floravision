import Navbar from "../layouts/Navbar";
import HeroSection from "../sections/HeroSection";
import TopSelling from "../sections/TopSelling";
import OxygenPlants from "../sections/OxygenPlants";
import Footer from "../layouts/Footer";
import TrendingPlants from "../sections/TrendingPlants";
import Testimonials from "../sections/Testimonials";
import { SECTION_BACKGROUNDS } from "../../lib/constants";
const LandingPage = () => {
  return (
    <div>
      <main
        className={`${SECTION_BACKGROUNDS.landingPage} bg-cover bg-top bg-no-repeat w-full`}
      >
        <Navbar />
        <HeroSection />
        <TrendingPlants />
      </main>

      <TopSelling />
      <Testimonials />
      <OxygenPlants />
      <Footer />
    </div>
  )
}
export default LandingPage