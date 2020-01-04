<template>
     <div>
         <ul>
             <li v-for="item in ee" :key="item.id" class="listCard" @click="$emit('ShortcutDetail',item)">
                    <img :src="item.favicon" alt="" class="list-img">
                    <div class="list-centent">
                        <div>{{item.title}}</div>
                        <small>{{ item.url }}</small>
                    </div>
                    <span class="list-key">
                        {{item.key}}
                    </span>
             </li>
         </ul>
     </div>
</template>

<script>
export default {
    name:"listCard",
    props:['ee']
}
</script>

<style scoped lang='scss'>
    .listCard {
        list-style: none;
        display: flex;
        flex-flow: nowrap;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #f4f4f4;
    }
    .listCard:last-child {
        border-bottom: 0px
    }
    .list-img {
        width: 42px;
        height: 42px;
    }
    .list-centent {
        margin-left: 25px;
        overflow: hidden;
    }
    .list-centent>div {
        font-size: 18px;
        font-weight: 500;
        color: #555555;
    }
    .list-centent>small {
        padding: 5px 0;
        font-size: 14px;
        color: #999999;
    }
    .list-key {
        font-size: 14px;
        padding: 3px 12px;
        border-radius: 3px;
        background-color: black;
        margin: 0 5px 0 auto;
        color: white;
    }
</style>