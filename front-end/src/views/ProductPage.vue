<template>
    <div>


        <!-- 上方分類區 -->
        <!-- <div id="topClassDiv"><a href="">中文圖書</a> > <a href="">藝術設計</a> > <a href="">分類</a></div> -->

        <!-- 商品圖片、資訊區 -->
        <div id="productImgAndInformation">
            <div id="productInformationLeft">
                <div id="productName">
                    <p class="nh1 nb">{{ item[0].product_name }}</p>

                </div>

                <div id="productImgDiv" class="left">
                    <img id="productImg" class="leftImg"
                        :src="'http://127.0.0.1:3000/img/books/' + item[0].img_cover + '.png'" alt="">
                    <!-- 放大區 -->
                    <div v-show="topShow" class="top" :style="topStyle"></div>
                    <div class="maskTop" @mouseenter="enterHandler" @mousemove="moveHandler" @mouseout="outHandler">
                    </div>


                    <!-- 放大區 -->
                    <div id="productImgPage">
                        <div class="changeImg">
                            <button class="btn btn-light">&lt;</button>
                            <span>01</span>
                            <span> - </span>
                            <span>04</span>
                            <button class="btn btn-light">&gt;</button>
                        </div>
                        <div>
                            <button>預覽</button>
                        </div>
                    </div>
                </div>
                <!-- 放大區其他 -->
                <div v-show="rShow" class="right">
                    <img :style="r_img" class="rightImg"
                        :src="'http://127.0.0.1:3000/img/books/' + item[0].img_cover + '.png'" alt="" />
                </div>



                <!-- 放大區其他 -->
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
                    <span>促銷價：<span id="originalPrice">{{ item[0].list_price }}元</span></span>&nbsp;&nbsp;
                    <span class="nh2 nb">折扣後價格：<span id="lastPrice">{{
                            item[0].discount_price
                    }}</span><span>元</span></span>&nbsp;&nbsp;
                    <!-- <span id="discount">8折</span> -->
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
                        <li>作者：{{ item[0].auther }}</li>
                        <li>出版社：{{ item[0].publishing_house }}</li>
                        <li>出版日期：{{ item[0].publication_date }}</li>
                        <li>配送方式：宅配/超商店到店</li>
                        <li>付款方式：貨到付款/轉帳</li>
                    </ul>

                </div>

                <br><br><br><br><br>
            </div>
        </div>
        <br><br>
        <br><br>
        <div id="bookContent">
            <div id="bookContentLeft">
                <!-- <你可能也喜歡> -->
                <div id="maybeYouLikeOutDiv">
                    <p class="nh2">你可能也喜歡</p>
                    <div id="maybeYouLike">
                        <div class="maybeYouLikeDiv" v-for="(item, index) in otherbooks" :key="index">
                            <a class="maybeYouLikeTag_a" :href="('/#/home/ztTest/' + otherbooks[index].product_id)">
                                <div>
                                    <div class="maybeYouLikeImgDiv">
                                        <img class="maybeYouLikeImg"
                                            :src="('http://127.0.0.1:3000/img/books/' + otherbooks[index].img_cover + '.png')"
                                            alt="">
                                    </div>
                                    <div>
                                        <p class="nb booksName">{{ otherbooks[index].product_name }}</p>
                                        <br>
                                        <p class="author">{{ otherbooks[index].auther }}</p>
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

                <div class="productmenu">
                    <label for="L1" class="L1">內容簡介<input id="L1" type="radio" name="menu" checked></label>
                    <label for="L2" class="L2">詳細介紹<input id="L2" type="radio" name="menu"></label>
                    <label for="L3" class="L3">退 / 換貨須知<input id="L3" type="radio" name="menu"></label>
                    <label for="L4" class="L4">相關類別<input id="L4" type="radio" name="menu"></label>

                </div>
                <div class="box box1">
                    <br><br>
                    <h3 class="nh3 nb">內容簡介</h3>
                    <br>
                    <p>{{ item[0].introduction }}</p>
                    <br><br>
                    <h3 class="nh3 nb">作者簡介</h3>
                    <br>
                    <p>{{ item[0].auther_Introduction }}</p>
                    <br><br>

                </div>
                <div class="box box2">
                    <br><br>
                    <h3>詳細介紹</h3>

                    <table id="tableStyle">
                        <tr>
                            <th>品牌</th>
                            <td>{{ item[0].publishing_house }}</td>
                        </tr>
                        <tr>
                            <th>類型</th>
                            <td>{{ item[0].class_one }} > {{ item[0].class_two }} > {{ item[0].class_three }}</td>
                        </tr>
                        <tr>
                            <th>商品規格</th>
                            <td>
                                <ul>
                                    <li>ISBN：{{ item[0].ISBN }}</li>
                                    <li>出版地：{{ item[0].publish_area }}</li>
                                    <li>語言：{{ item[0].language }}</li>
                                    <li>詳細規格：{{ item[0].format }}</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    <br><br>
                </div>
                <div class="box box3">
                    <br><br>
                    <p class="nh3 nb">商品鑑賞期</p>
                    <br>
                    <p>為了保護消費者權益，依消保法規定，<span class="text-danger nb">商品皆享有七天猶豫期的權益。</span></p>
                    <ul>
                        <li class="nb text-danger">七天猶豫期非試用期！</li>
                        <li>商品須在完整、未使用狀態且可還原狀態下才能進行退貨。退回商品需要為全新狀態，且包裝完整（含商品本體及所有完整配件、附件、包材、贈品等），切勿缺漏影響自身權利。</li>
                        <li>退貨申請，請於收到商品之七天內聯繫客服（依據物流系統時間為主）並於24小時內寄出商品，以利後續作業處理。</li>
                        <li>若因無法聯繫，因本身因素商品未在期限之內寄回而無法完成退貨作業，將自動取消退貨申請，且不得再次申請。</li>
                        <li>請使用無油墨之包裝紙／紙袋／紙箱包裝（請勿直接於商品配件上黏貼退貨單）。請另加外包裝袋，避免破壞商品外盒或原包裝。</li>
                        <li>當確認退貨申請後，即代表同意我們的退貨原則，並接受我們相關的後續處理事宜。</li>
                    </ul>
                    <br><br>
                    <p class="nh3 nb">退換貨說明</p>
                    <br>
                    <p class="nh3 nb text-danger">[換貨]</p>
                    <ul>
                        <li>若商品本身瑕疵或訂單寄錯商品，換貨皆由我們負擔超取運費，代墊運費會放入新包裹裡。</li>
                        <li>若購買錯誤尺寸商品，僅供退貨，敬請將原商品申請退貨，並且再請重新訂購。</li>
                    </ul>
                    <p class="nh3 nb text-danger">[退貨]</p>
                    <p>退換貨商品須為未經拆封使用，或非人為瑕疵所造成的污損、故障，並保留完整的原始包裝（含外包裝紙盒），否則恕不接受退貨。</p>
                    <p class="nh4">以下情況無法接受退貨：</p>
                    <ul>
                        <li>超過七天商品鑑賞期。</li>
                        <li>商品已拆封使用，或人為因素而產生的破壞，如：污損、故障、損毀、磨損、擦傷、刮傷、髒污等。</li>
                        <li>外包裝紙盒輕微的摺痕，不影響商品本身品質之情況。</li>
                        <li>退貨商品包裝破損不完整，或發票、配件不齊者。</li>
                        <li>惡意或大量退貨。</li>
                        <li>因個人因素申請退貨，若再次訂購相同商品，則無法要求再次退貨。</li>
                    </ul>
                    <br>
                    <br>
                </div>
                <div class="box box4">
                    <br><br>
                    <p class="nb nh3">相關類別</p>
                    <p>{{ item[0].class_one }} > {{ item[0].class_two }} > {{ item[0].class_three }}</p>
                    <br><br>
                </div>

                <!-- /標籤內容更新 -->



                <!-- </書本詳細資訊> -->
            </div>
            <div id="bookContentRight">
                <div id="newBook">
                    <div class="flex">
                        <div class="mrauto">
                            <span class="nh2 nb">新書推薦</span>
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
                            <span class="nh2 nb">相關影片推薦</span>
                        </div>
                        <div>
                            <a :href="'/#/home/videopage'">更多 > </a>
                        </div>
                    </div>
                    <div>
                        <a class="relatedVideoTag_a"
                            :href="video[0] ? ('/#/home/videodetail/' + video[0].product_id) : '#'">
                            <div class="relatedVideoInnerDiv">
                                <div>
                                    <img class="relatedVideoImg"
                                        v-bind:src="video[0] ? (('http://127.0.0.1:3000/img/video/' + video[0].video_title_img + '.jpg')) : 'http://127.0.0.1:3000/img/video/none.png'"
                                        alt="">
                                </div>
                                <div class="relatedVideoInformation">
                                    <p class="nb">{{ (video[0] ? video[0].video_name : '') }}</p>
                                </div>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <br><br><br><br><br><br><br><br><br><br>
        <!-- 加入購物車&直接購買 -->
        <div id="goToPayAndAddToShoppingCart">
            <div id="goToPayAndAddToShoppingCartInnerDiv">
                <div id="totalPrice" class="me-4">
                    <p class="nb nh2">商品金額：<span id="resultprice">{{ item[0].discount_price }} 元</span></p>
                </div>
                <!-- <div id="productQuantity" class="me-4"><button
                        class="btn btn-light">-</button><span>&nbsp;1&nbsp;</span><button
                        class="btn btn-light">+</button></div> -->
                <!-- <div><button><i class="bi bi-heart"></i></button></div> -->
                <div><button id="add-cart-btn" class="btn btn-primary" @click="addToCart">加入購物車</button></div>
                &nbsp;&nbsp;
                <div><button id="just-buy-btn" class="btn btn-outline-danger" @click="needLogin">直接購買</button></div>
            </div>
        </div>
        <!-- /加入購物車&直接購買 -->
    </div>
