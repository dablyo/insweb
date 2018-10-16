import Vue from 'vue';
import Vuex from 'vuex';
import resources from './modules/resources';
import sys from './modules/sys';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: { 
      resModule: resources,
      sysModule: sys
      //usersModule: users
    },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});