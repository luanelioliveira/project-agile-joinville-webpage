import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyAjK3pt8BR68MNIe50YAyQp_DP9dWtB83o",
  authDomain: "agile-joinville.firebaseapp.com",
  databaseURL: "https://agile-joinville.firebaseio.com",
  projectId: "agile-joinville",
  storageBucket: "agile-joinville.appspot.com",
  messagingSenderId: "223548854697"
};

firebase.initializeApp(config);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
