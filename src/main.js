import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router'
import LoginRoute from './components/Login.vue';
import NotFoundRoute from './components/NotFound.vue';
import DashboardRoute from './components/Dashboard';
import ShortcutRoute from './components/Shortcuts.vue';
import SubscriptionRoute from './components/Subscription.vue';
import ProfileRoute from './components/Profile.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/login", component: LoginRoute},
        {
            path: "/",
            component: DashboardRoute,
            children: [
                {path: "", component: ShortcutRoute},
                {path: "shortcuts", name: 'shortcuts', component: ShortcutRoute},
                {path: "subscription", component: SubscriptionRoute},
                {path: "profile", component: ProfileRoute},
            ]
        },
        {path: "*", component: NotFoundRoute},
    ],
});

new Vue({
    router,
    render: function(createElement) {
        return createElement(App);
    },
}).$mount('#app');
