//Importations : 
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    //unique = sécurité qui permet d'empêcher de s'enregistrer plusieurs fois avec la même adresse mail.
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//en plus => ne pourra pas avoir plusieurs utilisateurs avec le même adresse mail
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);