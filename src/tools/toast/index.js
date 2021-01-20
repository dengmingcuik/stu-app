import Vue from 'vue';
import toast from './index.vue';
const Toast = Vue.extend(toast);
export default function crateToast({ duraction = 2000, msg, type }) {
  const app = new Toast({
    data: {
      showClass: true,
      over: true,
      msg,
      type
    },
    el: document.createElement('div')
  })
  document.body.appendChild(app.$el);
  setTimeout(_ => {
    app.showClass = false;
  }, duraction - 300)
  setTimeout(_ => {
    app.over = false;
  }, duraction)
}