<template>
  <!-- BODY_WRAPPER -->
  <div class="wrap">
    <!-- HEADER_COMPONENT -->
    <full-header ref="clearSearch" @searchText="updateSearchText"></full-header>
    <router-view
      :booksType="booksType"
      :condition="searchText"
      @searchText="clearSearch"
      @booksType="changBooksType"
    ></router-view>
    <!-- FOOTER -->
    <full-footer></full-footer>
  </div>
</template>

<script>
import FullHeader from "../components/index/FullHeader.vue";
import FullFooter from "../components/index/FullFooter.vue";
export default {
  components: {
    "full-header": FullHeader,
    "full-footer": FullFooter,
  },
  data() {
    return {
      searchText: "",
      booksType: "All",
    };
  },
  methods: {
    updateSearchText(ans) {
      console.log(ans);
      this.booksType = "";
      this.searchText = ans;
    },
    clearSearch() {
      this.$refs.clearSearch.clearSearch();
    },
    changBooksType(type) {
      console.log("這是type", type);
      this.booksType = type;
    },
  },
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline;
  /* cursor: default; */
}

a {
  cursor: default;
}

button {
  border: 0;
  background-color: none;
}

/* 每個section的上下間距 */
.contents {
  margin: 60px 0px;
  background-color: var(--background-color);
}

.wrap {
  /* 網頁內容最大寬度 */
  /* max-width: 1920px; */
  min-width: 1440px;
  overflow: hidden;
  min-height: 100vh;
  /* 測試用 */
  background-color: var(--background-color);
}

/* TODO 所有分頁適用：所有section wrap中的第一層 */
.contents-inner {
  /* position: relative; */
  width: 1200px;
  margin: 0 auto;
}

.welcome-banner-wrapper {
  position: relative;
  height: fit-content;
}

/* 輪播區+控制nav */
.welcome-banner-inner {
  margin-left: calc((100% - 1200px) / 2 - 64px);
  position: relative;
  height: 610.92px;
  /* TODO 高度不知為什麼無法fit-content */
}

/* 幻燈片區、搭配標題 */
.swiper-container {
  margin: 0px auto;
  padding: 0px;
  background-color: var(--background-color);
}

/* 幻燈片區 */
.swiper-wrapper {
  display: flex;
  padding-left: 0px;
  box-sizing: content-box;
  width: 100%;
}

/* 幻燈片<li> */
.swiper-slide {
  position: relative;
  width: fit-content;
}

.banner-title {
  display: inline-block;
  max-width: 750px;
  margin-left: 64px;
}

.banner-visual-box {
  position: absolute;
  border-radius: 20px 0px 0px 20px;
  left: 0;
}

.banner-floating-box {
  position: absolute;
  top: 0px;
  right: calc(100% - 1200px - 64px);
  display: flex;
}

/* banner控制按鈕及張數顯示 */
.banner-control-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  margin-top: 80px;
}

.swiper-page {
  color: var(--neutral-color);
  line-height: 22px;
  left: auto;
  bottom: auto;
  width: auto;
  min-width: auto;
  height: auto;
  padding: 0px;
  box-sizing: border-box;
}

.swiper-page-current {
  color: var(--font-color);
  font-weight: 600;
}

.btn-swiper-pause {
  width: 30px;
  height: 30px;
  margin-left: 12px;
  border: 0.5px solid;
  border-radius: 50%;
  border-color: var(--neutral-color);
  background-color: var(--background-color);
  color: var(--neutral-color);
}

/* 與作家相遇<div> */
.banner-content-box {
  display: inline-block;
  width: 273px;
  background-color: var(--background-color);
  border-radius: 20px 0px 20px 20px;
  margin-left: 50px;
  overflow: hidden;
}

.content-info-box {
  padding: 20px 24px 30px;
}

.content-type {
  color: var(--accent-color);
  font-size: 13px;
}

.content-title {
  margin-top: 5px;
  line-height: 23px;
  font-size: 15px;
}

.welcome-banner-control {
  position: absolute;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.95);
  margin-left: calc((100% - 1200px) / 2 + 110px);
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.banner-control-inner {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 940px;
  height: 100%;
}

.banner-group-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  /* flex: 0 0 893px; */
}

.banner-group-item {
  height: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  /* TODO 當輪播到的時候，加上.active 改為深色底線 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
}

.btn-banner-group {
  color: var(--neutral-color);
  font-weight: 500;
  border: 0px;
  background-color: transparent;
  display: inline-block;
  box-sizing: border-box;
}

.divider {
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightgrey;
  width: 30px;
  flex: 1;
}

.banner-btn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.banner-btn-box button {
  width: 30px;
  height: 30px;
  background-color: none;
  margin: 0px 20px;
  border: 0px;
  background-color: transparent;
}

/* .welcome-marketing-list {
    margin: 70px 0px;
} */

.welcome-marketing-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0px;
}

