<template>
  <div class="myinfo-layout">
    <BigText text="내정보" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" @input-change="idChangeHandler" />
    <Input :type="'password'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" @input-change="passwordChangeHandler" />
    <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'닉네임'" @input-change="nicknameChangeHandler" />
    <Image text="프로필사진" />
    <Button text="정보수정" @click="buttonClickHandler" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BigText from './BigText.vue';
import Input from './Input.vue';
import Button from './Button.vue';
import Image from './Image.vue';
const id = ref("")
const password = ref("")
const nickname = ref("")
const idChangeHandler = (inputValue) => id.value = inputValue
const passwordChangeHandler = (inputValue) => password.value = inputValue
const nicknameChangeHandler = (inputValue) => nickname.value = inputValue
const buttonClickHandler = () => {
  console.log(id.value, password.value, nickname.value)
}
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