<template>
  <a :href="link" target="_blank" class="w-full">
    <div
      class="relative flex flex-col items-center space-x-3 rounded-md bg-stone-800 p-5"
    >
      <img
        :src="`/${imgUrl}`"
        class="aspect-square w-12 overflow-hidden rounded-full bg-stone-200 object-cover md:mx-8"
      />
      <div class="mt-3 font-black text-stone-300">
        {{ websiteId }}
      </div>
      <div class="absolute right-2 top-2 text-center text-stone-500">
        {{ websiteName }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    link: { default: "/contact" },
    imgUrl: { default: "" },
    websiteName: { default: "" },
    websiteId: { default: "" },
  },
};
</script>

<style></style>
