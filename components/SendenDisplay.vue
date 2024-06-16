<script lang="ts" setup>
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

const props = withDefaults(defineProps<{
  count?: number
  message?: string
}>(), {
  count: 0,
  message: 'チャンネル登録よろしくお願いします！',
})

const emits = defineEmits<{
  (event: 'update'): void
}>()

const firstTime = 10
const secondTime = 10
const loopTime = 15 * 60
const animationSeq = ref<number>(0)

const nowSubscriberCount = computed(() => {
  return props.count.toLocaleString('ja-JP')
})
const computedSubscribeTextArray = computed(() => {
  return props.message.split('')
})

const displaySubscribeAnimation = async () => {
  emits('update')
  animationSeq.value = 1
  await useSleep(firstTime)
  animationSeq.value = 0
  await useSleep(0.5)
  animationSeq.value = 2
  await useSleep(secondTime)
  animationSeq.value = 0
}

onMounted(() => {
  displaySubscribeAnimation()
})

useIntervalFn(() => {
  displaySubscribeAnimation()
}, loopTime * 1000)
</script>

<template>
  <div class="container">
    <h1
      id="h101"
      class="animate"
      :class="{
        show: animationSeq === 1,
      }"
    >
      <span
        v-for="(text, index) in computedSubscribeTextArray"
        :key="index"
        :style="{
          'animation-delay': index * 0.05 + 's',
        }"
      >
        {{ text }}
      </span>
    </h1>
    <h1
      id="h102"
      :class="{
        show: animationSeq === 2,
      }"
    >
      現在の登録者数：{{ nowSubscriberCount }}人
      <img
        v-if="animationSeq === 2"
        src="/img/ririo.png"
        width="48"
      >
    </h1>
  </div>
</template>

<style lang="scss">
h1 {
  margin: 0;
  margin-top: 20px;
  font-size: 48px;
  padding-left: 20px;
  position: absolute;
  font-family: "RocknRoll One", sans-serif;
  color: white;
  opacity: 0;
  transition: all 0.5s;
  text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px,
    rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px,
    rgb(0, 0, 0) 0.705713px 2.91581px 0px,
    rgb(0, 0, 0) -0.287171px 2.98622px 0px,
    rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px,
    rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px,
    rgb(0, 0, 0) -2.94502px -0.571704px 0px,
    rgb(0, 0, 0) -2.59586px -1.50383px 0px,
    rgb(0, 0, 0) -1.96093px -2.27041px 0px,
    rgb(0, 0, 0) -1.11013px -2.78704px 0px,
    rgb(0, 0, 0) -0.137119px -2.99686px 0px,
    rgb(0, 0, 0) 0.850987px -2.87677px 0px,
    rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px,
    rgb(0, 0, 0) 2.88051px -0.838247px 0px !important;
}

img {
  margin-left: 10px;
  filter: drop-shadow(2px 2px 0 white) drop-shadow(-2px -2px 0 white)
    drop-shadow(2px -2px 0 white) drop-shadow(-2px 2px 0 white);
  animation: rotateY 2s ease-in-out;
}

.show {
  opacity: 1;
  & span {
    opacity: 0;
    transform: translate(-150px, 0) scale(0.3);
    animation: leftRight 0.5s forwards;
  }
}

.animate span {
  display: inline-block;
}

@keyframes leftRight {
  40% {
    transform: translate(50px, 0) scale(0.7);
    opacity: 1;
    color: #ff9600;
  }

  60% {
    color: #83400a;
  }

  80% {
    transform: translate(0) scale(2);
    opacity: 0.5;
  }

  100% {
    transform: translate(0) scale(1);
    opacity: 1;
  }
}

@keyframes rotateY {
  0%,
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
