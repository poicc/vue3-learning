import Vue from 'vue'
import VueRouter from 'vue-router'
//vuetify提供的定位功能，回到上一个路由的时候可以定位到之前的位置
import goTo from 'vuetify/es5/services/goto'
import store from '../store'

import Index from '../views/Index.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: Index
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('../views/Message.vue')
      },
      {
        path: 'tags',
        name: 'Tags',
        component: () => import('../views/Tags.vue')
      },
      {
        path: 'article/:id',
        name: 'ArticleDetail',
        component: () => import('../views/ArticleDetail.vue')
      },
      {
        path: 'my/:id',
        name: 'My',
        component: () => import('../views/My.vue'),
        redirect: 'my/:id/userinfo',
        children: [
          {
            path: 'userinfo',
            name: 'UserInfo',
            component: () => import('../views/UserInfo.vue')
          },
          {
            path: 'about',
            name: 'About',
            component: () => import('../views/About.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/Page404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

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
  routes
})


router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  let isLogin = store.state.loginStatus;
  console.log(isLogin)
  if (to.name === 'Login') {
    if (isLogin) {
      next({
        path: '/index'
      })
    }
  } else if (!isLogin) {
    next({
      name: 'Login' // 跳转到登录页
    })
  }
  next()
});

export default router
