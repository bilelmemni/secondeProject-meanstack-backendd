const Produit=require('../models/product')


exports.addproduit=async(req,res)=>{ 
  try {
      data=req.body;
      produit= new Produit(data);
      produit.date=new Date()
      produit.image=filename
      saveproduit= await produit.save()
      filename=''
      res.status(200).send(saveproduit)
     
  } catch (error) {
      res.status(400).send(error)
  }
}

exports.getallproduit=async(req,res)=>{
    Produit.find()
  .then(
      (produits)=>{
        res.send(produits)
      }
  )
  .catch(
      (err)=>{
      console.log(err);
      }
  )
}
exports.getProductsbycategory=async(req,res)=>{
  try {
      myid=req.params.id;
      art=await Produit.find({categorie:myid})
      res.status(200).send(art)
  } catch (error) {
      res.status(400).send(error)
  }

}
exports.getByIdproduit=async(req,res)=>{
  myid=req.params.id
  Produit.findOne({_id:myid})
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

exports.deleteproduit=async(req,res)=>{
  myid=req.params.id
  Produit.findOneAndDelete({_id:myid})
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
exports.updateproduit=async(req,res)=>{
  myid=req.params.id;
  newdata=req.body;
  newdata.image=filename
  Produit.findOneAndUpdate({_id:myid},newdata)
  .then(
      (produit)=>{
        filename=''
         res.send(produit)
      }
  )
  .catch(
      (err)=>{
          res.send(err)
      }
  )
}
