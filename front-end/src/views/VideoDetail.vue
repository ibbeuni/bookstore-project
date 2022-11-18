<template>
   <div>

<p>分類>分類>分類</p>

<div id="videoMain">
    <div id="videoMainLeft">
        <div>
            <div>
                <p class="nh1 nb">影片標題</p>
                <p>上傳日期：2022 / 02 / 11</p>
            </div>
            <div>
                <iframe src="https://www.youtube.com/embed/LOxxhecSHQM" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <br><br><br>
            <div>
                <p class="nh2 nb">影片介紹</p>
                <p>
                    這是影片介紹文章這是影片介紹文章這是影片介紹文章
                    這是影片介紹文章這是影片介紹文章這是影片介紹文章
                    這是影片介紹文章這是影片介紹文章這是影片介紹文章
                    這是影片介紹文章這是影片介紹文章這是影片介紹文章
                    這是影片介紹文章這是影片介紹文章這是影片介紹文章
                    這是影片介紹文章這是影片介紹文章這是影片介紹文章
                    這是影片介紹文章這是影片介紹文章這是影片介紹文章
                    這是影片介紹文章這是影片介紹文章這是影片介紹文章

                </p>
            </div>

            <div>

            </div>
            <br><br><br><br><br><br><br><br><br><br>
        </div>
    </div>
    <div id="videoMainRight">
        <br><br><br><br><br><br><br><br><br><br>

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


#videoMain{
    margin: auto;
    width: 1200px;
    display: flex;
}
#videoMainLeft{
    width: 814px;
    background-color: rgb(216, 186, 146);
    
}
#videoMainRight{
    width: 386px;
    background-color: rgb(222, 165, 165);
}

iframe{
    border-radius: 40px;
    width: 750px;
    height: 422px;
}




/* /影片區內頁css */

</style>