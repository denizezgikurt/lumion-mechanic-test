import React from "react";
import { Helmet } from "react-helmet";
import CaptionGenerator from "./CaptionGenerator"; 


import "../assets/fonts.css";
import * as css from "./index.module.css";

const Head = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      defaultTitle="Lumion Toolkit"
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Lumion Toolkit</title>
      <meta name="description" content="Lumion Toolkit" />
      <link rel="icon" href="static/favicon.svg" type="image/svg+xml" />
    </Helmet>
  );
};

export const SideBar = props => {
  return (
    <aside className={css.root}>
      <Head />
      <CaptionGenerator />
      <h1>Lumion Toolkit </h1>
      {props.children}
    </aside>
  );
};
