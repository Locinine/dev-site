import { Col, Flex, Grid, Space, Tag, Typography } from "antd";
import Accordion from "../../components/accordion/accordion";
import { experience } from "../../constants";

import "./styles/experience.scss";

const { Text, Paragraph } = Typography;

const Experience = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const experiences = experience.map(
    ({ dates, role, company_name, skills, description }) => ({
      label: screens.xs ? (
        <Flex vertical className="panel_title">
          <Text className="dates_company_name">
            {dates} • {company_name}
          </Text>
          <Text className="role" strong>
            {role}
          </Text>
        </Flex>
      ) : (
        <Space direction="horizontal" size="large">
          <Text>{dates}</Text>
          <Text strong>
            {role} • {company_name}
          </Text>
        </Space>
      ),
      content: (
        <>
          {screens.xs && (
            <Flex gap="4px 0" wrap className="skills">
              {skills?.map((skill) => (
                <Tag key={skill} color="#742759" className="skill_tag">
                  {skill}
                </Tag>
              ))}
            </Flex>
          )}
          <Paragraph>{description}</Paragraph>
        </>
      ),
      footer:
        skills && !screens.xs ? (
          <Col span={23} offset={1} xs={{ span: 24, order: 0 }}>
            <Flex gap="4px 0" wrap>
              {skills?.map((skill) => (
                <Tag key={skill} color="#742759" className="skill_tag">
                  {skill}
                </Tag>
              ))}
            </Flex>
          </Col>
        ) : undefined,
    })
  );

  return (
    <div id="experience" className="expierence_container">
      {/* <Text>
        In my previous roles, I've had the opportunity to work on a variety of
        projects that allowed me to grow as a developer while making a
        meaningful impact:
      </Text> */}
      <Accordion items={experiences} />
    </div>
  );
};

export default Experience;
