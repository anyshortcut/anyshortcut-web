<template>
    <div class="dashboard">
        <div class="left-panel">
            <div v-if="userInfo.user" class="userInfo">
                <div class="userAvatar">
                    <img :src="userInfo.user.picture" alt="" class="picture">
                    <p class="userName"> {{userInfo.user.given_name}} </p>
                    <small @mouseover="setView = true" @mouseout="setView = false">O</small>
                </div>

                <div v-show="setView" class="set" @mouseover="setView = true" @mouseout="setView = false">
                        <div></div>
                        <a href="">Rate us 💗</a>
                        <a href="">Twitter 🎉</a>
                        <a href="">Telegram Channel🎊</a>
                        <a href="">Telegram Group 🎈</a>
                        <a href="">Sign out</a>
                    
                </div>
                <div class="subscription-status">
                    <div>
                        {{userInfo.subscription.status}}
                    </div>
                </div>
            
            </div>
            <div class="navigation">
                <router-link to="/shortcuts" class="font">Shortcuts</router-link>

                <router-link to="/subscription" class="font">Subscription</router-link>

                <router-link to="/profile" class="font">Profile</router-link>
            </div>
        </div>
        <div class="right-panel">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import client from "../client.js";

    export default {
        name: "Dashboard",
        data() {
            return {
                userInfo: {},
                setView: false
            }
        },
        async created() {
            // client.getUserInfo().then(response => {
            //     this.userInfo = response.data.data;
            // }).catch(error => {
            //     alert("Get user info error...", error);
            // });

            try {
                this.userInfo = await client.getUserInfo();
            } catch (error) {
                // alert("Get user info error...", error);
                // eslint-disable-next-line no-console
                console.error("Get user info error...", error);
            }

            // let response = await fetch("https://api.anyshortcut.com/user/info", {
            //     credentials: 'include'
            // });
            // this.userInfo = (await response.json()).data;
        },
    }
</script>
<style scoped lang="scss">
    .dashboard {
        position: relative;
        display: block;
        height: 100%;
    }

    .left-panel {
        background: #f7f9fa;
        width: 240px;
        height: 100%;
        /*z-index: 5;*/
        position: fixed;
    }

    .userInfo {
        padding: 15px;
    }

    .userAvatar {
        display: flex;
        align-items: center;
    }
    .userAvatar>small {
        margin-left: auto;
    }
    .right-panel {
        /*width: 100%;*/
        height: 100%;
        /*background-color: #2b72dc;*/
        padding-left: 240px;
        /*position: fixed;*/
    }

    .picture {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }

    .userName {
        margin: 10px;
        font-size: 16px;
    }

    .navigation {
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items: flex-start;
        margin: 48px 44px;

        a {
            &.router-link-active {
                color: #2b72dc;
            }
        }
    }

    .font {
        font-size: 17px;
        height: 42px;
        text-decoration: none;
        color: #637282;
    }

    .subscription-status {
        margin: 15px;
        text-align: center;
    }

    .subscription-status > div {
        font-size: 12px;
        background-color: #FAC64B;
        border-radius: 10px;
        color: white;
        text-align: center;
        display: inline;
        padding: 0 10px;
    }
    .set {
        width: 180px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
        left: 54px;
        bottom: 96px;
        box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
        padding: 2px 0;
    }
    .set>a {
        display: block;
        text-decoration: none;
        padding: 0 20px;
        height: 36px;
        line-height: 36px;
        border-bottom: 1px solid #ececec;
        font-size: 13px;
        font-weight: 400;
        color: #333333
    }
    .set>a:hover {
        background-color: #ececec
    }
    .set>a:last-child {
        border-bottom: none;
    }
    .set>div {
        border-color: rgb(255, 255, 255);
        border-left-color: transparent;
        border-right-color: transparent;
        border-top-color: transparent;
        border-width: 0px 5px 5px;
        border-style: solid;
        width: 0px;
        position: absolute;
        top:-5px;
        left: 160px;
    }
</style>