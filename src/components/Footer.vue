<template>
  <footer>
    <div class="footer-nav" v-for="(nav, index) in navList" :key="index">
      <img :src="require(`@/assets/images/${nav.image}`)" alt="메뉴 사진" class="footer-nav-image">
      <p>{{ nav.text }}</p>
    </div>
  </footer>
</template>

<script setup>
import navlist from '@/constants/navlist';
import { ref } from 'vue';
const navList = ref(navlist)
</script>

<style scoped>
footer {
  display: flex;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  box-sizing: border-box;
  cursor: pointer;
  color: black;
  width: 100%;
}

.footer-nav:hover {
  background: rgba(0, 0, 0, 0.1);
}

.footer-nav-image {
  width: 30px;
  height: 30px;
}
</style>