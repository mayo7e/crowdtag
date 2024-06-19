import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
// import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);


