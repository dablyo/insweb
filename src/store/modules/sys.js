import sys from '../../api/sys';

// initial state
const state = {
  sysconf: [],
  appcatagory: [],
  appclassifier: []
}

// actions
const actions = {
  getSysConf(ctx){
    sys.getSysconf( 
      (reponse) => { ctx.commit('getSysConf',reponse) }
    )
  },
  getAppCatagory(ctx){
    sys.getAllAppCatagory(
      (reponse) => { ctx.commit('getAllAppCatagory',reponse) }
    )
  },
  getAllAppClassifier(ctx){
    sys.getAllAppClassifier(
      (reponse) => { ctx.commit('getAllAppClassifier',reponse) }
    )
  }
}

// mutations 
const mutations = {
  getSysconf(state,reponse){
    state.sysconf = reponse.data;
  },
  getAllAppCatagory(state,reponse){
    state.appcatagory = reponse.data;
  },
  getAllAppClassifier(state,reponse){
    state.getAllAppClassifier = reponse.data;
  }
}

export default {
  state,
  actions,
  mutations
}
