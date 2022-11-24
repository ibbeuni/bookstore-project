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
                <div class="accordion-body">
                    <div class="accordion">
                        <h1>會員常見問題</h1>
                        <hr>
                        <div class="container">
                            <div class="label">Ｑ : 忘記帳號密碼怎麼辦？</div>
                            <div class="content">Ａ : 可以直接來信或來電與客服人員聯繫協助查詢，忘記密碼則可以點選忘記密碼，我們會發email到您的信箱內，買家可以自行收信更改密碼唷!
                            </div>
                        </div>
                        <hr>
                        <div class="container">
                            <div class="label">Ｑ : 要怎麼查詢我的購物金？</div>
                            <div class="content">Ａ : 登入官網會員後，點選「會員中心」頁面，點選「我的帳戶」即會出現目前帳戶可使用的購物金額。
                            </div>
                        </div>
                        <hr>
                        <div class="container">
                            <div class="label">Ｑ : 沒有在領取的期內取貨怎麼辦？</div>
                            <div class="content">Ａ : 若您逾期未至門市取貨，商品將會退回本公司，訂單亦將自動取消無法重新配送，若您仍需要該商品，請重新至官網訂購。 提醒您，若您有3次以上(含3次)未於通知期限內至該指定門巿取貨，未來您將無法再次訂購商品，同時您的帳號使用權也將被取消。請您珍惜寶貴的訂購資源及維護自身權益。</div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>

        </div>

        <div class="footer"></div>
    </div>
</template>
<script>
export default {
    data() {

    },
    methods: {
        onclick: {

        }
    }
}
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
    margin-right: 5px;
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