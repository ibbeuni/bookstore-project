
<template>
    <div class="vhSize">
        <button @click="addBook()" style="margin-bottom: 20px">新增書籍</button>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">編號</th>
            <th scope="col">商品名稱</th>
            <th scope="col">作者</th>
            <th scope="col">原文作者</th>
            <th scope="col">譯者</th>
            <th scope="col">繪者</th>
            <th scope="col">出版社</th>
            <th scope="col">出版日期</th>
            <th scope="col">語言</th>
            <th scope="col">總數量</th>
            <th scope="col">ISBN</th>
            <th scope="col">裝訂方式</th>
            <th scope="col">詳細規格</th>
            <th scope="col">出版地</th>
            <th scope="col">內容簡介</th>
            <th scope="col">作者簡介</th>
            <th scope="col">定價</th>
            <th scope="col">進價</th>
            <th scope="col">折扣價</th>
            <th scope="col">關鍵字</th>
            <th scope="col">類別一</th>
            <th scope="col">類別二</th>
            <th scope="col">類別三</th>
            <th scope="col">img</th>
            <th scope="col">img</th>
            <th scope="col">img</th>
            <th scope="col">img</th>
            <th scope="col">img</th>
            <th scope="col">img</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in booklist" :key="index">
            <button style="color:white" @click="updateBook(item)"><th scope="row">{{item.product_id}}</th></button>
            <td>{{item.product_name}}</td> 
            <td>{{item.auther}}</td>
            <td>{{item.original_author}}</td>
            <td>{{item.translator}}</td>
            <td>{{item.painter}}</td>
            <td>{{item.publishing_house}}</td>
            <td>{{item.publication_date}}</td>
            <td>{{item.language}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.ISBN}}</td>
            <td>{{item.binding_method}}</td>
            <td>{{item.format}}</td>
            <td>{{item.publish_area}}</td>
            <td>{{item.introduction}}</td>
            <td>{{item.auther_Introduction}}</td>
            <td>{{item.list_price}}</td>
            <td>{{item.cost_price}}</td>
            <td>{{item.discount_price}}</td>
            <td>{{item.img_5}}</td>
            <td>{{item.class_one}}</td>
            <td>{{item.class_two}}</td>
            <td>{{item.class_three}}</td>
            <td>{{item.img_cover}}</td>
            <td>{{item.img_1}}</td>
            <td>{{item.img_2}}</td>
            <td>{{item.img_3}}</td>
            <td>{{item.img_4}}</td>
            <td>{{item.img_5}}</td>
            <td>
              <button @click="updateBook(item)">編輯</button>
              <button @click="deleteBook(item, index)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        booklist: [],
      };
    },
    methods: {
        addBook() {
        this.$router.push({
          name: "addbook",
        });
      },
      updateBook(item) {
        this.$router.push({
          name: "addbook",
          params: item,
        });
      },
      deleteBook(item, index) {
        axios
          .delete("http://127.0.0.1:3000/booktable/" + item["product_id"])
          .then((res) => {
            if (res.data == "success") {
              this.bookList.splice(index, 1);
            }
          });
      },
    },
    mounted() {
      axios.get("http://127.0.0.1:3000/booktable/").then((res) => {
        this.booklist = res.data;
      });
    },
  };
  </script>
  <style>
  .vhSize{
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  </style>