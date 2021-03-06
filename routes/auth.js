// jshint esversion:8
const express = require('express');
const passport = require('passport');
const router = express.Router();

// @description  Auth with google
// @route GET /
router.get('/google', passport.authenticate('google', { scope: ['profile']}));


// @description  Google Auth Callback
// @route GET /auth/google/callbcak
router.get('/google/callback',passport.authenticate('google',{failureRedirect:'/'}),
(req, res)=>{res.redirect('/dashboard');
});

//@desc Logout User
// @route /auth/logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});



module.exports = router;

