

let configJson = {};

try {
  configJson = require("./auth_config.json");
} catch (error) {
  console.warn("auth_config.json not found. Falling back to environment variables.");
}

export function getConfig() {
  const audience = configJson.audience || process.env.REACT_APP_AUTH0_AUDIENCE;
  const domain = configJson.domain || process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = configJson.clientId || process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const redirectUri = configJson.redirectUri || process.env.REACT_APP_AUTH0_REDIRECT_URI;

  return {
    domain,
    clientId,
    ...(audience ? { audience } : null),

  };
}

