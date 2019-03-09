import Vue from 'vue'
import Vuetify from 'vuetify'
// import App from './components/App'
// import 'vuetify/dist/vuetify.min.css'

// new Vue({
  //   render: h => h(App),
  // }).$mount('#app')
Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'md',
})
  
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  // components: {
    //     App
    // }
});
    

// import Vue from 'vue'
// import App from './App.vue'
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })



// import Vue from 'vue';
// import Vuetify from 'vuetify'
// import Hello from './components/Hello';
// import Hello2 from './components/Hello2';
//
//
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     },
//     components: {
//         Hello2
//     }
// });
//
// Vue.use(Vuetify);
