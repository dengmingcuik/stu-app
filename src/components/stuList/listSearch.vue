<template>
  <div class="search-wrap">
    <label for="inp">关键字搜索</label>
    <input type="text" id="inp" placeholder="请输入学号或姓名或地址" v-model="keyword" />
    <button class="search-btn" @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    search() {
      this.$store.commit("setKeyword", this.keyword);
      this.$store.dispatch("getStuList", 1);
    }
  }
};
</script>

<style scoped>
</style>