import Vue from 'vue'
import Vuex from 'vuex'
import Authentication from "./modules/Authentication";
import Application from "./modules/Application";
import Sponsors from "./modules/Sponsors";
import Jobs from "./modules/Jobs";

Vue.use(Vuex)

const modules = {
  Authentication,
  Application,
  Sponsors,
  Jobs
}

export default new Vuex.Store({
  namespace: true,
  modules
});