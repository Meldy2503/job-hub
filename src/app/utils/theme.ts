import { extendTheme } from "@chakra-ui/react";
import localFont from "@next/font/local";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const avenirNext = localFont({
  src: [
    {
      path: "../assets/fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-poppins",
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#ffffff",
      150: "#000000",
      200: "#FFAF2E",
      250: "#00061C",
      300: "#dfdede",
      350: "#F0F5FF",
      400: "#021C70",
      
    },
  },
  fonts: {
    body: poppins.style.fontFamily,
    text: poppins.style.fontFamily,
    heading: avenirNext.style.fontFamily,
  },
});

export default theme;
