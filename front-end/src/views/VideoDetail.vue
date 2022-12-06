<template>
    <div>

        <p>分類>分類>分類</p>
        <p>{{this.$route.params.id}}</p>

        <div id="videoMain">
            <div id="videoMainLeft">
                <div id="videoMainLeftDiv">
                    <div>
                        <p class="nh1 nb">{{item[0].video_name}}</p>
                        <br>
                        <p>上傳日期：{{item[0].video_upload_date}}</p>
                        <br>
                    </div>
                    <div>
                        <iframe :src="item[0].vedio_url" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                    </div>
                    <br><br><br><br><br>
                    <!-- auther
                    product_id
                    product_name
                    vedio_url
                    video_class
                    video_intro
                    video_mouseon_img
                    video_name
                    video_title_img
                    video_upload_date -->
                    <div>
                        <p class="nh2 nb">影片介紹</p>
                        <br>
                        <pre>

                        </pre>
                    </div>
                    <br><br><br><br><br>
                    <!-- 相關書籍產品 -->
                    <div id="relatedProductOutDiv">
                        <p class="nh2">相關產品</p>
                        <br>
                        <div id="relatedProduct">
                            <div class="relatedProductDiv">
                                <a class="relatedProductTag_a" href="">
                                    <div>
                                        <div>
                                            <img class="relatedProductImg" src="../assets/img/product/9796074_R.webp"
                                                alt="">
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

                    <div>

                    </div>
                    <br><br><br><br><br><br><br><br><br><br>
                </div>
            </div>
            <div id="videoMainRight">
                <div id="videoMainRightDiv">

                    <div class="bgcF7F7F7" id="videoMainRightDivTop">
                        <br>
                        <p class="nh2 nb m10">其他推薦影片</p>

                        <hr>
                    </div>
                    <div v-for="(item, index) in otherVideo" :key="index">
                        <div class=" m20">
                            <a class="block" href="">
                                <div class="flex">
                                <div class=""><img class="otherVideo"
                                        v-bind:src="'http://127.0.0.1:3000/img/video/' + allvideo[index].video_title_img + '.jpg'"
                                        alt="">
                                </div>
                                <div class="m10">
                                    <p class="nh3 nb">{{ otherVideo[index].video_name }}</p>
                                    <br>
                                    <p class="nh4 nb">{{ otherVideo[index].video_class }}</p>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>




                </div>



            </div>

        </div>
    </div>
</template>
<script>
import axios from "axios"

export default {
    data() {
        return {
            allvideo: '',
            // imgSrc:require('../../static/img/video/v10201.jpg'),
            otherVideo: '',
            item:'',
            id:this.$route.params.id,


        };
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/videotable').then(res => {
            this.allvideo = res.data;
            this.otherVideo = res.data.slice(0, 5);
            console.log(this.otherVideo);
            console.log(res.data);

            // console.log(this.imgSrc);
        }),
        axios.get(`http://localhost:3000/videodetail${this.id}`).then(res => {
            this.item = res.data;
            console.log(this.item);
            console.log(res.data);

            // console.log(this.imgSrc);
        })
        
    },

    methods: {

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
/* 影片區內頁css */

/* 內容左邊 */
#videoMain {
    margin: auto;
    width: 1200px;
    display: flex;
}

#videoMainLeft {
    width: 814px;
    /* background-color: rgb(216, 186, 146); */

}

#videoMainLeftDiv {
    background-color: #fff;
    width: 700px;
    margin: 40px auto 40px;

}


#videoMainRight {
    width: 386px;
    /* background-color: rgb(222, 165, 165); */
}

iframe {
    border-radius: 40px;
    width: 700px;
    height: 394px;
}

/* /內容左邊 */
/* 內容右邊 */
#videoMainRightDiv {
    margin: 40px auto 40px;
    background-color: #fff;
    width: 350px;
    height: 940px;
    border-radius: 30px;
    overflow: auto;
    box-shadow: 3px 3px 5px rgb(172, 164, 164);
    border: 1px solid rgb(172, 164, 164);

}

#videoMainRightDivTop {
    border-radius: 30px 30px 0 0;
}




.otherVideo {
    width: 130px;
    height: 130px;
    object-fit: cover;
}

/* 相關產品 */
#relatedProductOutDiv {
    background-color: #ffffff;
    /* margin: 20px; */
}

#relatedProductOutDiv>p {
    /* padding: 10px; */
    font-weight: bolder;
    /* background-color: yellowgreen; */
}

.relatedProductTag_a {
    display: block;
}

.relatedProductDiv {
    background-color: #fff;
    margin: 20px;

}

.relatedProductImg {
    width: 116px;
    height: 160px;
    object-fit: cover;
}

#relatedProduct {
    display: flex;
    justify-content: start;
    background-color: #F7F7F7;
    overflow-x: auto;

}

/* /相關產品 */




/* /內容右邊 */



/* /影片區內頁css */
</style>