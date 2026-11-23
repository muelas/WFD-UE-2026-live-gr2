<script setup lang="ts">
import {ref, type Ref} from "vue";

const now: Ref<string> = ref(new Date().toLocaleTimeString());

setInterval(() => {
  now.value = new Date().toLocaleTimeString();
}, 1000);
</script>

<template>
  Uhrzeit: {{ now }}
</template>

<style scoped>

</style>
