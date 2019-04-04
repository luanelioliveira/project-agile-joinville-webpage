import Vue from 'vue'
import Vuex from 'vuex'
import Authentication from "./modules/Authentication";
import Application from "./modules/Application";
import * as firebase from 'firebase'

Vue.use(Vuex)

const modules = {
  Authentication,
  Application
}

export default new Vuex.Store({
  namespace: true,
  modules
});