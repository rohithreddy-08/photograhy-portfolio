"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

const instaImages = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg"];

// 🔥 Animation variants
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
  return (
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
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "40px" }}>
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

        {/* 🔥 INSTAGRAM STRIP */}
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
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "40px" }}>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            style={{
              color: "#D4AF37",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: "1px",
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

        {/* 🔥 WHATSAPP BUTTON */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            style={{
              padding: "10px 25px",
              borderRadius: "25px",
              background: "#D4AF37",
              color: "#000",
              fontWeight: 600,
              textDecoration: "none",
            }}
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
  );
}

const text = {
  color: "#ccc",
};