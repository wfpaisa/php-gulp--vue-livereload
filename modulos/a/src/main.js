import Vue from 'vue'
import './plugins/vuetify'
import App from './App'


Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App)
})
