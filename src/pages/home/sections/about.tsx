import { Col, Divider, Typography } from "antd";

import "./styles/about.scss";

const { Text } = Typography;

const About = () => {
  return (
    <div id="about" className="about_container">
      <p>
        <Text>
          I'm a passionate and experienced software engineer dedicated to
          creating innovative and efficient solutions. With 7 years of
          experience in the industry, I have honed my skills in various
          programming languages, frameworks, and development methodologies,
          ensuring I stay at the forefront of technological advancements.
        </Text>
      </p>
      Í
      <p>
        <Text>
          Throughout my career, I have had the privilege of working with diverse
          teams on a variety of projects, from <b>small startups </b>
          to <b>large enterprises</b>. Each experience has enriched my skills
          and broadened my perspective, allowing me to tackle complex challenges
          with confidence and ingenuity.
        </Text>
      </p>
      <p>
        <Text>
          I believe in the power of technology to transform businesses and
          improve lives. My approach is rooted in understanding the unique needs
          of each project and delivering <b>tailored solutions</b> that drive
          success. By combining <b>technical expertise</b> with{" "}
          <b>creativity</b>, I strive to build software that is not only
          functional but also delightful to use.
        </Text>
      </p>
      <p>
        <Text>
          I am always eager to <b>collaborate</b> with like-minded professionals
          and explore new opportunities. Whether you have a project in mind,
          need a <b>consultation</b>, or just <b>want to network</b>, feel free
          to get in touch. Let's create something amazing together!
        </Text>
      </p>
      <Divider style={{ marginTop: "60px" }} />
    </div>
  );
};

export default About;
