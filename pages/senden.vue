<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'

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
      href: 'https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap',
    },
  ],
})

const colorMode = useColorMode()
colorMode.value = 'light'

const { decodeBase64 } = useCustomParams()

const nowSubscriberCount = ref<number>(0)

const params = computed(() => {
  const query = useRouteQuery<string>('value')
  console.log(query.value)
  return decodeBase64(query.value)
})

/** YouTubeチャンネル登録者数取得 */
const getYouTubeSubscriber = async (key: string, channelId: string): Promise<number> => {
  const res = await useFetch<gapi.client.youtube.ChannelListResponse>(
    `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${key}&part=statistics`,
  )
  if (res.data.value?.items) {
    if (res.data.value!.items![0].statistics?.subscriberCount) {
      const parsed = parseInt(res.data.value!.items![0].statistics?.subscriberCount)
      return isNaN(parsed) ? 0 : parsed
    }
  }
  return 0
}

const updateSubscriberCount = async () => {
  nowSubscriberCount.value = await getYouTubeSubscriber(
    params.value.key,
    params.value.channelId,
  )
}
</script>

<template>
  <section>
    <SendenDisplay
      :count="nowSubscriberCount"
      @update="updateSubscriberCount"
    />
  </section>
</template>

<style></style>
