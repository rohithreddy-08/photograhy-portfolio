"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rohith & Mounika",
    text: "Captured every emotion beautifully. We relive our wedding every time we see the photos.",
  },
  {
    name: "Arjun & Priya",
    text: "Professional, creative, and truly cinematic. Highly recommended!",
  },
  {
    name: "Kiran & Anjali",
    text: "Every frame tells a story. Absolutely loved the work!",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "80px 20px", background: "#000" }}>
      {/* <h2 style={istitle}>What Clients Say</h2> */}

      <div style={grid}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={card}
          >
            <p style={{ color: "#ccc" }}>"{t.text}"</p>
            <h4 style={{ color: "#D4AF37", marginTop: "10px" }}>
              — {t.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const istitle = {
  textAlign: "center",
  color: "#D4AF37",
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#111",
  padding: "20px",
  borderRadius: "10px",
};