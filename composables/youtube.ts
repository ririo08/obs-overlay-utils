/** YouTubeチャンネル登録者数取得 */
export const getYouTubeSubscriber = async (key: string, channelId: string): Promise<number> => {
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
