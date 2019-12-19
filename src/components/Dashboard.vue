<template>
    <div class="dashboard">
        <div class="left-panel">
            <div v-if="userInfo.user" class="userInfo">
                <div class="userAvatar">
                    <img :src="userInfo.user.picture" alt="" class="picture">
                    <p class="userName"> {{userInfo.user.given_name}} </p>
                </div>
                <div class="subscription-status" >
                    <div>
                        {{userInfo.subscription.status}}
                    </div>
                </div>
                <img src="" alt="">
            </div>
            <div class="navigation">
                <router-link to="/shortcuts" class="font">Shortcuts</router-link>

                <router-link to="/subscription/sub" class="font">Subscription</router-link>

                <router-link to="/profile" class="font">Profile</router-link>
            </div>
        </div>
        <div class="right-panel">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                userInfo: {},
            }
        },
        async created() {
            let response = await fetch("https://api.anyshortcut.com/user/info", {
                credentials: 'include'
            });
            this.userInfo = (await response.json()).data;
        }
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
            &.active {
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
    .subscription-status>div {
        font-size: 12px;
        background-color: #FAC64B;
        border-radius: 10px;
        color: white;
        text-align: center;
        display: inline;
        padding: 0 10px;
    }
</style>