import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
// import {
//   AUTH_DOMAIN,
//   AUTH_CLIENT_ID,
//   AUTH_AUDIENCE,
//   REDIRECT_URI,
// } from "../config/config.js";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.AUTH_DOMAIN}
      clientId={process.env.AUTH_CLIENT_ID}
      authorizationParams={{ redirect_uri: process.env.REDIRECT_URI }}
      audience={process.env.AUTH_AUDIENCE}
      cacheLocation="localstorage"
      scope="openid profile email"
    >
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
