const { google } = require('googleapis');
const express = require('express');

const app = express();
const PORT = 3000;

// 1. Configure your OAuth2 client credentials
const CLIENT_ID = '821698242970-sdafasdf.apps.googleusercontent.com';
const CLIENT_SECRET = 'GOCSPX-asdsadf';
const REDIRECT_URI = `http://localhost:${PORT}/oauth2callback`;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
);

// 2. Redirect the user to Google's Authorization Server
app.get('/', (req, res) => {
    const authorizeUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline', // Ensures a refresh token is issued
        prompt: 'consent', // Forces the consent screen to guarantee token generation
        scope: ['openid', 'profile', 'email'], // Minimal scope required
    });

    res.redirect(authorizeUrl);
});

// 3. Handle the callback and exchange the authorization code for tokens
app.get('/oauth2callback', async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send('Authorization code missing.');
    }

    try {
        // This specific line performs the token exchange that resets Google's inactivity timer
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        console.log('Successfully exchanged tokens! Inactivity timer reset.');
        console.log('Received Tokens:', tokens);

        res.send(
            '<h1>Authentication Successful!</h1><p>Your Google OAuth Client ID inactivity timer has been successfully reset.</p>',
        );
    } catch (error) {
        console.error('Error exchanging token:', error);
        res.status(500).send(`Authentication failed: ${error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(
        `Open http://localhost:${PORT} in your browser to trigger the token exchange.`,
    );
});
