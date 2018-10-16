import axios from 'axios'

export default {
  //2211系统配置表
  getSysconf(process){
    return process({data: {
      sysmac: "F0:DE:F1:C8:98:01",
      max_devices: "500",
      default_vnet_start: "4096",
      default_vnet_end: "8192"
    }});
  },
  updateSysConf(conf){

  },
  //默认配额
  //2.2.1.15全局应用类型
  getAllAppCatagory(process){
    return process({data: [
      {
        appCatId: 0, 
        name: "qq",
        desciption: "instant message",
        def_priority: 3,//缺省优先级, 1-低,2-中, 3-高
        update_at: ""
      },
      {
        appCatId: 1,
        name: "web bank",
        desciption: "web or app bank",
        def_priority: 3,
        update_at: ""
      },
      {
        appCatId: 2,
        name: "iptv",
        desciption: "stream media from ct",
        def_priority: 1,
        update_at: ""
      }
    ]});
  },
  updateAppCatagory(appcat){

  },
  deleteAppCatagory(appcat){

  },
  addAppCatagory(appcat){

  },
  //2.2.1.16全局应用识别
  getAllAppClassifier(process){
    return process({data:[
      {
        appId: 0,
        classifier_type: 0, //0-目的端口，1-目的ip地址段,2-域名
        ip_proto: 6, //应用协议类型,1-ICMP, 6-TCP,17-UDP
        tp_port_start: 0,
        tp_port_end: 0,
        fqdn: 0,
        appCatId: 0
      },
      {
        appId: 1,
        classifier_type: 1, //0-目的端口，1-目的ip地址段,2-域名
        ip_proto: 6, //应用协议类型,1-ICMP, 6-TCP,17-UDP
        tp_port_start: 0,
        tp_port_end: 0,
        fqdn: 0,
        appCatId: 0        
      }
    ]});
  }
/*  addUser (user, cb) {
    axios.post(`/api/users/`, user).then(response => {
      cb(response)
    }).catch(err => {
      cb(err)
    })
  },
  updateUser (user, cb) {
    axios.put(`/api/users/`, user).then(response => {
      cb(response)
    }).catch(err => {
      cb(err)
    })
  }*/
}
