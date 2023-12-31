<template>
  <Input :type="'text'" :icon="'fa-solid fa-user'" :placeholder="'아이디'" />
  <Input :type="'password'" :icon="'fa-solid fa-lock'" :placeholder="'비밀번호'" />
</template>

<script setup>
import Input from "@/components/Input.vue"
</script>
