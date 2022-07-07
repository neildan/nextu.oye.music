<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar msg="You did it!" />
  </header>

  <main class="container">
    <h1>Hola mundo</h1>

    <div class="alert alert-success" role="alert">
      A simple success alert—check it out!
    </div>
  </main>
</template>

<style>
@import './assets/base.css';
</style>
