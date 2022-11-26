<template>
    <div>
        <!-- 上方分類區 -->
        <div id="topClassDiv"><a href="">中文圖書</a> > <a href="">藝術設計</a> > <a href="">分類</a></div>

        <!-- 商品圖片、資訊區 -->
        <div id="productImgAndInformation">
            <div id="productInformationLeft">
                <div id="productName">
                    <p class="nh1 nb">書名</p>
                    <p class="">副標題</p>

                </div>
                <div id="productImgDiv">
                    <img id="productImg" src="../assets/img/product/9796074_R.webp" alt="">
                    <div id="productImgPage">
                        <div>
                            <button>&lt;</button>
                            <span>01</span>
                            <span> - </span>
                            <span>04</span>
                            <button>&gt;</button>
                        </div>
                        <div>
                            <button>預覽</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="productIntroduce">
                <!-- <div>
                <p>可購買版本</p>
                <button class="">實體書</button>
                <button class="">有聲書</button>
            </div> -->
                <div id="priceDiv">
                    <hr>
                    <br>
                    <span>促銷價：<span id="originalPrice">500</span></span>&nbsp;&nbsp;
                    <span class="nh2 nb">折扣後價格：<span id="lastPrice">400</span><span>元</span></span>&nbsp;&nbsp;
                    <span id="discount">8折</span>
                    <br>
                    <br>
                    <hr>
                    <br>
                </div>
                <div id="deliveryGuide">
                    <div id="deliveryGuideLeftDiv">配送指南</div>
                    <div>
                        <font-awesome-icon icon="fa-regular fa-circle-question" />
                        <p><a href="">免運資訊
                                <font-awesome-icon icon="fa-regular fa-circle-question" />
                            </a></p>
                        <p><a href="">配送資訊
                                <font-awesome-icon icon="fa-regular fa-circle-question" />
                            </a></p>
                    </div>
                </div>
                <br>
                <hr>
                <div>
                    <ul id="productInformationRight">
                        <li>作者：XXX</li>
                        <li>出版社：XXXXXXXXXX</li>
                        <li>出版日期：XXXX/XX/XX</li>
                        <li>配送方式：宅配/超商店到店</li>
                        <li>付款方式：貨到付款/轉帳</li>
                        <li>數量:</li>
                    </ul>

                </div>

                <br><br><br><br><br><br><br><br><br><br>
            </div>
        </div>
        <br><br><br><br>
        <hr>
        <br><br><br><br>
        <div id="bookContent">
            <div id="bookContentLeft">
                <!-- <你可能也喜歡> -->
                <div id="maybeYouLikeOutDiv">
                    <p class="nh2">你可能也喜歡</p>
                    <div id="maybeYouLike">
                        <div class="maybeYouLikeDiv">
                            <a class="maybeYouLikeTag_a" href="">
                                <div>
                                    <div>
                                        <img class="maybeYouLikeImg" src="../assets/img/product/9796074_R.webp" alt="">
                                    </div>
                                    <div>
                                        <p>書名</p>
                                        <p>作者</p>
                                        <p>NT 500</p>
                                    </div>
                                </div>
                            </a>
                        </div>



                    </div>
                </div>
                <!-- </你可能也喜歡> -->
                <br><br><br><br><br>
                <!-- <書本詳細資訊> -->
                <!-- 標籤鏈接 -->
                <!-- 標籤內容更新OK的話下面刪除-->

                <div class="menu">
                    <label for="L1" class="L1">內容簡介<input id="L1" type="radio" name="menu" checked></label>
                    <label for="L2" class="L2">詳細介紹<input id="L2" type="radio" name="menu"></label>
                    <label for="L3" class="L3">退 / 換貨須知<input id="L3" type="radio" name="menu"></label>
                    <label for="L4" class="L4">相關類別<input id="L4" type="radio" name="menu"></label>

                </div>
                <div class="box box1">
                    <h3>內容簡介(寫死)</h3>
                    <pre>這裡放資料庫資料內容簡介</pre>
                    <br><br><br>
                    <h3>作者簡介(寫死)</h3>
                    <pre>這裡放資料庫資料作者簡介</pre>
                </div>
                <div class="box box2">box2</div>
                <div class="box box3">box3</div>
                <div class="box box4">box4</div>

                <!-- /標籤內容更新 -->
                <div id="tabDiv">
                    <div class="tab">
                        <!-- <button class="tablinks" onclick="openCity(event, 'London')">London</button> -->
                        <!-- 默認顯示選項卡 -->
                        <button class="tablinks" v-on:click="openCity(event, 'bookInformation')"
                            id="defaultOpen">內容簡介</button>
                        <button class="tablinks" v-on:click="openCity(event, 'moreInformation')">詳細介紹</button>
                        <button class="tablinks" v-on:click="openCity(event, 'returnOrChangeProduct')">退 / 換貨須知</button>
                        <button class="tablinks" v-on:click="openCity(event, 'relatedClass')">相關類別</button>
                    </div>


                    <!-- 標籤內容 -->
                    <div id="bookInformation" class="tabcontent">
                        <h3>內容簡介(寫死)</h3>
                        <pre>這裡放資料庫資料內容簡介</pre>
                        <br><br><br>
                        <h3>作者簡介(寫死)</h3>
                        <pre>這裡放資料庫資料作者簡介</pre>
                    </div>


                    <div id="moreInformation" class="tabcontent">
                        <h3>詳細介紹(寫死)</h3>

                        <table id="tableStyle">
                            <tr>
                                <th>品牌</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>類型</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>商品規格</th>
                                <td>
                                    <ul>
                                        <li>ISBN</li>
                                        <li>出版地</li>
                                        <li>語言</li>
                                        <li>詳細規格</li>
                                        <li></li>
                                    </ul>
                                </td>
                            </tr>
                        </table>

                        <pre>Paris is the capital of France.</pre>

                    </div>

                    <div id="returnOrChangeProduct" class="tabcontent">
                        <h3>退 / 換貨須知(寫死)</h3>
                        <pre>這裡寫退換貨須知</pre>

                    </div>

                    <div id="relatedClass" class="tabcontent">
                        <h3>相關類別</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                </div>


                <!-- </書本詳細資訊> -->
            </div>
            <div id="bookContentRight">
                <div id="newBook">
                    <div class="flex">
                        <div class="mrauto">
                            <span>新書推薦</span>
                        </div>
                        <div>
                            <a href="">更多 > </a>
                        </div>

                    </div>
                    <div>
                        <a class="thisClassNewBookTag_a" href="">
                            <div class="thisClassNewBookInnerDiv">
                                <div>
                                    <img class="thisClassNewBookImg" src="../assets/img/product/9796074_R.webp" alt="">
                                </div>
                                <div class="thisClassNewBookInformation">
                                    <p>書名</p>
                                    <p>作者</p>
                                    <P>NTD300</P>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
                <!-- 相關影片推薦 -->
                <div id="relatedVideo">
                    <div class="flex">
                        <div class="mrauto">
                            <span>相關影片推薦</span>
                        </div>
                        <div>
                            <a href="">更多 > </a>
                        </div>
                    </div>
                    <div>
                        <a class="relatedVideoTag_a" href="">
                            <div class="relatedVideoInnerDiv">
                                <div>
                                    <img class="relatedVideoImg" src="../assets/img/product/video_img.png" alt="">
                                </div>
                                <div class="relatedVideoInformation">
                                    <p>書名</p>
                                    <p>作者</p>
                                    <P>NTD300</P>
                                </div>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <br><br><br><br><br><br><br><br><br><br>
        <!-- 加入購物車&直接購買 -->
        <div id="goToPayAndAddToShoppingCart">
            <div id="goToPayAndAddToShoppingCartInnerDiv">
                <div id="totalPrice">
                    <p>商品總金額：<span>NTD500</span></p>
                </div>
                <div id="productQuantity"><button>-</button><span>1</span><button>+</button></div>
                <div><button><i class="bi bi-heart"></i></button></div>
                <div><button>加入購物車</button></div>
                <div><button>直接購買</button></div>
            </div>
        </div>
        <!-- /加入購物車&直接購買 -->
    </div>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    methods: {

        openCity(evt, Information) {
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(Information).style.display = "block";
            evt.currentTarget.className += " active";


        },



    }
}



