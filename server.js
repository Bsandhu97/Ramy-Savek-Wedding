const express = require('express');
const  {google} = require('googleapis');
const app = express();
// const axios = require('axios');
const port = 3000;

// const apiKey = "AIzaSyBG7M_xF6C7pCFz-XBT4sdaIdTToMx9rYc";

// app.get('/api/photos', async (req, res) => {
//   try {
//       // Make a request to Google Photos API to get photos
//       const response = await axios.get('https://photoslibrary.googleapis.com/v1/mediaItems', {
//           headers: {
//               'Authorization': `Bearer ${apiKey}`,
//           },
//           params: {
//               // Add any additional parameters or filters as needed
//           },
//       });

//       res.json(response.data);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const oAuth2Client = new google.auth.OAuth2(
  '354476288928-4ri0hhtbisj57khh61lq08l2clo7ahj1.apps.googleusercontent.com',
  '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',
  'http://localhost:3000/auth/callback'
);

// Redirect to Google Photos consent screen
app.get('/auth', (req, res) => {
  console.log("TEST34");
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/photoslibrary'],
  });
  res.redirect(authUrl);
});

// Callback after consent
app.get('/auth/callback', async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
  console.log("TEST 54");
  // const photos = google.get ({ version: 'v1', auth: oAuth2Client });
  // const albums = await photos.albums.list();
  // console.log("TEST " + albums.data);
  // res.json(albums.data);
  res.send('Authorization successful. You can close this tab now.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
