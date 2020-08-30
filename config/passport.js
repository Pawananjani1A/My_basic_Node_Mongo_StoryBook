// jshint esversion:8

const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');

const User = require('../modals/User');

module.exports = (passport)=>{
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async(accessToken,refreshToken,profile,done) => {
        //    console.log(profile);

        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image:profile.photos[0].value
        };

        try{
            let user = await User.findOne({googleId: profile.id});
            
            // The user already has an account
            if(user)
            {
             done(null,user);
            }
            // New user
            else{
                user = await User.create(newUser);
                done(null,user);
            }
        }
        catch (err){
            console.log(err);
        }
    }
    ));

    passport.serializeUser((user, done) =>{done(null, user.id);});

    passport.deserializeUser( (id, done) => {
        User.findById(id,  (err, user)=> {done(err, user);});
    });
};