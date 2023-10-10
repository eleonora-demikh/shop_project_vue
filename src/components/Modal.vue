<script setup>
</script>

<template>
  <div>
    <div class="modal-container">{}</div>
    <div class="modal-window">
      <div class="modalWindow-content">
        <div class="modalWindow-text">
          We have successfully received your order!
          <br />
          <br />
          <span>
            Redirecting to homepage...
          </span>
        </div>
      </div>
    </div>
  </div>
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
</style>

