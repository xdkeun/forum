<template>
  <div class="signup">
    <img src="@/assets/images/logo.png" alt="포럼 로고" class="logo">
    <BigText :text="'회원가입'" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" v-model="userId" />
    <Input :type="'password'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" v-model="password" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'닉네임'" v-model="nickname" />
    <FailText :text="failText" v-if="failText" />
    <Button :text="'회원가입'" @click="signupClickHandler" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import BigText from "@/components/BigText.vue";
import Input from "@/components/Input.vue"
import Button from "@/components/Button.vue"
import FailText from "@/components/FailText.vue";
import * as userService from "@/services/userService"

const router = useRouter();
const userId = ref("");
const password = ref("");
const nickname = ref("");
const failText = ref("");
const signupClickHandler = async () => {
  try {
    await userService.signup(userId.value, password.value, nickname.value);
    alert("회원가입에 성공했습니다.")
    router.push('/');
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
