<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from "vue";

const totalProductsCount = ref(0)

const updateCount = () => {
  let storageProducts = JSON.parse(localStorage.getItem('cart')) || [];
  totalProductsCount.value = storageProducts.reduce((accumulator, product) => {
    return accumulator + product.count;
  }, 0)
}

updateCount()

const handleStorageChange = (e) => {
  if (e.key === 'cart') {
    updateCount();
  }
};

onMounted(() => {
  window.addEventListener('storage', handleStorageChange);
});

onUnmounted(() => {
  window.removeEventListener('storage', handleStorageChange);
});
</script>

<template>
  <header>
    <RouterLink to="/">
      <img
          alt="Logo"
          class="logo"
          src="@/assets/logo.svg"
          width="30"
          height="30"
      />
    </RouterLink>

    <RouterLink to="/cart" class="card-link">
      <img
          alt="Logo"
          class="logo"
          src="@/assets/icons/shopping-bag.svg"
          width="24"
          height="24"
      />
      <span class="productsCount" v-if="totalProductsCount">
        {{ totalProductsCount }}
      </span>
    </RouterLink>
  </header>
</template>

<style scoped>
.card-link {
  position: relative;
}

header {
  line-height: 80px;
  height: 80px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 10px rgba(154, 161, 177, .1);
  margin-bottom: 20px;
}

@media (min-width: 1024px) {
  header {
    height: 120px;
  }
}

.productsCount {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -10px;
  left: 50%;
  background: coral;
  color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 9px;
}

@media (min-width: 1024px) {
  .productsCount {
    width: 25px;
    height: 25px;
    font-size: 18px;
  }
}

.logo {
  display: block;
  width: 50px;
  margin: 0 1rem;
}

@media (min-width: 1024px) {
  .logo {
    height: 40px;
  }
}

@media (hover: hover) {
  a:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
}
</style>
