import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import { Button, Grid } from "antd";

import skyJPG from "/public/banner/sky.jpg";
import backgroundMountainsPNG from "/public/banner/background_mountains.png";
import painterJPG from "/public/banner/painter.png";
import foregroundMountainsPNG from "/public/banner/foreground_mountains.png";

import skyJPGXs from "/public/banner_xs/sky.jpg";
import backgroundMountainsPNGXs from "/public/banner_xs/background_mountains.png";
import painterJPGXs from "/public/banner_xs/painter.png";
import foregroundMountainsPNGXs from "/public/banner_xs/foreground_mountains.png";

import "./styles/banner.scss";
import Link from "antd/es/typography/Link";

const moon: BannerLayer = {
  translateY: [0, 5],
  scale: [1.1, 1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  children: <div className="moon inset" />,
};

const gradientOverlay: BannerLayer = {
  opacity: [0, 1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: <div className="gradient inset" />,
};

const siteTitle: BannerLayer = {
  translateY: [0, 10],
  children: (
    <div className="siteTitle inset">
      <h1>Farrah Lord-Newcombe</h1>
      <h2 className="subtitle">Explore the possibilities</h2>
      <Button type="default">
        <Link href="#contact" className="contact_button">
          Get in touch
        </Link>
      </Button>
    </div>
  ),
};

const HeroBanner = () => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  const stars: BannerLayer = {
    image: xs ? skyJPG : skyJPGXs,
    translateY: [0, 20],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="starsContainer">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
    ),
  };

  const backgroundMountains: BannerLayer = {
    image: xs ? backgroundMountainsPNG : backgroundMountainsPNGXs,
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
  };

  const painter: BannerLayer = {
    image: xs ? painterJPG : painterJPGXs,
    translateY: [0, 10],
    scale: [1, 1.2, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const foregroundMountains: BannerLayer = {
    image: xs ? foregroundMountainsPNG : foregroundMountainsPNGXs,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  return (
    <ParallaxBanner
      layers={[
        stars,
        backgroundMountains,
        moon,
        painter,
        foregroundMountains,
        gradientOverlay,
        siteTitle,
      ]}
      className="banner"
    />
  );
};

export default HeroBanner;