.item {
  text-align: center;
  /* flex: 0 0 90px; */
}

.icon-box {
  width: 68px;
  height: 68px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  margin-bottom: 10px;
  color: var(--primary-color);
  background-color: rgba(245, 245, 245, 0.98);
}

/* 今日選書 */
/* section title */
.title-wrap {
  padding-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.category-tag-list {
  margin: 4px 0px 0px 30px;
  padding-left: 0px;
  display: flex;
  align-items: center;
}

.category-item {
  display: inline-block;
  margin-right: 30px;
  /* vertical-align: top; */
}

.btn-category {
  background-color: transparent;
  color: var(--neutral-color);
}

/* TODO 按鈕點及後加上active class */
.active {
  color: var(--primary-color);
  font-weight: 900;
}

.right-area {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;
  flex-direction: row;
  font-size: 1rem;
}

.template-row {
  display: flex;
  position: relative;
}

.prod-area {
  display: flex;
  justify-content: center;
}

.prod-box {
  height: 300px;
  overflow: hidden;
  display: block;
  margin-left: 20px;
}

.prod-box img {
  max-height: 100%;
  max-width: 100%;
  margin-bottom: 10px;
}

.prod-info {
  margin: 50px 0px auto;
}

.prod-price {
  display: flex;
  margin: 20px 0px;
  font-weight: 800;
}

.percent {
  color: var(--accent-color);
  margin-right: 8px;
}

.price {
  margin-right: 5px;
}

.side-img {
  width: 230px;
}

.swiper-btn-prev {
  position: absolute;
  top: 30%;
  left: -50px;
  width: 44px;
  height: 44px;
  border: 1px solid var(--neutral-color);
  border-radius: 50%;
  background-color: var(--background-color);
  z-index: 2;
  box-sizing: border-box;
}

.swiper-btn-next {
  position: absolute;
  top: 30%;
  right: -50px;
  width: 44px;
  height: 44px;
  border: 1px solid var(--neutral-color);
  border-radius: 50%;
  background-color: var(--background-color);
  z-index: 2;
  box-sizing: border-box;
}

/* Picks */
.picks-wrap {
  background-color: rgba(83, 146, 155, 0.18);
}

.picks-wrap-inner {
  padding: 80px 0px;
}

.picks-contents {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.picks-left-area {
  width: 327px;
}

.picks-desc {
  color: var(--primary-color);
}

.picks-btn {
  margin-top: 62px;
  width: 250px;
  height: 50px;
  border-radius: 6px;
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.picks-btn a {
  color: var(--background-color);
  font-weight: 900;
}

.picks-right-area {
  flex: 1;
  margin-left: 25px;
}

.picks-item-list {
  display: flex;
  justify-content: space-between;
}

.picks-item {
  width: 200px;
}

.picks-item-inner {
  width: 100%;
  border-radius: 16px;
}

.img-box {
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
  height: 180px;
}

.img-box img {
  width: 100%;
  vertical-align: middle;
}

.picks-info {
  height: calc(100% - 180px);
  border: 1px solid #eaeaea;
  border-radius: 0px 0px 16px 16px;
  padding-top: 20px;
  background-color: var(--background-color);
  box-sizing: border-box;
  text-align: center;
}

.picks-info-title {
  font-weight: bolder;
  margin: 0px;
}

.picks-info-desc {
  font-size: 14px;
  color: var(--neutral-color);
}

/* 暢銷排行 */
.best-steady-wrap {
  display: flex;
}

.best-prod-area {
  display: block;
}

.best-prod-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  min-height: 26px;
  margin-bottom: 10px;
}

.badge-flag {
  width: 26px;
  height: 26px;
  font-size: 14px;
  line-height: 26px;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  vertical-align: top;
  border-radius: 6px 0px;
  font-weight: 700;
  background-color: var(--accent-color);
}

.img-box {
  width: 211px;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
  cursor: pointer;
}

.prod-info-box {
  margin-top: 16px;
}

.prod-author {
  margin-top: 5px;
  max-height: 38px;
  line-height: 19px;
  overflow: hidden;
}

/* casting */
.video-banner-wrap {
  position: relative;
  /* background-color: red; */
}

.video-swiper-container {
  /* background-color: aqua; */
  width: 100%;
  margin: 0 auto;
  padding: 0;
  z-index: 99;
}

.video-swiper-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: content-box;
}

.video-swiper-slide {
  height: 100%;
  width: 100%;
}

.video-banner-area {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
}

.video-title-box {
  padding-right: 30px;
}

.video-visual-box {
  display: flex;
  margin-left: 30px;
}

.prod-thumb-box {
  margin-top: auto;
}

.prod-thumb-box img {
  width: 118px;
}

.video-frame-wrap {
  border-radius: 18px;
  overflow: hidden;
  margin-left: 30px;
}
</style>