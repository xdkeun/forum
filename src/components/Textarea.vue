<template>
  <textarea class="textarea" :placeholder="props.placeholder" :value="props.modelValue" @change="textareaChangeHandler" />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps(['placeholder', 'modelValue']);
const emit = defineEmits(['update:modelValue']);
const textareaChangeHandler = (event) => emit('update:modelValue', event.target.value);
</script>

<style scoped>
.textarea {
  all: unset;
  width: 280px;
  height: 200px;
  border: 0.5px solid #111111;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
}
</style>
