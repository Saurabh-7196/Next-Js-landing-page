import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import CoverImage from "@/components/CoverImage";
import ClientsMarquee from "@/components/ClientsMarquee";
import Footer from "@/components/Footer";
import LaunchCTA from "@/components/LaunchCTA";
import HealthPotential from "@/components/HealthPotential";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/content", {
    cache: "no-store"
  });
  const data = await res.json();

  return (
    <>
      <Hero data={data.hero} />
      <CoverImage />
      <ClientsMarquee />
      <HealthPotential />
      {/* <About data={data.about} /> */}
      <Testimonials data={data.testimonials} />
      <FAQ data={data.faq} />
      <LaunchCTA />
      <Footer />
    </>
  );
}
