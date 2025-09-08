import HeroSection from "@/components/hero";
import Nav from "@/components/navbar";
import News from "@/components/news";
import Staff from "@/components/staff";
import Sponsor from "@/components/sponsor";
import About from "@/components/about"
import Faq from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <About />
      <News />
      <Staff />
      <Sponsor />
      <Faq />
      <Footer />
    </>
  );
}
