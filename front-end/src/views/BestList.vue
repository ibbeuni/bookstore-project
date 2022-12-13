<template>
  <div class="wrap">
    <main>
      <!-- 導覽列 breadcrumb_wrap -->
      <bread-crumb></bread-crumb>
      <!-- contents_wrap -->
      <section class="contents-wrap">
        <div class="contents-inner flex">
          <!-- LNB -->
          <!-- <aside-nav></aside-nav> -->
          <aside class="aside-wrap">
            <div class="aside-header">
              <div class="aside-title-wrap">
                <h2 class="aside-title-heading">
                  暢銷書單
                </h2>
              </div>
            </div>
            <div class="aside-body">
              <div class="snb-wrap">
                <ul class="snb-list">
                  <li class="snb-item">
                    <!-- TODO 加入連結 -->
                    <button type="button" class="snb-btn" @click="getAllData">
                      <h5>綜合</h5>
                    </button>
                  </li>
                  <li class="snb-item">
                    <button type="button" class="snb-btn" @click="getAppreciationData">
                      <h5>鑑賞</h5>
                    </button>
                  </li>
                  <li class="snb-item">
                    <!-- TODO 加入連結 -->
                    <button type="button" class="snb-btn" @click="getPaintingData">
                      <h5>繪畫</h5>
                    </button>
                  </li>
                  <li class="snb-item">
                    <!-- TODO 加入連結 -->
                    <button type="button" class="snb-btn" @click="getArtData">
                      <h5>藝術</h5>
                    </button>
                  </li>
                  <li class="snb-item">
                    <!-- TODO 加入連結 -->
                    <button type="button" class="snb-btn" @click="getPhotographyData">
                      <h5>攝影</h5>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <!-- contents -->
          <section class="section-wrap">
            <!-- title 根據aside切換，更換內容 -->
            <section-title></section-title>
            <!-- list contents -->
            <div class="switch-prod-wrap">
              <!-- list -->
              <!-- <prod-list></prod-list> -->
              <ol class="prod-list" v-for="(item, index) in products" :key="index">
                <li class="prod-item">
                  <div class="prod-area">
                    <div class="prod-thumb-box">
                      <a :href="'/#/home/product/' + products[index].product_id" class="prod-link">
                        <div class="img-box">
                          <img v-bind:src="
                            'http://127.0.0.1:3000/img/books/' +
                            products[index].img_cover +
                            '.png'
                          " alt="" />
                        </div>
                      </a>
                    </div>
                    <div class="prod-info-box">
                      <a :href="'/#/home/product/' + products[index].product_id" class="prod-info">
                        <h5 class="prod-name">
                          {{ products[index].product_name }}
                        </h5>
                      </a>
                      <p class="prod-author">
                        {{ products[index].auther }}
                        &nbsp;|&nbsp;
                        {{ products[index].publishing_house }}
                        &nbsp;|&nbsp;
                        <span class="date">{{ products[index].publication_date }} 出版</span>
                      </p>
                      <div class="prod-price">
                        <span class="percent">10%</span>
                        <span class="price">
                          <strong class="val">優惠價 {{ products[index].discount_price }}</strong>
                          <strong class="unit">元</strong>
                        </span>
                        <span class="price-normal">
                          <span class="val">原價 {{ products[index].list_price }}</span>
                          <span class="unit">元</span>
                        </span>
                      </div>
                      <p class="prod-intro">
                        {{ products[index].introduction }}
                      </p>
                    </div>
                    <div class="prod-btn-wrap">
                      <!-- <button class="btn-wish-icon">
                              <font-awesome-icon icon="fa-solid fa-heart" />
                           </button> -->
                      <div class="btn-wrap">
                        <a href="" class="add-cart-btn">
                          <span>加入購物車</span>
                        </a>
                        <a href="" class="just-buy-btn">
                          <span>馬上購買</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import BreadCrumb from "../components/best/BreadCrumb.vue";
// import AsideNav from '../components/best/AsideNav.vue';
import SectionTitle from "../components/best/SectionTitle.vue";
// import ProdList from '../components/best/ProdList.vue';
import axios from "axios";

