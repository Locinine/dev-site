import React from "react";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import { Route, Switch } from "wouter";
import { ConfigProvider } from "antd";
import { themeOverides } from "./theme";

import Home from "./home/home";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={themeOverides}>
      <ParallaxProvider>
        <Switch>
          <Route path={"/"} component={Home} />
          <Route component={Home} />
        </Switch>
      </ParallaxProvider>
    </ConfigProvider>
  </React.StrictMode>
);
