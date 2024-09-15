import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Button, Drawer, Flex } from "antd";
import { Link } from "wouter";
import { FaCodepen, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import CVPDF from "../../../public/Farrah_Lord_Newcombe_CV_24.pdf";

import styles from "./navbar.module.scss";

// const { Title } = Typography;

type MenuItem = Required<MenuProps>["items"][number] & {
  url: string;
  label: string;
};

const menuItem: Array<MenuItem> = [
  {
    key: "home",
    url: "/",
    label: "Home",
  },
  {
    key: "about",
    url: "/home#about",
    label: "About",
  },
  {
    key: "expierence",
    url: "/home#expierence",
    label: "Expierence",
  },
  {
    key: "contact",
    url: "/home#contact",
    label: "Contact",
  },
  // {
  //   key: "cv",
  //   url: "/cv",
  //   label: "CV",
  //   icon: <FaDownload />,
  // },
];

interface NavigationProps {
  title: string;
}

const Navigation: React.FC<NavigationProps> = ({ title }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const MobileNav: JSX.Element = (
    <div className={styles.mobileNav}>
      <Button
        className={styles.menubtn}
        type="text"
        icon={<RxHamburgerMenu />}
        onClick={() => setNavOpen(true)}
      />
      <Drawer
        title={title}
        placement="right"
        onClose={() => setNavOpen(false)}
        open={navOpen}
      >
        <Flex style={{ width: "250px" }} vertical gap="middle" align="flex-end">
          {menuItem.map(({ key, label, url }) => (
            <Link href={url} key={key}>
              <Button type="link">{label}</Button>
            </Link>
          ))}
          <Button
            href={CVPDF}
            download="CV:Farrah-Lord-Newcombe"
            target="_blank"
            rel="noreferrer"
            type="default"
            icon={<FaDownload />}
            size="large"
          >
            CV
          </Button>
        </Flex>
        <Flex
          gap={15}
          justify="flex-end"
          style={{ width: "250px", marginTop: "40px" }}
        >
          <Button
            type="primary"
            icon={<FaLinkedin />}
            size="large"
            href="https://www.linkedin.com/in/farrah-lord-newcombe-00262b92/"
            target="_blank"
          />
          <Button type="primary" icon={<FaGithub />} size="large" />
          <Button type="primary" icon={<FaCodepen />} size="large" />
        </Flex>
      </Drawer>
    </div>
  );

  const DesktopNav: JSX.Element = (
    // <Flex justify="flex-end" align="center" className={styles.desktopNav}>
    // <Title level={4}>{title}</Title>
    <Button
      href={CVPDF}
      download="CV:Farrah-Lord-Newcombe"
      target="_blank"
      rel="noreferrer"
      type="default"
      icon={<FaDownload />}
      size="large"
      className={styles.download_cv}
    >
      CV
    </Button>
    // </Flex>
  );

  return (
    <Flex className={styles.menu}>
      {MobileNav}
      {DesktopNav}
      {/* <FloatButton
        href={CVPDF}
        target="_blank"
        type="primary"
        shape="square"
        icon={<FaDownload />}
      /> */}
    </Flex>
  );
};

export default Navigation;
