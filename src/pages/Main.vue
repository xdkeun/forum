<template>
  <nav class="nav">
    <Category v-for="(category, index) in categories" :key="index" :text="category" class="category" />
  </nav>
  <div class="sort-wrapper">
    <SmallText v-for="(sort, index) in sorts" :key="index" :text="sort" class="sort" />
  </div>
  <div class="search-wrapper">
    <Search v-model="search" />
  </div>
  <Posts />
  <div class="footer-wrapper">
    <Footer />
  </div>
  <Modal v-if="modal.showModal" :modalContent="modal.modalContent" />
</template>

<script setup>
import Category from '@/components/Category.vue';
import Categories from '@/constants/categories'
import Search from '@/components/Search.vue';
import SmallText from '@/components/SmallText.vue';
import Sorts from "@/constants/sorts"
import Posts from "@/components/Posts.vue"
import Footer from '@/components/Footer.vue';
import Modal from "@/components/Modal.vue"
import { ref, toRef } from 'vue';

const categories = ref(Categories);
const sorts = ref(Sorts);
const search = ref("");

import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();
const modal = toRef(modalStore);
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
  margin: 5px;
  display: flex;
  justify-content: flex-end;
}

.sort-wrapper {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  cursor: pointer;
  margin: 10px 20px 0 10px;
}

.footer-wrapper {
  position: fixed;
  bottom: 0;
  width: 700px;
  z-index: 1;
  border-top: 0.5px solid darkgray;
}
</style>
