<template>
  <div>
    <h1>Home Page</h1>
    <Button>Cek Button</Button>
    <RouterLink :to="{ name: '/projects/' }">Go to Projects</RouterLink>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
</script>
