import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router'
import LoginRoute from './components/Login.vue';
import NotFoundRoute from './components/NotFound.vue';
import ShortcutRoute from './components/Shortcuts';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/login", component: LoginRoute},
        {path: "/shortcuts", component: ShortcutRoute},
        {path: "*", component: NotFoundRoute},
    ],
});

new Vue({
    router,
    render: function(createElement) {
        return createElement(App);
    },
}).$mount('#app');
