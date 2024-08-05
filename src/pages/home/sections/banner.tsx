import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import { Button } from "antd";

import skyJPG from "/public/sky.jpg";
import backgroundMountainsPNG from "/public/background_mountains.png";
import painterJPG from "/public/painter.png";
import foregroundMountainsPNG from "/public/foreground_mountains.png";

import "./styles/banner.scss";
import Link from "antd/es/typography/Link";

const stars: BannerLayer = {
  image: skyJPG,
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
  image: backgroundMountainsPNG,
  translateY: [0, 30],
  scale: [1, 1.05, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
};

const moon: BannerLayer = {
  translateY: [0, 5],
  scale: [1.1, 1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
  children: <div className="moon inset" />,
};

const painter: BannerLayer = {
  image: painterJPG,
  translateY: [0, 10],
  scale: [1, 1.2, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
};

const foregroundMountains: BannerLayer = {
  image: foregroundMountainsPNG,
  translateY: [0, 15],
  scale: [1, 1.1, "easeOutCubic"],
  shouldAlwaysCompleteAnimation: true,
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

const HeroBanner = () => (
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

export default HeroBanner;
