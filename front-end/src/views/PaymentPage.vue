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
                  <li><a href="/#/home/member" >會員資料</a></li>
                  <li><a href="/#/home/shoppingcart">購物車</a></li>
                  <li><a href="">訂單查詢</a></li>
                  <li><a href="">追蹤清單</a></li>
                  <li><a href="">貨到通知</a></li>
                  <li><a href="">訂閱/取消電子報</a></li>
              </ul>

        </div>
            <!-- !可變換元件區域 -->
        <div >
            <div id="canChangeDiv">
              <div id="infoDiv"> 
                <p id="componenTtital" class="nh1 nb">付款</p>
                  <div id="memberInfo">
                    <div id="memberInfoDiv">
                          <div>
                              <p class="nh2 nb">付款方式</p>
                          </div>
                          <div class="itemlist flex">
                              <div><input type="radio" id="userName"></div>
                              <div><span class="nh3 nb">貨到付款</span></div>
                          </div>
                      </div>
                      <div id="memberInfoDiv">
                          <div>
                              <p class="nh2 nb">付款資訊</p>
                          </div>
                          <div class="itemlist flex">
                              <div>
                                <span >帳號 / ID：</span> 
                              </div>
                              <p>{{user.id}}</p>
                          </div>
                          <div class="itemlist flex">
                              <div><span>姓名：</span></div>
                              <div><input  v-model="user.name" type="text" id="userName"></div>
                          </div>
                          <div class="itemlist flex">
                              <div><span>手機號碼：</span></div>
                              <div><input v-model="user.phone" type="text" id="userPhone">
                              </div>
                          </div>
                          <div class="itemlist flex">
                              <div><span>住址：</span></div>
                              <div><input v-model="user.address" type="text" id="useraddress"></div>
                          </div>
                          <div id="submitButton">
                              <div>
                                  <button class="btn btn-outline-secondary" @click="confirmOrder">訂單確認</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
       </div>
           
            
            <!-- !/可變換元件區域 -->
        
        <br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
  
<script>
import axios from 'axios'

export default{
    data(){
        return{
        user:{
            id:"",
            name:"",
            phone:"",
            address:""
        },
        image:""
        
        }
    },
      mounted(){
    
     axios.get('http://127.0.0.1:3000/payment').then(res =>{
      this.user = res.data;
      
      this.user.id=res.data[0].member_id;
      this.user.name=res.data[0].member_name;
      this.user.phone=res.data[0].member_phone;
      this.user.address=res.data[0].member_address;
      console.log(res.data[0].address)
      console.log(res.data[0].member_id)
    
     }).catch(err=>{
      console.log('fail' + err)
     })
    
     
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
    confirmOrder(){
      alert('已收到訂單，將盡快為您處理')
    }
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

.imgCtrl{
 background-image: url('../assets/maruko.png');
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
 
.filrCtrl input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
}
 
/* .filrCtrld:hover {
    color: #444;
    background: #eee;
    border-color: #ccc;
    text-decoration: none
} */



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
#middlepart{
    display: flex;
    justify-content: center;
}
#canChangeDiv {
  width: 1000px;
  /* background-color: rgb(240, 133, 133); */
}

#infoDiv {
  background-color: white;
}

#componenTtital {
  margin: 20px 30px;


}

#memberInfo {
  margin: 0 auto;
  width: 800px;
  /* background-color: rgb(167, 248, 198); */
  border: solid 1px black;
  border-radius: 30px;
  justify-content: center;
}

#memberInfoDiv {
  margin: 0 auto;
  width: 600px;
  padding: 30px;

}

#memberInfoDiv>div:first-child {
  margin: 20px 0;
  border-bottom: solid 2px black;
}

#memberInfoDiv>div:not(:first-child) {
  margin-top: 20px;
}

.itemlist>div:first-child {
  margin-right: auto;
}

.warning {
  text-align: end;
  color: red;
}


#submitButton{
  border-top:2px black solid ;
  text-align: center;
}
#submitButton>div{
  width: 500px;
  margin: 0 auto;
}
#submitButton button{
  margin: 15px;
  /* width: 50px; */
  
}
</style>
