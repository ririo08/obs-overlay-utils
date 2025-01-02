<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'

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
      href: 'https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Dela+Gothic+One&display=swap',
    },
  ],
})

const { decodeBase64 } = useCustomParams()

const nowSubscriberCount = ref<number>(0)

const params = computed(() => {
  const query = useRouteQuery<string>('value')
  console.log(query.value)
  return decodeBase64(query.value)
})

const updateSubscriberCount = async () => {
  nowSubscriberCount.value = await getYouTubeSubscriber(
    params.value.key,
    params.value.channelId,
  )
}

useIntervalFn(updateSubscriberCount, 60000)
onMounted(() => updateSubscriberCount())
</script>

<template>
  <section>
    <SubCounter
      :count="nowSubscriberCount"
      @update="updateSubscriberCount"
    />
  </section>
</template>

<style></style>
