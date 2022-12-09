<template>
    <div>
        <p><label for="title">編號:</label><input v-model="alterData.product_id" type="text" required /></p>
        <p><label for="title">商品名稱:</label><textarea v-model="alterData.product_name" type="text" required name="mytext" rows="5" cols="30"></textarea></p>
            <p><label for="title">作者:</label><input v-model="alterData.auther" type="text" required /></p>
            <p><label for="title">原文作者:</label><input v-model="alterData.original_author" type="text" required /></p>
            <p><label for="title">譯者:</label><input v-model="alterData.translator" type="text" required /></p>
            <p><label for="title">繪者:</label><input v-model="alterData.painter" type="text" required /></p>
            <p><label for="title">出版社:</label><input v-model="alterData.publishing_house" type="text" required /></p>
            <p><label for="title">出版日期:</label><input v-model="alterData.publication_date" type="text" required /></p>
            <p><label for="title">語言:</label><input v-model="alterData.language" type="text" required /></p>
            <p><label for="title">總數量:</label><input v-model="alterData.amount" type="text" required /></p>
            <p><label for="title">ISBN:</label><input v-model="alterData.ISBN" type="text" required /></p>
            <p><label for="title">裝訂方式:</label><input v-model="alterData.binding_method" type="text" required /></p>
            <p><label for="title">詳細規格:</label><input v-model="alterData.format" type="text" required /></p>
            <p><label for="title">出版地:</label><input v-model="alterData.publish_area" type="text" required /></p>
            <p><label for="title">內容簡介:</label><textarea v-model="alterData.introduction" type="text" required name="mytext" rows="10" cols="100"></textarea></p>
            <p><label for="title">作者簡介:</label><textarea v-model="alterData.auther_Introduction" type="text" required name="mytext" rows="10" cols="100"></textarea></p>
            <p><label for="title">定價:</label><input v-model="alterData.list_price" type="text" required /></p>
            <p><label for="title">進價:</label><input v-model="alterData.cost_price" type="text" required /></p>
            <p><label for="title">折扣價:</label><input v-model="alterData.discount_price" type="text" required /></p>
            <p><label for="title">關鍵字:</label><input v-model="alterData.img_5" type="text" required /></p>
            <p><label for="title">類別一:</label><input v-model="alterData.class_one" type="text" required /></p>
            <p><label for="title">類別二:</label><input v-model="alterData.class_two" type="text" required /></p>
            <p><label for="title">類別三:</label><input v-model="alterData.class_three" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="alterData.img_cover" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="alterData.img_1" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="alterData.img_2" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="alterData.img_3" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="alterData.img_4" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="alterData.img_5" type="text" required /></p>
      <div>
        <button class="buttomStyle" style="width: 150px; height: 50px">
            修改完成
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        b: "",
        alterData:{},
      };
    },
    mounted() {
      if(this.$route.params['product_id'] != undefined){
          console.log(this.$route.params)
          this.alterData = this.$route.params
      }else{
          console.log("空")
      }
    },
  };
  </script>