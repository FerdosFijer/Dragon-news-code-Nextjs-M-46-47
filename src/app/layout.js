import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4']);

import { Jersey_10_Charted, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

export const jersey10Charted = Jersey_10_Charted({
  variable: "--font-Jersey_10_Charted",
  subsets: ["latin"],
  weight: "400",
});
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight:[ "400","500","600", "700","800"]
});

export const metadata = {
  title: "Dragon news",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
        </body>
    </html>
  );
}
