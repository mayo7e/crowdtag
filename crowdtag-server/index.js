// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const app = express();
app.use(bodyParser.json());

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  tokenSigningAlg: 'RS256'
});

// Public route
app.get('/api/public', (req, res) => {
  res.json({ message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.' });
});


// Protected route
app.get('/api/private', checkJwt, (req, res) => {
  res.json({ message: 'Hello from a private endpoint! You need to be authenticated to see this!' });
});

// Protected route with scope check
const checkScopes = requiredScopes('read:messages');
app.get('/api/private-scoped', checkJwt, checkScopes, (req, res) => {
  res.json({ message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port, ${PORT}`);
});
