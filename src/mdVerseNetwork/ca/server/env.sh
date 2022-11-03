   export CORE_PEER_LOCALMSPID="Org1MSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=/home/miri/Hyper-Ledger/Network-Setup/ChaincodeAPi/src/mdVerseNetwork/organizations/crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
    export CORE_PEER_MSPCONFIGPATH=/home/miri/Hyper-Ledger/Network-Setup/ChaincodeAPi/src/mdVerseNetwork/organizations/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
    export CORE_PEER_ADDRESS=localhost:7051

    export FABRIC_CA_SERVER_HOME=${PWD}
    cp /home/miri/Hyper-Ledger/Network-Setup/ChaincodeAPi/src/mdVerseNetwork/organizations/crypto-config/peerOrganizations/org1.example.com/ca/ca.org1.example.com-cert.pem ${FABRIC_CA_SERVER_HOME}/ca-cert.pem
    cp /home/miri/Hyper-Ledger/Network-Setup/ChaincodeAPi/src/mdVerseNetwork/organizations/crypto-config/peerOrganizations/org1.example.com/ca/priv_sk ${FABRIC_CA_SERVER_HOME}/msp/keystore/.