<template>
    <div class="container">

        <div class="header">
            <div class="list center">
            </div>

        </div>
        <div class="content">
            <div class="card">
                <ul class="wordsize">
                    <li><a href="/Users/catmimi1212/Desktop/大專題/靜態畫面/accordion/zzz.html">關於我們</a></li>
                    <li>會員常見問題</li>
                    <li>購物常見問題</li>
                    <li>配送取貨問題</li>
                    <li>退換貨及退款</li>
                    <li>產品維護方式</li>
                    <li>隱私政策</li>
                    <li>使用者條款</li>
                </ul>
            </div>
            <div class="card_1">
                <div class="accordion" id="myAccordion">
                    <h1>會員常見問題</h1>
                    <div class="accordion-item">
                        <div class="accordion-header" id="headingOne">
                            <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne">Ｑ : 忘記帳號密碼怎麼辦？</button>
                        </div>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div class="card-body">
                                <p>Ａ : 可以直接來信或來電與客服人員聯繫協助查詢，忘記密碼則可以點選忘記密碼，我們會發email到您的信箱內，買家可以自行收信更改密碼唷!</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button type="button" class="accordion-button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo">
                                Ｑ: 要怎麼查詢我的購物金？</button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                            <div class="card-body">
                                <p>Ａ : 登入官網會員後，點選「會員中心」頁面，點選「我的帳戶」即會出現目前帳戶可使用的購物金額。</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree">Ｑ : 沒有在領取的期內取貨怎麼辦？</button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div class="card-body">
                                <p>Ａ : 若您逾期未至門市取貨，商品將會退回本公司，訂單亦將自動取消無法重新配送，若您仍需要該商品，請重新至官網訂購。
                                    提醒您，若您有3次以上(含3次)未於通知期限內至該指定門巿取貨，未來您將無法再次訂購商品，同時您的帳號使用權也將被取消。請您珍惜寶貴的訂購資源及維護自身權益。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="footer"></div>
    </div>
</template>
<script>
</script>
<style scoped>
.container {
    width: 100%;
    height: 100%;
    /* background-color: brown; */
    margin: 0 auto;
}

.header {
    width: 100%;
    height: 100px;
    /* background-color: cadetblue; */
    display: flex;
}

.content {
    width: 100%;
    height: 600px;
    /* background-color: gray; */
    display: flex;
}

.footer {
    width: 100%;
    height: 100px;
    /* background-color: blue; */
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;

}

.list {
    width: 80%;
    justify-content: end;

}


.card {
    width: 25%;
    flex-wrap: wrap;
    height: 100%;
    /* background-color: yellowgreen; */
    margin-right: auto;
}

.wordsize li {
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
}

.card_1 {
    width: 75%;
    flex-wrap: wrap;
    height: 100%;
    /* background-color: green; */
    margin-right: 5px;
}
</style>