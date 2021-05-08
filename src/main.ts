import Vue from 'vue'
import router from './router'
import store from './store'
import '@/css/global.styl'
import '@/css/vue-grid-layout.styl'
import VueGridLayout from 'vue-grid-layout'

Vue.config.productionTip = false
Vue.component('grid-layout', VueGridLayout.GridLayout)
Vue.component('grid-item', VueGridLayout.GridItem)

new Vue({
  router,
  store,
  render: h => h('router-view')
}).$mount('#app')
