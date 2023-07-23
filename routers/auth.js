const express=require('express')
const router=express.Router()
const passport = require('passport')
const {login}=require('../controllers/login')
const {register}=require('../controllers/register')



// REGISTRE AND LOGIN
router.post('/register',register)
router.post('/login',login)
router.get('/profile', passport.authenticate('bearer', { session: false }), (req, res) => {
    res.send(req.user)
})


module.exports=router