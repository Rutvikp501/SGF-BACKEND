const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead.controller');

router.post('/addLead', leadController.addLead);
router.get('/getAllLeads', leadController.getAllLeads);
router.get('/getLeadscount', leadController.getLeadscount);
router.get('/getDashboardData', leadController.getDashboardData);
router.get('/getconvertedLeads', leadController.getconvertedLeads);
router.get('/getpendingLeads', leadController.getpendingLeads);
router.post('/getLeadsByConsultant', leadController.getLeadsByConsultant);
router.get('/getleadsview/:leadId', leadController.getleadsview);
router.get('/getAdditionalData/:leadId', leadController.getAdditionalData);
module.exports = router;