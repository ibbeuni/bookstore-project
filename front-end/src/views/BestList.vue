<template>
  <div class="wrap">
    <main>
      <!-- 導覽列 breadcrumb_wrap -->
      <bread-crumb></bread-crumb>
      <!-- contents_wrap -->
      <section class="contents-wrap">
        <div class="contents-inner flex">
          <!-- LNB -->
          <aside class="aside-wrap">
            <div class="aside-header">
              <div class="aside-title-wrap">
                <h2 class="aside-title-heading">暢銷書單</h2>
              </div>
            </div>
            <div class="aside-body">
              <div class="snb-wrap">
                <ul class="snb-list">
                  <li class="snb-item">
                    <button type="button" class="snb-btn" @click="getAllData">
                      <h5>綜合</h5>
                    </button>
                  </li>
                  <li class="snb-item">
                    <button
                      type="button"
                      class="snb-btn"
                      @click="getAppreciationData"
                    >
                      <h5>鑑賞</h5>
                    </button>
                  </li>
                  <li class="snb-item">
                    <button
                      type="button"
                      class="snb-btn"
                      @click="getPaintingData"
                    >
                      <h5>繪畫</h5>
                    </button>
                  </li>
                  <li class="snb-item">
                    <button type="button" class="snb-btn" @click="getArtData">
                      <h5>藝術</h5>
                    </button>
                  </li>
                  <li class="snb-item">
                    <button
                      type="button"
                      class="snb-btn"
                      @click="getPhotographyData"
                    >
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
            <section-title :condition="condition" @showPages="changeSelectPages"></section-title>
            <!-- list contents -->
            <div class="switch-prod-wrap">
              <!-- list -->
              <!-- <prod-list></prod-list> -->
              <ol
                class="prod-list"
                v-for="(item, index) in showBooks"
                :key="index"
              >
                <li class="prod-item">
                  <div class="prod-area">
                    <div class="prod-thumb-box">
                      <a
                        :href="'/#/home/product/' + products[index].product_id"
                        class="prod-link"
                      >
                        <div class="img-box">
                          <img
                            v-bind:src="
                              'http://127.0.0.1:3000/img/books/' +
                              item.img_cover +
                              '.png'
                            "
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <div class="prod-info-box">
                      <a
                        :href="'/#/home/product/' + products[index].product_id"
                        class="prod-info"
                      >
                        <h5 class="prod-name">
                          {{ item.product_name }}
                        </h5>
                      </a>
                      <p class="prod-author">
                        {{ item.auther }}
                        &nbsp;|&nbsp;
                        {{ item.publishing_house }}
                        &nbsp;|&nbsp;
                        <span class="date"
                          >{{ item.publication_date }} 出版</span
                        >
                      </p>
                      <div class="prod-price">
                        <span class="percent">10%</span>
                        <span class="price">
                          <strong class="val"
                            >優惠價 {{ item.discount_price }}</strong
                          >
                          <strong class="unit">元</strong>
                        </span>
                        <span class="price-normal">
                          <span class="val">原價 {{ item.list_price }}</span>
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
                        <button class="add-cart-btn" @click="addToCart">
                          <span>加入購物車</span>
                        </button>
                        <button class="just-buy-btn" @click="needLogin">
                          <span>馬上購買</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>
        <div class="page-nav">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a @click="pageDown" class="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li
                @click="clickPage(index)"
                v-for="(item, index) in bookListDone"
                :key="index"
                class="page-item"
              >
                <a class="page-link">{{ index + 1 }}</a>
              </li>
              <li class="page-item">
                <a @click="pageUp" class="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
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
  props: ["condition", "booksType"],
  data() {
    return {
      all: "", // 全部
      // products: "", // 跑迴圈用變數
      appreciation: "", // 鑑賞
      painting: "", // 繪畫
      art: "", // 藝術
      photography: "", // 攝影
      allBookList: [],
      selectShowPages: 10,
      nowPage: 1,
      // booksType: "All",
    };
  },
  mounted() {
    // this.$emit("booksType", "All");
    // this.$emit("searchText", "");

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
    products: {
      get() {
        let result = this.all;
        if (this.condition != "") {
          result = this.searchbookList;
        }

        if (this.booksType == "All") {
          result = this.all;
        }

        if (this.booksType == "Appreciation") {
          result = this.appreciation;
        }

        if (this.booksType == "Painting") {
          result = this.painting;
        }

        if (this.booksType == "Art") {
          result = this.art;
        }
        if (this.booksType == "Photography") {
          result = this.photography;
        }

        return result;
      },
      set() {},
    },
    searchbookList() {
      let allBooks = this.allBookList;
      const result = allBooks.filter((item) =>
        item["product_name"].includes(this.condition)
      );
      return result;
    },
    bookListDone() {
      let drawList = this.products;
      let arrtemp = [];
      let arr = [];
      let linecount = this.selectShowPages;

      for (var i = 0; i < drawList.length; i++) {
        var indextemp = i % linecount;
        if (indextemp == 0) {
          arrtemp = [];
          arr[arr.length] = arrtemp;
        }
        arrtemp[indextemp] = drawList[i];
      }

      return arr;
    },
    showBooks() {
      return this.bookListDone[this.nowPage - 1];
    },
    allPages() {
      let PagesNum = this.bookListDone.length;

      return PagesNum;
    },
  },
  methods: {
    clickPage(index) {
      this.nowPage = index + 1;
    },
    // 全部
    getAllData() {
      this.products = this.all;
      this.nowPage = 1;
      // this.booksType = "All";
      this.$emit("booksType", "All");
      this.$emit("searchText", "");
    },

    // 鑑賞
    getAppreciationData() {
      this.products = this.appreciation;
      this.nowPage = 1;
      // this.booksType = "Appreciation";
      this.$emit("booksType", "Appreciation");
      this.$emit("searchText", "");
    },

    // 繪畫
    getPaintingData() {
      this.products = this.painting;
      this.nowPage = 1;
      // this.booksType = "Painting";
      this.$emit("booksType", "Painting");

      this.$emit("searchText", "");
    },

    // 藝術
    getArtData() {
      this.products = this.art;
      this.nowPage = 1;
      // this.booksType = "Art";
      this.$emit("booksType", "Art");

      this.$emit("searchText", "");
    },

    // 攝影
    getPhotographyData() {
      this.products = this.photography;
      this.nowPage = 1;
      // this.booksType = "Photography";
      this.$emit("booksType", "Photography");

      this.$emit("searchText", "");
    },
    pageUp() {
      if (this.nowPage < this.allPages) {
        this.nowPage = this.nowPage + 1;
      }
    },
    pageDown() {
      if (this.nowPage > 1) {
        this.nowPage = this.nowPage - 1;
      }
    },
    changeSelectPages(page) {
      this.selectShowPages = page;
    },

    // 請先登入
    needLogin() {
      alert('請先登入會員，謝謝！')
    },

    // 加入購物車
    addToCart() {
      console.log(this.item.product_name)
      axios
        .post("http://127.0.0.1:3000/shoppingcartable/post", {
          params: {
            product_id: this.product_id,
            img_cover: this.img_cover,
            product_name: this.product_name,
            product_price: this.product_price,
            amount: 1,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 200) {
            console.log(res.data);
            alert("加入購物車成功！");
            this.router.push("/shoppingcart");
          } else {
            console.log(res.data);
          }
        });
    },
  },
  watch: {
    products() {
      this.nowPage = 1;
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

.btn-wrap button {
  border: 0;
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

.page-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 88px;
}

.page-nav a {
  color: var(--neutral-color);
}
</style>