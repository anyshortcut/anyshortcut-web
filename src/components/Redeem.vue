<template>
    <div>
        <div class="title">
            <div class="title-left">
                Your redeem cards
                <span>
                    <img src="" alt="">
                </span>
                <small @mouseover="a" @mouseout="b">*</small>

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
        <div class="popper" v-show="showA" @mouseover="a" @mouseout="b">
            <p>
                These redeem cards are exclusive to you, feel free to apply before subscribe!
            </p>
            <div class="popper-arrow"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Redeem",
        data() {
            return {
                showA: false
        }
        },
        methods: {
            a() {
                this.showA = true
            },
            b() {
                this.showA = false
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

    .popper {
        position: absolute;
        top: 14px;
        left: 336px;
        font-size: 14px;
        padding: 20px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        width: 270px;
        font-family: Open Sans, sans-serif;
        box-sizing: inherit;
    }

    .popper-arrow {
        border-color: white;
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
        border-width: 5px 5px 0;
        bottom: -5px;
        width: 0px;
        height: 0px;
        border-style: solid;
        position: absolute;
        left: 150px;
    }
</style>