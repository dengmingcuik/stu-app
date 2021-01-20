import Vue from 'vue'
import VueRouter from 'vue-router'
import stuList from '../views/stuList'
import addStu from '../views/addStu'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/stuList',
      name: 'stuList',
      component: stuList
    },
    {
      path: '/addStu',
      name: 'addStu',
      component: addStu
    },
    {
      path: '*',
      redirect: '/stuList'
    }
  ],
  linkActiveClass: "show-list"
})
