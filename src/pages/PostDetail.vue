<template>
  <div class="layout">
    <div class="flex-layout">
      <BigText :text="post.title" />
      <SmallText :text="post.category" />
    </div>
    <div class="flex-layout">
      <SmallText :text="user.nickname" />
      <SmallText :text="formatDate(post.date)" />
    </div>
    <p class="content">{{ post.content }}</p>
    <BigText :text="'댓글'" />
    <div class="flex-layout">
      <Input :type="'text'" :icon="'fa-solid fa-comment'" :placeholder="'댓글을 작성하세요'" v-model="comment" />
      <Button :text="'댓글 작성'" @click="commentWriteHandler" />
    </div>
    <FailText :text="failText" v-if="failText" />
    <ul class="comment-layout" v-for="(comment, index) in comments" :key="index">

      <p class="comment">{{ comment.comment }}</p>
      <div class="flex-layout">
        <SmallText :text="commentsUsers[index] ? commentsUsers[index].nickname : '알 수 없음'" />
        <SmallText :text="formatDate(comment.date)" />
      </div>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import * as postService from "@/services/postService"
import * as userService from "@/services/userService"
import * as commentService from "@/services/commentService"
import { formatDate } from "@/utils/helpers";
import BigText from '@/components/BigText.vue';
import SmallText from '@/components/SmallText.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import FailText from '@/components/FailText.vue';

const route = useRoute();
const post = ref("")
const user = ref("")
const comment = ref("")
const comments = ref([])
const commentsUsers = ref([])
const failText = ref("")
onMounted(async () => {
  post.value = await postService.getPost(route.params.postId);
  user.value = await userService.getUser(post.value.userId);
  comments.value = await commentService.getComment(post.value.id)
  for (const comment of comments.value) {
    const user = await userService.getUser(comment.userId);
    commentsUsers.value.push(user);
  }
}
);

const commentWriteHandler = async () => {
  try {
    await commentService.write(comment.value, post.value.id);
    alert("댓글 작성에 성공했습니다.")
    comment.value = ""
  } catch (error) {
    if (error.message === "validateCommentError") {
      failText.value = "댓글 내용을 입력하세요.";
    } else {
      failText.value = "알 수 없는 오류가 발생했습니다.";
    }
  }
};
</script>

<style scoped>
.layout {
  padding: 10px;
}

.flex-layout {
  display: flex;
  align-items: center;
  gap: 5px;
}

.content {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  height: 200px;
  border: 1px solid #111111;
  border-radius: 5px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.comment-layout {
  padding: 5px 0;
  border-bottom: 0.5px solid darkgray;
}

.comment {
  font-size: 18px;
}
</style>