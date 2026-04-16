"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const menu = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,

        /* ✅ FIXED */
        background: "rgba(0,0,0,0.95)",

        backdropFilter: "blur(6px)",
        padding: scrolled ? "10px 40px" : "18px 40px",
        // borderBottom: "1px solid rgba(255,255,255,0.05)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 🔥 LOGO */}
        <motion.h2
          whileHover={{ scale: 1.05 }}
          style={{
            color: "#D4AF37",
            fontFamily: "Playfair Display, serif",
            margin: 0,
            cursor: "pointer",
          }}
        >
          Kahani By Krish
        </motion.h2>

        {/* 🔥 MENU */}
        <div style={{ display: "flex", gap: "30px" }}>
          {menu.map((item) => {
            const active = pathname === item.path;

            return (
              <Link key={item.path} href={item.path}>
                <div style={{ position: "relative", cursor: "pointer" }}>
                  {/* TEXT */}
                  <motion.span
                    whileHover={{ color: "#D4AF37" }}
                    style={{
                      color: active ? "#D4AF37" : "#ccc",
                      fontWeight: 500,
                      transition: "0.3s",
                    }}
                  >
                    {item.label}
                  </motion.span>

                  {/* 🔥 ACTIVE UNDERLINE */}
                  {active && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        position: "absolute",
                        bottom: "-6px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "#D4AF37",
                      }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* 🔥 CTA BUTTON */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          style={{
            background: "#D4AF37",
            color: "#000",
            padding: "8px 20px",
            borderRadius: "20px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Book Now
        </motion.a>
      </div>
    </motion.nav>
  );
}
