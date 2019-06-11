import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase'
import Vuetify from 'vuetify';

Vue.use(Vuetify);

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

new Vue({
  render: h => h(App)
}).$mount('#app')
