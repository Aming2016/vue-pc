import Vue from "vue";
import Router from "vue-router";
import store from "../store"; //vuex
const Login = resolve => require(["@/page/login/index"], resolve); // 登录页
const Home = resolve => require(["@/page/home/index"], resolve); // 登录页
const Mine = resolve => require(["@/page/mine/index"], resolve); // 登录页
Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
      newuser:false, //需要刷新个人信息
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
      newuser:false, //需要刷新个人信息
    }
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine,
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      newuser:true, //需要刷新个人信息
    }
  }
];

// 路由模式
const router = new Router({
  mode: "history", //history   hash
  routes
});


// 路由监听每次跳转路由回到最上面
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

//路由监听
router.beforeEach((to, from, next) => {
  //是否需要更新信息请求
  if(to.meta.newuser){
    store.dispatch("auth/fetchUser");
  }
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (store.state.auth.token) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      // 将跳转的路由path作为参数，登录成功后跳转到该路由
      next({
        path: "/login",
        query: { redirect: to.fullPath } 
      });
    }
  } else {
    next();
  }
});
export default router;
