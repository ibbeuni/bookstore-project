<template>
    <div>
        <div>
            <div id="outDiv" class="flex">
                <div id="productBigImgDiv">
                    <p class="nh1 nb" id="bigBookName">書名</p>

                    <!-- <img id="productBigImg" src="../assets/img/product/40101.png" alt=""> -->
                    <img id="productBigImg" src="../assets/img/product/40102.png" alt="">
                    <!-- <img id="productBigImg" src="../assets/img/product/40103.png" alt=""> -->
                </div>
                <div id="rightDiv">
                    <div>
                        <div>
                            <div id="rightDivContent">
                                <div class="flex">
                                    <div>
                                        <img id="rightLiitleImg" src="../assets/img/product/9796074_R.webp" alt="">
                                    </div>
                                    <div>
                                        <p class="nb">書名</p>
                                        <p>作者</p>
                                        <p>NT300</p>
                                    </div>
                                </div>
                                <div>
                                    <button>O</button>
                                    <button>加入購物車</button>
                                    <br>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>


                    <div>
                        <div id="allImgPage">
                            <div id="allImgPageInDiv">
                                <div>
                                    <button class="imgButton">
                                        <font-awesome-icon icon="fa-solid fa-chevron-up" />
                                    </button>
                                </div>
                                <div id="allImgOutDiv">
                                    <div>
                                        <div class="allImgDiv">
                                            <button>
                                                <img class="allImg" src="../assets/img/product/40103.png" alt="">
                                            </button>
                                        </div>
                                        <div class="allImgDiv">
                                            <button>
                                                <img class="allImg" src="../assets/img/product/40103.png" alt="">
                                            </button>
                                        </div>
                                        <div class="allImgDiv">
                                            <button>
                                                <img class="allImg" src="../assets/img/product/40103.png" alt="">
                                            </button>
                                        </div>
                                        <div class="allImgDiv">
                                            <button>
                                                <img class="allImg" src="../assets/img/product/40103.png" alt="">
                                            </button>
                                        </div>
                                        <div class="allImgDiv">
                                            <button>
                                                <img class="allImg" src="../assets/img/product/40103.png" alt="">
                                            </button>
                                        </div>
                                        <div class="allImgDiv">
                                            <button>
                                                <img class="allImg" src="../assets/img/product/40103.png" alt="">
                                            </button>
                                        </div>
                                        <div class="allImgDiv">
                                            <button>
                                                <img class="allImg" src="../assets/img/product/40103.png" alt="">
                                            </button>
                                        </div>

                                       

                                    </div>
                                </div>
                                <div>
                                    <button class="imgButton">
                                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                                    </button>
                                </div>

                                <br><br><br><br>
                            </div>
                        </div>
                    </div>


                    <br><br><br><br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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

#outDiv {
    border: black solid 2px;
    width: 1050px;
    height: 650px;
}

#bigBookName{
margin: 5px 0px 5px 20px;
}

#productBigImgDiv {
    width: 700px;
    height: 600px;
    background-color: white;
    margin: 0,auto;

}

#productBigImg {
    width: 700px;
    height: 600px;
    object-fit: contain;

}

#rightDiv {
    background-color: rgb(255, 255, 255);
    width: 350px;
}



#rightLiitleImg {
    width: 140px;
    height: 100px;
    object-fit: contain;
}

#rightDivContent {
    background-color: #F7F7F7;
    width: 280px;
    margin: 0 auto;
    margin-top: 10px;
}

#allImgPage {
    background-color: #F7F7F7;
    width: 280px;
    margin: 0px auto;
    height: 450px;

}

#allImgPageInDiv {
    margin: auto;
    width: 200px;
    /* height: 400px; */
    /* background-color: black; */

}

.imgButton{
    width: 136px;
}

.allImg {
    box-sizing: border-box;
    width: 120px;
    height: 120px;
}

.allImgDiv {
    margin: 5px 0px;
}

#allImgOutDiv{
    height: 400px;
    overflow-y: auto;
    
}
</style>