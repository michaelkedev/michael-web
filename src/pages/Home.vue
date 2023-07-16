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
      <AniText class="mt-10 text-4xl font-bold md:text-8xl">Michael Ke</AniText>

      <div class="mt-6 font-bold md:text-2xl">A Bit About Me</div>
      <div class="mt-2 text-base text-stone-400 md:max-w-xl md:text-xl">
        I'm a paragraph. Click here to add your own text and edit me. I’m a
        great place for you to tell a story and let your users know a little
        more about you.
      </div>
    </div>
  </div>

  <div class="space-y-5 p-5">
    <div class="">
      <div class="flex items-baseline">
        <div class="text-2xl font-bold">Skills</div>
        <div class="pl-2 text-xs font-bold text-stone-500">技能</div>
      </div>
      <div
        class="grid w-full grid-cols-1 flex-col gap-2 overflow-hidden p-2 pt-5 xs:grid-cols-2"
      >
        <SList v-for="skill in skills" v-bind="skill" :key="skill.text" />
      </div>
    </div>

    <div>
      <div class="flex items-baseline">
        <div class="text-2xl font-bold">Experience</div>
        <div class="pl-2 text-xs font-bold text-stone-500">經歷</div>
      </div>
      <div class="flex w-full flex-col overflow-hidden pt-5">
        <EList
          v-for="experience in experiences"
          v-bind="experience"
          :key="experience.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EList from "../components/Experience.vue";
import SList from "../components/Skill.vue";
import AniText from "../components/AniText.vue";
import { toMD } from "../utils/markdown";

export default {
  data() {
    return {
      skills: [
        {
          title: "Python",
          text: "YOLOv5 物件辨識、Line Message API、網路爬蟲、文件處理、Django",
          imgTitle: "python",
        },
        {
          title: "前端技術",
          text: toMD(`
            HTML、CSS、JavaScript
            
            **學習中:**

            Vue3.0、Tailwind CSS
          `),
          imgTitle: "frontend",
        },
        {
          title: "Java",
          text: "Android APP、DJI Mobile SDK",
          imgTitle: "java",
        },
        {
          title: "資料庫",
          text: "MySQL",
          imgTitle: "db",
        },
        {
          title: "版本控制",
          text: "Git、Github",
          imgTitle: "vc",
        },
        {
          title: "TOEIC",
          text: "680 ( L355 / R325 )",
          imgTitle: "eng",
        },
        {
          title: "學習中",
          text: "Docker",
          imgTitle: "lr",
        },
      ],
      experiences: [
        {
          time: "2022",
          endTime: "Jul - Dec",
          slash: "",
          title: "軟體工程師 / 眾達智慧工廠股份有限公司",
          text: toMD(`
            **Python**
            - YOLO 辨識工廠內物件
            - OpenCV 影像處理 (輪廓檢測、顏色辨識)
            - API 開發
            
            **C#**
            - FineReport
            - BI 軟體維護
          `),
          tags: ["Python", " YOLO", "C-Sharp", "OpenCV", " MsSQL"],
        },
        {
          time: "大四",
          title: "結合AI與無人機應用於工安檢測(大學專題)",
          text: toMD(`
            利用 \`DJI Mobile SDK\` 控制空拍機自動執行航點任務，傳送即時影像到 Server，並通過 YOLOv5 檢測人員是否有配戴裝備。
            - YOLOv5 檢測人員身上是否有配戴工地裝備(頭盔、反光背心)
            - 透過 Java 開發 DJI Mobile SDK 開發 Android App 操控無人機
            - Line Message API & Django 架設 LineBot server 發送警告訊息
              - MySQL 儲存資料，並透過 Metabase 將資料畫圖像化
          `),
          website: "https://github.com/michaelkedev/dji_project",
          tags: ["Python", " YOLOv5", " Android( Java )", " MySQL"],
        },
        {
          time: "大三",
          title: "國立勤益科技大學​資訊科技夏令營​",
          text: toMD(`
            指導國中小的學生組裝 自組穿越機 及實驗室自主開發的 Arduino Car
            - 教材製作
            - 指導組裝穿越機
            - 協助指導組裝 Arduino Car 和 Arduino 程式撰寫
          `),
        },
        {
          time: "大二",
          title: "TDK 23th 飛行組-創意獎佳作",
          text: toMD(`
            Python 透過 Raspberry Pi & Pixhawk 4 控制自組四旋翼
            - DroneKit 控制四軸飛行器
            - PID 算法修正四軸飛行器飛行
            - OpenCV 循線飛行及顏色辨識
          `),
          tags: ["Python"],
        },
        // markdown-it
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
  components: { EList, SList, AniText },
};
</script>

<style></style>
