import {
  Col,
  Row,
  Button,
  Select,
  Form,
  Input,
  Typography,
  ConfigProvider,
  message,
} from "antd";
import type { FormProps } from "antd";
import emailjs from "@emailjs/browser";

import "./styles/contact.scss";
import { formTheme } from "../../theme";
import { NoticeType } from "antd/es/message/interface";

const { TextArea } = Input;
const { Title } = Typography;

type FieldType = {
  type: string;
  name: string;
  email: string;
  message: React.ChangeEvent<HTMLTextAreaElement>;
};

const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit: FormProps<FieldType>["onFinish"] = async ({
    type,
    name,
    email,
    message,
  }) => {
    const showMessage = (
      type: NoticeType,
      content: string,
      duration?: number
    ) =>
      messageApi.open({
        type,
        content,
        ...(duration ? { duration } : {}),
        key: "sendingEmail",
        style: {
          color: "#000000",
        },
      });

    showMessage("loading", "Sending message...", 0);

    try {
      const { status } = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { type, name, email, message: message.target?.value },
        import.meta.env.VITE_PUBLIC_KEY
      );

      if (status === 200) {
        showMessage("success", "Your message was sent successfully");
      }
    } catch (err) {
      showMessage("error", "Error sending message, try again!");
    }
  };

  return (
    <div id="contact" className="contact_container">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          {contextHolder}
          <Title level={1}>Get in touch!</Title>
          <ConfigProvider theme={formTheme}>
            <Form
              layout="vertical"
              name="contact"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              onFinish={onSubmit}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label={<Title level={5}>Enquiry Type</Title>}
                name="type"
                rules={[
                  { required: true, message: "Please select an enquiry type" },
                ]}
              >
                <Select
                  placeholder="What is your message about"
                  options={[
                    {
                      value: "general",
                      label: "General Enquiry",
                    },
                    {
                      value: "collaboration",
                      label: "Collaboration",
                    },
                    {
                      value: "consultation",
                      label: "Consultation",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item<FieldType>
                label="Name"
                name="name"
                rules={[
                  { required: true, message: "Please provide your name" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Invalid email address",
                  },
                  {
                    required: true,
                    message: "Please provide your email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Message"
                name="message"
                valuePropName="message"
                wrapperCol={{ offset: 0, span: 20 }}
                rules={[
                  {
                    required: true,
                    message: "Please provide the message you wish to send",
                  },
                ]}
              >
                <TextArea rows={6} placeholder="What's on your mind?" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 0, span: 20 }}>
                <Button type="default" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
