import resources from '../../api/resources';

// initial state
const state = {
  tenants: [],
  tenantvrfs: [],
  qutas: [],
  sites: [],
  devices: [],
  servicenodes: [],
  ports: []
}

// actions
const actions = {
  getTenants(ctx){
    resources.getAllTenant( 
      (reponse) => { ctx.commit('getTenants',reponse) }
    )
  },
  getTenantVrfs(ctx){
    resources.getAllTenantVrf(
      (reponse) => { ctx.commit('getTenantVrfs',reponse) }
    )
  },
  getSites(ctx){
    resources.getAllSite(
      (reponse) => { ctx.commit('getSites',reponse) }
    )
  },
  getDevices(ctx){
    resources.getAllDevices(
      (reponse) => { ctx.commit('getDevices',reponse) }
    )
  },
  getServiceNodes(ctx){
    resources.getAllServiceNode(
      (reponse) => {ctx.commit('getServiceNodes',reponse) }
    )
  }
}

// mutations 
const mutations = {
  getTenants(state,reponse){
    state.tenants = reponse.data;
  },
  getTenantVrfs(state,reponse){
    state.tenantvrfs = reponse.data;
  },
  getSites(state,reponse){
    state.sites = reponse.data;
  },
  getDevices(state,reponse){
    state.devices = reponse.data;
  },
  getServiceNodes(reponse){
    state.servicenodes = reponse.data;
  }
}

export default {
  state,
  actions,
  mutations
}
