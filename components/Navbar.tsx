"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  const [open, setOpen] = useState(false);

  // scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(6px)",
          padding: scrolled ? "10px 20px" : "18px 20px",
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
          {/* LOGO */}
          <h2
            style={{
              color: "#D4AF37",
              fontFamily: "Playfair Display, serif",
              margin: 0,
            }}
          >
            Kahani By Krish
          </h2>

          {/* 🔥 DESKTOP MENU */}
          <div className="desktop-menu">
            {menu.map((item) => {
              const active = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        color: active ? "#D4AF37" : "#ccc",
                        margin: "0 15px",
                      }}
                    >
                      {item.label}
                    </span>

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

          {/* 🔥 CTA (desktop only) */}
          <a
            href="/contact"
            className="cta-btn"
            style={{
              background: "#D4AF37",
              color: "#000",
              padding: "6px 16px",
              borderRadius: "20px",
              textDecoration: "none",
            }}
          >
            Book
          </a>

          {/* 🔥 HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setOpen(!open)}
            style={{
              fontSize: "22px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ☰
          </div>
        </div>
      </motion.nav>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "70%",
              height: "100%",
              background: "#000",
              zIndex: 200,
              padding: "40px 20px",
            }}
          >
            {/* CLOSE */}
            <div
              onClick={() => setOpen(false)}
              style={{
                color: "#fff",
                fontSize: "24px",
                marginBottom: "30px",
                cursor: "pointer",
              }}
            >
              ✕
            </div>

            {/* MENU ITEMS */}
            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  marginBottom: "20px",
                  color: "#ccc",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA */}
            <a
              href="/contact"
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "10px 20px",
                background: "#D4AF37",
                color: "#000",
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔥 CSS */}
      <style jsx>{`
        .desktop-menu {
          display: flex;
        }

        .hamburger {
          display: none;
        }

        .cta-btn {
          display: inline-block;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .cta-btn {
            display: none;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>
    </>
  );
}