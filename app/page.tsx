"use client";

import Testimonials from "@/components/Testimonials";
import { Typography, Button, Row, Col } from "antd";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const { Title, Paragraph } = Typography;

// 🔥 Animation
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// 🔥 Parallax
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
          height: "100vh",
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
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
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
          <Title style={{ color: "#D4AF37", fontSize: "52px" }}>
            Timeless Stories. Cinematic Frames.
          </Title>

          <Paragraph style={{ color: "#ddd", fontSize: "16px" }}>
            Capturing emotions, traditions & unforgettable moments
          </Paragraph>

          <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
            <Button
              size="large"
              href="/portfolio"
              style={{
                background: "#D4AF37",
                border: "none",
                color: "#000",
              }}
            >
              View Portfolio
            </Button>

            <Button
              size="large"
              href="/contact"
              style={{
                border: "1px solid #D4AF37",
                color: "#D4AF37",
                background: "transparent",
              }}
            >
              Book Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* 🔥 FEATURED */}
      <div
        style={{
          padding: "100px 40px",
          background:
            "linear-gradient(135deg, #0a0a0a, #141414, #000000)",
        }}
      >
        <Title
          style={{
            textAlign: "center",
            color: "#D4AF37",
            marginBottom: "60px",
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
                      height: "320px",
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

      {/* 🔥 TESTIMONIALS */}
      <div
        style={{
          padding: "100px 40px",
          background: "#000",
          textAlign: "center",
        }}
      >
        <Title style={{ color: "#D4AF37", marginBottom: "50px" }}>
          What Clients Say
        </Title>

        <Row gutter={[20, 20]}>
          {[
            {
              text: "Captured every emotion beautifully. We relive our day every time we see the photos.",
              name: "Rohith & Mounika",
            },
            {
              text: "Professional, creative and cinematic. Highly recommended.",
              name: "Arjun & Priya",
            },
            {
              text: "Every frame tells a story. Truly amazing work.",
              name: "Kiran & Anjali",
            },
          ].map((t, i) => (
            <Col xs={24} md={8} key={i}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                style={{
                  background: "#111",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <p style={{ color: "#ccc" }}>"{t.text}"</p>
                <h4 style={{ color: "#D4AF37", marginTop: "10px" }}>
                  — {t.name}
                </h4>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
      {/* 🔥 QUOTE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
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
        style={{
          padding: "100px 40px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #000000, #1a1a1a)",
        }}
      >
        <Title style={{ color: "#fff" }}>
          Let’s Create Something Timeless
        </Title>

        <Button
          size="large"
          href="/contact"
          style={{
            background: "#D4AF37",
            border: "none",
            color: "#000",
            marginTop: "20px",
          }}
        >
          Book Your Shoot
        </Button>
      </motion.div>
    </>
  );
}