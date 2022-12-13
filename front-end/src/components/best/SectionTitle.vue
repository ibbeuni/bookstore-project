<template>
  <div class="title-wrap">
    <h4 class="title-heading">{{searchResult}}</h4>
    <div class="sub-title-wrap">
      <p class="info-text">綜合暢銷排行</p>
      <div class="right-area">
        <div class="form-sel">
          <select
            ref="p"
            @change="showPages"
            title="選擇顯示方式"
            id="selListPer"
          >
            <option value="10">顯示10項</option>
            <option value="20">顯示20項</option>
          </select>
        </div>
        <div class="switch-list-btn-wrap">
          <button type="button" class="list-btn">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
          <button type="button" class="block-btn">
            <font-awesome-icon icon="fa-solid fa-table-cells-large" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["condition"],
  name: "SectionTitle",
  data() {
    return {
      pages: 10,
    };
  },
  computed:{
       searchResult(){
           let result = ""
           if(this.condition != ""){
               result = "搜尋：" + this.condition
           }
          return result
      },
  },
  methods: {
    showPages() {
      this.pages = this.$refs.p.value;
      this.$emit("showPages", this.pages);
    },
  },
};
</script>

<style scoped>
.title-wrap {
  padding-bottom: 30px;
  flex-wrap: wrap;
  /* display: flex;
    justify-content: flex-start; */
}

.title-heading {
  margin: 0;
  padding: 0;
}

.sub-title-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 6px;
}

.info-text {
  width: auto;
  margin-bottom: 0;
  align-items: center;
  color: var(--neutral-color);
}

.right-area {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  flex-direction: row;
}

.form-sel {
  margin: 0 2px;
  width: 120px;
  display: inline-block;
}

select {
  vertical-align: middle;
  text-align: start;
  box-sizing: border-box;
  align-items: center;
  cursor: default;
  border-width: 1px;
  border-style: solid;
  border-color: var(--neutral-color);
  border-radius: 6px;
  height: 38px;
  padding: 0 14px;
}

.switch-list-btn-wrap {
  margin: 0 5px;
  display: inline-block;
  width: 75px;
  vertical-align: top;
}

.list-btn {
  margin-left: 0;
  border-radius: 6px 0 0 6px;
  display: inline-block;
  width: 50%;
  height: 38px;
  border: 1px solid var(--neutral-color);
  background-color: var(--background-color);
  padding: 0;
  box-sizing: border-box;
  vertical-align: top;
}

.block-btn {
  margin-left: 0;
  border-radius: 0 6px 6px 0;
  display: inline-block;
  width: 50%;
  height: 38px;
  border: 1px solid var(--neutral-color);
  background-color: var(--background-color);
  padding: 0;
  box-sizing: border-box;
  vertical-align: top;
}
</style>