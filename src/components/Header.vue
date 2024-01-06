<template>
  <header class="header">
    <router-link to="/"><img src="@/assets/images/logo.png" alt="포럼 로고" class="logo"></router-link>
    <div class="profile" @click="profileClickHandler">
      <img src="@/assets/images/user.png" alt="프로필 사진" class="profile-image">
      <p> {{ nickname || "로그인" }}</p>
    </div>
  </header>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import * as userService from "@/services/userService";

const router = useRouter();
const nickname = ref("");

onBeforeMount(async () => {
  if (localStorage.getItem("forumLoginId")) {
    const user = await userService.getUser(localStorage.getItem("forumLoginId"));
    nickname.value = user.nickname;
  }
});

const profileClickHandler = () => {
  if (localStorage.getItem("forumLoginId")) {
    localStorage.removeItem("forumLoginId");
    nickname.value = "";
    alert("로그아웃에 성공했습니다.");
  } else {
    router.push("/login");
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 0.5px solid darkgray;
}

.logo {
  height: 70px;
  cursor: pointer;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border: 0.5px solid darkgray;
  border-radius: 50%;
  padding: 10px 15px;
  box-sizing: border-box;
  cursor: pointer;
  color: black;
}

.profile:hover {
  background: rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 30px;
  height: 30px;
}
</style>
