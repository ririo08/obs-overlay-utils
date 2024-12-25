<script lang="ts" setup>
const { encodeBase64 } = useCustomParams()
const key = ref<string>('')
const channelId = ref<string>('')
const createdUrl = ref<string>('')

const onClickGenerateScheduledURL = () => {
  const params = encodeBase64({
    key: key.value,
    channelId: channelId.value,
  })
  createdUrl.value = `/senden?value=${params}`
}

const onClickGenerateAlwaysURL = () => {
  const params = encodeBase64({
    key: key.value,
    channelId: channelId.value,
  })
  createdUrl.value = `/counter?value=${params}`
}
</script>

<template>
  <section class="max-w-xl m-auto">
    <p>作成中…</p>
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
      <UButton @click="onClickGenerateScheduledURL">
        定期宣伝URL作成
      </UButton>
      <UButton
        class="ml-2"
        @click="onClickGenerateAlwaysURL"
      >
        常時表示URL作成
      </UButton>
    </UFormGroup>

    <UFormGroup
      class="mt-2"
    >
      <ULink
        :to="createdUrl"
        class="text-primary"
      >
        リンク
      </ULink>
    </UFormGroup>
  </section>
</template>

<style lang="scss"></style>
