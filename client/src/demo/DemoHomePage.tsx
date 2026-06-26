import HeroSlider from "./sections/HeroSlider";
import BrandStorySection from "./sections/BrandStorySection";
import FeaturedCollections from "./sections/FeaturedCollections";
// import NewArrivalsSection from "./sections/NewArrivalsSection";
import PolicySection from "./sections/PolicySection";
import HeroSection from "./sections/HeroSection";
import FooterSection from "./sections/FooterSection";

export default function DemoHomePage() {
  return (
    <>
     <HeroSection />
  <FeaturedCollections />
      <BrandStorySection />

    

  
 <HeroSlider />
      <PolicySection />
      <FooterSection />
    </>
  );
}