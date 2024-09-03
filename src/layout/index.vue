<template>
  <div id="app">
    <Main />
  </div>
</template>

<script lang="ts" setup>
import Main from '@/views/main.vue'
</script>

<style scoped>
#app {
  display: grid;
  height: 100vh;
  background-image: linear-gradient(0deg, transparent 95%, #d6d6d6 100%),
    linear-gradient(90deg, transparent 95%, #d6d6d6 100%);
  background-size: 25px 25px;
  background-position: center center;
}
</style>
