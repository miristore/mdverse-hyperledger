const express = require('express');

const patientCanvasController = require('../controllers/patientCanvas.controller');

const router = express.Router();

router.get('/getPatientInfo',patientCanvasController.getPatientData);
router.post('/addPatientInfo', patientCanvasController.savePatientInfo);
router.post('/addCondition', patientCanvasController.addCondition);

module.exports = router;
