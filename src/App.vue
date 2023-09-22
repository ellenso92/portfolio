<template>
  <router-view/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <TopButton />
</template>

<script setup>
import TopButton from '@/components/TopButton.vue';
</script>

<style>
@import url("./assets/css/common/reset.css");
@import url("./assets/css/common/common.css");
@import url("./assets/css/layout.css");
@import url("./assets/css/home.css");
</style>
