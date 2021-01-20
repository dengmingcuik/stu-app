<template>
  <div
    class="toast"
    v-if="over"
    :class="{'fide-in': showClass, 'fide-out': !showClass, 'success': type == 'success', 'fail': type == 'fail'}"
  >
    <div v-if="type == 'success'" style="color: #6bfa1f">√ {{ msg }}</div>
    <div v-if="type == 'fail'" style="color: #ec1b1b">× {{ msg }}</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 20px;
  font-weight: 600;
  z-index: 999;
}
.success {
  background-color: #f0f9eb;
}
.fail {
  background-color: #fef0f0;
}
@keyframes fideIn {
  0% {
    top: 0;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
@keyframes fideOut {
  0% {
    top: 40px;
    opacity: 1;
  }
  100% {
    top: 0;
    opacity: 0;
  }
}
.fide-in {
  animation: fideIn 0.5s;
}
.fide-out {
  animation: fideOut 0.5s;
}
</style>