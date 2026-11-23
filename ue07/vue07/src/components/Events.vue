<script setup lang="ts">
import {ref} from "vue";

const isDisabled = ref(false);

function handler(event: Event) {
  console.log("Event Handler!");
  isDisabled.value = true;
}
</script>


<template>
  <h2>Events</h2>
  <button :disabled="isDisabled" v-on:click="isDisabled=!isDisabled">Click Me</button>
  <button :disabled="isDisabled" @click="handler">Click Me</button>
</template>

<style scoped>

</style>