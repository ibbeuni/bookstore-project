
<template>
    <div class="vhSize">
      <button @click="alterBook()" style="margin-bottom: 20px">新增書籍</button>
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
          <tr v-for="(item, index) in bookAlter" :key="index">
            <th scope="row">{{bookAlter[index].product_id}}</th>
            <!-- <td>{{bookAlter[index].product_id}}</td> -->
            <td>{{bookAlter[index].product_name}}</td> 
            <td>{{bookAlter[index].auther}}</td>
            <td>{{bookAlter[index].original_author}}</td>
            <td>{{bookAlter[index].translator}}</td>
            <td>{{bookAlter[index].painter}}</td>
            <td>{{bookAlter[index].publishing_house}}</td>
            <td>{{bookAlter[index].publication_date}}</td>
            <td>{{bookAlter[index].language}}</td>
            <td>{{bookAlter[index].amount}}</td>
            <td>{{bookAlter[index].ISBN}}</td>
            <td>{{bookAlter[index].binding_method}}</td>
            <td>{{bookAlter[index].format}}</td>
            <td>{{bookAlter[index].format}}</td>
            <td>{{bookAlter[index].introduction}}</td>
            <td>{{bookAlter[index].auther_Introduction}}</td>
            <td>{{bookAlter[index].list_price}}</td>
            <td>{{bookAlter[index].cost_price}}</td>
            <td>{{bookAlter[index].discount_price}}</td>
            <td>{{bookAlter[index].img_5}}</td>
            <td>{{bookAlter[index].class_one}}</td>
            <td>{{bookAlter[index].class_two}}</td>
            <td>{{bookAlter[index].class_three}}</td>
            <td>{{bookAlter[index].img_cover}}</td>
            <td>{{bookAlter[index].img_1}}</td>
            <td>{{bookAlter[index].img_2}}</td>
            <td>{{bookAlter[index].img_3}}</td>
            <td>{{bookAlter[index].img_4}}</td>
            <td>{{bookAlter[index].img_5}}</td>
            <td>
              <button @click="updateAlter(bookAlter[index])">編輯</button>
              <button>刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
//   import axios from "axios"

// export default {
//     data() {
//         return {
//             bookAlter: '',
//         };
//     },
//     mounted() {
//         axios.get('http://127.0.0.1:3000/booktable').then(res => {
//             this.bookAlter = res.data;
//             console.log(res.data);
//             // console.log(this.imgSrc);
//         })
//     },

//     methods: {
//     }
// }
  import axios from 'axios'
  export default {
    data() {
      return {
          bookAlter:[],
      };
    },
    methods: {
      alterBook() {
        this.$router.push({
          name: "alterbook",
        });
      },
       updateAlter(item) {
        this.$router.push({
          name: "alterbook",
          params: item,
        });
      },
         deleteAlter() {
        this.$router.push({
          name: "alterbook",
          params: {
            id: 111, // 注意，傳送後會轉為字串
            name: "Alysa",
          },
        });
      },
    },
    mounted() {
         axios.get('http://127.0.0.1:3000/booktable/').then(res => {
             console.log(res)
             this.bookAlter = res.data
          })
        
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