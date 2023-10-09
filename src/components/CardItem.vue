<script>
export default {
  name: 'CardItem',
  props: {
    product: Object,
  },
  data() {
    return {
      added: false,
      buttonTitle: "Add to cart",
    }
  },
  mounted() {
    this.checkIfItemIsInCart();
  },
  methods: {
    checkIfItemIsInCart() {
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItemIndex = cartItems.findIndex((item) => item.id === this.product.id);

      if (existingItemIndex !== -1) {
        this.added = true;
        this.buttonTitle = "Added";
      }
    },
    addToCart() {
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

      const existingItemIndex = cartItems.findIndex((item) => item.id === this.product.id);

      if (existingItemIndex !== -1) {
        this.added = true;
        this.buttonTitle = "Added";
      } else {
        cartItems.push({ ...this.product, count: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cartItems));

      this.added = true;
      this.buttonTitle = "Added";
    }
  }
}
</script>

<template>
  <div class="card-item">
    <img
      class="card-image"
      :src="product.image"
      :alt="product.title"
    >
    <h3 class="card-title">{{ product.title }}</h3>
    <div class="card-bottom">
      <p>price: <span class="card-price"><strong>{{ product.price
      }}</strong></span></p>

      <button
        class="card-button"
        :class="{ 'added': added }"
        @click="addToCart"
      >
        {{ this.buttonTitle }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 490px;
  padding: 18px;
  border: 1px solid rgba(64, 64, 64, 0.1);
  box-shadow: 0 5px 10px rgba(154, 161, 177, .1);
}

.card-image {
  max-height: 300px;
  max-width: 250px;
}

.card-title {
  margin: 18px 0;
}

.card-bottom {
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card-price {
  font-size: 1.2rem;
}

.card-button {
  background-color: transparent;
  border: 1px solid rgba(64, 64, 64, 0.274);
  border-radius: 20px;
  color: rgba(34, 34, 34, 0.657);
  font-size: 1rem;
  padding: 6px 10px;
  cursor: pointer;
  transition: 0.3s ease;
}

.card-button:hover {
  transform: scale(1.1);
  background-color: rgba(175, 203, 175, 0.407);
  border-color: rgba(175, 203, 175, 0.407);
}

.added {
  background-color: rgba(175, 203, 175, 0.407);
  border-color: rgba(175, 203, 175, 0.407);
}
</style>
