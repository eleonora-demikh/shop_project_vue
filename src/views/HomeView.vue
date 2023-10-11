<script setup>
</script>
<template>
  <section class="categories">
    <RouterLink :to="{name:'category',params:{category:'women\'s'}}" class="categoryLink women">
      <div class="title">Women's clothing</div>
    </RouterLink>
    <RouterLink :to="{name:'category',params:{category:'men\'s'}}" class="categoryLink men">
      <div class="title">Men's clothing</div>
    </RouterLink>
  </section>
</template>
<style>
.categories {
  display: flex;
  position: relative;
  max-height: 1000px;
}

.categoryLink {
  position: relative;
  flex-grow: 2;
  min-height: 90vh;
  align-items: center;
}

.categoryLink:after {
  content: '';
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(56, 55, 55, 0.375);
  transition: 0.3s ease;
}

.categoryLink .title {
  color: #f2f2f2;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 3;
  text-shadow: 2px 3px 3px rgb(26, 25, 25);
  font-size: 2rem;
}

.categoryLink:hover.categoryLink:after {
  display: block;
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
