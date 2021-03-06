import Vue from 'vue'
import Router from 'vue-router'
import conf_frame from '@/components/mFrameConf.vue'
import sta_frame from '@/components/mFrameStatistics.vue'

Vue.use(Router)

const Routes = [
  {
    path: '/conf',
    name: 'configure',
    component: conf_frame
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: sta_frame
  },
  {
    path: '*',
    name: 'default',
    component: conf_frame
  }
];
const RouterConfig = {
  mode: 'history',
  routes: Routes
};
export default new Router(RouterConfig);
