<template>
  <div class="write-layout">
    <BigText text="글작성" />
    <Input :type="'text'" :icon="'fa-solid fa-list'" :placeholder="'카테고리'" @input-change="categoryChangeHandler" />
    <Input :type="'text'" :icon="'fa-solid fa-pen'" :placeholder="'제목'" @input-change="titleChangeHandler" />
    <Image text="사진첨부" />
    <Button text="글작성" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Input from './Input.vue';
import BigText from './BigText.vue';
import Image from './Image.vue';
import Button from './Button.vue';
const title = ref("")
const category = ref("")
const titleChangeHandler = (inputValue) => title.value = inputValue
const categoryChangeHandler = (inputValue) => category.value = inputValue

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