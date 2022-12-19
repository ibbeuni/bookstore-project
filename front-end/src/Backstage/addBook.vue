<template>
    <div>
        <p><label for="title">編號:</label><input v-model="bookData.product_id" type="text" required /></p>
        <p><label for="title">商品名稱:</label><textarea v-model="bookData.product_name" type="text" required name="mytext" rows="5" cols="30"></textarea></p>
            <p><label for="title">作者:</label><input v-model="bookData.auther" type="text" required /></p>
            <p><label for="title">原文作者:</label><input v-model="bookData.original_author" type="text" required /></p>
            <p><label for="title">譯者:</label><input v-model="bookData.translator" type="text" required /></p>
            <p><label for="title">繪者:</label><input v-model="bookData.painter" type="text" required /></p>
            <p><label for="title">出版社:</label><input v-model="bookData.publishing_house" type="text" required /></p>
            <p><label for="title">出版日期:</label><input v-model="bookData.publication_date" type="text" required /></p>
            <p><label for="title">語言:</label><input v-model="bookData.language" type="text" required /></p>
            <p><label for="title">總數量:</label><input v-model="bookData.amount" type="text" required /></p>
            <p><label for="title">ISBN:</label><input v-model="bookData.ISBN" type="text" required /></p>
            <p><label for="title">裝訂方式:</label><input v-model="bookData.binding_method" type="text" required /></p>
            <p><label for="title">詳細規格:</label><input v-model="bookData.format" type="text" required /></p>
            <p><label for="title">出版地:</label><input v-model="bookData.publish_area" type="text" required /></p>
            <p><label for="title">內容簡介:</label><textarea v-model="bookData.introduction" type="text" required name="mytext" rows="10" cols="100"></textarea></p>
            <p><label for="title">作者簡介:</label><textarea v-model="bookData.auther_Introduction" type="text" required name="mytext" rows="10" cols="100"></textarea></p>
            <p><label for="title">定價:</label><input v-model="bookData.list_price" type="text" required /></p>
            <p><label for="title">進價:</label><input v-model="bookData.cost_price" type="text" required /></p>
            <p><label for="title">折扣價:</label><input v-model="bookData.discount_price" type="text" required /></p>
            <p><label for="title">關鍵字:</label><input v-model="bookData.key_wordarray" type="text" required /></p>
            <p><label for="title">類別一:</label><input v-model="bookData.class_one" type="text" required /></p>
            <p><label for="title">類別二:</label><input v-model="bookData.class_two" type="text" required /></p>
            <p><label for="title">類別三:</label><input v-model="bookData.class_three" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="bookData.img_cover" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="bookData.img_1" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="bookData.img_2" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="bookData.img_3" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="bookData.img_4" type="text" required /></p>
            <p><label for="title">img:</label><input v-model="bookData.img_5" type="text" required /></p>
      <div>
        <button @click="addBook" class="buttomStyle" style="width: 150px; height: 50px">
            新增與修改書籍
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        b: "",
        bookData: {},
      };
    },
    methods: {
      addBook() {
        let data = this.bookData;
        axios.post("http://127.0.0.1:3000/book/", { data }).then((res) => {
          if (res.data == "success") {
            alert('成功')
            this.$router.push({
              name: "booklist",
            });
          }
        });
      },
    },
    mounted() {
      if (this.$route.params["product_id"] != undefined) {
        console.log(this.$route.params);
        this.bookData = this.$route.params;
      } else {
        console.log("空");
      }
    },
  };
  </script>
  <style>
  fieldset {
      /* background-color: #f1f1f1; */
      border: none;
      border-radius: 2px;
      margin-bottom: 12px;
      overflow: hidden;
      padding: 0 .625em;
  }
  
  label {
      cursor: pointer;
      display: inline-block;
      padding: 3px 6px;
      text-align: right;
      width: 150px;
      vertical-align: top;
  }
  
  input {
      font-size: inherit;
  }
  .buttomStyle{
  border:0;
  background-color:#df9f0b;
  color:#fff;border-radius:10px;
  }
  .buttomStyle:hover{
    color:#df9f0b;
    background-color:#fff;
    border:2px #df9f0b solid;
  }
  </style>