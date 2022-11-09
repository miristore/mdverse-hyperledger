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
        //const newConditionHash  = keccak(JSON.stringify(data.condition)).toString('hex');
        await contract.submitTransaction('addCondition',data.patientId,allConditionsHash);
        await gateway.disconnect();
        return "Addedd Successfully";
    }
    catch(ex)
    {
        console.log(ex)
    }
}
// This function is used to get the patient history using key
const getPatientHistory = async (data) => {
    try{
        const {contract,gateway} =  await contractInfo();
        const result = await contract.submitTransaction('getPatientHistory',data.patientId);
        await gateway.disconnect();
        return JSON.parse(result.toString());
    }
    catch(ex)
    {
        console.log(ex)
    }

}

// This function is used to get the patient history using key
const addEncounter = async (data) => {
    try{
        const {contract,gateway} =  await contractInfo();
        const allEncountersHash  = keccak(JSON.stringify(data.encounters)).toString('hex');
        const result = await contract.submitTransaction('addEncounter',data.patientId, allEncountersHash);
        await gateway.disconnect();
        return "Encounter Added Successfully"
    }
    catch(ex)
    {
        console.log(ex)
    }
}

// This function is used to get the patient history using key
const addCareplan = async (data) => {
    try{
        const {contract,gateway} =  await contractInfo();
        const allCareplansHash  = keccak(JSON.stringify(data.careplans)).toString('hex');
        const result = await contract.submitTransaction('addCarePlan',data.patientId, allCareplansHash);
        await gateway.disconnect();
        return "Care plane Added Successfully"
    }
    catch(ex)
    {
        console.log(ex)
    }

    
}

// This function is used to get the patient history using key
const addMedication = async (data) => {
    try{
        const {contract,gateway} =  await contractInfo();
        const allMedicationsHash  = keccak(JSON.stringify(data.medications)).toString('hex');
        const result = await contract.submitTransaction('addMedication',data.patientId, allMedicationsHash);
        await gateway.disconnect();
        return "Medication Added Successfully"
    }
    catch(ex)
    {
        console.log(ex)
    }
}

// This function is used to get the patient history using key
const addDevices = async (data) => {
   try{
    const {contract,gateway} =  await contractInfo();
    const allDevicesHash  = keccak(JSON.stringify(data.devices)).toString('hex');
    const result = await contract.submitTransaction('addDevice',data.patientId, allDevicesHash);
    await gateway.disconnect();
    return "Devices Added Successfully"
   }
   catch(ex)
   {
       console.log(ex)
   }
}

// This function is used to get the patient history using key
const addProcedures = async (data) => {
    try{
        const {contract,gateway} =  await contractInfo();
        const allProceduresHash  = keccak(JSON.stringify(data.procedures)).toString('hex');
        const result = await contract.submitTransaction('addProcedure',data.patientId, allProceduresHash);
        await gateway.disconnect();
        return "Procedure Added Successfully"
    }
    catch(ex)
    {
        console.log(ex)
    }

}

// This function is used to get the patient history using key
const addImmunization = async (data) => {
    try{
        const {contract,gateway} =  await contractInfo();
        const allImmunizationHash  = keccak(JSON.stringify(data.immunizations)).toString('hex');
        const result = await contract.submitTransaction('addImmunization',data.patientId, allImmunizationHash);
        await gateway.disconnect();
        return "Immunization Added Successfully"
    }
    catch(ex)
    {
        console.log(ex)
    }
}

// This function is used to get the patient history using key
const addAllergies = async (data) => {
    try{
        const {contract,gateway} =  await contractInfo();
        const allAllergiesHash  = keccak(JSON.stringify(data.allergies)).toString('hex');
        const result = await contract.submitTransaction('addAllergy',data.patientId, allAllergiesHash);
        await gateway.disconnect();
        return "Allergies Added Successfully"
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
    getPatientHistory_Service : getPatientHistory,
    addEncounter_Service : addEncounter,
    addCareplan_Service : addCareplan,
    addMedication_Service : addMedication,
    addDevices_Service : addDevices,
    addProcedures_Service : addProcedures,
    addImmunization_Service : addImmunization,
    addAllergies_Service : addAllergies
}