</script>
<style scoped>
/* <共用CSS> */
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

/* 頂部分類區 */
#topClassDiv {}

/* /頂部分類區 */

/* <書本圖片售價區> */
#productImgAndInformation {
    background-color: #F7F7F7;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 1200px;
    margin: auto;
}

#productImgAndInformation>div {}

#productImgDiv {

    overflow: hidden;
}

#productImg {
    width: 360px;
    height: 360px;
    object-fit: contain;
}

#productIntroduce {
    width: 360px;
}

#priceDiv {
    /* margin-top: 120px; */
}

#discount {
    color: red;
    font-weight: bolder;
}

#productImgPage {
    margin-top: 20px;
}



#lastPrice {
    font-size: 36px;
    color: #53929B;
}

#originalPrice {
    text-decoration: line-through;
}


#productInformationLeft {
    margin: 20px;
    margin-right: 100px;
}

#productName {
    margin: 20px;
    line-height: 30px;
}

/* 配送指南 */
#deliveryGuide {
    display: flex;

}

#deliveryGuideLeftDiv {
    margin-right: auto;
}

/* /配送指南 */


#productInformationRight {
    text-align: start;
    /* margin-top: 10px; */
}

#productInformationRight li {
    margin-top: 10px;
}

/* </書本圖片售價區> */


