<script setup lang="ts">
import {ref} from "vue";

// 1) nav als array von strings
const nav = ref(["Home", "About", "Contact"]);
// 2) besser: nav als array von objekten
const links = ref([
  {text: "Home", url: "index.html"},
  {text: "About", url: "about.html"},
  {text: "Contact", url: "contact.html"},
]);
</script>

<template>
  <h2>Data Bindings</h2>
  <nav>
    <h3>Nav mit strings</h3>
    <ul>
      <li v-for="item in nav">
        {{ item }}
      </li>
    </ul>
    <h3>Nav mit objekten</h3>
    <ul>
      <li v-for="item in links">
        <a v-bind:href="item.url">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>