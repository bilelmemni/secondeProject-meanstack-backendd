const Client=require('../models/client')
const bcrypt=require('bcrypt');



exports.getallClient=async(req,res)=>{
  Client.find()
  .then(
      (clients)=>{
        res.send(clients)
      }
  )
  .catch(
      (err)=>{
      console.log(err);
      }
  )
}
exports.getByIdClient=async(req,res)=>{
  myid=req.params.id
  Client.findOne({_id:myid})
  .then(
    (client)=>{
        res.send(client)
        
    }
  )
  .catch(
    (err)=>{ 
      res.send(err)
    }
  )

}

exports.deleteClient=async(req,res)=>{
  myid=req.params.id
  Client.findOneAndDelete({_id:myid})
  .then(
      (client)=>{
        res.send(client)
      }
  )
  .catch(
      (err)=>{
         res.send(err)
      }
  )

}
exports.updateClient=async(req,res)=>{
  myid=req.params.id;
  newdata=req.body;
  Client.findOneAndUpdate({_id:myid},newdata)
  .then(
      (client)=>{
         res.send(client)
      }
  )
  .catch(
      (err)=>{
          res.send(err)
      }
  )
}
