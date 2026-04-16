"use client";

import { useState } from "react";
import { Row, Col, Typography, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";

const { Title } = Typography;

const categories = ["All", "Haldi", "Mehndi", "Wedding"];

const images = [
  { src: "/images/p1.jpg", category: "Haldi" },
  { src: "/images/p2.jpg", category: "Mehndi" },
  { src: "/images/p3.jpg", category: "Wedding" },
  { src: "/images/p4.jpg", category: "Haldi" },
  { src: "/images/p5.jpg", category: "Wedding" },
  { src: "/images/p6.jpg", category: "Mehndi" },
  { src: "/images/p7.jpg", category: "Wedding" },
  { src: "/images/p8.jpg", category: "Haldi" },
  { src: "/images/p9.jpg", category: "Mehndi" },
  { src: "/images/p10.jpg", category: "Wedding" },
  { src: "/images/p11.jpg", category: "Wedding" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <div style={{ background: "#000" }}>
      
      {/* 🔥 HERO */}
      <div
        style={{
          height: "55vh",
          backgroundImage: "url('/images/p7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Title style={{ color: "#D4AF37", fontSize: "42px" }}>
            Stories We’ve Captured
          </Title>

          <p style={{ color: "#ccc" }}>
            A collection of moments, emotions & timeless memories
          </p>
        </div>
      </div>

      {/* 🔥 MAIN */}
      <div style={{ padding: "100px 40px" }}>
        
        {/* FILTERS */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                margin: "6px",
                padding: "6px 18px",
                borderRadius: "20px",
                background: active === cat ? "#D4AF37" : "transparent",
                color: active === cat ? "#000" : "#aaa",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* GALLERY */}
        <Row gutter={[20, 20]}>
          {filtered.map((img, i) => (
            <Col xs={24} sm={12} md={8} key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                style={{
                  overflow: "hidden",
                  borderRadius: "12px",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  style={{
                    width: "100%",
                    height: i % 3 === 0 ? "420px" : "300px",
                    objectFit: "cover",
                    transition: "0.4s",
                  }}
                />

                {/* 🔥 HOVER OVERLAY */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                    opacity: 0,
                    transition: "0.3s",
                  }}
                  className="hover-overlay"
                />

                {/* CATEGORY */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    color: "#fff",
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                >
                  {img.category}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* 🔥 QUOTE */}
        <div
          style={{
            textAlign: "center",
            margin: "120px 0",
          }}
        >
          <Title style={{ color: "#D4AF37" }}>
            "Every frame preserves a moment that words cannot express."
          </Title>
        </div>
      </div>

      {/* 🔥 LIGHTBOX (unchanged but smoother) */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            {/* CLOSE */}
            <div
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "30px",
                color: "#fff",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              ✕
            </div>

            {/* PREV */}
            <div
              onClick={() =>
                setSelected((prev) =>
                  prev! === 0 ? filtered.length - 1 : prev! - 1
                )
              }
              style={navBtn("left")}
            >
              ‹
            </div>

            {/* IMAGE */}
            <motion.img
              key={filtered[selected].src}
              src={filtered[selected].src}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              style={{
                maxWidth: "90%",
                maxHeight: "80%",
                borderRadius: "10px",
              }}
            />

            {/* NEXT */}
            <div
              onClick={() =>
                setSelected((prev) =>
                  prev! === filtered.length - 1 ? 0 : prev! + 1
                )
              }
              style={navBtn("right")}
            >
              ›
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const navBtn = (side: "left" | "right") => ({
  position: "absolute" as const,
  top: "50%",
  [side]: "30px",
  color: "#fff",
  fontSize: "40px",
  cursor: "pointer",
});