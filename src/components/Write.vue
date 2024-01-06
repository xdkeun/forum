<template>
  <div class="write-layout">
    <BigText text="글작성" />
    <Select :icon="'fa-solid fa-list'" v-model="selectedCategory" :categories="categories" />
    <Input :type="'text'" :icon="'fa-solid fa-pen'" :placeholder="'제목'" v-model="title" />
    <Textarea :placeholder="'글의 내용을 입력하세요.'" v-model="content" />
    <FailText :text="failText" v-if="failText"/>
    <Button text="글작성" @click="writeHandler" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import * as postService from "@/services/postService";
import Select from './Select.vue';
import Categories from '@/constants/categories'
import Input from './Input.vue';
import FailText from './FailText.vue';
import Textarea from './Textarea.vue';
import BigText from './BigText.vue';
import Button from './Button.vue';
const categories = ref(Categories);
const selectedCategory = ref(categories.value[0]);
const title = ref("");
const content = ref("");
const failText = ref("")
const writeHandler = async () => {
  try {
    await postService.write(selectedCategory.value, title.value, content.value);
    alert("글 작성에 성공했습니다.")
  } catch (error) {
    if (error.message === "validateCategoryError") {
      failText.value = "카테고리는 필수사항입니다.";
    } else if (error.message === "validateTitleError") {
      failText.value = "글 제목은 2자 이상이어야 합니다.";
    } else if (error.message === "validateContentError") {
      failText.value = "글 내용은 6자 이상이어야 합니다.";
    } else {
      failText.value = "알 수 없는 오류가 발생했습니다.";
    }
  }
};
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
