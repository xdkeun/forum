<template>
  <div class="select-wrapper">
    <div class="icon-wrapper">
      <i :class="props.icon"></i>
    </div>
    <select class="select" v-model="selectedCategory" @change="selectChangeHandler">
      <option v-for="(select, index) in props.categories" :key="index" :value="select">{{ select }}</option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps(['icon', 'categories']);
const selectedCategory = ref(props.categories[0]);
const emit = defineEmits(['update:modelValue']);
const selectChangeHandler = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
.select-wrapper {
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

.icon-wrapper {
  display: flex;
  align-items: center;
}

.select {
  all: unset;
  width: 100%;
}
</style>
