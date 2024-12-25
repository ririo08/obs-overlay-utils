<script setup lang="ts">
const props = defineProps<{
  count: number
}>()

const formattedCount = computed(() => props.count.toLocaleString())
</script>

<template>
  <section class="text-center text-white">
    <OutLineText
      label="チャンネル登録者数"
      class="font-['Dela_Gothic_One'] text-5xl"
    />
    <div>
      <OutLineText
        :label="formattedCount"
        :stroke="16"
        color="#ff9600"
        class="font-['Cherry_Bomb_One'] text-[8rem] leading-[8rem]"
      />
      <OutLineText
        label="人"
        class="font-['Dela_Gothic_One'] ml-4 text-4xl"
      />
    </div>
  </section>
</template>

<style scoped></style>
