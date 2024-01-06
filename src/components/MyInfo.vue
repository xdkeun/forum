<template>
  <div class="myinfo-layout">
    <BigText text="내정보" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" v-model="userId" />
    <Input :type="'text'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" v-model="password" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'닉네임'" v-model="nickname" />
    <Image text="프로필사진" />
    <Button text="정보수정" @click="userUpdateClickHandler" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BigText from './BigText.vue';
import Input from './Input.vue';
import Button from './Button.vue';
import Image from './Image.vue';
import * as userService from "@/services/userService";

const userId = ref("");
const password = ref("");
const nickname = ref("");
onMounted(async () => {
  const user = await userService.getUser(localStorage.getItem("forumLoginUserId"));
  userId.value = user.userId;
  password.value = user.password;
  nickname.value = user.nickname;
});

const userUpdateClickHandler = () => {
  console.log(userId.value, password.value, nickname.value);
};
</script>

<style scoped>
.myinfo-layout {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
