import HeroSection from "@/components/home/HeroSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ServicesSection from "@/components/home/ServicesSection";
import TrustPartnerSection from "@/components/home/TrustPartnerSection";
import BookingQR from "@/components/home/BookingQR";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <TrustPartnerSection />
      <BookingQR />
      <CTASection />
    </div>
  );
}