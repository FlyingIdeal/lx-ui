import Vue from 'vue'
import App from './App.vue'

import LxUi from '../package/index.js'

Vue.config.productionTip = false

Vue.use(LxUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
