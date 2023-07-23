const express=require('express')
const router=express.Router()
const passport = require('passport')
const{addproduit,getallproduit,getByIdproduit,deleteproduit,updateproduit}=require('../controllers/pruduct')


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

//CRUD PRODUIT
router.post('/produit',upload.any('image'),addproduit)
router.get('/produit',getallproduit)
router.get('/produit/:id',getByIdproduit)
router.delete('/produit/:id',deleteproduit)
router.put('/produit/:id',upload.any('image'),updateproduit)





module.exports=router