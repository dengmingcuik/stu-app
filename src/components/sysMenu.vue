<template>
  <div class="left-menu">
    <h3 class="title">学生管理</h3>
    <ul class="list">
      <router-link tag="li" to="/stuList" class="student-list student-item">
        <a href="#">学生列表</a>
      </router-link>
      <router-link tag="li" to="/addStu" class="student-add student-item">
        <a href="#">新增学生</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>