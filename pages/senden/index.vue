<script lang="ts" setup>
const { encodeBase64 } = useCustomParams()
const key = ref<string>('')
const channelId = ref<string>('')

const createdUrl = computed(() => {
  const params = encodeBase64({
    key: key.value,
    channelId: channelId.value,
  })
  return `/senden/overlay?value=${params}`
})
</script>

<template>
  <section>
    <h2 class="text-2xl">
      チャンネル登録お願いします定期表示
    </h2>
    <UFormGroup
      class="mt-2"
      label="Google API Key"
    >
      <UInput
        v-model="key"
        type="text"
      />
    </UFormGroup>

    <UFormGroup
      class="mt-2"
      label="Channel ID"
    >
      <UInput
        v-model="channelId"
        type="text"
      />
    </UFormGroup>

    <UFormGroup
      class="mt-2"
    >
      以下URLをコピーしてOBSに貼り付けてください
    </UFormGroup>

    <UFormGroup
      class="mt-2"
    >
      <UButton
        :to="createdUrl"
        color="orange"
      >
        チャンネル登録お願いします定期表示
      </UButton>
    </UFormGroup>

    <UCard class="mt-6">
      <template #header>
        生成パス
      </template>
      <div class="overflow-x-scroll">
        <pre>{{ createdUrl }}</pre>
      </div>
    </UCard>
  </section>
</template>

<style lang="scss"></style>
