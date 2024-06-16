import Faq from "@/components/about-us/faq";
import ContactForm from "@/components/contact-us/contact-form";
import Cta from "@/components/contact-us/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Cta />
      <Faq />

      <Footer />
    </>
  );};

export default ContactUs;
