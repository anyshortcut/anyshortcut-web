<template>
    <div class="subtitle">
        <ul class="subView">
            <li><router-link :to="{name:'sub'}" :class="['title']">Subscription</router-link></li>
            <li><router-link :to="{name:'pay'}" :class="['title']">Payment method</router-link></li>
            <li><router-link :to="{name:'Rdm'}" :class="['title']">Redeem</router-link></li>
        </ul>
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: "Subscription",
        data() {
            return {
                a:'d',
                b:''
            }
        },
        methods:{
            w(){
                alert('dsada')
            }
        }
    }
</script>
<style scoped lang="scss">
    .subtitle {
        padding: 30px 30px 0;
    }
    .subView {
        border-bottom: 1px solid #999999;
        padding:0 0 8px;
        margin: 0;
        display: flex;
    }
    .title {
        text-decoration: none;
        margin-right: 35px;
        color: #637282;
        /*padding-right: 35px;*/
        /*color: #1c2833;*/
        /*font-size: 16px;*/
    }
    li {
        list-style: none;
        a{
            padding-bottom: 7px;
            &.router-link-exact-active {
                color:#2b72dc;
                border-bottom: 1px solid;
            }
        }
    }
</style>