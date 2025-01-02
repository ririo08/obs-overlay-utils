<template>
  <span
    v-bind="$attrs"
    :style="computedStyle"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  stroke?: number
  color?: string
}>(), {
  stroke: 6,
  color: 'black',
})

const computedStyle = computed(() => {
  const shadows: string[] = []
  const step = 1 / props.stroke

  for (let angle = 0; angle < 2 * Math.PI; angle += step) {
    const x = Math.cos(angle) * props.stroke
    const y = Math.sin(angle) * props.stroke
    shadows.push(`${x}px ${y}px ${props.color}`)
  }

  return {
    textShadow: shadows.join(', '),
  }
})
</script>

<style scoped>
</style>
