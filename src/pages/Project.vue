<template>
  <div class="space-y-5 p-5">
    <div class="">
      <div class="flex items-baseline">
        <div class="text-2xl font-bold">Projects</div>
        <div class="pl-2 text-xs font-bold text-stone-500">專案經歷</div>
      </div>
      <div
        class="grid w-full flex-col gap-2 overflow-hidden p-2 pt-5 xs:grid-cols-1"
      >
        <PList
          v-for="project in projects"
          v-bind="project"
          :key="project.text"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { toMD } from "../utils/markdown";
import PList from "../components/ProjectCard.vue";

export default {
  data() {
    return {
      projects: [
        {
          title: "Python",
          text: toMD(`
            利用 DJI Mobile SDK 控制空拍機自動執行航點任務，傳送即時影像到 Server，並通過 YOLOv5 檢測人員是否有配戴裝備。
            - YOLOv5 檢測人員身上是否有配戴工地裝備(頭盔、反光背心)
            - 透過 Java 開發 DJI Mobile SDK 開發 Android App 操控無人機
            - Line Message API & Django 架設 LineBot server 發送警告訊息
              - MySQL 儲存資料，並透過 Metabase 將資料畫圖像化
          `),
          imgTitle: "project-a",
          tags: ["Python", " YOLOv5", " Android( Java )", " MySQL"],
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
  components: { PList },
};
</script>
