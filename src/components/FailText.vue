<template>
  <div class="fail-layout">
    <i class="fa-solid fa-circle-exclamation"></i>
    <p class="fail-text">{{ props.text }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['text']);
</script>

<style scoped>
.fail-layout {
  display: flex;
  align-items: center;
  gap:5px;
  font-size:20px;
  font-weight: 600;
  color: red;
}
</style>