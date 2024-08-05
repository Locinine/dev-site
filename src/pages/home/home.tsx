import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Button } from "antd";

import "./styles/home.scss";
import "./styles/scroll.scss";
import Menu from "../../components/menu/menu";
import Experience from "./sections/experience";
import About from "./sections/about";
import Contact from "./sections/contact";

const Home = () => {
  return (
    <>
      <div className="parallax" style={{ paddingLeft: 0 }}>
        <Menu />

        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer offset={0} speed={0} className="starsContainer">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-0.1}>
            <div className="mountain_background parallax-layer" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0.1}>
            <div className="moon parallax-layer" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.2} speed={0}>
            <div className="title parallax-layer">
              <div>
                <h1>Explore the possibilities</h1>
                <h2 className="subtitle">Creative Development</h2>
                <Button type="default"> Get in touch</Button>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.05}>
            <div className="painter parallax-layer" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <div className="mountain_foreground parallax-layer" />
          </ParallaxLayer>
          {/* TODO: Make this my own  */}
          {/* <div className="scroll-wrapper">
            <div className="scroll-wrapper-inner">
              <div className="scroll-title">Scroll</div>
              <div className="scroll-down"></div>
            </div>
          </div> */}

          <ParallaxLayer offset={1} speed={0}>
            <About />
            <Experience />
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Home;
