import React from "react";
import { Anchor, Col, Typography } from "antd";

import "./menu.scss";

const { Title } = Typography;

const Menu: React.FC = () => {
  return (
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
    </Col>
  );
};

export default Menu;
