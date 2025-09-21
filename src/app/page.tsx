import BenefitsSection from "@/components/BenefitsSection";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import CitiesSection from "@/features/citties/sections/CitiesSection";
import FreshSpaceSection from "@/features/offices/sections/FreshSpaceSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CitiesSection />
      <BenefitsSection />
      <FreshSpaceSection />
    </>

  );
}
