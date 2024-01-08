<template>
  {{ post }}
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import * as postService from "@/services/postService"

const route = useRoute();
const post = ref("")
onMounted(async () => {
  post.value = await postService.getPost(route.params.postId);
});
</script>
