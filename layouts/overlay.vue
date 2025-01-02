<script setup lang="ts">
const colorMode = useColorMode()
colorMode.value = 'light'
</script>

<template>
  <section>
    <slot />
  </section>
</template>
