<template>
  <div class="modal" id="modal">
    <div class="mask" @click="hide"></div>
    <div class="modal-content" id="modal-content">
      <div class="title">
        <h2>编辑信息</h2>
      </div>
      <form id="modal-form">
        <div class="form-con">
          <div class="item">
            <label for="sNo">学号：</label>
            <input id="sNo" name="sNo" type="text" class="text" :value="editStu.sNo" @input="changeUser('sNo', $event.target.value)" ref='sNo'/>
          </div>
          <div class="item">
            <label for="name">姓名：</label>
            <input id="name" name="name" type="text" class="text" :value="editStu.name" @input="changeUser('name', $event.target.value)" ref='name'/>
          </div>
          <div class="item section">
            <label for="sex">性别：</label>
            <div class="con">
              <input name="sex" id="male" type="radio" value="0" :checked="editStu.sex === 0" @change="changeUser('sex', 0)" ref='sex'/>
              <label for="male" class="sex">男</label>
              <input name="sex" id="female" type="radio" value="1" :checked="editStu.sex === 1" @change="changeUser('sex', 1)"/>
              <label for="female" class="sex">女</label>
            </div>
          </div>
          <div class="item">
            <label for="email">邮箱：</label>
            <input id="email" name="email" class="text" type="text" :value="editStu.email" @input="changeUser('email', $event.target.value)" ref='email'/>
          </div>
          <div class="item">
            <label for="birth">出生年：</label>
            <input id="birth" name="birth" class="text" type="text" :value="editStu.birth" @input="changeUser('birth', $event.target.value)" ref='birth'/>
          </div>
          <div class="item">
            <label for="phone">手机号：</label>
            <input id="phone" name="phone" class="text" type="text" :value="editStu.phone" @input="changeUser('phone', $event.target.value)" ref='phone'/>
          </div>
          <div class="item">
            <label for="address">住址：</label>
            <input type="text" class="text" name="address" id="address" :value="editStu.address" @input="changeUser('address', $event.target.value)" ref='address'/>
          </div>
          <div class="btn item">
            <input type="button" value="提交" class="submit" @click="commit"/>
            <input type="button" value="重置" id="reset" class="reset" @click="reset"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    ...mapActions(['updateStu']),
    hide() {
      this.$store.commit("changeModal", false);
    },
    changeUser(key, val) {
      this.user[key] = val;
    },
    commit() {
      let user = Object.assign({}, this.editStu, this.user);
      this.updateStu(user).then(data => {
        this.$toast(data);
      }).catch(err => {
        this.$toast(err);
      })
    },
    reset () {
      for (var prop in this.$refs) {
        if (prop !== 'sex') {
          this.user[prop] = this.$refs[prop].value = '';
        }
      }
      this.user.sex = 0;
      this.$refs.sex.checked = true;
    }
  },
  computed: {
    ...mapState(["editStu"])
  }
};
</script>

<style scoped>
</style>