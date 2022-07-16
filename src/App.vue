<script setup>
import Navbar from "./components/Navbar.vue";
import Contact from "./components/Contact.vue";
import FooterPage from "./components/FooterPage.vue";
</script>

<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <main class="container mt-4">
      <router-view></router-view>
    </main>

    <FooterPage />
    <Contact />
  </div>
</template>

<style>
@import "./assets/base.css";
</style>
