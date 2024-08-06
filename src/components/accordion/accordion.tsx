import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

import "./accordion.scss";

export interface AccordionItem {
  label: string | JSX.Element;
  content: string | JSX.Element;
  footer?: JSX.Element;
}

interface AccordionProps {
  items: Array<AccordionItem>;
  size?: "xs " | "sm" | "md" | "lg";
  openPanel?: number;
  expandAll?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, openPanel }) => {
  const [activePanel, setActivePanel] = useState<number | undefined>(openPanel);

  const sections = items.map(({ label, content, footer }, index) => (
    <div key={index}>
      <div
        className="title"
        onClick={() =>
          setActivePanel(activePanel !== index ? index : undefined)
        }
      >
        <div
          className={`arrow-wrapper${index === activePanel ? " active" : ""}`}
        >
          <SlArrowRight />
        </div>
        <span className="title-text">{label}</span>
      </div>
      <div className={`content${index === activePanel ? " content-open" : ""}`}>
        <div
          className={`${
            index === activePanel ? "content-text-open" : ""
          } content-text`}
        >
          {content}
        </div>
      </div>
      {footer && <div className="footer">{footer}</div>}
    </div>
  ));

  return <div className="accordion">{sections}</div>;
};

export default Accordion;
