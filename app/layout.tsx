import "antd/dist/reset.css";
import "./globals.css";

import Navbar from "../components/Navbar";
import FooterComp from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <FooterComp />
      </body>
    </html>
  );
}