<template>

    <div class="wrap">

        <section>
            <div class="container"> 
                <div class="upper_box">header下面的藍色長條
              
                <div class="sideProfile"></div>
                <div class="profile_pic">PIC</div>
                <p >會員姓名</p>
            </div>
        </div>
        </section>
        
     <div class="main_contents">  
        <section>
        <div>
            <div class="side_bar">左邊的選單欄位
            <p>會員資料</p>
            <p>會員訂單</p>
            <p>歷史訂單查詢</p>
            <p>追蹤清單</p>
            <p>貨到通知</p>
            <p>訂閱/取消電子報</p>
            </div>
          </div>
       </section>

       <section>
        <div>
        <div class="main_box">
            <h1>會員資料設定</h1>
            <h3>會員資料</h3>
            <hr>
            <p>帳號 / ID</p>
            <span>example@gmail.com</span>
            <br>
            <p>修改密碼 / 新密碼</p>
            <input type="text" placeholder="請重新輸入密碼">
            <p>至少八個字符, 包含大小寫英文字母、數字或特殊符號</p>
            <p>不允許使用連續或重複的三個字節</p>
            <br>
            <p>姓名</p>
            <span>小丸子</span>
            <button>變更</button>
            <hr>
            <p>出生日期</p>
            <span>1988.1.12</span>
            <br>
            <p>電子郵件</p>
            <span>example@gmail.com</span>
            <button>變更</button>
            <br>
            <p>手機號碼</p>
            <span>0988523645</span>
            <button>變更</button>
            <hr>
            <button>清除</button>
            <button>確認</button>
    </div>
         </section>

</div>
       
      
    
        


  
   
</template>

<style scoped>
.wrap {
  /* 網頁內容最大寬度 */
  /* max-width: 1920px; */
  min-width: 1440px;
  overflow: hidden;
  min-height: 100vh;
  /* 測試用 */
  background-color: var(--primary-color);
}
.container {
  width: 100vw;
  /*  */
}

.upper_box {
  width: 100%;
  height: 30vh;
  background-color: lightblue;
}
.main_contents {
  display: flex;
  justify-content: center;
}
.sideProfile {
  background-color: bisque;
  border-radius: 20px;
  color: black;
  padding-right: 20px;
  margin-inline-start: 100px;
  margin-top: 20px;
  width: 100px;
  height: 150px;
}
.sideProfile .profile_pic {
  background-color: darkcyan;
  width: 40px;
  height: 40px;
  margin-inline-start: 35px;
}
.side_bar {
  border: 2px solid lightseagreen;
  width: 30vh;
  height: 80vh;
}
.main_box {
  border: 4px solid lightsalmon;
  width: 70vh;
  height: 90vh;
  margin-inline-start: 200px;
  margin-top: -195px;
}
</style>