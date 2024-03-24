<template>
<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/events">Events</router-link> | 
    <router-link to="/EventDetailsView">Event Details</router-link>

  </nav>
  <div class="home">
    <p class="font-bold sm:text-6xl text-4xl">Rameet Sandhu & Gursavek Gill</p>
    <p class="text-semibold sm:text-4xl text-2xl">April 30th - May 4th </p>
    <CountdownCard/>
     <button @click="authorizeGooglePhotos">Authorize Google Photos</button>
     
     <div>
        <h2>Photo Gallery</h2>
        <div v-for="photo in photos" :key="photo.id">
            <img :src="photo.url" :alt="photo.description">
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountdownCard from '../components/CountdownCard.vue'
// import axios from 'axios'
// import { OAuth2Client } from 'google-auth-library';

export default {
  name: 'HomeView',
  data() {
    return {
        photos: [],
    }
  },
  components: {
    CountdownCard
  },
  methods: {
    authorizeGooglePhotos() {
      window.location.href = 'http://localhost:3000/auth';
    },
    async fetchPhotos() {
        try {
            const response = await this.$axios.get('/api/photos');
            this.photos = response.data;
            console.log("TEST " + this.photos);
        } catch (error) {
            console.error(error);
        }
    },

    //  async handleOAuthCallback() {
    //   // Retrieve the authorization code from the URL
    //   const code = new URLSearchParams(window.location.search).get('code');

    //   if (code) {
    //     // Create an OAuth2Client instance
    //     const oAuth2Client = new OAuth2Client({
    //       clientId: '354476288928-6oclurds8d4j6e0q8do490sg5a9r8vrr.apps.googleusercontent.com',
    //       clientSecret: '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',
    //       redirectUri: 'http://localhost:8080',
    //     });

    //     try {
    //       // Exchange the authorization code for an access token
    //       const tokenResponse = await oAuth2Client.getToken(code);
    //       const accessToken = tokenResponse.tokens.access_token;

    //       // Now you have the access token, you can use it to make API requests

    //       // Optionally, you can store the access token securely (e.g., in Vuex or a secure server)
    //     } catch (error) {
    //       console.error('Error exchanging authorization code for access token:', error);
    //       // Handle the error appropriately (e.g., show an error message to the user)
    //     }
    //   } else {
    //     // The authorization code is not present in the URL
    //     console.warn('Authorization code not found in the URL.');
    //     // Handle this case (e.g., redirect the user to an error page)
    //   }
    // },
  },
  mounted() {
      this.fetchPhotos();
  },
}
</script>

