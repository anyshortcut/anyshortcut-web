<template>
    <div>
        <div class="title">
            <div class="title-left">
                Your redeem cards
                <small @mouseover="a">ds</small>
            </div>
            <div class="title-left">
                Claimed by you
                <img src="" alt="">
            </div>
            <div class="title-left">
                Your referral cards
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Redeem",

        methods:{
            a() {
                alert('d')
            }
        }
    }
</script>

<style scoped>
    .title {
        display: flex;
        flex-wrap: nowrap;
        padding-top: 30px;
    }
    .title-left {
        padding: 0 10px;
        font-size: 22px;
        border-left: 5px solid;
        width: 50%;
    }
</style>