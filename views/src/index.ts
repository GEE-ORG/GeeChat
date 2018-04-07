import Vue from 'vue';
import App from './App.vue';

import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'http://socketserver.com:1923');

new Vue({
    render: h => h(App as any)
}).$mount('main');