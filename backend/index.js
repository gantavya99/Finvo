const express = require('express');
const session = require('express-session');
const axios = require('axios');
const { AuthorizationCode } = require('simple-oauth2');

const app = express();
const port = 3000;

// Set up session middleware
app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: true
}));

// OAuth 2.0 client configuration
const client = new AuthorizationCode({
  client: {
    id: 'SNlyhuTSCKQ1gkYZnmn67jTAzx1JeOimNafpwU7a',
    secret: 'xSDaVQe9xO7GbqbQXVB2548REiOqivtXSqmF2dXW'
  },
  auth: {
    tokenHost: 'https://secure.splitwise.com',
    authorizePath: '/oauth/authorize',
    tokenPath: '/oauth/token'
  }
});

const redirectUri = 'http://localhost:3000/callback';

// Route to start OAuth flow
app.get('/login', (req, res) => {
  const authorizationUri = client.authorizeURL({
    redirect_uri: redirectUri,
    scope: 'read', // Change as per your requirement
    state: 'random-state' // For CSRF protection
  });

  res.redirect(authorizationUri);
});

// Callback route
app.get('/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const tokenParams = {
      code,
      redirect_uri: redirectUri
    };

    const accessToken = await client.getToken(tokenParams);
    req.session.token = accessToken.token;
    res.redirect('/profile');
  } catch (error) {
    console.error('Access Token Error', error.message);
    res.status(500).json('Authentication failed');
  }
});

// Protected route to fetch user profile
app.get('/profile', async (req, res) => {
  if (!req.session.token) {
    return res.redirect('/login');
  }

  try {
    const response = await axios.get('https://secure.splitwise.com/api/v3.0/get_current_user', {
      headers: {
        Authorization: `Bearer ${req.session.token.access_token}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('API Error', error.message);
    res.status(500).json('Failed to fetch user profile');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
