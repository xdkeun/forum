<template>
  <div class="search-wrapper">
    <input type="text" placeholder="검색" class="input">
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
</template>

<style scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 300px;
  height: 50px;
  border: 0.5px solid #111111;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 18px;
}

.input {
  all: unset;
  width: 270px;
}

i {
  cursor: pointer;
}
</style>
