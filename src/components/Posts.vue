<template>
  <ul class="post-wrapper">
    <li class="text category">카테고리</li>
    <li class="text title">제목<span class="text comment">[댓글]</span></li>
    <li class="text author">작성자</li>
    <li class="text date">날짜</li>
    <li class="text tabom">따봉</li>
    <li class="text bookmark-header">북마크</li>
  </ul>

  <ul class="post-wrapper" v-for="(post, index) in posts" :key="index">
    <li class="text category">{{ post.category }}</li>
    <li class="text title">{{ post.title }}<span class="text comment">[5]</span></li>
    <li class="text author">{{ post.author }}</li>
    <li class="text date">{{ post.date }}</li>
    <li class="text tabom">{{ post.tabom }}</li>
    <i class="fa-solid fa-star text bookmark yellow"></i>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as postService from "@/services/postService"
const posts = ref("")
onMounted(async () => {
  const response = await postService.getPosts();
  posts.value = response;
});
</script>


<style scoped>
.post-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  gap: 5px;
  border-bottom: 0.5px solid darkgray;
}

.category {
  width: 70px;
}

.title {
  width: 250px;
}

.author {
  width: 100px;
}

.date {
  width: 140px;
}

.tabom {
  width: 30px;
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

.comment {
  color: darkgray;
  font-size: 14px;
}
</style>