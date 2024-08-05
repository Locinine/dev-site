import {
  Col,
  Row,
  Button,
  Select,
  Form,
  Input,
  Typography,
  ConfigProvider,
} from "antd";
import type { FormProps } from "antd";

import "./styles/contact.scss";
import { formTheme } from "../../../theme";

const { TextArea } = Input;
const { Title } = Typography;

// const { Text, Title } = Typography;
type FieldType = {
  type?: string;
  name?: string;
  email?: string;
  message?: string;
};

const Contact = () => {
  const onSubmit: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onSubmitFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const onEnquiryChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div id="contact" className="contact_container">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={1}>Get in touch!</Title>
          <ConfigProvider theme={formTheme}>
            <Form
              layout="vertical"
              name="contact"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              onFinish={onSubmit}
              onFinishFailed={onSubmitFailed}
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
                  onChange={onEnquiryChange}
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
