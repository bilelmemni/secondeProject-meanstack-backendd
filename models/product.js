const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProduitSchema = new Schema({
    categorie: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    name: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    discription: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    image: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    quantity: {
        type: Number,
        required: [true, 'Ce champs est obligatoire'],
    },
    price: {
        type: Number,
        required: [true, 'Ce champs est obligatoire'],
    },
    date: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    
  
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Produit', ProduitSchema)