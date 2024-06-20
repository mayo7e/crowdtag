import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useHistory } from "react-router-dom";

import { getConfig } from "./config";






export const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const config = getConfig();



  const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
  };

  // if (!(domain && clientId && redirectUri)) {
  //   return null;
  // }

  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    authorizationParams: {
      redirect_uri: window.location.origin,
      // ...(config.audience ? { audience: config.audience } : null),
    },
  };

  return (
    <Auth0Provider
      {...providerConfig}
    >
      {children}
    </Auth0Provider>
  );
};
