<script setup>
import { RouterView} from 'vue-router'
import {ref} from "vue";
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const totalProductsCount = ref(0)

const updateCount = () => {
  let storageProducts = JSON.parse(localStorage.getItem('cart')) || [];
  totalProductsCount.value = storageProducts.length
}

updateCount()

</script>

<template>
  <Header></Header>

  <main>
    <RouterView/>
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

footer {
  margin-top: auto;
  padding-top: 20px;
  height: 160px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  box-shadow: inset 0 5px 10px rgba(154, 161, 177, 0.1);
}

.logo-foo {
  margin-bottom: 8px;
}
</style>
