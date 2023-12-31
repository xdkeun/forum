<template>
  <button class="button">{{props.text}}</button>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['text']);</script>
<style scoped>
.button {
  all: unset;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  background: #111111;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>