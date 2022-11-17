<template>
<div class="member_login" id="mainDiv">
<main class="container">
    <section class="contents">
        <div class="title_wrap">
            <p class="title_heading">輕鬆註冊電子郵件</p>
            <div class="right_area">
                <span class="step_round_desc">即將完成註冊</span>
            </div>
        </div>
            <h2>請輸入您的會員資訊</h2> 
        <div>
            <span>*ID</span>
            <br>
            <input type="text" placeholder="請輸入郵件">
            <br>
            <span>判斷id是否可用</span>
            <br>
            <input type="checkbox">將電子郵件作為ID
        </div>
        <br>
        <div>
            <span>*密碼</span>
            <br>
            <input type="text" placeholder="請輸入密碼">
            <br>
            <p>英文、數字和特殊字母三種組合8位字符</p>
            <p>不允許使用空格和三個連續字元或重複字元</p>
            <span>*驗證密碼</span>
            <br>
            <input type="text" placeholder="請再輸入一次密碼">
        </div>

        <div>
            <span>*姓名</span>
            <br>
            <input type="text" placeholder="請輸入您的大名">
            <br>
            <span>*手機號碼</span>
            <br>
            <input type="text" maxlength="10" placeholder="請輸入電話號碼">
            <br>
            <span>*電子郵件</span>
            <br>
            <input type="email" placeholder="請輸入電子郵件">
            <br>
            <span>*生日</span>
            <br>
            <input type="text" maxlength="8" placeholder="請輸入您的生日八位數">

        </div>

        <br>
        <br><br>

        <button class="register_btn">註冊會員</button>

    </section>
</main>
</div>
</template>


<style scoped>
.member_login{
    background-color: brown;
    display:-webkit-flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    align-items: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column;
    min-height: 100%;
    padding-top: 100px;
    box-sizing: border-box;
}

.member_login .container{
    background-color: blanchedalmond;
    flex: 1 0 auto;
    width: 100%;
    padding:50px 0 100px;
    min-height: calc(100vh - 54px - 68px - 250px);
}

.container .contents{
    background-color: green;
    width:400px;
    margin:0 auto;
    padding-top: 0;
    
}
.title_wrap{
    padding-bottom: 20px;
    display: flex;
}
.title_wrap .title_heading{
    color:black;
    font-weight: bold;
    font-size:10px;
    line-height: 30px;
    letter-spacing: -0.01em;
}
.right_area{
   
    margin-left: auto;
    
    flex-shrink: 0;
    display: -webkit-flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction:row ;
}
 .step_round_desc{
    padding-right:0px;
    font-size: 5px;
    line-height: 19px;
    letter-spacing: -0.01em;
    color:white;
    font-weight: 500;
    

}

</style>