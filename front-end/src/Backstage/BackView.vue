<template>
    <!-- BODY_WRAPPER -->
    <div class="wrap">
        <!-- HEADER_COMPONENT -->
        <back-header></back-header>
        <router-view></router-view>
    </div>
</template>

<script>
import BackHeader from '../components/index/BackHeader.vue';
export default {
    components: {
        'back-header': BackHeader,
    },
    data() {
        return {
            b: ''
        }
    }
}
</script>