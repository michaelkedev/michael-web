<template>About</template>

<script>
export default {
  mounted() {
    const currentPage = this.$route.path;
    console.log(this.$route.path);

    // 回傳回父層
    this.$emit("routeChanged", currentPage);
  },
};
</script>

<style></style>
