<template>
<div class="wrap">
<main class="container">
    <section class="contents">
        
        <div class="title_wrap">
            <h1 class="title_heading">註冊電子郵件</h1>
        </div>
        <hr>
        <div class=content_inner>
        <div class="info_inner">
            <h2>請輸入您的會員資訊</h2>
            <div class="for_wraping_title">
            <span class="words_setting">ID *</span>
            </div>
            <div class="for_wraping">
            <input v-model = member.id class="inputInner" type="email" placeholder="請輸入郵件">
            </div>
            

            <div class="for_wraping_title">
            <span class="words_setting">密碼*</span>
            </div> 
            <div class="for_wraping">
            <input  v-model = member.password class="inputInner" type="password" placeholder="請輸入密碼">
            </div>
            <div class="for_wraping_title">
            <span class="sml_word">英文、數字和特殊字母三種組合8位字符，不允許使用空格和三個連續字元或重複字元</span>
            </div>


            
        <br><br>
        <div class="for_wraping">
        <button  class="register_btn" @click="goRegister" >註冊會員
        </button>
        </div>
        </div>
        </div>
        

       

    </section>
</main>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            member:{
                id:'',
                password:'',
                
            }
        }
    },
    methods:{
        goRegister() {
            if(this.member.id == ""){
                alert('請輸入帳號')
            }else if (this.member.password == ''){
                alert('請輸入密碼')
            }else{
                axios.post('http://127.0.0.1:3000/registertable',{
                    params:{
                        id: this.member.id,
                        password: this.member.password
                    }
                
                }).then(res => {
                    console.log(res.data)
                    if(res.data.status == 200){
                        console.log(res.data)
                        alert('註冊成功')
                        this.router.push('/login')
                    }else{
                        alert('請重新註冊')
                    }
                })
            }
        }

    }
    

}
</script>


<style scoped>
#wrap {
    /* 網頁內容最大寬度 */
    /* max-width: 1920px; */
    min-width: 1440px;
    overflow: hidden;
    min-height: 100vh;
    /* 測試用 */
    background-color: white;
}

#pageContainer {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    /* background-color: lightblue; */
    align-content: center;
    flex-wrap: wrap;
}

.contents {
    width: 70%;

}

.title_wrap {
    display: flex;
    justify-content: center;
}

h1 {
    font-size: 2.375rem;
    /* 38px */
    line-height: 55px;
    font-family: 'Genseki-H';

}

h2 {
    color: #2E2A39;
    font-size: 1.875rem;
    /* 30px */
    line-height: 40px;
    font-family: 'Genseki-B';
    text-align: center;
}



.content_inner {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;

}

.info_inner {
    display: block;

}




.words_setting {
    display: flex;
    justify-content: left;
    font-size: 15px;
    /* 16px */
    font-family: 'Genseki-R';
    color: #2E2A39;
    padding: 10px 0 0px 0;
    letter-spacing: -0.01em;
    height: 10px;
}

.sml_word {
    display: inline-flex;
    font-size: 2px;
    padding: 5px 0 5px 0;
    ;
    text-align: left;
    color: #FD9301;
}

.inputInner {
    display: inline-block;
    padding: 5px 0 5px 2px;
    font-size: 14px;
    letter-spacing: -0.01em;
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    /* font-size: 10px; */
    width: 300px;
    height: 20px;
}

.register_btn {
    position: relative;
    justify-content: center;
    color: #53929B;
    background: white;
    border: 1px solid #53929B;
    width: 250px;
    height: 30px;
    border-radius: 6px;

}

.for_wraping {
    /* display: flex;
    justify-content: center; */
    text-align: center;
}

.for_wraping_title {
    /* display: block; */
    margin-left: 150px;
    margin-bottom: 18px;
    padding-top: 4px;
    font-size: 14px;
}
</style>