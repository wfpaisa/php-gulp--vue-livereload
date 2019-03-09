define(["vue", "vuetify"], function (_vue, _vuetify) {
  "use strict";

  _vue = _interopRequireDefault(_vue);
  _vuetify = _interopRequireDefault(_vuetify);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // import App from './components/App'
  // import 'vuetify/dist/vuetify.min.css'
  // new Vue({
  //   render: h => h(App),
  // }).$mount('#app')
  _vue.default.config.productionTip = false;

  _vue.default.use(_vuetify.default, {
    iconfont: 'md'
  });

  new _vue.default({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    } // components: {
    //     App
    // }

  }); // import Vue from 'vue'
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
});