<template>
    <div class="login-wrap">
    <div id="pageContainer">
        <br><br>
        <router-link to="/home" style="color: orange;"><input style="background-color: orange;" class="login_btn" type="button" value="返回主頁"></router-link>
        <br><br><br>
        <div>
      <form class="userLogin">
        <br><br><br><br>
        <div class="form-group">
          <input  
          placeholder="請輸入您的ID" />
        </div>
        <br />
        <div class="form-group">
          <input placeholder="請輸入您的密碼" type="password"/>
        </div>
        <br /><br>
        <input type="button" style="background-color: green;" class="login_btn" value="《歡迎使用者登入》" onclick="location.href='/#/back/memberlist'">
        <!-- <button type="submit" style="background-color: green;" class="login_btn"><a href="/#/back/memberlist">《歡迎使用者登入》</a></button> -->
      </form>
      </div>
    </div>
</div>
  </template>
  
  <script>

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