<script>
import { ref } from 'vue';
import CartItem from '../components/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      total: 0,
      title: "There is nothing to show",
      modalVisible: false,
    };
  },
  setup() {
    const products = ref([]);
    const total = ref(0);

    const loadCartItems = () => {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      products.value = cartItems;

      let amount = 0;

      cartItems.map(item => {
        amount += (item.count * item.price)
      })

      total.value = amount;
      console.log(total.value);
    };

    loadCartItems();

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
    
      <div class="cart-total">
        <h2>Total: <strong>{{ total.value }}</strong></h2>
        <button class="cart-button">Checkout</button>
      </div>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
}

@media (min-width: 1024px) {
  .cart {
    grid-template-columns: repeat(3, 1fr);
  }
}

.top-nav {
  display: flex;
  align-items: center;
  color: rgb(154, 154, 154);
  font-size: 0.8rem;
}

.cart-total {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  margin-top: 40px;
}

.cart-button {
  margin-top: 12px;
  height: 40px;
  background-color: transparent;
  width: 100%;
  font-size: 1.2rem;
  color: rgb(61, 61, 61);
  border: 2px solid rgba(146, 144, 144, 0.274);
  border-radius: 12px;
  transition: 0.3s ease;
}

.cart-button:hover {
  transform: scale(1.1);
  background-color: rgba(175, 203, 175, 0.407);
  border-color: rgba(175, 203, 175, 0.407);
}
</style>
