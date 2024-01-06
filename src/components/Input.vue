<template>
  <div class="input-wrapper">
    <i :class="props.icon"></i>
    <input :type="props.type" :placeholder="props.placeholder" class="input" :value="props.modelValue"
      @input="inputChangeHandler" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps(['type', 'icon', 'placeholder', 'modelValue']);
const emit = defineEmits(['update:modelValue']);
const inputChangeHandler = (event) => emit('update:modelValue', event.target.value);
</script>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 300px;
  height: 50px;
  border: 0.5px solid #111111;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 18px;
}

.input {
  all: unset;
  width: 270px;
}
</style>
