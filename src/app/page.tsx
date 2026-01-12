import {
  Hero,
  Problem,
  HowItWorks,
  ServicesOverview,
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
      <Testimonials />
      <Industries />
      <FAQ />
      <CTA />
    </>
  );
}
