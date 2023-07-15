<template>
  <div class="flex space-x-2 p-2">
    <div
      class="flex-col space-y-2 transition-all"
      v-for="(flow, index) in getPhotos"
      :key="index"
    >
      <div v-for="src in flow" :key="src" class="relative">
        <!-- img
          :src="src"
          class="absolute rounded-sm saturate-0 transition-all duration-[1500ms]"
          :class="[loaded ? 'opacity-0' : 'opacity-100']"
        / -->

        <div
          class="absolute z-10 h-full overflow-hidden transition-all duration-[1500ms]"
          :class="loaded ? 'w-full' : 'w-0'"
        >
          <img
            :src="src"
            class="h-full rounded-sm object-cover object-left transition-all"
          />
        </div>

        <img
          :src="src"
          class="h-full w-full rounded-sm saturate-0 transition-all"
        />
        <!--:class="loaded ? 'opacity-0' : ' opacity-100'" -->
      </div>
    </div>
  </div>
</template>

<script>
import { files } from "../utils/photos.json";

export default {
  mounted() {
    const currentPage = this.$route.path;
    // console.log(this.$route.path);

    // 回傳回父層
    this.$emit("routeChanged", currentPage);

    window.addEventListener("resize", () => {
      const screen = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      this.count = screen.width > 640 ? 3 : 2;
    });

    this.srcs = files.map((f) => `/gallery/${f}`);

    setTimeout(() => (this.loaded = true), 1000);
  },
  data() {
    return {
      srcs: [],
      count: 2,
      loaded: false,
    };
  },
  computed: {
    getPhotos() {
      const arr = [];

      const getSrc = (src, index) => {};

      for (let i = 0; i < this.count; i++) {
        arr.push(this.srcs.filter((src, index) => index % this.count === i));
      }

      console.log(arr);
      return arr;
    },
  },
};
</script>
