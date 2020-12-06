import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import VueRippler from 'vue-rippler'
import clipboard from "clipboard";

import LongPress from '@/libs/LongPress'
import "@/libs/BabelImportMuseUI"

Vue.use(VueRippler)
Vue.use(LongPress, {time: 1000})

Vue.config.productionTip = false
Vue.prototype.clipboard = clipboard

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
