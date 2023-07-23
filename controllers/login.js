const Admin=require('../models/auth');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
require('dotenv').config();



exports.login=async(req,res)=>{
        try {
           data=req.body;
           admin=await Admin.findOne({email:data.email})
            if(admin){
              valpassword=bcrypt.compareSync(data.password,admin.password)
              if (valpassword) {
    
              
                const data = {
                  idClient: admin._id
              }
              const token = jwt.sign(data, 'Secret', { expiresIn: '1d' })
    
              res.status(200).send({mytoken:token})
    
    
    
              }else{
                res.status(401).send('email or password invalid')
              }
            }else{
                res.status(404).send('email or password incorrect')
            }
            
        } catch (error) {
            res.status(400).send(error)
        }
    }
