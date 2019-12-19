import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router'
import LoginRoute from './components/Login.vue';
import NotFoundRoute from './components/NotFound.vue';
import DashboardRoute from './components/Dashboard';
import ShortcutRoute from './components/Shortcuts.vue';
import SubscriptionRoute from './components/Subscription.vue';
import ProfileRoute from './components/Profile.vue';
import SubscriptionA from './components/Subscription-A'
import Payment from './components/PaymentMethod'
import Redeem from './components/Redeem'
import Cookies from "js-cookie";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    linkActiveClass:"active",
    routes: [
        {path: "/login", component: LoginRoute},
        {
            path: "/",
            component: DashboardRoute,
            meta: {
                authRequired: true,
            },
            children: [
                {path: "", component: ShortcutRoute},
                {path: "shortcuts", name: 'shortcuts', component: ShortcutRoute},
                {
                    path: "subscription", component: SubscriptionRoute, children: [
                        {path:'',component:SubscriptionA},
                        {path: "sub", name: 'sub', component: SubscriptionA},
                        {path: "PaymentMethod", name: 'pay', component: Payment},
                        {path:"Redeem",name:'Rdm',component:Redeem}
                    ]
                },
                {path: "profile", component: ProfileRoute},
            ]
        },
        {path: "*", component: NotFoundRoute},
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)
        && !Cookies.get("loginAt")) {
        next({
            path: "/login",
            query: {
                redirect: to.fullPath,
            }
        });
    } else {
        next();
    }
});

new Vue({
    router,
    render: function(createElement) {
        return createElement(App);
    },
}).$mount('#app');
