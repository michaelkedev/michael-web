<template>
  <div class="flex w-screen max-w-3xl justify-center p-5">
    <div class="flex w-full max-w-2xl flex-col items-center p-5">
      <img
        src="/me.jpg"
        class="roun aspect-square w-32 rounded-full object-cover"
      />
      <div class="mt-2 text-center">
        <div class="font-black">Michael</div>
        <div class="mt-1 text-sm text-gray-600">
          <a
            href="mailto:k5855873@gmail.com"
            class="flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
              />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
              />
            </svg>

            <span>k5855873@gmail.com</span>
          </a>
        </div>
      </div>

      <div
        class="mt-5 grid w-full grid-cols-1 space-y-2 sm:grid-cols-2 sm:space-x-2 sm:space-y-0"
      >
        <LinkCard v-bind="l" v-for="l in links" :key="l.link" />
      </div>
    </div>
  </div>
</template>
<script>
import LinkCard from "../components/LinkCard.vue";

export default {
  data() {
    return {
      links: [
        {
          link: "https://github.com/michaelkedev",
          imgUrl: "github.svg",
          websiteName: "Github",
          websiteId: "michaelkedev",
        },
        {
          link: "https://www.instagram.com/notfound40411111/",
          imgUrl: "ig.png",
          websiteName: "Instagram",
          websiteId: "notfound40411111",
        },
      ],
    };
  },
  mounted() {
    const currentPage = this.$route.path;
    console.log(this.$route.path);

    // 回傳回父層
    this.$emit("routeChanged", currentPage);
  },
  methods: {},
  components: { LinkCard },
};
</script>

<style></style>
