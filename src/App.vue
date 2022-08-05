<template>
  <CurrencyTracker/>
</template>

<script>
import CurrencyTracker from './components/CurrencyTracker.vue'

export default {
  name: 'App',
  components: {
    CurrencyTracker
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
