import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { TrustGauges } from "@/components/home/TrustGauges";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { AreasBanner } from "@/components/home/AreasBanner";
import { Counters } from "@/components/home/Counters";
import { Services } from "@/components/home/Services";
import { WhatWeAccept } from "@/components/home/WhatWeAccept";
import { Pricing } from "@/components/home/Pricing";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { Gallery } from "@/components/home/Gallery";
import { Reviews } from "@/components/home/Reviews";
import { Faq } from "@/components/home/Faq";
import { Blog } from "@/components/home/Blog";
import { UrgentCta } from "@/components/home/UrgentCta";
import { HazardStripe } from "@/components/ui/HazardStripe";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <HazardStripe thin />
        <TrustGauges />
        <HowItWorks />
        <WhoWeAre />
        <HazardStripe />
        <AreasBanner />
        <Counters />
        <HazardStripe />
        <Services />
        <WhatWeAccept />
        <Pricing />
        <WhyChooseUs />
        <ServiceAreas />
        <Gallery />
        <Reviews />
        <Faq />
        <Blog />
        <UrgentCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
