<template>
  <div class="search-wrapper">
    <input type="text" placeholder="검색" class="input" v-model="inputValue" @change="inputChangeHandler">
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const inputValue = ref("");
const emit = defineEmits(['input-change'])
const inputChangeHandler = () => emit('input-change', inputValue.value);
</script>

<style scoped>
.search-wrapper {
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

i {
  cursor: pointer;
}
</style>
