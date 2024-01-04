<template>
  <div class="signup">
    <img src="@/assets/images/logo.png" alt="포럼 로고" class="logo">
    <BigText :text="'회원가입'" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" @input-change="idChangeHandler" />
    <Input :type="'password'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" @input-change="passwordChangeHandler" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'닉네임'" @input-change="nicknameChangeHandler" />
    <Button :text="'회원가입'" @click="signupClickHandler" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import BigText from "@/components/BigText.vue";
import Input from "@/components/Input.vue"
import Button from "@/components/Button.vue"
import * as userService from "@/services/userService"
const id = ref("")
const password = ref("")
const nickname = ref("")
const idChangeHandler = (inputValue) => id.value = inputValue
const passwordChangeHandler = (inputValue) => password.value = inputValue
const nicknameChangeHandler = (inputValue) => nickname.value = inputValue
const signupClickHandler = () => {
  console.log(id.value, password.value, nickname.value)
  userService.signup(id.value, password.value, nickname.value)
  }
</script>

<style scoped>
.signup {
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
