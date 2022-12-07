

<template>
    <div class="login-wrap">
    <div id="pageContainer">
      <form class="userLogin">
  
        <div class="form-group">
          <input  
          placeholder="請輸入您的ID" />
        </div>
  
        <br />
  
        <div class="form-group">
          <input placeholder="請輸入您的密碼" type="password"/>
        </div>
  
        
        <br />
  
        <button type="submit" class="login_btn"><a href="http://localhost:8081/#/back/memberlist">登入</a></button>
      </form>
    </div>
</div>
  </template>
  
  <script>
import axios from "axios"




export default {
  props: {
    String
  },
  data() {
    return {
      alluser: '',
      userName: '',
      userPhone: '',
      userAddress: '',
      userMail: '',
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:3000/member').then(res => {
      this.alluser = res.data
      console.log(res.data)
    })
  },


  methods: {
    get() {
      axios.get('http://127.0.0.1:3000/member').then(res => {
        console.log(res.data);
        // this.alluser = res.data;
        // this.userName = this.alluser[0].member_num
        // this.userPhone = this.alluser[0].member_phone
        // this.userMail = this.alluser[0].member_email
        // console.log(this.alluser)

      }).catch(err => {
        console.log("获取数据失败" + err);
      })
    }
  },

}
  </script>
  
  
  <style scoped>
  .login-wrap{
    position: relative;
	width: 100%;
	height: 100vh;
      background-image:url(../assets/img/event/login-bg.jpg);
    background-size: 100%;
  }
  #pageContainer {
    width: 100%;
    margin:auto;
    text-align: center;
    margin-top: 100px;
  }
  
  .form-control {
    display: inline-block;
    padding: 0 14px 2px;
    font-size: 14px;
    letter-spacing: 0em;
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 10px;
  }
  .form-group input {
    margin: 10px;
    width: 250px;
    height: 30px;
  }
  
  .login_btn {
    color:white;
    background: var(--primary-color);
    border: 1px solid var(--primary-color); 
    width:250px;
    height:30px;
    border-radius: 6px;
  }
  
  .register_btn{
  
    color:#5055b1;
    background: white;
    border: 1px solid #5055b1; 
    width:250px;
    height:30px;
    border-radius: 6px;
  
  }
  </style>