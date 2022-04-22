import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import Index from "../views/Index.vue";
//vuetify提供的定位功能，回到上一个路由的时候可以定位到之前的位置
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: '',
        component: Index,
        redirectTo: '/index'
      },
      {
        path: "index",
        name: "Index",
        component: Index
      },
      {
        path: "my",
        name: "My",
        component: () => import('../views/My.vue')
      },
      {
        path: "message",
        name: "Message",
        component: () => import('../views/Message.vue')
      },
      {
        path: "tag",
        name: "Tags",
        component: () => import('../views/Tags.vue')
      }
    ]
  },
  {
    path: "login",
    name: "Login",
    component: () => import('../views/Login.vue')
  },
  {
    path: "404",
    name: "Page404",
    component: () => import('../views/Page404.vue')
  }
];

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },
  routes,
});

export default router;
