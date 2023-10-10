<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
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
footer {
  margin-top: auto;
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

@media (hover: hover) {
  a:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
}
</style>
