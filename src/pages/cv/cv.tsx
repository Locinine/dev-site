import React from "react";
import { Col, Row, Button, Collapse, ConfigProvider } from "antd";
import { HiOutlineDownload } from "react-icons/hi";
import {
  summary,
  experience,
  education,
  skills,
  contracts,
  contact_info,
  // interests,
} from "../../constants";

import "./cv.scss";
import { cvOverides } from "../../theme";

const screenSizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

interface CVProps {
  windowWidth: number;
  cvRef: React.RefObject<HTMLDivElement>;
}

const CV: React.FC<CVProps> = ({ windowWidth, cvRef }) => {
  const expierenceSection = experience.map(
    ({ dates, role, company_name, desc, tech }, i) => (
      <div className={i !== 0 && role ? "border-t-1 pt-3" : ""}>
        <h4>{role}</h4>
        <h5 className="company_name">{company_name}</h5>
        <p>{dates}</p>
        {tech && (
          <p>
            Key Technologies: <br /> {tech}
          </p>
        )}
        <p className="test">{desc}</p>
      </div>
    )
  );

  const educationSection = education.map(({ dates, org_name, details }) => (
    <div>
      <h5 className="mb-0">{org_name}</h5>
      <p>{dates}</p>
      {details.map((qualification) => (
        <p>{qualification}</p>
      ))}
    </div>
  ));

  const contractSection = contracts.map(({ dates, org_name, details }) => (
    <div>
      <h5 className="mb-0">{org_name}</h5>
      <p>{dates}</p>
      <p>{details}</p>
    </div>
  ));

  const contactSection = Object.entries(contact_info).map(([key, val]) => (
    <p>
      <span className="bold">{`${key}:`}</span> <br />
      {val}
    </p>
  ));

  const skillsSection = (
    <Row className="px-2">
      {skills.map((skill) => (
        <Col>{skill}</Col>
      ))}
    </Row>
  );

  const sections = {
    leftCol: [
      {
        key: "summary",
        label: "Summary",
        children: <p>{summary}</p>,
      },
      {
        key: "experience",
        label: "Experience",
        children: expierenceSection,
      },
    ],
    rightCol: [
      {
        key: "contact-info",
        label: "Contact Info",
        children: contactSection,
      },
      {
        key: "skills",
        label: "Skills",
        children: skillsSection,
      },
      {
        key: "contract-work",
        label: "Contract Work",
        children: contractSection,
      },
      {
        key: "education",
        label: "Education",
        children: educationSection,
      },
    ],
  };

  // const exportPDF = useReactToPrint({
  //   content: () => cvRef.current,
  //   // print: async (source: HTMLIFrameElement) => {
  //   //   await generateAndSavePDF(source);
  //   // },
  // });

  const Content = (
    <>
      <Button
        className="download shadow d-none d-md-block d-sm-none"
        type="default"
        icon={<HiOutlineDownload />}
        iconPosition="start"
        size="small"
        // onClick={exportPDF}
      />
      <Row ref={cvRef}>
        <Col span={18} className="main_container">
          {sections.leftCol.map(({ label, children }) => (
            <>
              <h3>{label}</h3>
              {children}
            </>
          ))}
        </Col>
        <Col span={6} className="sidebar_container">
          {sections.rightCol.map(({ label, children }) => (
            <>
              <h3>{label}</h3>
              {children}
            </>
          ))}
        </Col>
      </Row>
    </>
  );

  const MobileContent = (
    <Collapse
      items={[...sections.leftCol, ...sections.rightCol]}
      defaultActiveKey={["summary"]}
    />
  );

  return (
    <ConfigProvider theme={cvOverides}>
      <div className="cv_container">
        {windowWidth > screenSizes.md ? Content : MobileContent}
      </div>
    </ConfigProvider>
  );
};

export default CV;
