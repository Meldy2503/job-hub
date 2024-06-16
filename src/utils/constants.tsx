import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import review from "@/assets/images/review.webp";
import review1 from "@/assets/images/review1.webp";
import review2 from "@/assets/images/review2.webp";

export const navData = [
  {
    id: "1",
    name: "Platform",
    path: "/",
  },
  {
    id: "2",
    name: "Jobs",
    path: "/jobs",
  },
  {
    id: "3",
    name: "About us",
    path: "/about-us",
  },

  {
    id: "4",
    name: "Contact us",
    path: "/contact-us",
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
    link: "/jobs",
  },
  {
    title: "About us",
    link: "/blogs",
  },
];
export const footerNavLinksB = [
  {
    title: "Get Started",
    link: "/auth/register",
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

export const FaqData = [
  {
    question: "How do I search for jobs?",
    answer:
      "To search for jobs, use the search bar on the homepage and enter keywords related to the type of job you are looking for. You can also use filters to narrow down your search results.",
  },
  {
    question: "Can I save job listings?",
    answer:
      'Yes, you can save job listings by clicking on the "Save" button next to the job posting. You can view your saved jobs in your profile.',
  },
  {
    question: "How do I apply for a job?",
    answer:
      'To apply for a job, click on the "Apply Now" button on the job posting and follow the instructions provided by the employer. Some employers may require you to submit your resume and cover letter online.',
  },
  {
    question: "What should I include in my profile?",
    answer:
      "In your profile, you should include information about your education, work experience, skills, and any other relevant details that will help employers understand your qualifications.",
  },
  {
    question: "Can I edit my application after submitting it?",
    answer:
      "Once you have submitted your application, you may not be able to edit it. However, you can withdraw your application and submit a new one if necessary.",
  },
  {
    question: "How do I contact support?",
    answer:
      "If you need assistance or have any questions, you can contact our support team by sending an email to support@example.com. We will respond to your inquiry as soon as possible.",
  },
];
