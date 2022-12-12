<template>
    <div>
        <div id="headDiv">
            <div id="userInfo" class="flex">
                <div id="userInfoDiv">
                    <div>
                        <img id="userPhoto"
                            src="data:image/jpeg;base64,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"
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
            <!-- !可變換元件區域 -->
            <div id="canChangeDiv">
                <p id="componenTtital" class="nh1 nb">會員訂單</p>
                <div>
                    <ul id="itemList" class="flex nh3">
                        <li>訂單編號</li>
                        <li>購買日期</li>
                        <li>商品名稱</li>
                        <li>商品描述</li>
                        <li>商品價格</li>
                        <li>購買數量</li>
                    </ul>
                    <ul class="flex nh3 historyOrderList">
                        <li>訂單編號購買日期</li>
                        <li>購買日期購買日期</li>
                        <li>商品名稱</li>
                        <li>商品描述</li>
                        <li>商品價格</li>
                        <li>購買數量</li>
                    </ul>


                </div>
            </div>
            <!-- !/可變換元件區域 -->
        </div>
        <br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
  
<script>

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

#itemList,
.historyOrderList {
    text-align: center;
}

#itemList>li,
.historyOrderList>li {
    padding: 10px;
    margin: 20px auto;
    
}

#itemList>li{
    border-bottom: black solid 2px;
    /* border: black solid 1px; */
    border-radius:20px 20px 0 0 ;
}

.historyOrderList>li{
    border:solid black 1px ;
}

#itemList :first-child,
.historyOrderList :first-child {
    width: 180px;
}

#itemList :not(:first-child),
.historyOrderList :not(:first-child) {
    width: 164px;
}
</style>
  