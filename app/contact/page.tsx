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
} from "antd";
import dayjs from "dayjs";
const { Title, Paragraph } = Typography;

export default function Contact() {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "60px 40px",
        background: "linear-gradient(135deg, #0b0b0b, #1a1a1a, #000000)",
      }}
    >
      <Row style={{ width: "100%" }} gutter={[40, 40]}>
        {/* LEFT SIDE (Text / Branding) */}
        <Col xs={24} md={12}>
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
        </Col>

        {/* RIGHT SIDE (Form) */}
        <Col xs={24} md={12}>
          <Form layout="vertical">
            {/* NAME */}
            <Form.Item label={<span style={{ color: "#aaa" }}>Name</span>}>
              <Input
                bordered={false}
                style={{
                  background: "transparent",
                  borderBottom: "1px solid #555",
                  color: "#fff",
                  borderRadius: "0px",
                }}
              />
            </Form.Item>

            {/* PHONE */}
            <Form.Item label={<span style={{ color: "#aaa" }}>Phone</span>}>
              <Input
                bordered={false}
                style={{
                  background: "transparent",
                  borderBottom: "1px solid #555",
                  color: "#fff",
                  borderRadius: "0px",
                }}
              />
            </Form.Item>

            {/* DATE */}
            <Form.Item
              label={<span style={{ color: "#aaa" }}>Event Date</span>}
            >
              <DatePicker
                style={{
                  width: "100%",
                  background: "transparent",
                  borderBottom: "1px solid #555",
                  color: "#fff",
                  borderRadius: "0px",
                }}
                bordered={false}
                disabledDate={(current) =>
                  current && current < dayjs().startOf("day")
                }
              />
            </Form.Item>
            <Form.Item
              label={<span style={{ color: "#aaa" }}>Select Slot</span>}
            >
              <Radio.Group
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <Radio
                  value="morning"
                  style={{
                    color: "#ccc",
                  }}
                >
                  Morning
                </Radio>

                <Radio
                  value="evening"
                  style={{
                    color: "#ccc",
                  }}
                >
                  Evening
                </Radio>
              </Radio.Group>
            </Form.Item>

            {/* MESSAGE */}
            <Form.Item label={<span style={{ color: "#aaa" }}>Message</span>}>
              <Input.TextArea
                bordered={false}
                rows={4}
                style={{
                  background: "transparent",
                  borderBottom: "1px solid #555",
                  color: "#fff",
                  borderRadius: "0px",
                }}
              />
            </Form.Item>

            {/* BUTTON */}
            <Button
              type="primary"
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
          </Form>
        </Col>
      </Row>
    </div>
  );
}
