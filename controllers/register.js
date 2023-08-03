const Admin=require('../models/client');
const bcrypt=require('bcrypt');
require('dotenv').config();

exports.register=async(req,res)=>{
    try {
        data=req.body;
        admin= new Admin(data);
        admin.image=filename
        salt=bcrypt.genSaltSync(10)
        admin.password=bcrypt.hashSync(data.password,salt)
        saveadmin= await admin.save()
        filename='';
        res.status(200).send(saveadmin)
       
    } catch (error) {
        res.status(400).send(error)
    }
}
exports.getById=async(req,res)=>{
    myid=req.params.id
    Admin.findOne({_id:myid})
    .then(
      (produit)=>{
          res.send(produit)
          
      }
    )
    .catch(
      (err)=>{ 
        res.send(err)
      }
    )
  
  }
