<template>
  <div class="bookmark-layout">
    <BigText text="북마크" />
    <ul class="post-wrapper">
      <li class="text title">제목</li>
      <li class="text bookmark-header">북마크</li>
    </ul>
    <ul class="post-wrapper" v-for="(post, index) in postList" :key="index">
      <li class="text title">{{ post.title }}</li>
      <i class="fa-solid fa-star text bookmark yellow"></i>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BigText from "./BigText.vue";
import postlist from "@/constants/postlist"
const postList = ref(postlist);
</script>
<style scoped>
.bookmark-layout {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.post-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  gap: 5px;
  border-bottom: 0.5px solid darkgray;
}


.title {
  width: 300px;
}

.bookmark-header {
  width: 50px;
}

.bookmark {
  width: 50px;
  color: darkgray;
}

.yellow {
  color: #ffd400;
}

.text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>