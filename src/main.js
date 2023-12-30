import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Main from "@/pages/Main.vue";
import Signin from "@/pages/Signin.vue";
import Signup from "@/pages/Signup.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Main },
    { path: "/signin", component: Signin },
    { path: "/signup", component: Signup },
  ],
});

createApp(App).use(router).mount("#app");
