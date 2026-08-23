import CTASection from "../sections/CTASection";
import EventTypeSection from "../sections/EventTypeSection";
import HeroSection from "../sections/HeroSection";
import ServiceSection from "../sections/ServiceSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <EventTypeSection />

      {/* Captivationg CTA: 3D Experience */}
      <CTASection />
    </div>
  );
};

export default HomePage;
