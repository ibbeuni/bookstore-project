<template>
    <header>
        <div class="logo">後台管理系统</div>
        <nav class="nav-wrap">
                <ul class="nav-list">
                    <li class="nav_item">
                        <router-link to="/back/memberlist" style="color: white;">會員修改</router-link>
                    </li>
                    <li>-</li>
                    <li class="nav_item">
                        <router-link to="/back/booklist" style="color: white;">書籍上下架與修改</router-link>
                    </li>
                    <li>-</li>
                    <li class="nav_item">
                        <router-link to="/back/dashboard" style="color: white;">銷售圖表與庫存</router-link>
                    </li>
                    <li>-</li>
                    <li class="nav_item">
                        <router-link to="/back1" style="color:  white;">管理者登出</router-link>
                    </li>
                </ul>
            </nav>
    </header>
</template>
<script>

</script>
<style scoped>
.logo {
    text-align: center;
	/* float: left; */
    font-size: 50px;
    /* background-color: aquamarine; */
}
.collapse-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	float: left;
	padding: 0 21px;
	cursor: pointer;
}
.nav-list {
    margin-right: auto;
    padding-left: 0px;
}
.nav-wrap a {
    padding: 5px 100px;
}
ul{
    text-align: center;
}
li {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline;
    cursor: default;
}
/* nav{
    background-color: aquamarine;
} */
</style>