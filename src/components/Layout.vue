<template>
  <main class="main">
    <section class="section">
      <slot />
    </section>
  </main>
</template>

<style scoped>
@font-face {
  font-family: 'Forum Font';
  src: url('@/assets/fonts/font.ttf')
}

.main {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  font-family: 'Forum Font'
}

.section {
  width: 700px;
  height: 100vh;
  background: white;
}
</style>
