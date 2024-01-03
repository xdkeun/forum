<template>
  <div class="image-layout">
    <div v-if="previewImage">
      <img :src="previewImage" alt="사진" class="preview-image" />
    </div>
    <input type="file" ref="imageFile" @change="imageFileChangeHandler" accept="image/*" class="image-file-input" />
    <Button @click="imageClickHandler" :text=props.text />

  </div>
</template>

<script setup>
import Button from './Button.vue';
import { ref, defineProps } from 'vue';
const props = defineProps(["text"]);
const previewImage = ref(null);
const imageFile = ref(null);
const imageClickHandler = () => {
  if (imageFile.value) {
    imageFile.value.click();
  }
};
const imageFileChangeHandler = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      previewImage.value = reader.result;
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.value = null;
  }
};
</script>

<style scoped>
.image-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.image-file-input {
  display: none;
}

.preview-image {
  width: 300px;
  height: 100px;
}
</style>
