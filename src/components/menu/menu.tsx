import React from "react";
import { Anchor, Button, Col, Flex, Typography } from "antd";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

import "./menu.scss";

const { Title } = Typography;

const Menu: React.FC = () => (
  <Col className="anchor_container">
    <Anchor
      affix={false}
      items={[
        {
          key: "about",
          href: "#about",
          title: <Title level={4}>About</Title>,
        },
        {
          key: "experience",
          href: "#experience",
          title: <Title level={4}>Experience</Title>,
        },
        {
          key: "contact",
          href: "#contact",
          title: <Title level={4}>Contact</Title>,
        },
      ]}
    />
    <Flex gap={15} style={{ marginTop: "40px" }}>
      <Button
        type="default"
        icon={<FaLinkedin />}
        size="large"
        href="https://www.linkedin.com/in/farrah-lord-newcombe-00262b92/"
        target="_blank"
      />
      <Button
        type="default"
        icon={<FaGithub />}
        href="https://github.com/Locinine/"
        target="_blank"
        size="large"
      />
      {/* <Button type="default" icon={<FaCodepen />} size="large" /> */}
    </Flex>
  </Col>
);

export default Menu;
