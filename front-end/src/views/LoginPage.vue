

<template>
  <div id="pageContainer">
    <br><br><br><br><br><br>
    <form class="userLogin">
      <h3>已經是書店的會員了?</h3>

      <div class="form-group">
        <input 
        type="email" 
        class="form-control"
        v-model="info.userName" 
        placeholder="請輸入您的ID" />
      </div>

      <br />

      <div class="form-group">
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="info.passWord"
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
import axios from 'axios'

export default{
  
  data(){
    return{
      info:{
        userName:'',
        passWord:''
        }
    }                                                                                                 
  },
  methods:{

    onLogin() {
      if(this.info.userName == '') {
        alert('請輸入帳號');
      }else if(this.info.passWord == '') {
        alert('請輸入密碼');
      }else{
        axios.post('http://127.0.0.1:3000/logintable', {
            member_id: this.info.userName,
            member_password: this.info.passWord
          
        }).then(res=>{
          
          if(res.data.status == 200) {
           localStorage.setItem('token', res.data.token)
           
           if(this.token !== null){
             this.$router.push('/home/homepage')
            this.$router.go(0)
              }
          console.log(this.memberData[0].member_name)

          }else{
            alert('帳號或密碼錯誤', '登入失敗',);
          }
        }).catch(err=>{
            console.log("登入失敗" + err);
        })
      }
    },
    // onLogin() {

    //   if( this.info.userName == ""){
    //     alert('查無此帳號請重新輸入')
    //   }else if(this.info.passWord ==''){
    //     alert('請輸入密碼')
    //   }else{
    //     axios.get('http://127.0.0.1:3000/logintable',{

    //         id:this.info.userName,
    //         password:this.info.passWord  
    //       })
    //     .then((res, err) => {
    //       if (res.data.status == 200){
    //           this.$router.push('/home/homepage')
    //       }else{
    //         alert('查無此帳號，請先註冊喔');
    //         console.log('錯誤'+ err)
    //       }
    //     })
        
    //   }
      

  
    // },
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