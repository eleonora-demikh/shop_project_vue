<script setup>

const props = defineProps(['product', 'updateCardList'])
const emit = defineEmits(['updateCardList'])
const getCardItems = () => JSON.parse(localStorage.getItem('cart')) || []
const updateCard = data => {
  localStorage.setItem('cart', JSON.stringify(data.filter((item) => !item.count <= 0)));
  emit('updateCardList');
}
const changeItemQuantity = (type) => {
  let updatedCartItems = getCardItems().map((item) => {
    if (item.id === props.product.id) {
      if (type === 'increment') {
        item.count++
      }
      if (type === 'decrement') {
        item.count--
      }
    }
    return item
  })
  updateCard(updatedCartItems)
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
    <div class="cart-price"><strong>{{ product.price }} $</strong></div>

    <div class="cart-count">
      <button
        class="cart-icon"
        @click="changeItemQuantity('increment')"
      >
        <img src="../assets/icons/plus.svg" />
      </button>
      <span class="count">{{ product.count }}</span>
      <button
        class="cart-icon"
        @click="changeItemQuantity('decrement')"
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
  height: 112px;
  width: 100%;
  max-width: 600px;
  padding: 18px;
  border: 1px solid rgba(64, 64, 64, 0.1);
  box-shadow: 0 5px 10px rgba(154, 161, 177, .1);
}

.cart-price {
  font-size: 0.9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.cart-image {
  max-height: 64px;
}

.cart-title {
  font-size: 0.8rem;
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
