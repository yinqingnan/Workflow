/*
 * @Descripttion:
 * @Autor: yqn
 * @Date: 2021-07-20 17:50:57
 * @LastEditTime: 2021-07-23 10:19:11
 * @FilePath: \src\main.js
 * @LastEditors: yqn
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ant from "ant-design-vue";
import DrawFlow from "./components/DrawFlow";
import "ant-design-vue/dist/antd.less";
Vue.config.productionTip = false;
Vue.use(ant);
Vue.use(DrawFlow);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
