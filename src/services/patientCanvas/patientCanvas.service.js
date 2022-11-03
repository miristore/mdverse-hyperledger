// const keccak256 = require('keccak256');
const keccak = require('keccak256');
const contractInfo = require('../../mdVerseNetwork/networkConfig/getContractInfo');


const getPatientInfo = async(data)=>
{
    try{
        const {contract,gateway} =  await contractInfo();
        const result = await contract.evaluateTransaction('getPatientObject',data.patientId.toString());
        await gateway.disconnect();
        return JSON.parse(result);
    }
    catch(ex)
    {
        console.log(ex)
    }
} 

const savePatientInfo = async(data)=>
{
    try
    {   
        const {contract,gateway} =  await contractInfo();
        const patientHash  = keccak(JSON.stringify(data.patientData)).toString('hex');
        const result = await contract.submitTransaction('AddPatient', data.patientId,patientHash);
        await gateway.disconnect();
        return "Patient Info Added Successfully"
    }
    catch(ex)
    {
        console.log(ex)
    }
} 

const addCondition = async(data)=>
{
    try
    {   
        const {contract,gateway} =  await contractInfo();
        const allConditionsHash  = keccak(JSON.stringify(data.conditions)).toString('hex');
        const newConditionHash  = keccak(JSON.stringify(data.condition)).toString('hex');
        await contract.submitTransaction('addCondition',data.patientId,allConditionsHash,data.conditionId, newConditionHash);
        await gateway.disconnect();
        return "Addedd Successfully";
    }
    catch(ex)
    {
        console.log(ex)
    }
}

module.exports = {
    getPatientInfo_Service : getPatientInfo,
    savePatientInfo_Service : savePatientInfo,
    addCondition_Service : addCondition,

}