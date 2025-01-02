<script setup lang="ts">
definePageMeta({ layout: 'overlay' })

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap',
    },
  ],
})

const textRef: Ref<HTMLElement | null> = ref(null)
const fontsize = ref(1000)
const computedFontSize = computed(() => fontsize.value + 'px')
const text = useRouteQuery<string>('value')

const adjustFontSizeToFit = async () => {
  if (!textRef.value) return

  while (true) {
    const parentWidth = window.innerWidth
    const textWidth = textRef.value.clientWidth

    fontsize.value--
    if (textWidth <= parentWidth || fontsize.value < 0) {
      break
    }
    await nextTick()
  }
}

onMounted(async () => {
  await nextTick()
  await new Promise(resolve => setTimeout(resolve, 500))
  adjustFontSizeToFit()
  window.addEventListener('resize', adjustFontSizeToFit)
})

watch(() => window.innerWidth, adjustFontSizeToFit)
</script>

<template>
  <section class="container">
    <div
      ref="textRef"
      class="responsive-text"
    >
      <OutLineText
        :stroke="10"
        :label="text"
        class="text-white font-bold"
      />
    </div>
  </section>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
}
.responsive-text {
  align-self: center;
  font-family: "Mochiy Pop P One", serif;
  white-space: nowrap; /* テキストの折り返しを防ぐ */
  overflow: visible;
  text-align: center;
  width: max-content;
  font-size: v-bind(computedFontSize);
}
</style>
