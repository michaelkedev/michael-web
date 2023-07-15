<template>
  <div
    class="group relative flex flex-col space-y-2 overflow-hidden rounded-lg bg-stone-900 text-stone-200 shadow-md transition-all hover:bg-stone-800 md:flex-row"
  >
    <!-- border border-yellow-700 -->
    <div class="h-full overflow-hidden md:w-1/2">
      <img
        :src="src"
        alt=""
        class="h-full w-full opacity-70 transition-all group-hover:opacity-100 md:object-cover"
      />
    </div>
    <div class="flex flex-col">
      <div class="flex min-w-0 flex-1 flex-row items-baseline px-2">
        <div class="flex flex-col px-2">
          <div class="text- flex-none py-1 text-xl font-bold">{{ title }}</div>
          <div
            class="markdown flex-1 overflow-hidden overflow-ellipsis opacity-70"
            v-html="text"
          ></div>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 p-3 pt-1">
        <div
          v-for="tag in tags"
          :key="tag"
          class="rounded bg-stone-900 p-1.5 text-xs transition-all group-hover:bg-slate-700"
        >
          #{{ tag }}
        </div>
      </div>
    </div>

    <a
      class="absolute -top-1.5 right-1 h-10 w-10 rounded-full bg-black/50 p-2.5 backdrop-blur-lg"
      v-if="link"
      :href="link"
      target="_blank"
    >
      <Icon type="outLink" />
    </a>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  props: {
    title: "Skills",
    text: "Contents",
    imgTitle: { default: "Python" },
    tags: { default: [] },
    link: { default: "" },
    src: { default: "" },
  },
  components: {
    Icon,
  },
};
</script>

<style></style>
