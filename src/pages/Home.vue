<template>
  <div class="mt-10 flex items-center justify-center">
    <div class="m-5">
      <img
        class="roun aspect-square w-80 rounded-full object-cover"
        src="/me.jpg"
      />

      <!-- <h1 id="animated-text">{{ animatedText }}</h1> -->
    </div>
    <div class="ml-5 flex flex-col">
      <AniText class="mt-10 text-8xl font-bold ">Michael Ke</AniText>

      <div class="mt-6 text-2xl font-bold">A Bit About Me</div>
      <div class="mt-2 md:max-w-xl">
        I'm a paragraph. Click here to add your own text and edit me. I’m a
        great place for you to tell a story and let your users know a little
        more about you.
      </div>
    </div>
  </div>
</template>

<script>
import AniText from "../components/AniText.vue";

export default {
  mounted() {
    const currentPage = this.$route.path;
    console.log(this.$route.path);

    // 回傳回父層
    this.$emit("routeChanged", currentPage);
  },
  data() {
    return {};
  },
  methods: {},
  components: { AniText },
};
</script>
