<template>
  <div>
    <i :class="props.icon"></i>
    <input :type="props.type" :placeholder="props.placeholder">
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['type', 'icon', 'placeholder']);
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 300px;
  height: 50px;
  border: 0.5px solid #111111;
  padding: 0 5px;
  font-size: 18px;
}

img {
  width: 30px;
  height: 70%;
}

input {
  all: unset;
  width: 270px;
}
</style>
