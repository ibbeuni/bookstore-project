<template>

    <div class="wrap">
        <div class="header">
            <div class="list center">
            </div>
        </div>
        <div class="bookname">
            <div>
                <h2>《就算是空的》 發表活動</h2>
            </div>
            <div>
                <p>2022-10-21~2022-11-20</p>
            </div>
        </div>
        <div class="bookimg">
            <img src="../assets/img/event/event_info/event_101.jpeg" alt="">
        </div>
        <div class="bookname">
            <ul>
                <h4>其他書籍活動</h4>
                <li><button><span>所有活動</span></button></li>
                <li><button><span>所有活動</span></button></li>
                <li><button><span>所有活動</span></button></li>
                <li><button><span>所有活動</span></button></li>
                <li><button><span>所有活動</span></button></li>
            </ul>
        </div>



        <div class="footer"></div>
    </div>

</template>
<style scoped>
.header {
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
}

.footer {
    width: 100%;
    height: 100px;
    background-color: blue;
    display: margin-bottom;
}

.bookname {
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
    /* background-color: yellowgreen; */
    margin: 30px;
    /* text-align: center; */
}

.bookimg {
    text-align: center;
}

button {
    border-radius: 10px
}
li{
    display: inline;
}
</style>