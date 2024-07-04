import { extendTheme } from "@chakra-ui/react";
import localFont from "@next/font/local";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '600', '700', '800', '900'],
});

const avenirNext = localFont({
  src: [
    {
      path: "../assets/fonts/AvenirNextLTPro-Regular.otf",
      weight: "400, 500, 700, 800, 900",
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
      450: " #CECFFF1A",
      500: " #b4b2b2",
      550: " #868686",
      580: " #6e6e6e",
      600: " #000927",
      650: "#0730b5",

      
    },
  },
  fonts: {
    body: poppins.style.fontFamily,
    text: poppins.style.fontFamily,
    heading: avenirNext.style.fontFamily,
  },
});

export default theme;
