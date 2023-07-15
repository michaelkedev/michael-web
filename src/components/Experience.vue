<template>
  <div
    class="group flex text-stone-700 transition-all first:text-stone-200 hover:text-stone-200"
  >
    <div class="relative flex flex-none flex-col items-center pl-3">
      <div
        class="relative z-20 h-6 w-6 rounded-full border-2 border-yellow-600 bg-stone-950 transition-all"
      ></div>
      <div
        class="absolute top-0 z-20 h-6 w-6 rounded-full border-2 border-yellow-600 bg-stone-950 transition-all group-hover:animate-ping"
      ></div>
      <div
        class="w-[2px] flex-1 bg-gradient-to-b from-stone-600 via-stone-600 to-stone-600 group-last:to-transparent"
      ></div>
    </div>

    <div
      class="flex min-w-0 flex-1 flex-col items-baseline px-2 pb-5 sm:flex-row"
    >
      <div
        class="flex flex-none space-x-1 pb-2 pl-2 text-center text-stone-400 sm:w-28 sm:flex-col sm:p-0"
      >
        <div>{{ time }}</div>
        <div v-if="endTime">{{ slash }}</div>
        <div v-if="endTime">{{ endTime }}</div>
      </div>
      <div class="flex flex-col px-2">
        <span class="text-xl font-bold">
          <a v-if="website" :href="website" target="_blank">
            <div class="flex">
              {{ title }}
              <div
                class="h-4 w-4 group-hover:animate-bounce group-hover:text-amber-400"
              >
                <Icon type="outLink" />
              </div>
            </div>
          </a>
          <span v-else>{{ title }}</span>
        </span>
        <div
          class="markdown flex-1 overflow-hidden overflow-ellipsis opacity-70"
          v-html="text"
        ></div>
        <div class="mt-2 flex flex-wrap space-x-2">
          <div
            v-for="tag in tags"
            :key="tag"
            class="rounded p-1.5 text-xs transition-all group-hover:bg-slate-800"
          >
            #{{ tag }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  props: {
    time: { default: "2023-" },
    slash: { default: " - " },
    endTime: { default: "" },
    title: { default: "2023-" },
    text: { default: "Content" },
    tags: { default: [] },
    website: { default: "" },
  },
  components: { Icon },
};
</script>

<style></style>
