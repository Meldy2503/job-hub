import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import review from "@/app/assets/images/review.webp";
import review1 from "@/app/assets/images/review1.webp";
import review2 from "@/app/assets/images/review2.webp";

export const navData = [
  {
    id: "1",
    name: "Platform",
    path: "/",
  },
  {
    id: "2",
    name: "Jobs",
    path: "/pages/jobs",
  },
  {
    id: "3",
    name: "About us",
    path: "/pages/about-us",
  },

  {
    id: "4",
    name: "Contact us",
    path: "/pages/contact-us",
  },
];

export const footerData = [
  {
    icon: <MdOutlineEmail />,
    text: "hello@mycompany.com",
  },
  {
    icon: <FiPhoneCall />,
    text: "+1 (650) 555-0111",
  },
];

export const footerNavLinksA = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Jobs",
    link: "/pages/jobs",
  },
  {
    title: "About us",
    link: "/pages/blogs",
  },
];
export const footerNavLinksB = [
  {
    title: "Get Started",
    link: "/pages/auth/register",
  },
  {
    title: "Terms of Services",
    link: "#",
  },
  {
    title: "Privacy Policy",
    link: "#",
  },
];

export const testimonialData = [
  {
    img: review,
    text: "The results of the service were nothing short of remarkable. The end product far exceeded my expectations, showcasing the team's commitment to delivering excellence. It's clear that they take great pride in their work, and that pride shines through...",
    reviewer: "Chloe Anderson",
    title: "CTO",
  },
  {
    img: review1,
    text: "I would wholeheartedly recommend this service to anyone in need. This is a team that is not only skilled and dedicated but also genuinely cares about their clients' satisfaction. If you're looking for a service that combines expertise, professionalism, and a personal touch, look no further this is it!",
    reviewer: "First Bank",
    title: "Managing Director",
  },

  {
    img: review2,
    text: "I recently had the pleasure of experiencing an absolutely outstanding service that left me thoroughly impressed. From start to finish, every aspect of the service rendered was handled with the utmost professionalism, care, and attention to detail.",
    reviewer: "Victor Gbenga",
    title: "Operations Manager",
  },
  {
    img: review,
    text: "The results of the service were nothing short of remarkable. The end product far exceeded my expectations, showcasing the team's commitment to delivering excellence. It's clear that they take great pride in their work, and that pride shines through...",
    reviewer: "Chloe Anderson",
    title: "CTO",
  },
  {
    img: review1,
    text: "I would wholeheartedly recommend this service to anyone in need. This is a team that is not only skilled and dedicated but also genuinely cares about their clients' satisfaction. If you're looking for a service that combines expertise, professionalism, and a personal touch, look no further this is it!",
    reviewer: "First Bank",
    title: "Managing Director",
  },

  {
    img: review2,
    text: "I recently had the pleasure of experiencing an absolutely outstanding service that left me thoroughly impressed. From start to finish, every aspect of the service rendered was handled with the utmost professionalism, care, and attention to detail.",
    reviewer: "Victor Gbenga",
    title: "Operations Manager",
  },
];
