<template>
  <table id="students-table" border="0" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in list" :key="index">
        <td>{{ item.sNo }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.sex == 0 ? '男' : '女' }}</td>
        <td>{{ item.email }}</td>
        <td>{{ new Date().getFullYear() - item.birth }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.address }}</td>
        <td>
          <button class="success edit" data-index="0" @click="edit(item)">编辑</button>&nbsp;
          <button class="del" data-index="0" @click="del(item.sNo)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch('getStuList', 1);
  },
  computed: {
    list () {
      return this.$store.state.list;
    }
  },
  methods: {
    ...mapMutations(['changeModal', 'setEditStu']),
    ...mapActions(['delStuBySNo']),
    edit(item) {
      this.changeModal(true);
      this.setEditStu(item);
    },
    del(sNo) {
      let flag = window.confirm('确定要删除吗？');
      if (flag) {
        this.delStuBySNo(sNo);
      }
    }
  }
};
</script>

<style scoped>
</style>