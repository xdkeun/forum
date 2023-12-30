<template>
  <main>
    <section>
      <slot />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
}

section {
  width: 500px;
  background: white;
}
</style>