</template>
<script>
import axios from "axios"

export default {
    data() {
        return {
            id: this.$route.params.id,
            allbooks: '',
            otherbooks: '',
            item: '',
            video: '',
            // 放大區
            topStyle: { transform: "" },
            r_img: {},
            topShow: false,
            rShow: false,
            // 放大區



        }
    },
    watch: {
        // 監聽動態路由變化
        $route(to) {
            this.id = to.params.id
            this.$emit('change-page')
        }
    },
    methods: {

        // 請先登入
        needLogin() {
            alert('請先登入會員，謝謝！')
        },

        addToCart() {
            alert('加入購物車成功！')
        },


        // 放大區
        // 鼠标进入原图空间函数
        enterHandler() {
            // 层罩及放大空间的显示
            this.topShow = true;
            this.rShow = true;
        },
        // 鼠标移动函数
        moveHandler(event) {
            // 鼠标的坐标位置
            let x = event.offsetX;
            let y = event.offsetY;
            // 层罩的左上角坐标位置，并对其进行限制：无法超出原图区域左上角
            let topX = x - 100 < 0 ? 0 : x - 100;
            let topY = y - 100 < 0 ? 0 : y - 100;
            // 对层罩位置再一次限制，保证层罩只能在原图区域空间内
            if (topX > 180) {
                topX = 180;
            }
            if (topY > 180) {
                topY = 180;
            }
            // 通过 transform 进行移动控制
            this.topStyle.transform = `translate(${topX}px,${topY}px)`;
            this.r_img.transform = `translate(-${2 * topX}px,-${2 * topY}px)`;
        },
        // 鼠标移出函数
        outHandler() {
            // 控制层罩与放大空间的隐藏
            this.topShow = false;
            this.rShow = false;
        },
        // 放大區
    },


    mounted() {

        axios.get(`http://127.0.0.1:3000/booktable`).then(res => {
            console.log(res.data)
            this.allbooks = res.data;
            var a = res.data;

            function shuffleArray(inputArray) {
                inputArray.sort(() => Math.random() - 0.5);
            }
            shuffleArray(a);
            this.otherbooks = a.slice(0, 4);
            console.log(a);
            console.log(this.otherbooks);
            console.log(res.data);



        }),

            axios.get(`http://127.0.0.1:3000/productdetail${this.id}`).then(res => {
                console.log(res.data)
                this.item = res.data;
            }),

            axios.get(`http://localhost:3000/videodetail${this.id}`).then(res => {
                this.video = res.data;
                console.log(res.data);
            })




    }
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
    margin-left: 45px;
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

.changeImg button {
    border-radius: 50%;
}



#lastPrice {
    font-size: 2rem;
    color: #53929B;
}




