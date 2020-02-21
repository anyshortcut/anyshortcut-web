<template>
    <div>
        <div class="title">
            <div class="title-left">
                Your redeem cards
                <span>
                    <img src="" alt="">
                </span>
                <small @mouseover=" showA = true" @mouseout="showA = false">*</small>

            </div>
            <div class="title-left">
                Claimed by you
                <img src="" alt="">
                <small @mouseover="showB = true" @mouseout="showB = false">*</small>
            </div>
            <div class="title-left">
                Your referral cards
                <img src="" alt="">
                <small @mouseover="showC = true" @mouseout="showC = false">*</small>
            </div>
        </div>
        <div class="popper locationA" v-show="showA" @mouseover="showA = true" @mouseout="showA = false">
            <p>
                These redeem cards are exclusive to you, feel free to apply before subscribe!
            </p>
            <div class="popper-arrow"></div>
        </div>
        <div class="popper locationB" v-show="showB" @mouseover="showB = true" @mouseout="showB = false">
            <p>
                These redeem cards were claimed by you, not available anymore!
            </p>
            <div class="popper-arrow"></div>
        </div>
        <div class="popper locationC" v-show="showC" @mouseover="showC = true" @mouseout="showC = false">
            <p>
                You'll get three $6.00 off referral redeem card after every subscribing. Another $8.00 off redeem card is a reward for you if these three redeems were claimed by your friends.
            </p>
            <div class="popper-arrows"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Redeem",
        data() {
            return {
                showA: false,
                showB : false,
                showC : false
            }
        },
        
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
        font-size: 14px;
        padding: 20px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        width: 270px;
        font-family: Open Sans, sans-serif;
        box-sizing: inherit;
    }
    .locationA {
        position: absolute;
        top: 14px;
        left: 322px;
    }
    .locationB {
        position: absolute;
        top: 14px;
        left: 620px;
    }
    .locationC {
        position: absolute;
        top: 120px;
        left: 940px;
    }
    .popper-arrow {
        border-color: white;
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
        border-width: 5px 5px 0px;
        bottom: -5px;
        width: 0px;
        height: 0px;
        border-style: solid;
        position: absolute;
        left: 150px;
    }
    .popper-arrows {
        border-color: white;
        border-top-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
        border-width: 0px 5px 5px;
        top: -5px;
        width: 0px;
        height: 0px;
        border-style: solid;
        position: absolute;
        left: 180px;
    }
</style>