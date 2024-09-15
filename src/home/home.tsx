import { Col, Grid, Row } from "antd";
import Navigation from "../components/navbar/navbar";
import Menu from "../components/menu/menu";
import Experience from "./sections/experience";
import About from "./sections/about";
import Contact from "./sections/contact";
import HeroBanner from "./sections/banner";

import "./home.scss";

const Home = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <div className="home_container">
      <Navigation title="Farrah Lord-Newcombe" />
      <Menu />
      <HeroBanner screens={screens} />
      <div className="gradient_out">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 7 }}
          className="sections"
        >
          <Row gutter={[16, 16]}>
            <About />
          </Row>
          <Row gutter={[16, 16]}>
            <Experience />
          </Row>
          <Row gutter={[16, 16]}>
            <Contact />
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default Home;
