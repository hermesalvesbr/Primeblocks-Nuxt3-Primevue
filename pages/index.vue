<template>
  <div class="container">
    <div>
      <img alt="Vue logo" src="../assets/primeblocks-bug.png" />

      <div>
        <div class="p-7">
          <NuxtLink to="/modelo/"> PrimeBlocks bug with Nuxt v3 </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({ severity: "info", summary: "Hello " + text.value });
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
}
</style>
