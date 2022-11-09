const express = require('express');

const patientCanvasController = require('../controllers/patientCanvas.controller');

const router = express.Router();

router.get('/getPatientInfo',patientCanvasController.getPatientData);
router.post('/addPatientInfo', patientCanvasController.savePatientInfo);
router.post('/addCondition', patientCanvasController.addCondition);
router.get('/getPatientHistory', patientCanvasController.getPatientHistory);
router.post('/addEncounter', patientCanvasController.addEncounter);
router.post('/addCareplan', patientCanvasController.addCareplan);
router.post('/addMedication', patientCanvasController.addMedication);
router.post('/addDevices', patientCanvasController.addDevices);
router.post('/addProcedures', patientCanvasController.addProcedures);
router.post('/addImmunization', patientCanvasController.addImmunization);
router.post('/addAllergies', patientCanvasController.addAllergies);
module.exports = router;
