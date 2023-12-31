<template>
  <h3 class="big-text">{{ props.text }}</h3>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['text']);
</script>

<style scoped>
.big-text {
  font-size: 25px;
  font-weight: 600;
}
</style>