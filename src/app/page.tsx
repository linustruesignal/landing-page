import {
  Hero,
  Problem,
  HowItWorks,
  ServicesOverview,
  TrustBadges,
  Testimonials,
  Industries,
  FAQ,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <ServicesOverview />
      <TrustBadges />
      <Testimonials />
      <Industries />
      <FAQ />
      <CTA />
    </>
  );
}
