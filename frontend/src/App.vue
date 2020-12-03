<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Index from "./Pages/Index"

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
