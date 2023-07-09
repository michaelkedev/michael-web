<template>
  <div
    class="flex h-screen w-screen flex-col items-center overflow-y-auto bg-stone-950"
  >
    <div class="w-full p-1.5">
      <div
        class="relative flex min-h-0 w-full items-center justify-center overflow-hidden rounded p-5 text-center font-mono text-3xl font-black text-white underline underline-offset-[5px] md:py-10 lg:py-20"
      >
        <img src="/laptop.jpg" class="absolute h-full w-full object-cover" />
        <div class="absolute h-full w-full bg-slate-500/10"></div>
        <div class="z-10">Micheal</div>
      </div>
    </div>
    <div class="flex h-10 w-full flex-none px-2 font-mono text-stone-200 md:max-w-3xl">
      <LinkButton
        v-for="p in pages"
        v-bind="p"
        :key="p.text"
        :isCurrent="currentPage === p.link"
      />
    </div>
    <div class="text-white">
      <router-view @routeChanged="currentPage = $event" />
    </div>
  </div>
</template>
<script>
import LinkButton from "./components/Button.vue";

export default {
  // 導入元件的參數
  props: [],

  // 元件內本身的資料
  data() {
    return {
      pages: [
        { link: "/", text: "Home" },
        { link: "/about", text: "About" },
        { link: "/gallery", text: "Gallery" },
        { link: "/contact", text: "Contact" },
      ],
      currentPage: "",
    };
  },
  // 元件被掛載時執行
  mounted() {},

  // 元件內 function
  methods: {},

  // 使用到的元件
  components: { LinkButton },
};
</script>
