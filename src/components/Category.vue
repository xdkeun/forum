<template>
  <span>{{ props.text }}</span>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['text']);
</script>

<style scoped>
span {
  color: darkgray;
  cursor: pointer;
  font-size: 20px;
  padding: 0 5px;
}

</style>