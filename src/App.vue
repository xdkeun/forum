<template>
  <Layout>
    <Header />
    <router-view />
    <Footer />
  </Layout>
</template>

<script setup>
import Layout from "@/components/Layout.vue";
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>