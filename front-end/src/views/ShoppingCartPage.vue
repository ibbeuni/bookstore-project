<template>
  <div>
    <br /><br /><br /><br />
    <div id="mainContent" class="flex">
      <div id="navLeft">
        <div id="userInfoDiv">
          <div class="imgCtrl">
            <img id="userPhoto" v-if="image" :src="image" />
          </div>
          <div class="filrCtrl">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            <input type="file" @change="fileSelected" />
          </div>
          <p class="nb nh3">{{ name }}</p>
        </div>
        <ul class="nh3 nb">
          <li><a href="">會員資料</a></li>
          <li><a href="">購物車</a></li>
          <li><a href="">訂單查詢</a></li>
          <li><a href="">追蹤清單</a></li>
          <li><a href="">貨到通知</a></li>
          <li><a href="">訂閱/取消電子報</a></li>
        </ul>
      </div>
      <div id="canChangeDiv" class="flex">
        <div id="mainContentMid">
          <p class="nh1 nb">購物車清單</p>

          <!-- !商品清單 -->
          <div class="shopItem" v-for="(item, index) in pdt" :key="index">
            <div class="buyProduct flex" >
              <div class="flex productImgName" >
                <div><img class="shopItemImg" v-bind:src="'http://127.0.0.1:3000/img/books/' + item.img_cover + '.png'" /></div>
                <div ><p class='bookname'>{{ item.product_name }}</p></div>
              </div>

              <ul class="singlePrice">
                <li>單價</li>
                <li>{{ item.product_price }}</li>
              </ul>

              <ul class="count">
                <li>數量</li>
                <div class="countingbox">
                <button @click="add(item)">+</button>
                <input class="amountbox" type="text" v-model='item.amount'>
                <button @click="mius(item)">-</button>
                </div> 
              </ul>

              <ul class="total">
                <li>總共</li>
                <li>{{ item.amount * item.product_price }}</li>
              </ul>

              <div class="delete">
                <div>
                  <button @click="remove(item)">
                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- !計算清單 -->
        </div>
        <div id="mainContentRight">
          <div id="totalPrice">
            <div id="totalPriceDiv">
              <div>
                <p id="aaa">商品價格</p>
                <p>{{sum}}&nbsp;元</p>
              </div>

              <div>
                <p>運費</p>
                <p>{{ cnt.shpinFee }}&nbsp;元</p>
              </div>

              <div>
                <p class='discount'>折扣</p>
                <p class='discount'>{{ cnt.discount }}</p>
              </div>

              <hr />
              <div>
                <p>總計金額</p>
                <p id="lastTotalPrice">${{ allTotal }}&nbsp;元</p>
              </div>

              <br /><br />

                <button id="checOutButton" @click="topayment">結帳</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      image: "",
      pdt:{
        img_cover:'',
        name:'',
        product:'',
        amount:''
      },
      cnt: {
        shpinFee: "60",
        discount: "10% off",
      },
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:3000/shoppingcartable").then((res) => {
      // console.log(res.data[0].product_name)
      this.pdt=res.data
      this.pdt.img_cover=res.data.img_cover;
      this.pdt.name=res.data.name;
      this.pdt.price=res.data.price;
      console.log(res.data.price)
      this.pdt.amount=res.data.amount
      
    
    

    });
  },
  methods: {
    fileSelected(e) {
      const file = e.target.files.item(0);
      const reader = new FileReader();
      reader.addEventListener("load", this.imageLoaded);
      reader.readAsDataURL(file);
    },
    imageLoaded(e) {
      this.image = e.target.result;
    },


    add:function(item){
      item.amount++
      
     
    },
    mius:function(item){
      if(item.amount<=0){
       
       item.amount = 0
     }else {
       item.amount-- 
       }
    },
    remove:function(pdt){
      var newIndex = "";
      this.pdt.forEach(function(item, key){
        if(pdt.name == item.name){
          newIndex = key
        }
      })
      this.pdt.splice(newIndex, 1)
      
      
   
    },
    topayment(){
      this.$router.push('/home/paymentpage')
    }
  
    
   
  },
  computed:{
    sum(){
      var totalPrice = 0
     this.pdt.forEach(function(val){
      totalPrice+=val.product_price*val.amount
      console.log(val.product_price)
     });
     return totalPrice;
    },
    allTotal(){
       var totalPrice = 0
     this.pdt.forEach(function(val){
      totalPrice+=val.product_price*val.amount
      
      });
      return (totalPrice+60)*0.9
      

    }
  }
};
</script>

