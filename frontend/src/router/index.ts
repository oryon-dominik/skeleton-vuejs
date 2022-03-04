import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import { useApplication } from "../stores/application"
import HomePage from "../pages/HomePage.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: { exposedToPublic: true }
  },
  {
    path: "/about",
    name: "AboutPage",
    // route level code-splitting
    // this generates a separate chunk (AboutPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/AboutPage.vue")
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../pages/LoginPage.vue")
  },
  // {
  //   path: "/logout",
  //   name: "LogoutPage",
  //   component: () => import("../pages/LogoutPage.vue"),
  //   meta: { requiresAuth: true }
  // },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("../components/ToDoList.vue")
    // meta: { requiresAuth: true }
  },
  // {
  //   path: "/todos/:id",
  //   name: "TodoList",
  //   component: () => import("../components/todos/TodoListDetail.vue"),
  //   meta: { requiresAuth: true }
  // },
  {
    path: "/:catchAll(.*)",
    component: () => import("../pages/NotFoundPage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Route Protection
// router.beforeEach((to, from) => {
//   if (to.meta.requiresAuth && !store.state.user.isLoggedIn) {
//     // save the location where we want to come back to
//     return {path: "/login", query: { redirect: to.fullPath }}
//   }
//   if (!to.meta.requiresAuth || store.state.user.isLoggedIn) {
//     return true
//   }
//   // explicitly return false to cancel the navigation for all other cases
//   return false

// })
router.afterEach((to, from) => {
  const application = useApplication()
  application.setLastRoute(from.fullPath)
})

export default router
