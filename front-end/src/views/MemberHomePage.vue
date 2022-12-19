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
                  <li><a href="/#/home/shoppingcart" >購物車</a></li>
                  <li><a href="">訂單查詢</a></li>
                  <li><a href="">追蹤清單</a></li>
                  <li><a href="">貨到通知</a></li>
                  <li><a href="">訂閱/取消電子報</a></li>
              </ul>

          </div>
          <!-- !可變換元件區域 -->
          <div id="canChangeDiv">
              <div id="infoDiv">
                  <p id="componenTtital" class="nh1 nb">會員資料設定</p>
                  <div id="memberInfo">
                      <div id="memberInfoDiv">
                          <div>
                              <p class="nh2 nb">會員資料</p>
                          </div>

                          <div class="itemlist flex">
                              <div><span >帳號 / ID</span></div>
                             <div><input v-model="id" type="text" id="changePassword"> </div>
                          </div>

                          <div class="itemlist flex">
                              <div><label class='labl' for="changePassword">新密碼：</label></div>
                              <div><input  type="text" id="changePassword"> </div>
                          </div>
                          <div class="itemlist flex">
                              <div><label class='labl' for="confirmPassword">密碼確認：</label></div>
                              <div><input  type="text" id="changePassword"> </div>
                          </div>
                          <p class="nh6 warning">*新增會員資料不需填寫。密碼限制八位數包含英文及數字</p>
                          
                          <div class="itemlist flex">
                              <div><span>姓名：</span></div>
                              <div><input  v-model="name" type="text" id="userName"></div>
                              
                          </div>

                          <div class="itemlist flex">
                              <div><span>手機號碼：</span></div>
                              <div><input v-model="phone" type="text" id="userPhone"></div>
                              
                          </div>

                          <div class="itemlist flex">
                              <div><span>出生日期：</span></div>
                              <div><input v-model="birthday" type="text" id="userName" placeholder="0000-00-00"></div>
                          </div>

                          <div class="itemlist flex">
                              <div><span>住址：</span></div>
                              <div><input v-model="address" type="text" id="useraddress"></div>
                             
                          </div>

                          

                          <div id="submitButton">
                              <div>
                                  <button class="btn btn-outline-secondary">清除</button>
                                  <button class="btn btn-outline-success" @click="save">儲存</button>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>
          </div>
          <!-- !/可變換元件區域 -->
      </div>
      <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>

import axios from 'axios'

export default{
 data(){
  return{
    // user:'',
    id:'',
    name:'',
    phone:'',
    birthday:'',
    address:'',
    image:''


    }
  }, 
  mounted(){
    
     axios.get('http://127.0.0.1:3000/member').then(res =>{
      this.user = res.data;
      // console.log(res.data[1])
      this.id=res.data.member_id;
    //  console.log(res.data)
      
      
     }).catch(err=>{
      console.log(err)
     })
    
     
  },

  
  methods:{
  save(){
      axios.post('http://127.0.0.1:3000/member/post',{
        params:{
          name:this.name,
          phone:this.phone,
          birthday:this.birthday,
          address:this.address
        }
        
      }).then(res =>{
        //  alert('儲存成功')
        //  this.$router.push('/home/homepage')
         
        if(res.data.status == 200){
          console.log(res.data.status)
          alert('儲存成功')
         this.$router.push('/home/homepage')
        }else{
          // console.log(res.data)
        }
      })
   
  },

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
  /* background-image: linear-gradient(-5deg, #53929b, #e3d096); */
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
  background-color: beige;
  object-fit: cover;
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
.labl{
  display:flex;
  padding-left: 0px;
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
