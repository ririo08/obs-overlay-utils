<script lang="ts" setup>
const key = ref<string>("")
const channelId = ref<string>("")
const createdUrl = ref<string>("")
const onClickGenerateURL = () => {
  const params = ["key=" + key.value, "channelId=" + channelId.value]
  createdUrl.value = `${location.origin}/senden/?${params.join("&")}`
}
</script>

<template>
  <section>
    <p>作成中…</p>
    <div>
      <label>
        <span>key: </span>
        <input v-model="key" type="text" />
      </label>
    </div>
    <div>
      <label>
        <span>channelId: </span>
        <input v-model="channelId" type="text" />
      </label>
    </div>
    <p>
      <button @click="onClickGenerateURL">URL作成</button>
    </p>
    <p>
      <nuxt-link :to="createdUrl">リンク</nuxt-link>
    </p>
  </section>
</template>

<style lang="scss"></style>
