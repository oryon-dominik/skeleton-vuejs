// import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import("../views/AboutView.vue"),
//     },
//   ],
// });

// export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { useApplication } from "../stores/application";
import Home from "../pages/Home.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { exposedToPublic: true }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue")
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("../pages/Login.vue")
  // },
  // {
  //   path: "/logout",
  //   name: "Logout",
  //   component: () => import("../pages/Logout.vue"),
  //   meta: { requiresAuth: true }
  // },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("../components/TodoList.vue"),
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
    component: () => import("../pages/NotFound.vue")
  }
];

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
