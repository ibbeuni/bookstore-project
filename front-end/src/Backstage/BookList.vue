<template>
    <form>
        <fieldset>
            <p><label for="title">書籍名稱:</label><input type="text" required /></p>
            <p><label for="title">作者:</label><input type="text" /></p>
            <p><label for="title">譯者:</label><input type="text" /></p>
            <p><label for="title">繪者:</label><input type="text" /></p>
            <p><label for="title">出版社:</label><input type="text" /></p>
            <p><label for="title">出版日期:</label><input type="date" /></p>
            <p><label for="title">單選框:</label><input type="radio" name="language"/>繁體中文<input type="radio" name="language"/>簡體中文</p>
            <p><label for="title">數量:</label><input type="text" /></p>
            <p><label for="title">ISBN:</label><input type="text" /></p>
            <p><label for="title">裝訂方式:</label><input type="text" /></p>
            <p><label for="title">詳細規格:</label><input type="text" /></p>
            <p><label for="title">出版社:</label><input type="text" /></p>
            <p><label for="title">內容簡介:</label><textarea name="mytext" rows="10" cols="100"></textarea></p>
            <p><label for="title">作者簡介:</label><textarea name="mytext" rows="10" cols="100"></textarea></p>
            <p><label for="title">定價:</label><input type="text" /></p>
            <p><label for="title">進價:</label><input type="text" /></p>
            <p><label for="title">折扣價:</label><input type="text" /></p>
            <p><label for="title">關鍵字:</label><input type="text" /></p>
            <p><label for="title">類別二:</label>
                <select>
                    <!-- <option>請選擇類別</option> -->
                    <option>收藏與鑑賞</option>
                    <option>繪畫</option>
                    <option>藝術</option>
                    <option>攝影</option>
                </select>
            </p>
        </fieldset>
        <button class="buttomStyle" style="width:150px;height:50px;">新增書籍</button>
    </form>
</template>
<script>

</script>
<style>
fieldset {
    /* background-color: #f1f1f1; */
    border: none;
    border-radius: 2px;
    margin-bottom: 12px;
    overflow: hidden;
    padding: 0 .625em;
}

label {
    cursor: pointer;
    display: inline-block;
    padding: 3px 6px;
    text-align: right;
    width: 150px;
    vertical-align: top;
}

input {
    font-size: inherit;
}
.buttomStyle{
border:0;
background-color:#df9f0b;
color:#fff;border-radius:10px;
}
.buttomStyle:hover{
  color:#df9f0b;
  background-color:#fff;
  border:2px #df9f0b solid;
}
</style>