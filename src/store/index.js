import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal: false,
    editStu: {},
    list: [],
    count: 0,
    totalPage: 0,
    nowPage: 1,
    keyword: ''
  },
  mutations: {
    changeModal(state, bool) {
      state.showModal = bool;
    },
    setEditStu(state, stu) {
      state.editStu = stu;
    },
    setList(state, list) {
      state.list = list;
    },
    setCount(state, count) {
      state.count = count;
      state.totalPage = Math.ceil(count / 5);
    },
    setNowPage(state, n) {
      // 上一页-2   下一页-1
      if (n === -2 && state.nowPage > 1) {
        state.nowPage--;
      } else if (n === -1 && state.nowPage < state.totalPage) {
        state.nowPage++;
      } else if (n !== -1 && n !== -2) {
        state.nowPage = n;
      }
    },
    setKeyword(state, k) {
      state.keyword = k;
    }
  },
  actions: {
    getStuList({ commit, state }, page) {
      if (page) {
        commit('setNowPage', page);
      }
      if (state.keyword !== '') {
        return api.searchStu(state.keyword, state.nowPage).then(data => {
          commit('setList', data.data.data.searchList);
          commit('setCount', data.data.data.cont);
        })
      } else {
        return api.findByPage(state.nowPage).then(data => {
          commit('setList', data.data.data.findByPage);
          commit('setCount', data.data.data.cont);
        });
      }
    },
    updateStu({ commit, state }, stu) {
      return api.updateStu(stu).then(data => {
        return new Promise((resolve, reject) => {
          if (data.data.status == 'success') {
            commit('changeModal', false);
            resolve({
              type: 'success',
              msg: data.data.msg
            })
            Object.assign(state.editStu, stu);
          } else {
            reject({
              type: 'fail',
              msg: data.data.msg
            })
          }
        })
      })
    },
    delStuBySNo({ dispatch, state }, sNo) {
      api.delStuBySNo(sNo).then(data => {
        if (state.nowPage > Math.ceil((state.count - 1) / 5)) {
          dispatch('getStuList', state.nowPage - 1);
        } else {
          dispatch('getStuList');
        }
      })
    }
  },
  modules: {
  }
})
