<template>
  <div id="app" class="py-5 pb-10 px-16">
    <p class="font-bold text-6xl">Rameet & Gursavek</p>
    <p class="text-semibold text-4xl">April 30th - May 4th </p>
    <CountdownCard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CountdownCard from './components/CountdownCard.vue'

export default {
  name: 'App',
  components: {
    CountdownCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
