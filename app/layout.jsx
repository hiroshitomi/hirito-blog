import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Hirito BLOG",
  description: "by Hiroshidev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
