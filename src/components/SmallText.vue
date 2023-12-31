<template>
  <p class="small-text">{{ props.text }}</p>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['text']);
</script>

<style scoped>
.small-text{
  font-size:15px;
  color:darkgray;
}
</style>