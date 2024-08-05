import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Button, Drawer, Flex, Menu } from "antd";
import { Link, useLocation } from "wouter";
// import { GrFormClose } from "react-icons/gr";

import styles from "./navbar.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";

type MenuItem = Required<MenuProps>["items"][number];

const menuItem: MenuItem[] = [
  {
    key: "home",
    label: <Link href="/">Home</Link>,
  },
  {
    key: "expierence",
    label: <Link href="/expierence">Expierence</Link>,
  },
  {
    key: "cv",
    label: <Link href="/cv">CV</Link>,
  },
];

interface NavigationProps {
  title: string;
  // cvRef: React.RefObject<HTMLDivElement>;
}

// const Navigation: React.FC<NavigationProps> = ({ title, cvRef }) => {

const Navigation: React.FC<NavigationProps> = ({ title }) => {
  const [location, setLocation] = useLocation();
  const [navOpen, setNavOpen] = useState<boolean>(false);
  // const [background, setBackground] = useState<string>("transparent");
  // const shouldExpand = window.innerWidth >= screenSizes.md;

  const onMenuLinkClick: MenuProps["onClick"] = (e) => {
    setLocation(e.key);
  };

  // const onScroll = () => {
  //   if (window.scrollY > 50) {
  //     setBackground("dark");
  //   } else {
  //     setBackground("transparent");
  //   }
  // };

  // useEffect(() => {
  //   if (location === "/") {
  //     setBackground("transparent");
  //     window.addEventListener("scroll", onScroll);
  //   } else if (background !== "dark") {
  //     setBackground("dark");
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [background, location]);

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
        <div style={{ display: "flex", flexDirection: "column" }}>
          {menuItem.map(({ key }) => (
            <Button type="text" href={`/${key}`}>
              {key.toUpperCase}
            </Button>
          ))}
        </div>
      </Drawer>
    </div>
  );

  const DesktopNav: JSX.Element = (
    <div className={styles.desktopNav}>
      <div className={styles.siteName}>
        <h4>{title}</h4>
      </div>
      <Menu
        overflowedIndicator={<RxHamburgerMenu />}
        className={styles.links}
        onClick={onMenuLinkClick}
        selectedKeys={[location]}
        mode="horizontal"
        items={menuItem}
      />
    </div>
  );

  return (
    <Flex align="center" gap={20} className={styles.menu}>
      {MobileNav}
      {DesktopNav}
    </Flex>
  );
};

export default Navigation;
