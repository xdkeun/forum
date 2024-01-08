<template>
  <ul class="post-wrapper">
    <li class="text category">카테고리</li>
    <li class="text title">제목<span class="text comment">[댓글]</span></li>
    <li class="text author">작성자</li>
    <li class="text date">날짜</li>
    <li class="text tabom">따봉</li>
    <li class="text bookmark-header">북마크</li>
  </ul>
  <ul class="post-wrapper" v-for="(post, index) in posts" :key="index" @click="postClickHandler(post.id)">
    <li class="text category">{{ post.category }}</li>
    <li class="text title">{{ post.title }}<span class="text comment">[5]</span></li>
    <li class="text author">{{ users[index] ? users[index].nickname : '알 수 없음' }}</li>
    <li class="text date">{{ formatDate(post.date) }}</li>
    <li class="text tabom">{{ post.tabom }}</li>
    <i class="fa-solid fa-star text bookmark yellow"></i>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import * as postService from "@/services/postService"
import * as userService from "@/services/userService"
import { formatDate } from "@/utils/helpers";

const posts = ref([]);
const users = ref([]);

onMounted(async () => {
  const response = await postService.getPosts();
  posts.value = response;
  for (const post of posts.value) {
    const user = await userService.getUser(post.userId);
    users.value.push(user);
  }
});

const router = useRouter();
const postClickHandler = (id) => {
  router.push({ name: 'PostDetail', params: { postId: id } });
}
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