#originalPrice {
    text-decoration: line-through;
}


#productInformationLeft {
    margin: 20px;
    /* margin-right: 100px; */
    width: 450px;

}


#productName {
    margin: 20px;
    line-height: 30px;
    text-align: center;

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
    margin: 20px 0;
    width: 180px;

}

.maybeYouLikeImgDiv {
    text-align: center;
    /* height: 180px; */
}

.maybeYouLikeImg {
    width: 170px;
    height: 190px;
    object-fit: cover;
}

#maybeYouLike {
    display: flex;
    /* justify-content: start; */
    justify-content: space-around;
    background-color: #F7F7F7;


}

.booksName {
    margin-top: 7px;
}

.booksName,
.author {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.author {
    text-align: end;
}

/* </你可能也喜歡> */

/* <書本詳細資訊區TAB> */
/* 設置標籤樣式 */
.productmenu label {
    font-weight: bolder;
    padding: 10px 20px;
    text-decoration: none;
    /* color: #fff; */
    color: black;
    margin: auto 5px 0 0;
    border-radius: 10px 10px 0 0;
    /* border-top:rgb(159, 159, 159) 1px solid  ;
    border-left: rgb(159, 159, 159) 1px solid ;
    border-right:rgb(159, 159, 159) 1px solid  ; */
    border: rgb(159, 159, 159) 1px solid;
    box-sizing: content-box;
    background-color: white;
    text-align: center;

    z-index: 10;

}



.productmenu label:hover {
    background-color: rgb(237, 237, 237);
}

.productmenu input {
    display: none;
}

.productmenu .L1 {
    /* background-color: rgb(236, 170, 170); */
}

.productmenu .L2 {
    /* background-color: rgb(157, 206, 246); */

}

.productmenu .L3 {
    /* background-color: rgb(109, 234, 111); */

}

.productmenu .L4 {
    /* background-color: rgb(245, 240, 101); */

}

.box {
    width: 100%;
    display: none;
    border: 1px solid rgb(159, 159, 159);
    margin-top: -1px;
}

.box p,
.box h3,
.box table {
    margin: 0 30px;
}

.box ul {
    margin: 0 60px;
    list-style: disc;

}

.box1 {
    /* background-color: rgb(236, 170, 170); */

}


.box2 {
    /* background-color: rgb(157, 206, 246); */

}

.box3 {
    /* background-color: rgb(109, 234, 111); */

}

.box4 {
    /* background-color: rgb(245, 240, 101); */

}

input:checked {
    background-color: #53929B;
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

body:has(#L1:checked) .L1 {
    background-color: #ccc;
    border-bottom: white 1px solid;

}

body:has(#L2:checked) .L2 {
    background-color: #ccc;
    border-bottom: white 1px solid;

}

body:has(#L3:checked) .L3 {
    background-color: #ccc;
    border-bottom: white 1px solid;

}

body:has(#L4:checked) .L4 {
    background-color: #ccc;
    border-bottom: white 1px solid;

}

/* 書本詳細資料 */

#tableStyle td,
#tableStyle th {
    border: black solid 1px;
}

#tableStyle th {
    width: 100px;
}

