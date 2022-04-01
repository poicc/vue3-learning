import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home'
import About from '@/pages/About'

Vue.use(Router)
// export default new Router({
//   routers: [
//     {
//       path:"/home",
//       name:"Home",
//       components: Home
//     },
//     {
//       path:"/about",
//       name:"About",
//       components: About
//     },
//   ]
// })

const routers = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    components: Home
  },
  {
    path: "/about",
    name: "About",
    components: About
  },
]
const router = new Router({
  routers,
  mode: 'history'
})

export default router
