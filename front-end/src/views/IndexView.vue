<template>
  <!-- BODY_WRAPPER -->
  <div class="wrap">
    <!-- HEADER_COMPONENT -->
    <full-header ref="clearSearch" @searchText="updateSearchText"></full-header>
    <router-view :booksType="booksType" :condition="searchText" @searchText="clearSearch" @booksType="changBooksType"
      class="margin-top"></router-view>
    <a href="#" class="back-to-top">
      <div class="topBtn">
        <div class="top-font">
          <font-awesome-icon icon="fa-solid fa-angle-up" />
          <p>TOP</p>
        </div>
      </div>
    </a>
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
.wrap {
  background-color: var(--background-color);
}

.margin-top {
  margin-top: 177px;
}

.topBtn {
  position: fixed;
  z-index: 99;
  bottom: 5.8rem;
  right: 2.5rem;
  width: 3.5rem;
  height: 3.5rem;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 3px 9px var(--neutral-color);
  color: var(--font-color);
}

.top-font {
  font-size: 1rem;
  text-align: center;
}

.top-font p {
  line-height: 14px;
}
</style>