<style scoped>
/* <共用CSS> */
* {
  box-sizing: border-box;
}

.nh1 {
  font-size: 24px;
}

.nh2 {
  font-size: 20px;
}

.nh3 {
  font-size: 18px;
}

.nh4 {
  font-size: 13px;
}

.nh5 {
  font-size: 11px;
}

.nh6 {
  font-size: 10px;
}

.nb {
  font-weight: bolder;
}

.mrauto {
  margin-right: auto;
}

.flex {
  display: flex;
}

.inlineblock {
  display: inline-block;
}

.m10 {
  margin: 10px;
}

.m20 {
  margin: 20px;
}

.bgcF7F7F7 {
  background-color: #f7f7f7;
}

/* </共用CSS> */

/* 歸零CSS */
/* v2.0 | 20110126
  http://meyerweb.com/eric/tools/css/reset/ 
  License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* /歸零CSS */
/* 影片區內頁css */
#headDiv {
  background-image: linear-gradient(-5deg, #53929b, #e3d096);
  /* background-color: rgb(225, 189, 189); */
  height: 250px;
}

#userInfo {
  width: 1200px;
  margin: auto;
  position: relative;
}

#userInfoDiv {
  width: 200px;
  text-align: center;
  padding-top: 65px;
}

#userPhoto {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

#mainContent {
  margin: 0 auto;
  /* background-color: rgb(171, 240, 201); */
  width: 1200px;
  box-sizing: border-box;
}

#navLeft {
  width: 200px;
  text-align: start;
  /* background-color: rgb(177, 243, 141); */
}

#navLeft li {
  margin: 20px;
}

/* 購物車清單內容 */

#mainContentMid {
  width: 700px;
  /* background-color: rgb(229, 243, 123); */
}

#mainContentMid > p {
  margin: 20px 30px;
}

#mainContentRight {
  width: 300px;
  /* background-color: rgb(170, 206, 226); */
}

#sendTo,
.shopItem {
  margin: 30px 50px;
  border: solid rgb(127, 127, 127) 2px;
  /* height: 160px; */
  border-radius: 20px;
  height: 150px;
}

#sendTo > div,
.shopItem > div {
  margin: 10px 10px;
}
.buyProduct {
  text-align: left;
}
.shopItemImg {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.productImgName {
  width: 300px;
  /* text-align: left; */

  /* background-color: rgb(247, 177, 177); */
}

.singlePrice,
.total,
.delete,
.count {
  width: 70px;
  margin: auto;
  text-align: center;
  
}
.count button {
  /* border: #53929b solid; */
  border-radius: 5px;
  border:1px;
}
.delete button {
  /* width: 20px; */
  border: none;
  background-color: #fff;
}

.count > li:not(:first-child) {
  border: 1px black solid;
  border-radius: 5px;
}
.bookname{
  margin-top:30%;
  display: flex;
  font-size:12.5px;
  color: black;
  background-color:#e3d096;
  
}


/* /購物車清單內容 */

/* 右方結帳 */

#totalPrice {
  width: 250px;
  border: solid rgb(127, 127, 127) 2px;
  border-radius: 20px;
  margin: 78px auto;
}

#totalPriceDiv > div {
  display: flex;
}

#totalPriceDiv > div :first-child {
  margin-right: auto;
}

#totalPriceDiv > div p {
  margin-top: 10px;
}

#totalPriceDiv {
  margin: 10px;
}

#lastTotalPrice {
  font-size: 25px;
}

#checOutButton {
  width: 100%;
  padding: 15px;
  color:white;
  font-weight: 40px;
  background-color: #53929b;
  border: none;
  border-radius: 10px;
}
.imgCtrl {
  background-image: url("@/assets/noPic.png");
  width: 150px;
  height: 150px;
}
.filrCtrl {
  padding: 4px 10px;
  height: 30px;
  line-height: 20px;
  position: relative;
  cursor: pointer;
  /* background: #171717; */
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

.filrCtrl input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}
.amountbox{
  width:20px;
  border-radius: 5px;
  border:1px;
}
.countingbox{
  display: flex;
  /* justify-content: center; */
  align-content: center;
}
.discount{
  color:red;
  font-weight: 500;
}

/* /右方結帳 */
</style>
