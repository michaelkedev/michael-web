<template>
  <span>
    <span ref="span">
      <slot> {{ value }} </slot>
    </span>
    <span v-if="typingEffect && animating" class="animate-flash font-thin"
      >_</span
    >
  </span>
</template>

<script>
export default {
  props: {
    delay: { default: 100 },
    typingEffect: { default: true },
  },
  data() {
    return {
      value: "AniText",
      span: null,
      animating: true,
    };
  },
  mounted() {
    this.span = this.$refs.span;
    this.value = this.span.textContent;
    this.textAnimation();
  },
  methods: {
    textAnimation() {
      let index = 0;
      this.span.textContent = "";
      const interval = setInterval(() => {
        this.span.textContent += this.value[index];
        index++;
        if (index >= this.value.length) {
          clearInterval(interval);

          setTimeout(() => {
            this.animating = false;
          }, 2000);
        }
      }, this.delay);
    },
  },
};
</script>
