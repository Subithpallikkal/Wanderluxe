const express = require('express')
const postSignup = require('../controllers/signupCtr')
const router = express.Router()


router.post('',postSignup)

module.exports = router

