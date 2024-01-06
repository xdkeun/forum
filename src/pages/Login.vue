<template>
  <div class="login">
    <img src="@/assets/images/logo.png" alt="포럼 로고" class="logo">
    <BigText :text="'로그인'" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" @input-change="userIdChangeHandler" />
    <Input :type="'password'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" @input-change="passwordChangeHandler" />
    <FailText :text="failText" v-if="failText" />
    <Button :text="'로그인'" @click="loginClickHandler" />
    <router-link to="/signup">
      <SmallText :text="'회원가입을 하시겠습니까?'" />
    </router-link>
  </div>
</template>
<script setup>
import * as userService from "@/services/userService"
import { useRouter } from 'vue-router';
import { ref } from "vue";
import BigText from "@/components/BigText.vue";
import Input from "@/components/Input.vue"
import Button from "@/components/Button.vue"
import SmallText from "@/components/SmallText.vue"
import FailText from "@/components/FailText.vue";

const router = useRouter();
const userId = ref("")
const password = ref("")
const failText = ref("")

const userIdChangeHandler = (inputValue) => userId.value = inputValue
const passwordChangeHandler = (inputValue) => password.value = inputValue
const loginClickHandler = async () => {
  try {
    await userService.login(userId.value, password.value);
    alert("로그인에 성공했습니다.")
    localStorage.setItem("forumLoginUserId", userId.value)
    router.push('/');
  } catch (error) {
    if (error.message === "loginError") {
      failText.value = "일치하는 회원이 없습니다.";
    } else {
      failText.value = "알 수 없는 오류가 발생했습니다.";
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.logo {
  height: 100px;
}
</style>
