const Admin=require('../models/auth');
const bcrypt=require('bcrypt');
require('dotenv').config();

exports.register=async(req,res)=>{
    try {
        data=req.body;
        admin= new Admin(data);
        salt=bcrypt.genSaltSync(10)
        admin.password=bcrypt.hashSync(data.password,salt)
        saveadmin= await admin.save()
        res.status(200).send(saveadmin)
       
    } catch (error) {
        res.status(400).send(error)
    }
}
