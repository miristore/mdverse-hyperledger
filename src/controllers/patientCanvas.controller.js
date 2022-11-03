
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

module.exports = {
    getPatientData : getPatientData,
    savePatientInfo : savePatientInfo,
    addCondition : addCondition
}