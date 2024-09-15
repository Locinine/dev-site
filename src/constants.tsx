export const summary =
  "Passionate developer with 5+ years of experience, progressed quickly picking up new languages as and when needed to ensure product vision could be achieved or older systems maintained. Familiar with using Agile and DevOps methodologies to ensure that the software is developed efficiently, with security, testing, code quality and customer satisfaction in mind.";

const buildList = (items: Array<JSX.Element>) => (
  <ul>
    {items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);

export const experience = [
  {
    dates: "Apr 2023 - Present",
    role: "Senior Software Engineer",
    company_name: "Signifyd",
    description: buildList([
      <>
        <b>Application Development & Enhancement:</b> I’ve had the pleasure of
        enhancing applications by adding <b>new features</b>, <b>fixing bugs</b>
        , and
        <b>migrating deprecated libraries</b> to keep our systems up to date and
        running smoothly.
      </>,
      <>
        <b>Core Library Maintenance:</b> I’ve been responsible for maintaining
        internal shared libraries, including styling, components, and core
        infrastructure, ensuring they remain <b>reliable</b> and easy to use
        across teams.
      </>,
      <>
        <b>Team Collaboration & Onboarding:</b> Helping new team members get up
        to speed is something I enjoy. I’ve facilitated onboarding to ensure{" "}
        <b>smooth integration</b> and a <b>welcoming environment</b> for
        everyone.{" "}
      </>,
      <>
        <b>Code Refactoring:</b> I led the migration of applications from
        Easy-Peasy and Recompose to <b>React Query</b>, focusing on refactoring
        code for better <b>efficiency</b>, <b>readability</b>, and long-term
        maintainability.
      </>,
      <>
        <b>Test Improvement:</b> I transitioned tests from Enzyme to React
        Testing Library, which significantly improved our{" "}
        <b>test reliability</b>. I also expanded test coverage to better reflect
        real <b>user journeys</b>, boosting overall application reliability.
      </>,
      <>
        <b>Project Leadership:</b> One of my favorite projects was co-leading an
        effort to update a user interface for a new purchase type. This project
        expanded our customer base to a <b>new market segment</b>, and it was
        incredibly rewarding to see the <b>positive impact</b> on the business.
      </>,
    ]),
    skills: [
      "React JS",
      "Typescript",
      "React Query",
      "Ant Design",
      "React Testing Library",
    ],
  },
  {
    dates: "Nov 2020 - Apr 2023",
    role: "Frontend Developer",
    company_name: "Benchling",
    description: buildList([
      <>
        Migrated React class components to functional components using React
        hooks.
      </>,
      <>
        Directed, implemented, and maintained product features based on
        scientist feedback.
      </>,
      <>
        Developed a new user interaction feature, improving software usability.
      </>,
      <>
        Consumed RESTful APIs and collaborated with backend developers for
        optimal implementation.
      </>,
      <>
        Supported the integration of Overwatch Research into Benchling, creating
        a comprehensive cloud-native in vivo solution.
      </>,
    ]),
    skills: ["React JS", "ES6/ES7", "Redux", "Git", "React Hooks"],
  },
  {
    dates: "Oct 2018 - Oct 2020",
    role: "Full Stack Engineer",
    company_name: "WhiteHat Security",
    description: (
      <>
        <p>
          Created new features, upgraded and maintained Application Security
          Testing products (DAST, SAST, AST). Implemented support for Auto API
          scanning, allowing users to self-service vulnerability scanning. For
          this I worked closely with other teams to ensure the scanner linked
          into the product correctly. This was a key feature as it was new to
          the field and few competitors provided it.
        </p>
        <p>
          Developed Golang based microservices and web services with RESTful
          APIs and NATs messaging. Participating in code reviews and QA process.
        </p>
        <p>
          Took ownership of activity log updates, <b>learning Perl</b> and
          working with every team in engineering to complete the work. Worked as{" "}
          <b>scrum master</b> during a rebuild of our architecture, while we
          migrated from a <b>monolith to micro-frontend</b>, through research
          and investigation to POC.
        </p>
      </>
    ),
    skills: [
      "React JS",
      "Redux",
      "Redux Form",
      "Go",
      "Git",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    dates: "May 2016 - Oct 2018",
    role: "Sharepoint Developer",
    company_name: "Telefonica (O2 UK)",
    description: (
      <>
        <p>
          Maintained and developed a host of applications, ranging from a legacy
          classic ASP knowledgebase to modern SharePoint TeamSite's which
          utilised AngularJS, ThreeJS (webGL) and Material Design.
        </p>
        <p>
          Worked with Workplace by Facebook to develop bots using NodeJS and
          graph API. Most notably a survey bot questioning approximately 3,000
          audience members at O2’s annual conference and providing real time
          statistics to the exec team in a custom site.
        </p>
        <p>
          Lead the intranet migration from Sharepoint 2010 to 2013, integrating
          Angular MaterialJS working towards a mobile first approach.
          Standardised creation of microsites within the business to ensure
          consistency and reduce setup overhead. I mentored and trained new
          developers that joined my team in the frontend.
        </p>
      </>
    ),
    skills: [
      "Angular Material JS",
      "Sharepoint 2010/13",
      "Material Design",
      "JQuery",
      "CSS",
    ],
  },
];
