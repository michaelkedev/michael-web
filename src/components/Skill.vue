<template>
  <div
    class="flex rounded border border-yellow-700 py-1 text-stone-200 transition-all"
  >
    <div
      class="relative flex flex-none flex-col items-center justify-center pl-3"
    >
      <div
        class="relative z-20 flex h-8 w-8 items-center justify-center rounded border-2 border-yellow-600 bg-yellow-600 transition-all"
      >
        <Icon :type="imgTitle" />
      </div>
    </div>

    <div class="flex min-w-0 flex-1 flex-row items-baseline px-2">
      <div class="flex flex-col px-2">
        <div class="text- flex-none text-xl font-bold">{{ title }}</div>
        <div
          class="markdown flex-1 overflow-hidden overflow-ellipsis opacity-70"
          v-html="text"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  props: {
    title: "Skills",
    text: "Contents",
    imgTitle: { default: "Python" },
  },
  components: {
    Icon,
  },
};
</script>

<style></style>
