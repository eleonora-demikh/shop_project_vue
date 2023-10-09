<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CartItem from '../components/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      products: [],
      title: "There is nothing to show",
    };
  },
  setup() {
    const products = ref([]);

    const loadCartItems = () => {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      products.value = cartItems;
    };

    onMounted(() => {
      loadCartItems();
      window.addEventListener('storage', (event) => {
        if (event.key === 'cart') {
          loadCartItems();
        }
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener('storage', loadCartItems);
    });

    return {
      products,
    };
  },
  components: { CartItem }
}
</script>

<template>
  <div class="cart-page">
    <RouterLink
      to="/"
      class="top-nav"
    >
      <img src="../assets/icons/arrow-left.svg" />
      <span>Back to homepage</span>
    </RouterLink>

    <h1 class="title">Cart</h1>

    <section class="cart">
      <article
        class="card-item"
        v-for="product of products"
      >
        <CartItem
          :product="product"
          :key="product.id"
        />
      </article>
    </section>
  </div>
</template>

<style>
.cart-page {
  width: 100vw;
  height: calc(100vh - 240px);
  padding: 20px;
}

.title {
  text-align: center;
  color: rgb(75, 74, 74);
  margin: 0 0 30px;
}

.cart {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

@media (min-width: 780px) {
  .cart {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1160px) {
  .cart {
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
