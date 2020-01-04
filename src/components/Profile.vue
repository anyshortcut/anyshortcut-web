<template>
    <div class="pro">
        <div class="title">
            <a href="" class="title-font">API Access</a>
        </div>
        <div class="content">
            <div class="pipe-title">
                Access token
            </div>
            <p>If you want to use anyshortcut in other scenario, please use the following token for authentication.</p>
            <div class="access-token">
                <div>{{access.user.access_token}}</div>
                <small>Generated at:{{ access.user.access_token_generated_at | datetime }}</small>
            </div>
            <button class="btn">Revoke access token</button>
            <div class="pipe-title subtitle">Those scenarios need the access token</div>
            <ul>
                <li><a href="">Anyshortcut command line interface</a></li>
                <li><a href="">Anyshortcut for Alfred Workflow</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import dayjs from 'dayjs';
    import client from "../client";

    export default {
        name: "Profile",
        data() {
            return {
                access: '',
            }
        },
        filters: {
            datetime: function(timestamp) {
                return dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss")
            }
        },
        async created() {
            try {
                this.access = await client.getUserInfo()
            } catch (error) {
                alert(error)
            }
            // let response = await fetch("https://api.anyshortcut.com/user/info", {
            //     credentials: 'include',
            // });
            // this.access = (await response.json()).data;
        }
    }
</script>
<style scoped lang="scss">
    .pro {
        padding: 30px 30px 0;
    }

    .title {
        padding-bottom: 8px;
        border-bottom: 1px solid #999999;
    }

    .title-font {
        text-decoration: none;
        color: black;
        padding-bottom: 7px;
        border-bottom: 1px solid black;
    }

    .content {
        padding-top: 30px;
    }

    .pipe-title {
        font-size: 22px;
        padding: 0 10px;
        border-left: 5px solid;
        margin-bottom: 15px;
    }

    .access-token {
        margin: 20px 0;
        background-color: #f5f5f5;
        white-space: pre;
        font-size: 1em;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .btn {
        background-color: #2b72dc;
        color: white;
        border-color: transparent;
        border-radius: 4px;
        padding: 8px 12px;
        font-size: 16px;
    }

    .subtitle {
        margin-top: 50px;
    }
    ul {
        padding: 0;
        margin: 16px 0 0 32px;
    }

    li {
        margin-bottom: 4px;
    }

    a {
        text-decoration: none;
        color: #2b72dc;
    }
</style>