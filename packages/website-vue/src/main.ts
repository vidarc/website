import typography from '@mattailes/typography'
import { defineCustomElements } from '@mattailes/ui/dist/loader'
import Vue from 'vue'

import '@mattailes/ui/www/build/mattailes.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/ma-\w*/]

typography.injectStyles()
defineCustomElements(window)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
