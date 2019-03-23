# insweb

> inswebclient

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
-------需要在stackoverflow上提问的内容---------------
i'm using fabric sample project 'basic network' as implementary enviroment, to develop chaincode and nodejs client app(REST API) base on fabric node client sdk, the node app resident in same host with fabric peer.
while all the docker container(ca,orderer,peer,couchdb,client) in one host, i've succeed in creating and joining channel, installing and instantiating chaincode, so with nodejs client, the query and invoke function performed succeessfully. the connection.json file are copy from basic network sample.
when i've moved the orderer container to another host, modified the container docker-compose yaml file, and the connection.json, the operation result in client container doesn't changed, they are all OK, the nodejs client app query oepration can proceed but the invoke(insert and modify) failed,the log is:

2019-03-23T03:32:38.769Z - debug: [Remote.js]: getUrl::grpc://192.168.122.6:7050
2019-03-23T03:32:38.769Z - error: [Remote.js]: Error: Failed to connect before the deadline URL:grpc://192.168.122.6:7050
2019-03-23T03:32:38.770Z - error: [Remote.js]: Error: Failed to connect before the deadline URL:grpc://192.168.122.6:7050
2019-03-23T03:32:38.772Z - debug: [Remote.js]: getUrl::grpc://192.168.122.6:7050
2019-03-23T03:32:38.772Z - error: [Orderer.js]: Orderer grpc://192.168.122.6:7050 has an error Error: Failed to connect before the deadline URL:grpc://192.168.122.6:7050 
2019-03-23T03:32:38.772Z - error: [Orderer.js]: Orderer grpc://192.168.122.6:7050 has an error Error: Failed to connect before the deadline URL:grpc://192.168.122.6:7050 

here,the '192.168.122.6' is the host which the orderer container resident in. below is the connection.json file used by nodejs app, i've turned off the tls between orderer and peer:
{
    "name": "basic-network",
    "version": "1.0.0",
    "client": {
        "organization": "Org1",
        "connection": {
            "timeout": {
                "peer": {
                    "endorser": "300"
                },
                "orderer": "300"
            }
        }
    },
    "channels": {
        "mychannel": {
            "orderers": [
                "orderer.example.com"
            ],
            "peers": {
                "peer0.org1.example.com": {}
            }
        }
    },
    "organizations": {
        "Org1": {
            "mspid": "Org1MSP",
            "peers": [
                "peer0.org1.example.com"
            ],
            "certificateAuthorities": [
                "ca.example.com"
            ]
        }
    },
    "orderers": {
        "orderer.example.com": {
            "url": "grpc://192.168.122.6:7050"
        }
    },
    "peers": {
        "peer0.org1.example.com": {
            "url": "grpc://127.0.0.1:7051"
        }
    },
    "certificateAuthorities": {
        "ca.example.com": {
            "url": "http://127.0.0.1:7054",
            "caName": "ca.example.com"
        }
    }
}

i guess,there is something wrong in connection.json,but i don't know which is.
below is the content about orderer and peer in docker-compose.yaml:
  orderer.example.com:
    container_name: orderer.example.com
    image: hyperledger/fabric-orderer
    environment:
      - CORE_VM_DOCKER_HOSTCONFIG_NETWORKMODE=net_basic
      - ORDERER_GENERAL_LOGLEVEL=info
      - FABRIC_LOGGING_SPEC=info
      - ORDERER_GENERAL_LISTENADDRESS=0.0.0.0
      - ORDERER_GENERAL_GENESISMETHOD=file
      - ORDERER_GENERAL_GENESISFILE=/etc/hyperledger/configtx/genesis.block
      - ORDERER_GENERAL_LOCALMSPID=OrdererMSP
      - ORDERER_GENERAL_LOCALMSPDIR=/etc/hyperledger/msp/orderer/msp
      - ORDERER_GENERAL_TLS_ENABLED=false
    working_dir: /opt/gopath/src/github.com/hyperledger/fabric/orderer
    command: orderer
    ports:
      - 7050:7050
    volumes:
        - ./config/:/etc/hyperledger/configtx
        - ./crypto-config/ordererOrganizations/example.com/orderers/orderer.example.com/:/etc/hyperledger/msp/orderer
        - ./crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/:/etc/hyperledger/msp/peerOrg1
    networks:
      - basic
  peer0.org1.example.com:
    container_name: peer0.org1.example.com
    image: hyperledger/fabric-peer
    environment:
      - CORE_LEDGER_STATE_STATEDATABASE=CouchDB
      - CORE_LEDGER_STATE_COUCHDBCONFIG_COUCHDBADDRESS=couchdb:5984

      - CORE_PEER_NETWORKID=basic
      - CORE_PEER_ID=peer0.org1.example.com
      - CORE_PEER_ADDRESS=peer0.org1.example.com:7051
      - CORE_PEER_CHAINCODEADDRESS=peer0.org1.example.com:7052
      - CORE_PEER_CHAINCODELISTENADDRESS=0.0.0.0:7052

      - CORE_PEER_GOSSIP_BOOTSTRAP=peer0.org1.zte.com:7051
      - CORE_PEER_GOSSIP_EXTERNALENDPOINT=peer0.org1.zte.com:7051
      - CORE_PEER_LOCALMSPID=Org1MSP

      - CORE_VM_ENDPOINT=unix:///host/var/run/docker.sock
      #  the following setting starts chaincode containers on the same
      #  bridge network as the peers
      #  https://docs.docker.com/compose/networking/
      - CORE_VM_DOCKER_HOSTCONFIG_NETWORKMODE=net_basic
      - FABRIC_LOGGING_SPEC=debug
      - CORE_CHAINCODE_LOGGING_LEVEL=debug
      - CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/peer/
      # The CORE_LEDGER_STATE_COUCHDBCONFIG_USERNAME and CORE_LEDGER_STATE_COUCHDBCONFIG_PASSWORD
      # provide the credentials for ledger to connect to CouchDB.  The username and password must
      # match the username and password set for the associated CouchDB.
      - CORE_LEDGER_STATE_COUCHDBCONFIG_USERNAME=
      - CORE_LEDGER_STATE_COUCHDBCONFIG_PASSWORD=
      - CORE_PEER_TLS_ENABLED=false
      - CORE_PEER_GOSSIP_SKIPHANDSHAKE=true
      - CORE_PEER_GOSSIP_USELEADERELECTION=true
      - CORE_PEER_GOSSIP_ORGLEADER=false
      - CORE_PEER_PROFILE_ENABLED=false
    working_dir: /opt/gopath/src/github.com/hyperledger/fabric
    command: peer node start
    # command: peer node start --peer-chaincodedev=true
    ports:
      - 7051:7051
      - 7052:7052
      - 7053:7053
    volumes:
        - /var/run/:/host/var/run/
        - ./crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/msp:/etc/hyperledger/msp/peer
        - ./crypto-config/peerOrganizations/org1.example.com/users:/etc/hyperledger/msp/users
        - ./config:/etc/hyperledger/configtx
    depends_on:
    #  - orderer.example.com
      - couchdb
    networks:
      - basic
    extra_hosts:
      - "orderer.example.com:192.168.122.6"
      - "peer0.org1.example.com:127.0.0.1"
