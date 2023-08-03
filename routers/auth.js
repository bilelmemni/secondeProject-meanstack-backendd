const express=require('express')
const router=express.Router()
const passport = require('passport')
const {login}=require('../controllers/login')
const {register,getById}=require('../controllers/register')
//uploads file
const multer=require('multer');
filename='';
const mystorage=multer.diskStorage({
    destination:'./uploads',
    filename:(req,file,redirect)=>{
           let date=Date.now()
           let fl=date+'.'+file.mimetype.split('/')[1];
           redirect(null,fl);
           filename=fl;
    }
})
const upload=multer({storage:mystorage})



// REGISTRE AND LOGIN
router.post('/register',upload.any('image'),register)
router.post('/login',login)
router.get('/admin/:id',getById)
router.get('/profile', passport.authenticate('bearer', { session: false }), (req, res) => {
    res.send(req.user)
})




module.exports=router