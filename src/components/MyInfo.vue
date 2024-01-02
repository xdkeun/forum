<template>
  <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" @input-change="idChangeHandler" />
  <Input :type="'password'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" @input-change="passwordChangeHandler" />
  <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'닉네임'" @input-change="nicknameChangeHandler" />
  <Button text="수정" @click="buttonClickHandler" />
</template>

<script setup>
import Input from './Input.vue';
import Button from './Button.vue';
import { ref } from 'vue';
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