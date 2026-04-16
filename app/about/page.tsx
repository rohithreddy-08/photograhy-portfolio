"use client";

import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div
      style={{
        padding: "80px 40px",
        minHeight: "100vh",
        background: `
      radial-gradient(circle at top left, rgba(212,175,55,0.08), transparent 40%),
      radial-gradient(circle at bottom right, rgba(212,175,55,0.05), transparent 40%),
      linear-gradient(135deg, #0a0a0a, #141414, #000000)
    `,
      }}
    >
      {/* 🔥 HEADER */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <Title
          style={{
            color: "#D4AF37",
            fontFamily: "Playfair Display, serif",
          }}
        >
          About Us
        </Title>
        <Paragraph style={{ color: "#ccc" }}>
          Capturing love, traditions, and timeless Indian celebrations.
        </Paragraph>
      </div>

      {/* 🔥 SECTION 1 */}
      <Row gutter={[40, 40]} align="middle">
        <Col xs={24} md={12}>
          <img
            src="/images/about1.jpg"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Col>

        <Col xs={24} md={12}>
          <Title level={3} style={{ color: "#fff" }}>
            Our Story
          </Title>
          <Paragraph style={{ color: "#ccc" }}>
            We are a passionate wedding photography team based in India,
            dedicated to capturing emotions, traditions, and timeless
            celebrations. From the joyful Haldi ceremonies to the grand wedding
            rituals, every moment is a story waiting to be told.
          </Paragraph>

          <Paragraph style={{ color: "#ccc" }}>
            Our approach focuses on candid storytelling — capturing real
            emotions, laughter, and connections rather than staged poses. Every
            frame we create reflects authenticity, culture, and love.
          </Paragraph>

          <Paragraph style={{ color: "#ccc" }}>
            With years of experience in wedding photography, we ensure that your
            memories are preserved beautifully so you can relive them for a
            lifetime.
          </Paragraph>
        </Col>
      </Row>

      {/* 🔥 SECTION 2 */}
      <Row gutter={[40, 40]} align="middle" style={{ marginTop: "80px" }}>
        <Col xs={24} md={12}>
          <Title level={3} style={{ color: "#fff" }}>
            What We Believe
          </Title>
          <Paragraph style={{ color: "#ccc" }}>
            Indian weddings are filled with emotions, rituals, and vibrant
            celebrations. We believe in capturing candid moments that reflect
            real emotions rather than staged poses.
          </Paragraph>

          <Paragraph style={{ color: "#D4AF37", fontStyle: "italic" }}>
            "Moments pass, but memories captured stay forever."
          </Paragraph>
        </Col>

        <Col xs={24} md={12}>
          <img
            src="/images/about2.jpg"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Col>
      </Row>

      {/* 🔥 SECTION 3 */}
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <Title style={{ color: "#D4AF37" }}>Why Choose Us?</Title>

        <Paragraph style={{ color: "#ccc", maxWidth: "700px", margin: "auto" }}>
          We combine creativity, storytelling, and technical expertise to
          deliver stunning wedding memories. Our goal is to make your special
          day live forever through our lens.
        </Paragraph>
      </div>
    </div>
  );
}
