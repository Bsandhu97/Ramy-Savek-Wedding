<template>
  <div class="home">
    <p class="font-bold text-6xl">Rameet Sandhu & Gursavek Gill</p>
    <p class="text-semibold text-4xl">April 30th - May 4th </p>
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
