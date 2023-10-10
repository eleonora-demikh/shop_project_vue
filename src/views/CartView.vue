<script setup>
import { ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import CartItem from '../components/CartItem.vue';
import Modal from '../components/Modal.vue';

const products = ref([])
const total = ref(null)
const visibleModal = ref(false)
const router = useRouter();

const loadCartItems = () => {
  let storageProducts = JSON.parse(localStorage.getItem('cart')) || [];
  products.value = storageProducts

  total.value = storageProducts.reduce((accumulator, product) => {
    return accumulator + (product.price * product.count);
  }, 0).toFixed(2)
};
loadCartItems();

const openModal = () => {
  visibleModal.value = true;
  setTimeout(() => {
    localStorage.clear();
    router.push('/');
  }, 3000);
}

onUnmounted(() => {
  visibleModal.value = false;
});

</script>
<template>
  <div class="cart-page">
    <RouterLink
      to="/"
      class="top-nav"
    >
      <img
        src="../assets/icons/arrow-left.svg"
        alt=""
      />
      <span>Back to homepage</span>
    </RouterLink>
    <h1 class="title">Cart</h1>
    
    <section
      class="cart-list"
      v-if="products.length"
    >
      <CartItem
        @updateCardList="loadCartItems"
        class="card-item"
        v-for="product of products"
        :product="product"
        :key="product.id"
      />
    </section>

    <section v-else>
      <h3> There is nothing to show</h3>
    </section>

    <section
      class="total-area"
      v-if="total > 0"
    >
      <h4><span class="total-text">Total:</span> {{ total }} $</h4>
      <button @click="openModal" class="buy-button">Chechout</button>
    </section>
  </div>

  <Modal v-if="visibleModal"></Modal>
</template>

<style>

.modal-container {
  position: fixed;
  box-sizing: border-box;
  padding: 15px;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(78, 78, 78, 0.528);
  opacity: 0.5;
  overflow: hidden;
  z-index: 3;
}

.modal-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 4px 20px;
  z-index: 4;
}

.modalWindow-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modalWindow-text {
  width: 250px;
  margin: 15px 0;
  text-align: center;
  color: rgb(54, 53, 53);
}

.buy-button {
  margin-top: 12px;
  padding: 12px 20px;
  line-height: 40px;
  background-color: transparent;
  max-width: 600px;
  font-size: 1.2rem;
  color: rgb(61, 61, 61);
  border: 2px solid rgba(146, 144, 144, 0.274);
  border-radius: 30px;
  transition: 0.3s ease;
}

.buy-button:hover {
  transform: scale(1.1);
  background-color: rgba(175, 203, 175, 0.407);
  border-color: rgba(175, 203, 175, 0.407);
}

.total-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding-top: 20px;
  font-size: 1.7rem;
  border-top: 1px solid rgba(105, 106, 106, 0.31);
}

.total-text {
  font-size: 1.3rem;
  margin-right: 6px;
}

.cart-list {
  box-sizing: border-box;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  max-height: calc(100vh / 2);
  border: 1px solid rgba(145, 146, 146, 0.31);
  overflow-y: auto;
}

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
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 10px;
}

.top-nav {
  display: flex;
  align-items: center;
  color: rgb(154, 154, 154);
  font-size: 0.8rem;
}
</style>

