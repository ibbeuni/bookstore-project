<template>
    <div>
        <router-view></router-view>
        <div id="videoPage">

            <!-- <p>分類>分類>分類</p> -->
            <!-- <button @click="get()">获取user表数据</button> -->
            <br><br><br><br>
            <div id="videoPlace" class="flex" style="background-color:white;">

                <div class="videoDiv flex" v-for="(item, index) in pageVideo" :key="index">
                    <a class="block flex" :href="('/#/home/videodetail/' + pageVideo[index].product_id)">
                        <div>
                            <div class="videoImgOutDiv">
                                <!-- <img class="videoImg" v-bind:src="allvideo[0].video_title_img" alt=""> -->
                                <img class="videoImg"
                                    v-bind:src="'http://127.0.0.1:3000/img/video/' + pageVideo[index].video_title_img + '.jpg'"
                                    alt="">
                            </div>
                        </div>
                        <div class="bookInfo">
                            <p class="nb nh3">{{ pageVideo[index].video_name }}</p>
                            <p>{{ pageVideo[index].video_class }}</p>
                            <p>上傳日期：{{ pageVideo[index].video_upload_date }}</p>
                        </div>
                    </a>
                </div>







            </div>
            <br><br>
            <hr>
            <div id="pageButton">
                <!-- <a href="#" class="previous round">&#8249;</a> -->
                <!-- <a href="#" class="numberRound">1</a>
                    <a href="#" class="numberRound">2</a>
                    <a href="#" class="numberRound">3</a> -->
                <!-- <a href="#" class="numberRound">3</a> -->
                <!-- <a href="#" class="next round">&#8250;</a> -->
                <button class="previous round">&#8249;</button>
                <button @click="pageOne" class="numberRound">1</button>
                <button @click="pageTwo" class="numberRound">2</button>
                <!-- <button class="numberRound">3</button> -->
                <button @click="nextPage" class="next round">&#8250;</button>
                <!-- <label for=""><input type="button" value="123"></label> -->
            </div>
            <br><br>
        </div>
    </div>
</template>


<script>
import axios from "axios"

export default {
    data() {
        return {
            aa: 1,
            allVideo: '',
            pageVideo: '',
            // imgSrc:require('../../static/img/video/v10201.jpg'),



        };
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/videotable').then(res => {

            this.allVideo = res.data;
            this.pageVideo = res.data.slice(0, 15)
            console.log(res.data);
            // console.log(this.imgSrc);
        })
    },

    methods: {
        pageOne() {
            // let aa = 
            this.pageVideo = this.allVideo.slice(0, 15);
            console.log(this.pageVideo);
        },

        pageTwo() {
            let aa = this.allVideo.slice(15, 30);
            console.log(this.pageVideo);
            this.pageVideo = aa;
        },
        nextPage() {



        }

        // get() {
        //     axios.get('http://127.0.0.1:3000/videotable').then(res => {
        //         console.log(res.data[0]);
        //     }).catch(err => {
        //         console.log("获取数据失败" + err);
        //     })
        // }
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

/* 主要內容 */
#videoPage {
    width: 1200px;
    /* background-color: rgb(193, 227, 124); */
    margin: 0 auto;
}

#videoPlace {
    justify-content: space-around;
    flex-wrap: wrap;

}

.videoImgOutDiv {
    width: 180px;
    height: 140px;
    overflow: hidden;
    border-radius: 10px;


}

.videoImg {
    width: 180px;
    height: 140px;
    object-fit: cover;

}

.videoDiv {
    width: 360px;
    height: 160px;
    margin-top: 20px;

}

.videoDiv:hover .videoImg {
    transform: scale(1.2);
    transition: .5s;



}


/* /主要內容 */
/* 換頁按鈕連結樣式 */
#pageButton {
    text-align: center;
}



#pageButton>button:hover,
#pageButton>a:hover {
    background-color: #ddd;
    color: black;
}

.previous {
    background-color: #f1f1f1;
    color: black;
}

.next {
    /* background-color: #04AA6D;
    color: white; */
}

.pageNumber {
    background-color: #04AA6D;
    color: black;
}

.round {
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
    border-radius: 150%;
    border: transparent;
}

.numberRound {
    text-decoration: none;
    display: inline-block;
    padding: 8px 14px;
    border-radius: 150%;
    margin: 0px 5px;
    border: transparent;



}

.bookInfo {
    margin-left: 10px;
}




/* /換頁按鈕連結樣式 */
</style>