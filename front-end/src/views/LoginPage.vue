

<template>
  <div id="pageContainer">
    <br><br><br><br><br><br>
    <form class="userLogin">
      <h3>已經是書店的會員了?</h3>

      <div class="form-group">
        <input 
        type="email" 
        class="form-control"
        v-model="login.userName" 
        placeholder="請輸入您的ID" />
      </div>

      <br />

      <div class="form-group">
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="login.password"
          placeholder="請輸入您的密碼"
        />
      </div>

      
      <br />

      <button type="submit" class="login_btn" @click="onLogin">登入</button>
      <br />
      <br />

      <button class="register_btn" @click="register"> 註冊 
      </button>

      <br />
      <br />

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/member">忘記密碼?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default{
  
  data(){
    return{
      login:{
        userName:'',
        password:''
      }
    }
  },
  methods:{

    // onLogin() {
    //   if(this.login.userName == '') {
    //     alert('用户名不能为空');
    //   }else if(this.login.password == '') {
    //     alert('密码不能为空');
    //   }else{
    //     axios.get('http://127.0.0.1:3000/logintable', {
          
    //         member_id: this.login.userName,
    //         member_password: this.login.password
          
    //     }).then(res=>{
    //       if(res.data.status == 200) {
    //         this.$router.push({
    //           path: '/home',
    //         })
    //       }else{
    //         alert('用户名或密码错误', '登录失败',);
    //       }
    //     }).catch(err=>{
    //         console.log("登录失败" + err);
    //     })
    //   }
    // }
    onLogin() {
      let username = this.login.userName
      let password = this.login.password

      if( username !== 'maruko@gmail.com' || username == ""){
        alert('查無此帳號請重新輸入')
      }else if(password ==''){
        alert('請輸入密碼')
      }else{
        this.$router.push('/home/member')
        alert('請完成會員資料')
        
        // axios.get('http://127.0.0.1:3000/logintable',{
          
        //   params:{
        //     id : this.login.userName,
        //     password : this.login.password,
        //   }
          
        // }).then((res, err) => {
        //   const token = res.data.token
        //   console.log(token)
        //   if (res.data.status == 200){
            
        //       this.$router.push('/home/homepage')

            
          
        //   }else{
        //     this.login.userName = "",
        //     this.login.password = "",
        //     alert('查無此帳號，請先註冊喔');
        //     console.log('錯誤'+ err)
            

        //   }
        // })
        
      }
      

  
    },
  register(){
    this.$router.push('/home/register')
  }
}
}
</script>


<style scoped>
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