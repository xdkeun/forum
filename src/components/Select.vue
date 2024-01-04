<template>
  <div class="select-wrapper">
    <div class="icon-wrapper">
      <i :class="props.icon"></i>
    </div>
    <select class="select" v-model="selectValue" @change="selectChangeHandler">
      <option v-for="(select, index) in props.selects" :key="index" :value="select">{{ select }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';
const props = defineProps(['icon', 'selects']);
const selectValue = ref("");
const emit = defineEmits(['select-change'])
const selectChangeHandler = () => emit('select-change', selectValue.value);
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
