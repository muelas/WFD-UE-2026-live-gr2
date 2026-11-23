<script setup lang="ts">
import {ref, type Ref} from "vue";

const view: Ref<boolean | undefined> = ref<boolean>();

setInterval(() => {
  // Im Kreis
  if (view.value === true) {
    view.value = false;
  } else if (view.value === false) {
    view.value = undefined;
  } else {
    view.value = true;
  }
}, 2000);
</script>

<template>
  <h2>Anzeige</h2>
  <div v-if="view === true">
    View ist true :)
  </div>
  <div v-else-if="view === false">
    View ist false :(
  </div>
  <p v-else>
    View ist undefined :-o
  </p>
</template>

<style scoped>

</style>