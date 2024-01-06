<template>
  <div class="myinfo-layout">
    <BigText text="내정보" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" v-model="userId" />
    <Input :type="'text'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" v-model="password" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'닉네임'" v-model="nickname" />
    <FailText :text="failText" v-if="failText" />
    <Button text="정보수정" @click="userUpdateHandler" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BigText from './BigText.vue';
import Input from './Input.vue';
import Button from './Button.vue';
import FailText from './FailText.vue';
import * as userService from "@/services/userService";

const id = ref("")
const userId = ref("");
const password = ref("");
const nickname = ref("");
const failText = ref("")
onMounted(async () => {
  const user = await userService.getUser(localStorage.getItem("forumLoginId"));
  id.value = user.id;
  userId.value = user.userId;
  password.value = user.password;
  nickname.value = user.nickname;
});

const userUpdateHandler = async () => {
  try {
    await userService.updateUser(id.value, userId.value, password.value, nickname.value);
    alert("정보수정에 성공했습니다.")
  } catch (error) {
    if (error.message === "validateUserIdError") {
      failText.value = "아이디는 4자 이상이어야 합니다.";
    } else if (error.message === "validatePasswordError") {
      failText.value = "비밀번호는 6자 이상이어야 합니다.";
    } else if (error.message === "validateNicknameError") {
      failText.value = "닉네임은 2자 이상이어야 합니다.";
    } else {
      failText.value = "알 수 없는 오류가 발생했습니다.";
    }
  }
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