#tableStyle td {
    width: 400px;

}

/* 書本詳細資料 */





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
    margin-left: 20px;

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
    border-radius: 7px;
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

#goToPayAndAddToShoppingCartInnerDiv button {
    height: 30px;
    line-height: 1px;
}

#totalPrice {}



/* /加入購物車底部固定列 */





/* <頁尾> */
#footer {
    background-color: yellowgreen;
    height: 150px;
    margin-bottom: 74px;
}

/* </頁尾> */


/* 放大區CSS */

/* 放大的图片，通过定位将左上角定位到(0,0) */
.rightImg {
    display: inline-block;
    width: 720px;
    height: 720px;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    background-color: #fff;
}

/* 右边的区域图片放大空间 */
.right {
    margin-left: 412px;
    width: 360px;
    height: 360px;
    border: 1px solid #53929B;
    position: relative;
    overflow: hidden;
    top: -360px;
    left: 70px;
    z-index: 1;
}

/* 一个最高层层罩 */
.maskTop {
    width: 360px;
    height: 360px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
}

/* 层罩，通过定位将左上角定位到(0,0) */
.top {
    width: 180px;
    height: 180px;
    background-color: lightcoral;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
}

/* 原图的显示 */
.leftImg {
    width: 360px;
    height: 360px;
    display: inline-block;
}

/* 原图的容器 */
.left {
    width: 360px;
    height: 360px;
    /* border: 1px solid teal; */
    float: left;
    position: relative;
}


/* 放大區CSS */


/* 購物車與直接購買按鈕 */

#add-cart-btn {
    border: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 130px;
    padding: 3px 13px;
    border-radius: 6px;
    color: var(--background-color);
    background-color: var(--secondary-color);
    font-size: 700;
}

#just-buy-btn {
    border: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 130px;
    padding: 3px 13px;
    border-radius: 6px;
    color: var(--background-color);
    background-color: var(--primary-color);
    font-size: 700;
}
</style>