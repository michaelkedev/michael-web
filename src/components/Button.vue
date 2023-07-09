<template>
  <router-link :to="link" class="flex flex-1">
    <button
      class="flex flex-1 items-center justify-center space-x-3 rounded border-stone-600 transition-all first:border-none hover:bg-white/10 hover:text-yellow-400 active:scale-90 active:bg-white/20"
      :class="[isCurrent && 'bg-yellow-600']"
    >
      <div class="mr-3 h-5 w-5">
        <Icon :type="text" />
      </div>

      {{ text }}
    </button>
  </router-link>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  // props: ["text"]
  props: {
    text: { default: "Button" },
    link: { default: "/" },
    isCurrent: { default: false },
  },
  components: { Icon },
};
</script>
<style></style>
