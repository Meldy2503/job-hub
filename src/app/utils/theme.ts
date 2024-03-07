import { extendTheme } from "@chakra-ui/react";
import localFont from "@next/font/local";
import { Nunito } from "next/font/google";

const nunito = Nunito({
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
    },
  },
  fonts: {
    body: nunito.style.fontFamily,
    heading: avenirNext.style.fontFamily,
  },
});

export default theme;
