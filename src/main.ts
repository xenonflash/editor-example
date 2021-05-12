import Vue from 'vue'
import router from './router'
import store from './store'
import '@/css/global.styl'
import '@/css/vue-grid-layout.styl'
import VueGridLayout from 'vue-grid-layout'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.component('grid-layout', VueGridLayout.GridLayout)
Vue.component('grid-item', VueGridLayout.GridItem)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h('router-view')
}).$mount('#app')
