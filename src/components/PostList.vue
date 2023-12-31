<template>
  <ul class="post-wrapper" v-for="(post, index) in postList" :key="index">
    <li class="text category">{{ post.category }}</li>
    <li class="text title">{{ post.title }}<span class="text comment">[5]</span></li>
    <li class="text author">{{ post.author }}</li>
    <li class="text date">{{ post.date }}</li>
    <li class="text tabom">{{ post.tabom }}</li>
    <i class="fa-solid fa-star text scrap yellow"></i>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import postlist from "@/constants/postlist"
const postList = ref(postlist);
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

.scrap {
  width: 20px;
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