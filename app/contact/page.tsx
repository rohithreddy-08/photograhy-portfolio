"use client";

import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  DatePicker,
  Radio,
  message,
} from "antd";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const { Title, Paragraph } = Typography;

// 🔥 animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [form] = Form.useForm();
  const [shootType, setShootType] = useState<string | null>(null);

  // 🔥 submit
  const handleSubmit = (values: any) => {
    const dateText =
      values.shootType === "single"
        ? values.date?.format("DD-MM-YYYY")
        : `${values.dateRange?.[0]?.format("DD-MM-YYYY")} to ${values.dateRange?.[1]?.format("DD-MM-YYYY")}`;

    const messageText =
      "Namaste,\n\n" +
      "A new inquiry has been submitted for Sai Krishna Machini.\n\n" +
      `Client Details:\n` +
      `${values.name} (${values.phone})\n\n` +
      `Shoot Type: ${
        values.shootType === "single" ? "Single Day" : "Multiple Days"
      }\n` +
      `Event Date: ${dateText}\n` +
      (values.shootType === "single"
        ? `Preferred Time: ${values.slot}\n`
        : "") +
      "\n" +
      `Message:\n${values.message || "N/A"}\n\n` +
      "Submitted via website.";

    const phoneNumber = siteConfig?.phone;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      messageText,
    )}`;

    message.success("Redirecting to WhatsApp...");

    setTimeout(() => {
      window.open(url, "_blank");
      form.resetFields();
      setShootType(null);
    }, 800);
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        /* 🔥 FIX FOR FIXED NAVBAR */
        padding: "120px 40px 60px",
        background: "linear-gradient(135deg, #0b0b0b, #1a1a1a, #000000)",
      }}
    >
      <Row style={{ width: "100%" }} gutter={[40, 40]}>
        {/* LEFT */}
        <Col xs={24} md={12}>
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Title
              style={{
                color: "#D4AF37",
                fontFamily: "Playfair Display, serif",
                fontSize: "42px",
              }}
            >
              Let’s Capture Your Special Day
            </Title>

            <Paragraph style={{ color: "#ccc", fontSize: "16px" }}>
              Weddings are once-in-a-lifetime moments. Let us tell your story
              through timeless, cinematic photography.
            </Paragraph>
          </motion.div>
        </Col>

        {/* RIGHT FORM */}
        <Col xs={24} md={12}>
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              {/* NAME */}
              <Form.Item
                name="name"
                label={<span style={{ color: "#aaa" }}>Name</span>}
                rules={[{ required: true, message: "Enter your name" }]}
              >
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input bordered={false} style={inputStyle} />
                </motion.div>
              </Form.Item>

              {/* PHONE */}
              <Form.Item
                name="phone"
                label={<span style={{ color: "#aaa" }}>Phone</span>}
                rules={[{ required: true, message: "Enter phone number" }]}
              >
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input bordered={false} style={inputStyle} />
                </motion.div>
              </Form.Item>

              {/* SHOOT TYPE */}
              <Form.Item
                name="shootType"
                label={<span style={{ color: "#aaa" }}>Shoot Duration</span>}
                rules={[{ required: true, message: "Select shoot type" }]}
              >
                <Radio.Group
                  onChange={(e) => setShootType(e.target.value)}
                  style={{ display: "flex", gap: "20px" }}
                >
                  <Radio style={{ color: "#ccc" }} value="single">
                    Single Day
                  </Radio>
                  <Radio style={{ color: "#ccc" }} value="multiple">
                    Multiple Days
                  </Radio>
                </Radio.Group>
              </Form.Item>

              {/* SINGLE DATE */}
              {shootType === "single" && (
                <motion.div variants={fadeUp}>
                  <Form.Item
                    name="date"
                    label={<span style={{ color: "#aaa" }}>Event Date</span>}
                    rules={[{ required: true, message: "Select date" }]}
                  >
                    <DatePicker
                      style={inputStyle}
                      bordered={false}
                      disabledDate={(current) =>
                        current && current < dayjs().startOf("day")
                      }
                    />
                  </Form.Item>
                </motion.div>
              )}

              {/* MULTIPLE DATE */}
              {shootType === "multiple" && (
                <motion.div variants={fadeUp}>
                  <Form.Item
                    name="dateRange"
                    label={<span style={{ color: "#aaa" }}>Event Dates</span>}
                    rules={[{ required: true, message: "Select range" }]}
                  >
                    <DatePicker.RangePicker
                      style={inputStyle}
                      bordered={false}
                      disabledDate={(current) =>
                        current && current < dayjs().startOf("day")
                      }
                    />
                  </Form.Item>
                </motion.div>
              )}

              {/* SLOT */}
              {shootType === "single" && (
                <motion.div variants={fadeUp}>
                  <Form.Item
                    name="slot"
                    label={<span style={{ color: "#aaa" }}>Select Slot</span>}
                    rules={[{ required: true, message: "Select slot" }]}
                  >
                    <Radio.Group style={{ display: "flex", gap: "20px" }}>
                      <Radio style={{ color: "#ccc" }} value="Morning">
                        Morning
                      </Radio>
                      <Radio style={{ color: "#ccc" }} value="Evening">
                        Evening
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </motion.div>
              )}
              {/* MESSAGE */}
              <Form.Item
                name="message"
                label={<span style={{ color: "#aaa" }}>Message</span>}
              >
                <Input.TextArea bordered={false} rows={4} style={inputStyle} />
              </Form.Item>

              {/* BUTTON */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  htmlType="submit"
                  style={{
                    marginTop: "20px",
                    background: "linear-gradient(90deg, #D4AF37, #f5d76e)",
                    border: "none",
                    color: "#000",
                    fontWeight: 600,
                    height: "45px",
                    padding: "0 40px",
                    borderRadius: "25px",
                  }}
                >
                  Send Message
                </Button>
              </motion.div>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

// 🔥 input style
const inputStyle = {
  background: "transparent",
  borderBottom: "1px solid #555",
  color: "#fff",
  borderRadius: "0px",
  width: "100%",
};
