"use client";

import { Typography, Button, Row, Col } from "antd";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const { Title, Paragraph } = Typography;

// 🔥 Animation
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// 🔥 Parallax Component
function ParallaxSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  return (
    <div
      ref={ref}
      style={{
        height: "60vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/p5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Title style={{ color: "#D4AF37" }}>
          Every Frame Tells a Story
        </Title>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* 🔥 HERO */}
      <div
        style={{
          height: "90vh",
          backgroundImage: "url('/images/p3.jpg')",
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
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))",
          }}
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Title style={{ color: "#D4AF37", fontSize: "48px" }}>
            Timeless Wedding Stories
          </Title>

          <Paragraph style={{ color: "#ddd" }}>
            Capturing emotions, traditions & unforgettable moments
          </Paragraph>

          <Button
            type="primary"
            size="large"
            href="/portfolio"
            style={{
              background: "#D4AF37",
              border: "none",
              color: "#000",
              marginTop: "20px",
            }}
          >
            Explore Portfolio
          </Button>
        </motion.div>
      </div>

      {/* 🔥 FEATURED */}
      <div
        style={{
          padding: "80px 40px",
          background:
            "linear-gradient(135deg, #0a0a0a, #141414, #000000)",
        }}
      >
        <Title
          style={{
            textAlign: "center",
            color: "#D4AF37",
            marginBottom: "50px",
          }}
        >
          Featured Moments
        </Title>

        <Row gutter={[20, 20]}>
          {["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg"].map(
            (img, i) => (
              <Col xs={24} sm={12} md={8} key={i}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  style={{ overflow: "hidden", borderRadius: "10px" }}
                >
                  <img
                    src={`/images/${img}`}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      transition: "0.4s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.08)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </motion.div>
              </Col>
            )
          )}
        </Row>
      </div>

      {/* 🔥 PARALLAX */}
      <ParallaxSection />

      {/* 🔥 QUOTE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          padding: "100px 40px",
          textAlign: "center",
          background: "#111",
        }}
      >
        <Title style={{ color: "#D4AF37" }}>
          "Moments fade, but memories captured last forever."
        </Title>
      </motion.div>

      {/* 🔥 CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          padding: "80px 40px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #000000, #1a1a1a)",
        }}
      >
        <Title style={{ color: "#fff" }}>
          Let’s Capture Your Story
        </Title>

        <Button
          type="primary"
          size="large"
          href="/contact"
          style={{
            background: "#D4AF37",
            border: "none",
            color: "#000",
            marginTop: "20px",
          }}
        >
          Book Now
        </Button>
      </motion.div>
    </>
  );
}