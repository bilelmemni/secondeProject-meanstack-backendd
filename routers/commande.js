const express=require('express')
const router=express.Router()
const{createCommande,Listcommande,detailscommande}=require('../controllers/commande')


// API commande , liste commande et detaid commande
router.post('/Commande',createCommande)
router.get('/Commande/',Listcommande)
router.get('/Commande/:id',detailscommande)






module.exports=router