<template>
  <div class="write-layout">
    <BigText text="글작성" />
    <!-- <Input :type="'text'" :icon="'fa-solid fa-list'" :placeholder="'카테고리'" @input-change="categoryChangeHandler" /> -->
    <Select :icon="'fa-solid fa-list'" :selects="categories" @select-change="categoryChangeHandler" />
    <Input :type="'text'" :icon="'fa-solid fa-pen'" :placeholder="'제목'" @input-change="titleChangeHandler" />
    <Image text="사진첨부" />
    <Button text="글작성" @click="writeHandler"/>
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
const category = ref("");
const title = ref("");
const categoryChangeHandler = (selectValue) => category.value = selectValue
const titleChangeHandler = (inputValue) => title.value = inputValue
const writeHandler = () => {
  console.log(title.value, category.value)
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