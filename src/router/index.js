import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import user from "../components/user.vue";
import Info from "../components/Info";
import SearchBook from "../components/SearchBook"
import manager from "../components/manager";
import UserManage from "../components/UserManage";
import BookManage from "../components/BookManage";
import MyBook from "../components/MyBook";

const routes = [
  // {
  //   path: '/',
  //   name: 'layout',
  //   component: layout,
  //   redirect: "/user",
  //   children:[
  //     {
  //       path: 'user',
  //       name: 'user',
  //       component: ()=>import("@/views/User")
  //     }
  //   ]
  //
  // // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: login,
  // }
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/user",
    name: "user",
    component: user,
  },
  {
    path: "/user/info",
    name: "Info",
    component: Info
  },
  {
    path: "/user/searchBook",
    name: "SearchBook",
    component: SearchBook
  },
  {
    path: "/user/myBook",
    name: "MyBook",
    component: MyBook
  },
  {
    path: "/manager",
    name: "manager",
    component: manager,
  },
  {
    path: "/manager/userManage",
    name: "UserManage",
    component: UserManage
  },
  {
    path: "/manager/BookManage",
    name: "BookManage",
    component: BookManage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
