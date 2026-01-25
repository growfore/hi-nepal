import { Cormorant_Garamond, Montserrat, Rubik } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-montserrat",
});

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})