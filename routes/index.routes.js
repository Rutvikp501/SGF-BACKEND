
const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead.controller');
const User  = require('../controllers/User.controler');


router.post('/addLead', leadController.addLead);
router.get('/getAllLeads', leadController.getAllLeads);
router.get('/getLeadscount', leadController.getLeadscount);
router.get('/getDashboardData', leadController.getDashboardData);
router.get('/getconvertedLeads', leadController.getconvertedLeads);
router.get('/getpendingLeads', leadController.getpendingLeads);
router.post('/getLeadsByConsultant', leadController.getLeadsByConsultant);
router.get('/getleadsview/:leadId', leadController.getleadsview);
router.get('/getAdditionalData/:leadId', leadController.getAdditionalData);


router.get('/getAllUser',User.GetAllUser)
router.post('/getUserData',User.GetUserData)
router.post('/getSearcheduser',User.GetSearchedUser)
router.post('/login',User.Login)
router.post('/register',User.Register)
router.post('/edit',User.Edit)
router.patch('/update/:id', User.Update);
router.delete('/delete/:id', User.Delete);
router.post('/forgotPassword',User.forgotPassword)
router.post('/resetPassword',User.resetPassword)

module.exports = router;