<template>
  <Layout>
    <Header />
    <router-view />
  </Layout>
</template>

<script setup>
import Layout from "@/components/Layout.vue";
import Header from "@/components/Header.vue"
</script>