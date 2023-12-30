<template>
  <Layout>
    <Header />
    <router-view />
    <Footer />
  </Layout>
</template>

<script setup>
import Layout from "@/components/Layout";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
</script>