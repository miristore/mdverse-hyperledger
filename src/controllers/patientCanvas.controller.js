
const patientCanvasService = require('../services/patientCanvas/patientCanvas.service');

const response = {
    statusCode : 201, result : ""
}

const getPatientData = async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.getPatientInfo_Service(req.query);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}

const savePatientInfo = async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.savePatientInfo_Service(req.body);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}

const addCondition = async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.addCondition_Service(req.body);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}

const getPatientHistory = async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.getPatientHistory_Service(req.query);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}
const addEncounter = async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.addEncounter_Service(req.body);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}

const addCareplan= async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.addCareplan_Service(req.body);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}


const addMedication= async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.addMedication_Service(req.body);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}
const addDevices = async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.addDevices_Service(req.body);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}
const addProcedures = async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.addProcedures_Service(req.body);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}

const addImmunization= async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.addImmunization_Service(req.body);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}

const addAllergies = async(req,res,next)=>{
    try
    {
        const data = await patientCanvasService.addAllergies_Service(req.body);
        response.statusCode = 200
        response.result = data;
        res.json(response);
    }
    catch(ex)
    {
        console.log(ex);
    }
}


module.exports = {
    getPatientData : getPatientData,
    savePatientInfo : savePatientInfo,
    addCondition : addCondition,
    getPatientHistory : getPatientHistory,
    addEncounter : addEncounter,
    addCareplan : addCareplan,
    addMedication : addMedication,
    addDevices : addDevices,
    addProcedures : addProcedures,
    addImmunization : addImmunization,
    addAllergies : addAllergies
}