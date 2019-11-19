<template>
    <div>
        <router-link to="/shortcuts">Shortcuts</router-link>
        <router-link to="/subscription">Subscription</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "Dashboard",
    }
</script>
<style></style>