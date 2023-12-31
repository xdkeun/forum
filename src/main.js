import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "@/styles/reset.css";
import '@fortawesome/fontawesome-free/css/all.css';

import Main from "@/pages/Main.vue";
import Login from "@/pages/Login.vue";
import Signup from "@/pages/Signup.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Main },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
  ],
});

createApp(App).use(router).mount("#app");
