import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';

import MainApp from './MainApp';
import RouteData from './routes';
import store from './store';
import {authenticate} from './helpers/Authentication';
import {restoreSession} from './helpers/RestoreSession';
import formComponents from './helpers/formComponents';
import helperMixin from './mixins/helperMixin';

Vue.prototype.format = 'HH:mm, DD-MM-YYYY';

var dayjs = require('dayjs')

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(formComponents);

window.events = new Vue({});
window.axios  = require('axios');

Vue.prototype.events = window.events;
Vue.prototype.dayjs  = dayjs;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const router = new VueRouter(RouteData);

Vue.mixin(helperMixin);

restoreSession(store, router);
authenticate(store, router);

new Vue({
    el         : '#app',
    store,
    router,
    components : {
        MainApp
    }
});
