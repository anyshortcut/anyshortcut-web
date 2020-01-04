<template>
    <div class="view-padding">
        <ul class="title-ul">
            <li class="title-li">
                <a href="" class="title-a">Shortcuts list</a>
            </li>
        </ul>
        <div class="shortcut-list">
            <div class="">
                <div class="pipe-title">
                    <div>Primary shortcuts</div>
                    <small>total:{{shortcuts.length}}</small></div>
                <ul>
                    <li v-for="shortcut in shortcuts" :key="shortcut.id" class="list-item" @click="ShortcutDetailView(shortcut)">
                        <img :src="shortcut.favicon" alt="" class="shortcut-img">
                        <div class="shortcut-url">
                            <div>{{shortcut.title}}</div>
                            <small>{{ shortcut.url }}</small>
                        </div>
                        <span class="shortcut-key">{{shortcut.key}}</span>
                    </li>
                </ul>
            </div>
            <div class="">
                <div class="pipe-title">
                    <div>Compound shortcuts</div>
                    <small>total:{{compounds.length}}</small>
                </div>
                <div>
                    <ul v-if="compounds.length">
                        <li v-for="(compound,index) in compounds" :key="index" class="list-item" @click="ShortcutDetailView(compound)">
                            <img :src="compound.favicon" alt="" class="shortcut-img">
                            <div class="shortcut-url">
                                <div>{{compound.title}}</div>
                                <small>{{compound.url}}</small>
                            </div>
                            <span class="shortcut-key">{{compound.key}}</span>
                        </li>
                    </ul>
                    <div v-else>
                        <img src="" alt="">
                        <small>No compound shortcut bound yet.</small>
                    </div>
                </div>
            </div>
        </div>
        <ShortcutDetail v-if="view" :ww="Data" v-on:shortcut-modal-close="close"></ShortcutDetail>
    </div>
</template>
<script>
    import client from "../client";
    import ShortcutDetail from "./detail.vue";

    export default {
        name: "Shortcut",
        data() {
            return {
                shortcuts: [],
                compounds: '',
                view:false,
                Data:''
            }
        },
        components: {
            ShortcutDetail,
        },
        methods:{
            ShortcutDetailView(shortcut){
                this.view= true;
                this.Data = shortcut;
            },
            close(){
                this.view = false
            }
        },
        created() {
            client.getShortcuts().then(response => {
                this.shortcuts = response
            }).catch(error => {
                alert(error)
            });
            client.getCompound().then(response => {
                this.compounds = response
            }).catch(error => {
                alert(error)
            })
            // let response = await fetch("https://api.anyshortcut.com/shortcuts?type=primary&nested=false", {
            //     credentials: 'include',
            // });
            // this.shortcuts = (await response.json()).data;
            // let compound_response = await fetch("https://api.anyshortcut.com/shortcuts?type=compound&nested=false", {
            //     credentials: 'include',
            // });
            // this.compound = (await compound_response.json()).data;
        }
    }
</script>
<style scoped>
    .view-padding {
        padding: 30px 30px 0;
    }

    .title-ul {
        margin: 0;
        padding: 0;
    }

    .title-li {
        list-style: none;
        border-bottom: 1px solid #ececec;
        padding-bottom: 8px
    }

    .title-a {
        margin: 0;
        text-decoration: none;
        border-bottom: 2px solid;
        padding-bottom: 7px;
        color: #1c2833;
        font-weight: 500;
    }

    .shortcut-list {
        padding: 30px 0;
        /*width: 46%;*/
        display: flex;
        justify-content: space-between;
    }

    .shortcut-list > div {
        margin-bottom: 15px;
        width: 46%;
    }

    .pipe-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-left: 5px solid #000000;
        padding: 0 10px;
        margin-bottom: 15px;
    }

    .pipe-title > div {
        font-size: 22px;
    }

    .pipe-title > small {
        font-size: 17px;
        color: #999999;
    }

    .list-item {
        list-style: none;
        /*background-color: #ececec;*/
        display: flex;
        flex-flow: nowrap;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #f4f4f4;
    }

    .list-item:last-child {
        border-bottom: 0px;
    }

    .list-item:hover {
        background-color: #f4f4f4;
    }

    .shortcut-key {
        font-size: 14px;
        padding: 3px 12px;
        border-radius: 3px;
        background-color: black;
        margin: 0 5px 0 auto;
        color: white;
    }

    .shortcut-img {
        width: 42px;
        height: 42px;
    }

    .shortcut-url {
        margin-left: 25px;
        overflow: hidden;
    }

    .shortcut-url > div {
        font-size: 18px;
        font-weight: 500;
        color: #555555;
    }

    .shortcut-url > small {
        padding: 5px 0;
        font-size: 14px;
        color: #999999;
    }
</style>