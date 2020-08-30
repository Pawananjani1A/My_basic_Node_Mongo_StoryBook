// jshint esversion:8
const express = require('express');
const router = express.Router();

// @description  Login/Landing Page
// @route GET /
router.get('/',(req, res)=>{
    res.render('login');
});


// @description  Dashboard
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});





module.exports = router;

