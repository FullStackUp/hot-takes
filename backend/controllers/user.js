const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();


exports.signup = (req, res, next) => {
    //hasher le mdp par méthode asynchrone
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            //save permet d'enregistrer dans la base de donné
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    //pour trouver seulement 1 utilsateur (l'utilisateur unique via le l'adresse email unique)
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            //on compare le mdp qui est envoyé avec la requête
            bcrypt.compare(req.body.password, user.password)
                //le then reçoit un boléean
                .then(valid => {
                    //return false = ce n'est pas bon = requête Ko, l'utilisateur a entré le mauvais mdp
                    if (!valid) {
                        //bien que cela vient du mdp, on écrira égalment email ou mdp incorrect pour augmenter la sécurité
                        return res.status(401).json({ error: 'Adresse email ou mot de passe incorrect !' });
                    }
                    //return true = c'est bon = reqête Ok
                    res.status(200).json({
                        userId: user._id,
                        //génère un token crypté pour permettre la connexion de l'utilisateur
                        //nous utilisons la fonction "sign" de "jsonwebtoken" pour encoder un nouveau token 
                        token: jwt.sign(
                            { userId: user._id },
                            //nous utilisons une chaîne"RANDOM_" pour encoder notre token
                            'RANDOM_SECRET_KEY',
                            //durée de validité du token à 24 heures
                            { expiresIn: '24h' }
                        )
                    });
                })
                /*ce catch (ci-dessous) contrairement aux autres c'est si seulement il y a un problème 
                lié a mongodb ou de connexion ect... Ce n'est pas "une condition" (si... alors... et/ou sinon...)*/
                .catch(error => res.status(500).json({ error }));
        })
        //ce catch (ci-dessous) idem que celui au-dessus c'est lié au server
        .catch(error => res.status(500).json({ error }));
};