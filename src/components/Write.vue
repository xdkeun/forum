<template>
  <div class="write-layout">
    <BigText text="글작성" />
    <Select :icon="'fa-solid fa-list'" v-model="selectedCategory" :categories="categories" />
    <Input :type="'text'" :icon="'fa-solid fa-pen'" :placeholder="'제목'" v-model="title" />
    <Image text="사진첨부" />
    <Button text="글작성" @click="writeHandler" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from './Select.vue';
import Categories from '@/constants/categories'
import Input from './Input.vue';
import BigText from './BigText.vue';
import Image from './Image.vue';
import Button from './Button.vue';
const categories = ref(Categories);
const selectedCategory = ref(categories.value[0]);
const title = ref("");
const writeHandler = () => {
  console.log(title.value, selectedCategory.value)
}
</script>

<style scoped>
.write-layout {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
