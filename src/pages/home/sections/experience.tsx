import { Col, Flex, Space, Tag, Typography } from "antd";
import { experience } from "../../../constants";

import "./styles/experience.scss";
import Accordion from "../../../components/accordion/accordion";

const { Text, Paragraph } = Typography;

const Experience = () => {
  const experiences = experience.map(
    ({ dates, role, company_name, tech, description }) => ({
      label: (
        <Space direction="horizontal" size="large">
          <Text>{dates}</Text>
          <Text strong>
            {role} • {company_name}
          </Text>
        </Space>
      ),
      content: (
        <Paragraph>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Paragraph>
      ),
      footer: tech ? (
        <Col span={23} offset={1}>
          <Flex gap="4px 0" wrap>
            {tech?.split(",").map((test) => (
              <Tag color="#742759" style={{ borderRadius: "10px" }}>
                {test}
              </Tag>
            ))}
          </Flex>
        </Col>
      ) : undefined,
    })
  );

  return (
    <div id="experience" className="expierence_container">
      <Accordion openPanel={0} items={experiences} />
    </div>
  );
};

export default Experience;
