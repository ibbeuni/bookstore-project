<template>
    <!-- BODY_WRAPPER -->
    <div class="wrap">
        <header class="header-wrapper"></header>
        <main></main>
        <footer></footer>
        <h6>h6: hello 哈囉</h6>
        <p>p: hello</p>
        <small>p-s: hello</small>
        <h1> 源石黑體 </h1>
        <h2> 送別 </h2>
    </div>
</template>

<style>
/* 全域變數 */
:root {
    --background-color: #fff;
    --primary-color: #53929B;
    /* 主色 60% */
    --secondary-color: #E3D096;
    /* 輔色 30* */
    --accent-color: #FD9301;
    /* 強調色 10% */
    --neutral-color: #87806D;
    /* 中性色 */
    --font-color: #2E2A39;
    color: var(--font-color)
        /* 預設文字色 */
}

html {
    /* font-size: 16px; */
    scroll-behavior: smooth;
    font-family: 'Genseki-R', Sans-Serif;
}

/* hx適用於標題 */
h1 {
    font-size: 2.375rem;
    /* 38px */
    line-height: 55px;
    font-family: 'Genseki-H';
}

/* 區塊標題 */
h2 {
    font-size: 1.875rem;
    /* 30px */
    line-height: 40px;
    font-family: 'Genseki-B';
}

h3 {
    font-size: 1.75rem;
    /* 28px */
    font-family: 'Genseki-M';
}

h4 {
    font-size: 1.5rem;
    /* 24px */
    font-family: 'Genseki-M';
}

h5 {
    font-size: 1.25rem;
    /* 20px */
    font-family: 'Genseki-R';
}

/* 大小與<p>相同，字體為非襯線字體 */
h6 {
    font-size: 1rem;
    /* 16px */
    font-family: 'Genseki-R';
}

/* 適用於內文，字體為襯線字體 */
p {
    font-size: 1rem;
    /* 16px */
    font-family: 'Genseki-R';
    /* //TODO 改安裝襯線字體 */
}

small {
    font-size: 0.75rem;
    /* 12px */
    font-family: 'Genseki-L';
}

/* BODY_WRAPPER */
.wrap {
    /* 網頁內容最大寬度 */
    /* max-width: 1920px; */
    min-width: 1440px;
    overflow: hidden;
    min-height: 100vh;
    /* 測試用 */
    background-color: var(--primary-color);
}

/* <a>預設樣式 */
a {
    color: var(--font-color);
    text-decoration: none
}

a:hover {
    color: var(--font-color);
    text-decoration: none
}

</style>