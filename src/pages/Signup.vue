<template>
  <div class="signup">
    <img src="@/assets/images/logo.png" alt="포럼 로고" class="logo">
    <BigText :text="'회원가입'"/>
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" />
    <Input :type="'password'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'닉네임'" />
    <Button :text="'회원가입'" />
  </div>
</template>
<script setup>
import BigText from "@/components/BigText.vue";
import Input from "@/components/Input.vue"
import Button from "@/components/Button.vue"
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
