import Cta from "@/app/components/about-us/cta";
import Faq from "@/app/components/about-us/faq";
import Feature from "@/app/components/about-us/feature";
import Hero from "@/app/components/about-us/hero";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Faq />
      <Feature />
      <Cta />
      <Footer />
    </>
  );
};

export default AboutUs;
