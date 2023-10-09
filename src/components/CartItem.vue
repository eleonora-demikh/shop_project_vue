<script>
export default {
  name: 'CartItem',
  props: {
    product: Object,
  },
  data() {
    return {
      count: 1,
    }
  },
  created() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const foundItem = cartItems.find((item) => item.id === this.product.id);
    if (foundItem) {
      this.count = foundItem.count || 1;
    }
  },
  methods: {
    increaseCount() {
      this.count += 1;
      this.updateLocalStorage();
    },
    decreaseCount() {
      if (this.count > 1) {
        this.count -= 1;
        this.updateLocalStorage();
      } else {
        this.removeFromLocalStorage();
        this.updateLocalStorage();
      }
    },
    updateLocalStorage() {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === this.product.id) {
          item.count = this.count;
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    },
    removeFromLocalStorage() {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCartItems = cartItems.filter((item) => item.id !== this.product.id);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    },
  }
}
</script>

<template>
  <div class="cart-item">
    <img
      class="cart-image"
      :src="product.image"
      :alt="product.title"
    >
    <h3 class="cart-title">{{ product.title }}</h3>
    <div class="cart-count">
      <button
        class="cart-icon"
        @click="increaseCount"
      >
        <img src="../assets/icons/plus.svg" />
      </button>
      <span class="count">{{ this.count }}</span>
      <button
        class="cart-icon"
        @click="decreaseCount"
      >
        <img src="../assets/icons/minus.svg" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 18px;
  border: 1px solid rgba(64, 64, 64, 0.1);
  box-shadow: 0 5px 10px rgba(154, 161, 177, .1);
}

.cart-image {
  max-height: 80px;
}

.cart-title {
  font-size: 0.7rem;
  margin-left: 18px;
  line-height: 1rem;
}

.cart-count {
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.count {
  width: 24px;
  text-align: center;
}

.cart-icon {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgba(146, 144, 144, 0.274);
  border-radius: 2px;
  color: rgba(34, 34, 34, 0.657);
  cursor: pointer;
}

/* .cart-button {
  background-color: transparent;
  border: 1px solid rgba(64, 64, 64, 0.274);
  border-radius: 20px;
  color: rgba(34, 34, 34, 0.657);
  font-size: 1rem;
  padding: 6px 10px;
  cursor: pointer;
  transition: 0.3s ease;
}

.cart-button:hover {
  transform: scale(1.1);
  background-color: rgba(175, 203, 175, 0.407);
  border-color: rgba(175, 203, 175, 0.407);
}

.added {
  background-color: rgba(175, 203, 175, 0.407);
  border-color: rgba(175, 203, 175, 0.407);
} */
</style>
