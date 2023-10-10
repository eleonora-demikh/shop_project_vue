<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header></Header>

  <main>
    <RouterView />
  </main>

  <Footer></Footer>
</template>

<style scoped>
@media (hover: hover) {
  a:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
}
</style>
