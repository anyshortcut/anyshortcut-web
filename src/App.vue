<template>
    <div id="app">
        <router-view></router-view>
        
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }
    p{
        padding: 0;
        margin: 0;
    }
    ul {
        padding: 0;
        margin: 0;
    }
    *{
        box-sizing: inherit;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /* text-align: center; */
        color: #2c3e50;
    }
</style>
