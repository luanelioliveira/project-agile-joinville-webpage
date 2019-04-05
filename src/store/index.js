import Vue from 'vue'
import Vuex from 'vuex'
import Authentication from "./modules/Authentication";
import Application from "./modules/Application";
import Sponsors from "./modules/Sponsors";

Vue.use(Vuex)

const modules = {
  Authentication,
  Application,
  Sponsors
}

export default new Vuex.Store({
  namespace: true,
  modules
});