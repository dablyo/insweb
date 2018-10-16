import axios from 'axios'

export default {
  //租户
  getAllTenant(process){
    return process({ data: [
      {
        tenant_id: "1234",
        name: "CRCC7",
        class: 1,//客户级别, 1-普通,10-金牌客户 20-白金客户
        telephone:"",
        email: "",
        province: "",
        city: "",
        district: "",
        address: "",
        valid_to: "2030-1-1",//当前租户服务的截止日期，一般是缴费决定
        create_at: "",
        update_at: ""
      }
    ]});
  },
  //租户vrf
  getAllTenantVrf(process){
    return process({ data: [
      {
        vrf_id: 0,
        is_used: true,
        tenant_id: 0,
        l3_vnet_id: 4096,
        rd: 0,//路由识别码，用于后续的BGP/EVPN协议
        update_at: ""
      }
    ]});
  },
  //配额
  getAllQuota(process){
    return process({ data: [
      {
        tenant_id: "1234",
        max_devices: 500,
        max_vpn_conns: 10000,
        max_bandwidth: 20
      },
      {
        tenant_id: "1235",
        max_devices: 500,
        max_vpn_conns: 10000,
        max_bandwidth: 10        
      }
    ]});
  },
  //站点
  getAllSite(process){
    return process({ data:[
      {
        siteId:"abcd",
        tenant_id:"1234",
        name: "酱油",
        type: 2,//1-	服务站点，tenant_id=NULL  2-	CPE站点，关联tenant
        nation: "CN",
        province: "JS",
        city: "25",
        district:"",
        addiress:"",
        update_at:""
      },
      {
        siteId:"abce",
        tenant_id:"1234",
        name: "cj_tunnel",
        type: 2,//1-	服务站点，tenant_id=NULL  2-	CPE站点，关联tenant
        nation: "CN",
        province: "JS",
        city: "25",
        district:"",
        addiress:"",
        update_at:""        
      },
      {
        siteId:"abcf",
        tenant_id:null,
        name: "nanjing_west",
        type: 1,//1-	服务站点，tenant_id=NULL  2-	CPE站点，关联tenant
        nation: "CN",
        province: "JS",
        city: "25",
        district:"",
        addiress:"",
        update_at:""        
      },
      {
        siteId:"abc0",
        tenant_id:null,
        name: "changle_road",
        type: 1,//1-	服务站点，tenant_id=NULL  2-	CPE站点，关联tenant
        nation: "CN",
        province: "JS",
        city: "25",
        district:"",
        addiress:"",
        update_at:""          
      }
    ]});
  },
  //设备
  getAllDevices(process){
    return process({ data: [
      {
        deviceId: "5678",
        device_name: "service_node1",
        siteId: "abcf",
        type: 1,//1-服务节点，2-CPE节点
        serial_no: "0",
        cert: "abcdef",
        secure_transport:false,
        user_name: "admin",
        password: "passwd",
        admin_state:0,//0-up, 1-down
        update_at: ""
      },
      {
        deviceId: "5679",
        device_name: "service_node2",
        siteId: "abc0",
        type: 1,//1-服务节点，2-CPE节点
        serial_no: "1",
        cert: "abcdef",
        secure_transport:false,
        user_name: "admin",
        password: "passwd",
        admin_state:0,//0-up, 1-down
        update_at: ""        
      },
      {
        deviceId: "567a",
        device_name: "jiangyou1",
        siteId: "abcd",
        type: 2,//1-服务节点，2-CPE节点
        serial_no: "2",
        cert: "abcdef",
        secure_transport:false,
        user_name: "admin",
        password: "passwd",
        admin_state:0,//0-up, 1-down
        update_at: ""        
      },
      {
        deviceId: "567b",
        device_name: "changjiang1",
        siteId: "abce",
        type: 2,//1-服务节点，2-CPE节点
        serial_no: "2",
        cert: "abcdef",
        secure_transport:false,
        user_name: "admin",
        password: "passwd",
        admin_state:0,//0-up, 1-down
        update_at: ""        
      }      
    ]});
  },
  //服务节点
  getAllServiceNode(process){
    return process({ data: [
      {
        deviceId: "5678",
        descripttion: "",
        public_ip: "8.8.8.8",
        private_ip: "192.168.10.1",
        max_bandwidth: 50,
        allowed_conns: 100
      },
      {
        deviceId: "5679",
        descripttion: "",
        public_ip: "4.4.4.4",
        private_ip: "192.168.11.1",
        max_bandwidth: 50,
        allowed_conns: 100        
      }
    ]});
  },
  
  //端口
  getAllPorts(process){
    return process({ data: [
      {
        device_id: "5678",//service node
        port_id: 0,
        port_name: "p0",
        max_speed: 100000,
        cur_speed: 100000,
        state: 1, //0-up, 1-down
        admin_state: 1,//0-up, 1-down
        port_type: 1, //端口类型, 1-LAN口，2-WAN口，3-VPN逻辑接口，4-VXLAN接口，5-其它
        network_type: 1, //网络类型，1-以太网, 2-WLAN, 3-蜂窝网络
        isFabric: true,
        update_at: ""
      },
      {
        device_id: "5678",//service node
        port_id: 1,
        port_name: "p1",
        max_speed: 100000,
        cur_speed: 100000,
        state: 1, //0-up, 1-down
        admin_state: 1,//0-up, 1-down
        port_type: 1, //端口类型, 1-LAN口，2-WAN口，3-VPN逻辑接口，4-VXLAN接口，5-其它
        network_type: 1, //网络类型，1-以太网, 2-WLAN, 3-蜂窝网络
        isFabric: false,
        update_at: ""        
      },
      {
        device_id: "5679",//service node
        port_id: 0,
        port_name: "p0",
        max_speed: 100000,
        cur_speed: 100000,
        state: 1, //0-up, 1-down
        admin_state: 1,//0-up, 1-down
        port_type: 1, //端口类型, 1-LAN口，2-WAN口，3-VPN逻辑接口，4-VXLAN接口，5-其它
        network_type: 1, //网络类型，1-以太网, 2-WLAN, 3-蜂窝网络
        isFabric: true,
        update_at: ""        
      },
      {
        device_id: "5679",//service node
        port_id: 1,
        port_name: "p1",
        max_speed: 100000,
        cur_speed: 100000,
        state: 1, //0-up, 1-down
        admin_state: 1,//0-up, 1-down
        port_type: 1, //端口类型, 1-LAN口，2-WAN口，3-VPN逻辑接口，4-VXLAN接口，5-其它
        network_type: 1, //网络类型，1-以太网, 2-WLAN, 3-蜂窝网络
        isFabric: false,
        update_at: ""
      },
      {
        device_id: "567a",//cpe node
        port_id: 0,
        port_name: "p0",
        max_speed: 100000,
        cur_speed: 100000,
        state: 1, //0-up, 1-down
        admin_state: 1,//0-up, 1-down
        port_type: 1, //端口类型, 1-LAN口，2-WAN口，3-VPN逻辑接口，4-VXLAN接口，5-其它
        network_type: 1, //网络类型，1-以太网, 2-WLAN, 3-蜂窝网络
        isFabric: false,
        update_at: ""
      },
      {
        device_id: "567a",//cpe node
        port_id: 1,
        port_name: "p1",
        max_speed: 100000,
        cur_speed: 100000,
        state: 1, //0-up, 1-down
        admin_state: 1,//0-up, 1-down
        port_type: 1, //端口类型, 1-LAN口，2-WAN口，3-VPN逻辑接口，4-VXLAN接口，5-其它
        network_type: 1, //网络类型，1-以太网, 2-WLAN, 3-蜂窝网络
        isFabric: false,
        update_at: ""
      },
      {
        device_id: "567b",//cpe node
        port_id: 0,
        port_name: "p0",
        max_speed: 100000,
        cur_speed: 100000,
        state: 1, //0-up, 1-down
        admin_state: 1,//0-up, 1-down
        port_type: 1, //端口类型, 1-LAN口，2-WAN口，3-VPN逻辑接口，4-VXLAN接口，5-其它
        network_type: 1, //网络类型，1-以太网, 2-WLAN, 3-蜂窝网络
        isFabric: false,
        update_at: ""
      },
      {
        device_id: "567b",//cpe node
        port_id: 1,
        port_name: "p1",
        max_speed: 100000,
        cur_speed: 100000,
        state: 1, //0-up, 1-down
        admin_state: 1,//0-up, 1-down
        port_type: 1, //端口类型, 1-LAN口，2-WAN口，3-VPN逻辑接口，4-VXLAN接口，5-其它
        network_type: 1, //网络类型，1-以太网, 2-WLAN, 3-蜂窝网络
        isFabric: false,
        update_at: ""
      }
    ]});
  }
  //隧道
  //接口
  //--------------
  //租户设备接口
  //静态路由
  //设备路由
  //静态arp
  //安全组
  //安全组规则
  //安全组成员
  //租户自定义应用类型
  //租户自定义应用识别
  
}

