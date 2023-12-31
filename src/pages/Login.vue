<template>
  <div class="login">
    <img src="@/assets/images/logo.png" alt="포럼 로고" class="logo">
    <BigText :text="'로그인'"/>
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" />
    <Input :type="'password'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" />
    <Button :text="'로그인'" />
    <router-link to="/signup">
      <SmallText :text="'회원가입을 하시겠습니까?'" />
    </router-link>
  </div>
</template>
<script setup>
import BigText from "@/components/BigText.vue";
import Input from "@/components/Input.vue"
import Button from "@/components/Button.vue"
import SmallText from "@/components/SmallText.vue"
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
