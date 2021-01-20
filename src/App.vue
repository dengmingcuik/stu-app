<template>
  <div class="wrapper">
    <sys-header></sys-header>
    <sys-menu></sys-menu>
    <div class="right-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import sysHeader from './components/sysHeader';
import sysMenu from './components/sysMenu';
export default {
  components: {
    sysHeader,
    sysMenu
  }
};
</script>

<style scoped>
@import url('./assets/css/index.css');
</style>