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
                            <div class="label">What is HTML</div>
                            <div class="content">Hypertext Markup Language (HTML) is a computer language that makes up
                                most web pages and online applications. A hypertext is a text that is used to reference
                                other pieces of text, while a markup language is a series of markings that tells web
                                servers the style and structure of a document. HTML is very simple to learn and use.
                            </div>
                        </div>
                        <hr>
                        <div class="container">
                            <div class="label">What is CSS?</div>
                            <div class="content">CSS stands for Cascading Style Sheets. It is the language for
                                describing the presentation of Web pages, including colours, layout, and fonts, thus
                                making our web pages presentable to the users. CSS is designed to make style sheets for
                                the web. It is independent of HTML and can be used with any XML-based markup language.
                                CSS is popularly called the design language of the web.
                            </div>
                        </div>
                        <hr>
                        <div class="container">
                            <div class="label">What is JavaScript?</div>
                            <div class="content">JavaScript is a scripting or programming language that allows you to
                                implement complex features on web pages — every time a web page does more than just sit
                                there and display static information for you to look at — displaying timely content
                                updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. —
                                you can bet that JavaScript is probably involved. It is the third of the web trio.</div>
                        </div>
                        <hr>
                        <div class="container">
                            <div class="label">What is React?</div>
                            <div class="content">React is a JavaScript library created for building fast and interactive
                                user interfaces for web and mobile applications. It is an open-source, component-based,
                                front-end library responsible only for the application’s view layer. In Model View
                                Controller (MVC) architecture, the view layer is responsible for how the app looks and
                                feels. React was created by Jordan Walke, a software engineer at Facebook. </div>
                        </div>
                        <hr>
                        <div class="container">
                            <div class="label">What is PHP?</div>
                            <div class="content">PHP is a server-side and general-purpose scripting language that is
                                especially suited for web development. PHP originally stood for Personal Home Page.
                                However, now, it stands for Hypertext Preprocessor. It’s a recursive acronym because the
                                first word itself is also an acronym.</div>
                        </div>
                        <hr>
                        <div class="container">
                            <div class="label">What is Node JS?</div>
                            <div class="content">Node.js is an open-source, cross-platform, back-end JavaScript runtime
                                environment that runs on the V8 engine and executes JavaScript code outside a web
                                browser. Node.js lets developers use JavaScript to write command line tools and for
                                server-side scripting—running scripts server-side to produce dynamic web page content
                                before the page is sent to the user's web browser. Consequently, Node.js represents a
                                "JavaScript everywhere" paradigm</div>
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