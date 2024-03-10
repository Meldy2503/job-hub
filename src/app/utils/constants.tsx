import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";


export const navData = [
    {
        id: "1",
      name: "Platform",
    },
    {
        id: "2",
      name: "Jobs",
    },
    {
        id: "3",
      name: "About us",
    },
  
    {
        id: "4",
      name: "Contact us",
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