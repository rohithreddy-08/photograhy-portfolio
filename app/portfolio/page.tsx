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
          height: "50vh",
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
            background: "rgba(0,0,0,0.6)",
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
          <Title style={{ color: "#D4AF37" }}>
            Our Wedding Stories
          </Title>
          <p style={{ color: "#ccc" }}>
            A journey through love, traditions & celebrations
          </p>
        </div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div style={{ padding: "80px 40px" }}>
        
        {/* FILTERS */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                margin: "5px",
                background: active === cat ? "#D4AF37" : "transparent",
                color: active === cat ? "#000" : "#ccc",
                border: "1px solid #555",
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
                whileHover={{ scale: 1.05 }}
                style={{
                  overflow: "hidden",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  style={{
                    width: "100%",
                    height: i % 3 === 0 ? "400px" : "300px",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* 🔥 QUOTE */}
        <div
          style={{
            textAlign: "center",
            margin: "100px 0",
          }}
        >
          <Title style={{ color: "#D4AF37" }}>
            "Every wedding is a story waiting to be told."
          </Title>
        </div>
      </div>

      {/* 🔥 LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.9)",
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
              initial={{ scale: 0.8 }}
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