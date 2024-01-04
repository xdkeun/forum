<template>
  <div class="modal-background">
    <div class="modal-content">
      <component :is="modalComponent" />
      <Button text="X" @click="modalCloseHandler" class="modal-close" />
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';
import { defineProps, ref, onMounted, watch, defineAsyncComponent, markRaw } from 'vue';
const props = defineProps(['modalContent']);
const modalComponent = ref(null);

// 마운트 시 초기 컴포넌트를 로드
onMounted(() => {
  loadComponent(props.modalContent);
});

// 동적 컴포넌트를 import하고 반환하는 함수
const loadComponent = (componentName) => {
  modalComponent.value = markRaw(defineAsyncComponent(() => import(`@/components/${componentName}.vue`)));
};

// modalContent prop의 변경 시마다 실행되는 함수
watch(() => props.modalContent, (newModalContent, oldModalContent) => {
  if (newModalContent !== oldModalContent) {
    loadComponent(newModalContent);
  }
});

import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();
const modalCloseHandler = () => {
  modalStore.close();
}
</script>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}

.modal-content {
  background: white;
  width: 500px;
  min-height: 500px;
  position: relative;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 100px;
}

.modal-close {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
