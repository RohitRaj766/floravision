import Navbar from "../layouts/Navbar";
import MobileMenu from "../layouts/MobileMenu";
import HeroSection from "../sections/HeroSection";
import TopSelling from "../sections/TopSelling";
import TestimonialCards from "../cards/TestimonialCards";
import OxygenPlants from "../sections/OxygenPlants";
import Footer from "../layouts/Footer";
const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <MobileMenu />
        <HeroSection />
        <TopSelling/>
        <TestimonialCards />
        <OxygenPlants />
        <Footer />  
    </div>
  )
}
export default LandingPage