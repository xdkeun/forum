import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "@/styles/reset.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Main from "@/pages/Main.vue";
import Login from "@/pages/Login.vue";
import Signup from "@/pages/Signup.vue";
import PostDetail from "@/pages/PostDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Main },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
    { path: "/post/:postId", name: "PostDetail", component: PostDetail },
  ],
});

createApp(App).use(createPinia()).use(router).mount("#app");
// json-server --watch db.json --port 4000
