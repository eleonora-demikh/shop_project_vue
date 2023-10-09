<script setup>
import { RouterLink, RouterView } from 'vue-router'
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

    <RouterLink to="/cart">
      <img
        alt="Logo"
        class="logo"
        src="@/assets/icons/shopping-bag.svg"
        width="24"
        height="24"
      />
    </RouterLink>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <RouterLink to="/">
      <img
        alt="Logo"
        class="logo-foo"
        src="@/assets/logo.svg"
        width="50"
        height="50"
      />
    </RouterLink>
    <p>This project was developed for educational porposes</p>
  </footer>
</template>

<style scoped>
header {
  line-height: 80px;
  max-height: 80px;
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 10px rgba(154, 161, 177, .1);
}

.logo {
  display: block;
  width: 50px;
  margin: 0 1rem;
}

@media (hover: hover) {
  a:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
}

footer {
  margin-top: auto;
  width: 100vw;
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
