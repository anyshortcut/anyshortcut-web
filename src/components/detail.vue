<template>
    <div class="detail-modal" @click="$emit('shortcut-modal-close')">
        <div class="detail-container" @click="$event.stopPropagation()">
            <div class="left">
                <div class="left-top">
                    <img :src="ww.favicon" alt="">
                    <div class="left-title">
                        <a :href="ww.url" class="left-href">
                            <h1>{{ww.title}}</h1>
                            <small>{{ww.url}}</small>
                        </a>
                    </div>
                    <div class="left-text">linked with<span>ALT+{{ww.key}}</span></div>
                    
                </div>
                <div>
                </div>
            </div>
            <div class="right">
                <div class="right-title">
                    <div>Secondary shortcut list</div>
                    <div class="right-x" @click="$emit('shortcut-modal-close')">X</div>
                </div>
                <!-- <ul v-if="detas.length !== 0">
                    <li v-for="(deta,index) in detas" :key="index">
                        <img :src="deta.favicon" alt="" class="shortcut-img">
                        <div class="shortcut-url">
                            <div>{{deta.title}}</div>
                            <small>{{ deta.url }}</small>
                        </div>
                        <span class="shortcut-key">{{deta.key}}</span>
                    </li>
                </ul> -->
                <listCard :ee="detas" @ShortcutDetail="shy">
                    
                </listCard>
            
            </div>
        </div>
    </div>
</template>

<script>
import listCard from "./list"

    export default {
        name: "ShortcutDetail",
        data() {
            return {
                detas: '',
            }
        },
        components:{
            listCard
        },
        props: ['ww'],
        async created() {
           let response = await fetch(`https://api.anyshortcut.com/shortcut/${this.ww.id}/secondaries`,{
               credentials: 'include'
           });
           this.detas = (await response.json()).data;
        },
        methods: {
            shy(item) {
                window.open(item.url)
            }
        }
    }
</script>

<style scoped>
    .detail-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .detail-container {
        /*background-color: white;  */
        width: 800px;
        height: 500px;
        /*position: relative;*/
        /*margin: auto;*/
        border-radius: 4px;
        box-shadow: 4px 4px 21px 1px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-wrap: nowrap;
    }

    .left {
        width: 50%;
        height: 100%;
        background-color: white;
        border-right: 1px solid #ececec;
        border-radius: 4px 0 0 4px;
    }

    .left-top {
        padding: 20px 20px 0;
        white-space: nowrap;
    }

    .left-top > img {
        width: 42px;
        height: 42px;
        display: inline-block;
    }

    .left-title {
        display: inline-block;
        max-width: 315px;
        margin-left: 10px;
        overflow: hidden;
    }

    .left-href {
        text-decoration: none;
    }

    .left-href > h1 {
        font-size: 22px;
        margin: 0;
    }

    .left-text {
        text-align: center;
        font-size: 17px;
        margin-top: 15px;
        margin-bottom: 5px;
        letter-spacing: 1px;
    }

    .left-text > span {
        padding: 2px 10px;
        background-color: black;
        border-radius: 2px;
        margin-left: 6px;
    }

    .right {
        width: 50%;
        height: 100%;
        background-color: #fefefe;
        border-radius: 0 4px 4px 0;
    }

    .right-title {
        padding: 15px;
        border-bottom: 1px solid;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .right-x {
        padding: 0 10px;
    }

    li {
        list-style: none;
    }
</style>