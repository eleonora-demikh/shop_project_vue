<script setup>
</script>

<template>
  <section>
    <nav>
      <RouterLink to="/women">
        <div class="path-img women">
          <div class="hover-style">Women's clothing</div>
        </div>
      </RouterLink>

      <RouterLink to="/men">
        <div class="path-img men">
          <div class="hover-style">Men's clothing</div>
        </div>
      </RouterLink>
    </nav>
  </section>
</template>

<style>
nav {
  display: flex;
  position: relative;
}

.path-img {
  width: calc(100vw / 2);
  height: calc(100vh - 80px);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  font-size: 1.5rem;
}

.path-img:hover {
  background-color: rgba(0, 0, 0, 0.676);
}

.hover-style {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-shadow: 2px 3px 3px rgb(26, 25, 25);
}

.hover-style:hover {
  background-color: rgba(56, 55, 55, 0.375);
  transition: 0.3s ease;

}

@media (min-width: 768px) {
  .path-img {
    font-size: 2rem;
  }
}

.women {
  background-image: url('@/assets/women.jpeg');
  background-position: 60% 0;
}

.men {
  background-image: url('@/assets/men.jpeg');
  background-position: 45% 0;
}
</style>
