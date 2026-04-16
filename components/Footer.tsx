"use client";

import { siteConfig } from "../config/site";
import { useEffect, useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
const instaImages = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg"];

// 🔥 Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function FooterComp() {
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.footer
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          background: "linear-gradient(135deg, #000000, #111111)",
          padding: "80px 20px 40px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* 🔥 BRAND */}
          <motion.div
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <h1
              style={{
                color: "#D4AF37",
                fontFamily: "Playfair Display, serif",
                fontSize: "38px",
              }}
            >
              {siteConfig.name}
            </h1>

            <p style={{ color: "#aaa" }}>
              Capturing timeless love stories across India
            </p>
          </motion.div>

          {/* 🔥 INSTAGRAM */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "10px",
              marginBottom: "50px",
            }}
          >
            {instaImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                style={{
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={`/images/${img}`}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* 🔥 INSTAGRAM LINK */}
          <motion.div
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <a
              href="https://www.instagram.com/kahanisbykrish1?igsh=NW1mcHd4b3BlaXNi"
              target="_blank"
              style={{
                color: "#D4AF37",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Follow us on Instagram →
            </a>
          </motion.div>

          {/* 🔥 CONTACT */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <p style={text}>{siteConfig.email}</p>
            <p style={text}>{siteConfig.phone}</p>
            <p style={text}>{siteConfig.location}</p>
          </motion.div>

          {/* 🔥 WHATSAPP */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{ textAlign: "center", marginBottom: "30px" }}
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              style={btnStyle}
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* 🔥 COPYRIGHT */}
          <motion.p
            variants={fadeUp}
            style={{
              textAlign: "center",
              color: "#555",
              fontSize: "13px",
            }}
          >
            © {new Date().getFullYear()} {siteConfig.name}
          </motion.p>
        </div>
      </motion.footer>

      {/* 🔥 SCROLL TO TOP */}
      {showTop && (
        <motion.div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 1000,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* 🔥 SVG PROGRESS */}
          <svg width="50" height="50">
            <circle
              cx="25"
              cy="25"
              r="22"
              stroke="#333"
              strokeWidth="3"
              fill="none"
            />

            <motion.circle
              cx="25"
              cy="25"
              r="22"
              stroke="#D4AF37"
              strokeWidth="3"
              fill="none"
              strokeDasharray="138"
              style={{
                pathLength: scaleX,
              }}
            />
          </svg>

          {/* 🔥 ARROW */}
          <span
            style={{
              position: "absolute",
              color: "#D4AF37",
              fontSize: "18px",
            }}
          >
            ↑
          </span>
        </motion.div>
      )}
    </>
  );
}

// 🔥 styles
const text = {
  color: "#ccc",
};

const btnStyle = {
  padding: "10px 25px",
  borderRadius: "25px",
  background: "#D4AF37",
  color: "#000",
  fontWeight: 600,
  textDecoration: "none",
};
