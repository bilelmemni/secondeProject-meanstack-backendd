const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    lastname: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    image: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    email: {
        type: String,
        unique:true,
        required: [true, 'Ce champs est obligatoire'],
    },
    password: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Admin', ClientSchema)