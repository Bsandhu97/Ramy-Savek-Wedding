<template>
<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/events">Events</router-link>
  </nav>
  <div class="home">
    <p class="font-bold sm:text-6xl text-4xl">Rameet Sandhu & Gursavek Gill</p>
    <p class="text-semibold sm:text-4xl text-2xl">April 30th - May 4th </p>
    <CountdownCard />
  </div>
</template>

<script>
// @ is an alias to /src
import CountdownCard from '../components/CountdownCard.vue'

export default {
  name: 'HomeView',
  components: {
    CountdownCard
  }
}
</script>