export default {
  components: {
    "bread-crumb": BreadCrumb,
    // 'aside-nav': AsideNav,
    "section-title": SectionTitle,
    // 'prod-list': ProdList,
  },
  props: ["condition"],
  data() {
    return {
      all: "", // 全部
      products: "", // 跑迴圈用變數
      appreciation: "", // 鑑賞
      painting: "", // 繪畫
      art: "", // 藝術
      photography: "", // 攝影
      allBookList: [],
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:3000/booktable/").then((res) => {
      this.allBookList = res.data;
    });

    axios.get("http://127.0.0.1:3000/best_list").then((res) => {
      this.all = res.data;
      this.products = this.all;
    });

    axios.get("http://127.0.0.1:3000/best_list_appreciation").then((res) => {
      this.appreciation = res.data;
    });

    axios.get("http://127.0.0.1:3000/best_list_art").then((res) => {
      this.painting = res.data;
    });

    axios.get("http://127.0.0.1:3000/best_list_painting").then((res) => {
      this.art = res.data;
    });

    axios.get("http://127.0.0.1:3000/best_list_photography").then((res) => {
      this.photography = res.data;
    });
  },
  computed: {
    searchbookList() {
      let allBooks = this.allBookList;
      const result = allBooks.filter((item) =>
        item["product_name"].includes(this.condition)
      );
      return result;
    },
  },
  methods: {
    // 全部
    getAllData() {
      this.products = this.all;
    },

    // 鑑賞
    getAppreciationData() {
      this.products = this.appreciation;
    },

    // 繪畫
    getPaintingData() {
      this.products = this.painting;
    },

    // 藝術
    getArtData() {
      this.products = this.art;
    },

    // 攝影
    getPhotographyData() {
      this.products = this.photography;
    },
  },
  watch: {
    condition(newVal) {
      if (newVal != "") {
        this.products = this.searchbookList;
      } else {
        this.products = this.all;
      }
    },
  },
};
</script>

<style scoped>
.wrap {
  /* 網頁內容最大寬度 */
  /* max-width: 1920px; */
  min-width: 1440px;
  overflow: hidden;
  min-height: 100vh;
  /* 測試用 */
  background-color: var(--background-color);
}

.contents-inner {
  /* position: relative; */
  width: 1200px;
  margin: 0 auto;
}

.flex {
  display: flex;
}

/* 主要內容區：aside+右側 */
.contents-wrap {
  padding-top: 42px;
}

/* aside */
.aside-wrap {
  width: 170px;
  padding-right: 46px;
}

.aside-header {
  margin-bottom: 30px;
}

.aside-title-wrap {
  padding-bottom: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
}

.aside-title-heading {
  line-height: 30px;
}

.snb-list {
  list-style: none;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  /* padding-inline-start: 40px; */
}

.snb-item {
  display: list-item;
}

.snb-btn {
  border: 0;
  background-color: var(--background-color);
}

.snb-btn h5 {
  margin-bottom: 2rem;
  line-height: 23px;
}

/* 右側顯示區 */
.section-wrap {
  width: calc(100% - 150px);
}

/* prod-list */
ol {
  list-style: none;
  padding-left: 0;
}

.prod-list {
  padding-top: 30px;
  border-top: 1px solid #d5d5d5;
}

.prod-item {
  display: flex;
  padding: 0;
}

.prod-area {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.prod-info-box {
  flex: 1;
  padding-right: 50px;
}

.btn-wrap {
  flex: 1;
  margin: auto 0;
}

.img-box img {
  max-height: calc((142px -2px) * 1.618 - 10px);
  min-height: 50px;
  vertical-align: middle;
}

.prod-info {
  height: auto;
  cursor: pointer;
}

.prod-name {
  line-height: 23px;
  max-height: 46px;
  margin: 15px 0;
}

.prod-author {
  color: var(--neutral-color);
}

.prod-price {
  display: flex;
  margin-top: 12px;
}

.percent {
  margin-right: 8px;
  color: var(--accent-color);
}

.price {
  margin-right: 8px;
}

.price-normal {
  text-decoration: line-through;
}

.prod-intro {
  margin-top: 20px;
  color: var(--font-color);
  margin-bottom: 0;
  /* max-height: 48px; */
  /* 設定多的字改成... */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.prod-btn-wrap {
  width: 135px;
  margin-left: auto;
  text-align: right;
}

.btn-wish-icon {
  margin-bottom: 24px;
  width: 18px;
  height: 18px;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  margin-right: 8px;
}

.btn-wrap a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 130px;
  padding: 3px 13px;
  border-radius: 6px;
  color: var(--background-color);
  font-size: 700;
}

.add-cart-btn {
  background-color: var(--secondary-color);
}

.just-buy-btn {
  background-color: var(--primary-color);
  margin-top: 10px;
}
</style>