/* <書本資訊區> */

#bookContent {
    display: flex;
    justify-content: center;
}


#bookContentLeft {
    width: 814px;
    background-color: #ffffff;
}

#bookContentRight {
    width: 386px;
    background-color: #F7F7F7;

}

/* <你可能也喜歡> */
#maybeYouLikeOutDiv {
    background-color: #ffffff;
    margin: 20px;
}

#maybeYouLikeOutDiv>p {
    padding: 10px;
    font-weight: bolder;
    /* background-color: yellowgreen; */
}

.maybeYouLikeTag_a {
    display: block;
}

.maybeYouLikeDiv {
    background-color: #fff;
    margin: 20px;

}

.maybeYouLikeImg {
    width: 116px;
    height: 160px;
    object-fit: cover;
}

#maybeYouLike {
    display: flex;
    justify-content: start;
    background-color: #F7F7F7;
    overflow-x: auto;

}

/* </你可能也喜歡> */

/* <書本詳細資訊區TAB> */
/* 設置標籤樣式 */
.menu label {
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;
    margin: auto 5px 0;
    border-radius: 5px 5px 0 0;
}

.menu input {
    display: none;
}

.menu .L1 {
    background-color: rgb(236, 170, 170);
}

.menu .L2 {
    background-color: rgb(157, 206, 246);

}

.menu .L3 {
    background-color: rgb(109, 234, 111);

}

.menu .L4 {
    background-color: rgb(245, 240, 101);

}

.box {
    width: 100%;
    display: none;
}

.box1 {
    background-color: rgb(236, 170, 170);

}


.box2 {
    background-color: rgb(157, 206, 246);

}

.box3 {
    background-color: rgb(109, 234, 111);

}

.box4 {
    background-color: rgb(245, 240, 101);

}

body:has(#L1:checked) .box1 {

    display: block;
}



body:has(#L2:checked) .box2 {
    display: block;

}

body:has(#L3:checked) .box3 {
    display: block;

}

body:has(#L4:checked) .box4 {
    display: block;

}



/* /設置標籤樣式 */
/* </書本詳細資訊區TAB> */

/* </書本資訊區> */

/* <右側這個類別的新書> */
#newBook {
    margin: 40px;
}

.thisClassNewBookTag_a {
    display: block;
}

.thisClassNewBookInnerDiv {
    display: flex;
}

.thisClassNewBookImg {
    width: 98px;
    height: 142px;
    object-fit: cover;
}

.thisClassNewBookInformation,
.relatedVideoInformation {
    margin: 50px 0 0 20px;
}



/* </右側這個類別的新書> */
/* <右側相關影片> */
#relatedVideo {
    margin: 40px;
}

.relatedVideoImg {
    width: 134px;
    height: 134px;
    object-fit: cover;
}

.relatedVideoTag_a {
    display: block;
}

.relatedVideoInnerDiv {
    display: flex;
}

/* </右側相關影片> */

/* 加入購物車底部固定列 */
#goToPayAndAddToShoppingCart {
    display: flex;
    justify-content: center;
    border-top: #87806D solid 1px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
}

#goToPayAndAddToShoppingCartInnerDiv {
    display: flex;
    padding: 25px 0px;
}

#totalPrice {
    line-height: 23px;
}

/* /加入購物車底部固定列 */



/* <頁尾> */
#footer {
    background-color: yellowgreen;
    height: 150px;
    margin-bottom: 74px;
}

/* </頁尾> */
</style>