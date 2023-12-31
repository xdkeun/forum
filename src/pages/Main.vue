<template>
  <nav class="nav">
    <Category v-for="(category, index) in categories" :key="index" :text="category" class="category" />
  </nav>
  <div class="search-wrapper">
    <Search />
  </div>
</template>

<script setup>
import Category from '@/components/Category.vue';
import Search from '@/components/Search.vue';
import { ref } from 'vue';

const categories = ref(["전체", "카테고리1", "카테고리2", "카테고리3", "카테고리4"]);

</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: 0.5px solid darkgray;
  flex-wrap: wrap;
}

.category:hover {
  border-bottom: 3px solid #111111;
  color: #111111;
}

.search-wrapper {
  margin: 5px 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
