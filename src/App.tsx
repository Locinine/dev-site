import { useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Route, Switch } from "wouter";
import { ConfigProvider } from "antd";
import { themeOverides } from "./theme";

import Navigation from "./components/navbar/navbar";
import Home from "./pages/home/home";
import CV from "./pages/cv/cv";
// import Projects from "./containers/projects";
// import Journey2 from "./containers/journey/journey2";

import "./app.scss";

const App: React.FC = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    // setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ConfigProvider theme={themeOverides}>
      <ParallaxProvider>
        <Navigation title="Farrah Lord-Newcombe" />
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path="/cv">
            <CV windowWidth={windowWidth} cvRef={cvRef} />
          </Route>
          <Route component={Home} />
        </Switch>
      </ParallaxProvider>
    </ConfigProvider>
  );
};

export default App;
