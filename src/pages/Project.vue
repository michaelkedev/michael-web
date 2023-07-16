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
          title: "Sloth Rating Toolkit",
          text: toMD(`
            ## 當前功能
              - 針對 llightroom 的 rating 進行分類，顯示在 GUI 上
              - 透過操作 GUI 整理照片，並輸出到指定資料夾
            ## To-do List
              - 整合 Drive API 完成自動化雲端備份
          `),
          tags: ["Python", "PyQt"],
          link: "https://github.com/michaelkedev/lr_rename/tree/main",
          src: "sloth.png",
        },
        {
          title: "結合AI與無人機應用於工安檢測 (大學專題)",
          text: toMD(`
            利用 DJI Mobile SDK 控制空拍機自動執行航點任務，在飛行時傳送即時影像回 server 端，並透過 YOLOv5 進行物件檢測，辨識人員是否有配戴裝備，如該人員身上未檢測到裝備，則將 GPS 位置、發生時間透過 MySQL 紀錄，同時透過 Line Message API 送出一則包含 GPS 位置、事發影像之訊息至手機，最後透過 Metabase 將資料庫視覺化呈現。
            - YOLOv5 檢測人員身上是否有配戴工地裝備(頭盔、反光背心)
            - 透過 Java 開發 DJI Mobile SDK 開發 Android App 操控無人機
            - Line Message API & Django 架設 LineBot server 發送警告訊息
              - MySQL 儲存資料，並透過 Metabase 將資料畫圖像化
          `),
          tags: ["Python", " YOLOv5", " Android( Java )", " MySQL"],
          link: "https://github.com/michaelkedev/dji_project",
          src: "senior_project.jpg",
        },
        {
          title: "自動填報疫情系統",
          text: toMD(`
            由於疫情學校每日都要回報身體狀況&活動範圍，因為自己的活動範圍固定，所以透過 requests library 模擬登入，自動爬取上週填寫資料，並填入當日資料內。
          `),
          tags: ["Python"],
          link: "https://github.com/michaelkedev/lazyBone",
          src: "python_color.png",
        },
        {
          title: "網路爬蟲-ptt",
          text: toMD(`
            利用爬蟲解析 HTML，下載 ptt 特定版上的圖片。
          `),
          tags: ["Python"],
          link: "https://github.com/michaelkedev/ptt_image/tree/master",
          src: "python_color.png",
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
