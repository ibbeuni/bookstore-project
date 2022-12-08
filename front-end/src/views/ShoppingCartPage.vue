<template>
  <div>
    <div id="headDiv">
      <div id="userInfo" class="flex">
        <div id="userInfoDiv">
          <div>
            <img id="userPhoto"
              src=""
              alt="">
          </div>
          <p class="nb nh3">會員姓名</p>
        </div>

      </div>
    </div>
    <br><br><br><br>
    <div id="mainContent" class="flex">
      <div id="navLeft">
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
          <div class="shopItem">
            <div class="buyProduct flex">
              <div class="flex productImgName" v-for="(pdt, index) in pdtList " v-bind:key="index">
                <div><img class="shopItemImg" :src="'../assets/img/product/'+ +'.png'" alt=""></div>
                <div><p class="nb">{{pdt.name}}</p></div>
              </div>

              <ul class="singlePrice">
                <li>單價</li>
                <li>{{pdt.price}}</li>
              </ul>

              <ul class="count">
                <li>數量</li>
                <li>
                  <button>+</button>
                  <span>{{pdt.amount}}</span>
                  <button>-</button>
                </li>
              </ul>

              <ul class="total">
                <li>總共</li>
                <li>{{pdt.pTotal}}</li>
              </ul>

              <div class="delete">
                <div>
                  <button>
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
                <p>{{cnt.pPrice}}</p>
              </div>

              <div>
                <p>運費</p>
                <p>{{cnt.shpinFee}}</p>
              </div>

              <div>
                <p>折扣</p>
                <p>{{cnt.discount}}</p>
              </div>

              <hr>
              <div>
                <p>總計金額</p>
                <p id="lastTotalPrice">{{cnt.allTotal}}</p>
              </div>

              <br><br>
              <button id="checOutButton">結帳</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>


export default{
data(){
  return{
      pdt:{
        name:'AAA',
        price:'1000',
        amount:'2',
        pTotal:'2000'
     },
     cnt:{
      pPrice:'',
      shpinFee:'',
      discount:'',
      allTotal:''
     }

  }
},

}


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
  background-color: #F7F7F7;
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
  content: '';
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
  border-radius: 50%;
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

#mainContentMid>p {
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

#sendTo>div,
.shopItem>div {
  margin: 10px 10px;
}

.shopItemImg {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.productImgName {
  width: 300px;
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

.count {}


.count button,
.delete button {
  /* width: 20px; */
  border: none;
  background-color: #fff;
}

.count>li:not(:first-child) {
  border: 1px black solid;
  border-radius: 5px;


}


/* /購物車清單內容 */

/* 右方結帳 */

#totalPrice {
  width: 250px;
  border: solid rgb(127, 127, 127) 2px;
  border-radius: 20px;
  margin: 78px auto;

}

#totalPriceDiv>div {
  display: flex;

}

#totalPriceDiv>div :first-child {
  margin-right: auto;
}

#totalPriceDiv>div p {
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
  background-color: #53929b;
  border: none;
  border-radius: 10px;
}

/* /右方結帳 */
</style>
