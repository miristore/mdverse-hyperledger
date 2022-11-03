/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Gateway, Wallets,DefaultEventHandlerStrategies } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const getContractInfo = async()=>{
    try {
        // load the network configuration
      //  console.log(process.cwd(),"process.cwd()")
        //const ccpPath = path.resolve(__dirname, './connection-org2.yaml', 'crypto-config' ,'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        const ccpPath = path.resolve(__dirname, 'connection-org2.yaml');
        //let ccp =   JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
        //let connectionProfile = yaml.load(fs.readFileSync('./connection-org2.yaml', 'utf8'));
        let connectionProfile = yaml.load(fs.readFileSync(ccpPath, 'utf8'));
        // Create a new file system based wallet for managing identities.
        //const walletPath = path.join(process.cwd(),'src', 'wallet');
        const walletPath = path.resolve(__dirname, 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);
        let userName = "appUser20";

        let connectionOptions = {
            identity: userName,
            wallet: wallet,
            discovery: { enabled:true, asLocalhost: true }
        };
        const gateway = new Gateway();
        await gateway.connect(connectionProfile, connectionOptions);
        // Check to see if we've already enrolled the user.
        //const identity = await wallet.get('appUser17');
       /* if (!identity) {
            console.log('An identity for the user "appUser16" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }*/

        // Create a new gateway for connecting to our peer node.
        //const gateway = new Gateway();
        //await gateway.connect(ccp, { wallet, identity: 'appUser17', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mdversechannel');

        // Get the contract from the network.
        const contract = network.getContract('fabcar');
        //const result = await contract.evaluateTransaction("getPatientObject","12345");
        //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        // Submit the specified transaction.
        //createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
        // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR12', 'Dave')
        
        //await contract.submitTransaction("AddPatient","1234567","abc123456789" );
        //await contract.submitTransaction('changeCarOwner', 'CAR9','Vijay')
        //console.log('Transaction has been submitted');

        // Disconnect from the gateway.
        //await gateway.disconnect();

        return {
            contract :  contract,
            gateway : gateway
        }

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}
module.exports = getContractInfo
