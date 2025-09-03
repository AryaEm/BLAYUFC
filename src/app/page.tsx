import HeroSection from "@/components/hero";
import AboutSection from "@/components/staff";
import ProjectSection from "@/components/project";
import FooterSection from "@/components/footer";
import Nav from "@/components/navbar";
import News from "@/components/news";
import Staff from "@/components/staff";
import Sponsor from "@/components/sponsor";
import About from "@/components/about"

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <About />
      <News />
      <Staff />
      <Sponsor />
      {/* <ProjectSection /> */}
      {/* <FooterSection /> */}
    </>
  );
}
