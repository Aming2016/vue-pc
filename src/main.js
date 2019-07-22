// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './layout';//网站基本布局
import router from './router'//路由
import store from './store';//数据管理store
import './components';//公共组件 element组件
import './sass/index.scss';//初始化css  公共scss  sass使用
import './common/js/vfilter';   //过滤器
import {axios,api } from'./common/js/http';   //axios封装   数据api接口存储
Vue.prototype.$api=api;
Vue.prototype.$http=axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
