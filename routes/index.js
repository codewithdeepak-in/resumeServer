const express = require('express');
const router = express.Router();
const {resumeBuilderController} = require('../controllers/resume-builder-controller');
const { getResumeController } = require('../controllers/get-user-resume-controller');



router.post('/build-resume', resumeBuilderController.resume);
router.get('/get-resume', getResumeController.getResume);
router.get('/user-resume', getResumeController.userResume);

module.exports = router;