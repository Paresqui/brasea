import { NavBar } from "@/components/lp/NavBar";
import { HeroSection } from "@/components/lp/HeroSection";
import { FeaturesSection } from "@/components/lp/FeaturesSection";
import { IcpSection } from "@/components/lp/IcpSection";
import { ChefSection } from "@/components/lp/ChefSection";
import { FaqSection } from "@/components/lp/FaqSection";
import { EntrarnalistaSection } from "@/components/lp/EntrarnalistaSection";
import { WaitlistSection } from "@/components/lp/WaitlistSection";
import { Footer } from "@/components/lp/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="bg-brasea-dark">
        <HeroSection />

        <FeaturesSection />

        <IcpSection />

        <ChefSection />

        <FaqSection />

        <EntrarnalistaSection />

        <WaitlistSection />
      </main>

      <Footer />
    </>
  );
}
