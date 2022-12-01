<template>
    <section class="breadcrumb-wrap">
        <div class="contents-inner">
            <ol class="breadcrumb-list">
                <li class="breadcrumb-item">
                    <a href="#/home/homepage">
                        <font-awesome-icon icon="fa-solid fa-house" />
                    </a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#/best">暢銷書單</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#/best">綜合</a>
                </li>
            </ol>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BreadCrumb'
}
</script>

<style scoped>
.breadcrumb-wrap {
    padding: 20px 0 0;
}

.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

.flex {
    display: flex;
}

/* breadcrumb */
.breadcrumb-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px; */
}

.breadcrumb-item {
    padding: 0 12px 0 0;
}

.breadcrumb-item a {
    padding: 0 0 0 12px;
    color: var(--neutral-color);
}
</style>