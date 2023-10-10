<script>
import * as productsApi from '@/services/products';
import CardItem from '../components/CardItem.vue';

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      products: [],
      title: "There is nothing to show",
      limit: 12,
    };
  },
  mounted() {
    productsApi.getMenClothes(this.limit)
      .then(({ data }) => {
        this.products = data;
      })
      .catch(() => {
        console.log("Somithing went wrong");
      });
  },
  methods: {},
  components: { CardItem }
}
</script>

<template>
  <div class="catalog-page">
    <RouterLink
      to="/"
      class="top-nav"
    >
      <img src="../assets/icons/arrow-left.svg" />
      <span>Back</span>
    </RouterLink>

    <h1 class="title">Men's clothing</h1>

    <section class="catalog">
      <article
        class="card-item"
        v-for="product of products"
        :key="product.id"
      >
        <CardItem :product="product" />
      </article>
    </section>
  </div>
</template>

<style>
.catalog-page {
  width: 100vw;
  padding: 20px;
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
