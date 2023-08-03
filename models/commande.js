const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommandeSchema = new Schema({
    totalPrix: {
        type: Number,
        required: [true, 'Ce champs est obligatoire'],
    },
    produits: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produit'
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
   
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Commande', CommandeSchema)