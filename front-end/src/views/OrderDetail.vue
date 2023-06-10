<template>
    <div>
        <br><br><br><br><br><br><br><br>
        <div id="mainContent" class="flex">
            <div id="navLeft">
                <div id="userInfoDiv">
                  <div class='imgCtrl'>
                      <img id="userPhoto" v-if='image' :src='image'  >
                  </div>
                  <div class='filrCtrl'>
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    <input type="file" @change="fileSelected" >
                  </div>
              </div>
                <ul class="nh3 nb">
                    <li><a href="/#/home/member">會員資料</a></li>
                    <li><a href="/#/home/shoppingcart">購物車</a></li>
                    <li><a href="/#/home/orderdetail">訂單查詢</a></li>
                    <li><a href="">追蹤清單</a></li>
                    <li><a href="">貨到通知</a></li>
                    <li><a href="">訂閱/取消電子報</a></li>
                </ul>
            </div>

            
            <!-- !可變換元件區域 -->
            <div id="canChangeDiv">
                <p id="componenTtital" class="nh1 nb">會員訂單</p>
                <div>
                   
                    <ul class="flex nh3 historyOrderList">
                        <li>訂單編號</li>
                        <li>購買日期</li>
                        <li>商品名稱</li>
                        <li>商品價格</li>
                        <li>購買數量</li>
                    </ul>
                </div>
                <div id="canChangeDiv">
                    <ul class="flex nh3 OrderList">
                        <li>20221225101001</li>
                        <li>2022/12/25</li>
                        <li>世界名畫鑑賞入門：品味101幅西洋藝術經典之美</li>
                        <li>315</li>
                        <li>1</li>
                    </ul>
                </div>
                    


                
            </div>
            <!-- !/可變換元件區域 -->
        </div>
        <br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
  
<script>
export default{
    data(){
        return{
            image:""
        }
    },
    methods:{
        fileSelected(e) {
      const file = e.target.files.item(0);
      const reader = new FileReader();
      reader.addEventListener('load', this.imageLoaded);
      reader.readAsDataURL(file);
    },
    imageLoaded(e) {
      this.image = e.target.result;
    }
    }

}

</script>
  
<style scoped>
/* <共用CSS> */
*{
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

#canChangeDiv {
    width: 1000px;
    /* background-color: rgb(240, 133, 133); */
}

#componenTtital {
    margin: 20px 30px;

}


.historyOrderList>li {
    width:200px;
    text-align: center;
}


.OrderList>li {
    width:200px;
    padding: 10px;
    margin: 20px auto;
    font-size: 13px;
    text-align: center;
    float:right;
    word-wrap:break-word;
}


    







#itemList :first-child,
.historyOrderList :first-child {
    width: 180px;
}

#itemList :not(:first-child),
.historyOrderList :not(:first-child) {
    width: 164px;
}

.imgCtrl{
 background-image: url('../assets/noPic.png');
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
    *zoom: 1
}
 
.filrCtrl  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
}
</style>
  