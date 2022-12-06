<template>
    <!-- BODY_WRAPPER -->
    <div>
        <!-- HEADER_COMPONENT -->
        <full-header></full-header>
        <router-view></router-view>
        <!-- FOOTER -->
        <full-footer></full-footer>
    </div>
</template>

<script>
import FullHeader from '../components/index/FullHeader.vue';
import FullFooter from '../components/index/FullFooter.vue';
export default {
    components: {
        'full-header': FullHeader,
        'full-footer': FullFooter
    },
    data() {
        return {
            a: ''
        }
    }
}
</script>