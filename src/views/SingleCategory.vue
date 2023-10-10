<script setup>
import * as productsApi from '@/services/products';
import CardItem from '../components/CardItem.vue';
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const limit = 12
const products = ref([])
const pageTitle = ref('Men\'s clothing')

if (route.params.category === 'women\'s') {
  pageTitle.value = 'Women\'s clothing'
}

productsApi.getCategoryProducts(limit,route.params.category)
    .then(({data}) => products.value = data)
    .catch(() => console.log("Something went wrong"));
</script>
<template>
  <div class="catalog-page">
    <RouterLink
        to="/"
        class="top-nav">
      <img src="../assets/icons/arrow-left.svg"/>
      <span class="back-btn">Back</span>
    </RouterLink>

    <h1 class="title">{{ pageTitle }}</h1>

    <section class="catalog">
      <article
          class="card-item"
          v-for="product of products"
          :key="product.id"
      >
        <CardItem :product="product"/>
      </article>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .back-btn {
    font-size: 1.3rem;
  }
}


.catalog-page {
  padding: 20px;
  overflow: hidden;
}

.title {
  text-align: center;
  color: rgb(75, 74, 74);
  margin: 0 0 30px;
}

.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

@media (min-width: 780px) {
  .catalog {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1160px) {
  .catalog {
    grid-template-columns: repeat(4, 1fr);
  }
}

.top-nav {
  display: flex;
  align-items: center;
  color: rgb(154, 154, 154);
  font-size: 0.8rem;
}
</style>
