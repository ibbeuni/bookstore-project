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

router-view {
  margin-top: 177px;
}

</style>