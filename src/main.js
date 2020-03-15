import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router'
import LoginRoute from './components/Account/Login.vue';
import NotFoundRoute from './components/Account/NotFound.vue';
import DashboardRoute from './components/Account/Dashboard';
import ShortcutRoute from './components/Account/Shortcuts.vue';
import SubscriptionRoute from './components/Account/Subscription.vue';
import ProfileRoute from './components/Account/Profile.vue';
import SubscriptionA from './components/Account/Subscription-A'
import Payment from './components/Account/PaymentMethod'
import Redeem from './components/Account/Redeem'
import Cookies from "js-cookie";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    // linkActiveClass:"active", 
    routes: [
        {path: "/login", component: LoginRoute
        },
        {
          path: '/',
          component: () => import('./components/Index/Index'),
          meta:{ title:'首页'}
        },
        {
          path: '/pricing',
          component: () => import('./components/Pricing/Pricing'),
          meta:{title:'pricing'}
        },
        {
          path: '/faq',
          component: () => import('./components/FAQ/FAQ'),
          meta:{title:'faq'}
        },
        {
          path: '/contact',
          component: () => import('./components/Contact/Contact'),
          meta:{title:'contact'}
        },
        {
          path:'/terms',
          component: () => import('./components/extra/Terms of service'),
          meta:{title:'terms'}
        },
        {
          path:'/privacy',
          component: () => import('./components/extra/Privacy policy'),
          meta:{title:'privacy'}
        },
        {
            path: "/account",
            component: DashboardRoute,
            meta:{
                // authRequired: true,
                title:'account'
            },
            children: [
                {path: "",name:'shortcuts', component: ShortcutRoute},
                {path: "shortcuts", name: 'shortcuts', component: ShortcutRoute},
                {
                    path: "subscription", component: SubscriptionRoute, children: [
                        {path: "", name: 'sub', component: SubscriptionA},
                        {path: "PaymentMethod", name: 'pay', component: Payment},
                        {path:"Redeem",name:'Rdm',component:Redeem}
                    ]
                },
                {path: "profile", component: ProfileRoute},
            ]
        },
        {path: "*", component: NotFoundRoute,meta:{title:'Page Not Found'}},
    ],
});

//页面之间跳转，打开新的一个页面显示在顶部
// router.afterEach((to, from, next) => {
//  next(window.scrollTo(0, 0))
// })

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)
        && !Cookies.get("loginAt")) {
        next({
            path: "/login",
        });
    } else {
        next(window.scrollTo(0, 0));
    }
    if (to.meta.title){
      document.title = to.meta.title;
    }
    // next(window.scrollTo(0, 0));
});

new Vue({
    router,
    render: function(createElement) {
        return createElement(App);
    },
}).$mount('#app');
