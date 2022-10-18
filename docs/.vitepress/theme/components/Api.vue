<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  await load()
})
</script>

<template>
  <section>
    <h1>
      API
    </h1>
  </section>
  
  <section>
    <a class="text-xl-4" href="/api/color-accent">
      Color Accent
    </a>
  </section>
</template>

<style scoped>
</style>
