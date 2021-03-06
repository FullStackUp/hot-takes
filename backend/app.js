//Importations :
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

//pour la sécurité des liens
require('dotenv').config();

//Sécurité en plus : 
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

//Permet de connecter l'application à mongodb
mongoose
.connect(process.env.MONGODB_SECRET_KEY,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Création d'une application en appelant la méthode express 
const app = express();
app.use(express.json());

//Middleware = "app.use"

//permet de corriger l'erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use(bodyParser.json());

//Sécurite en plus :
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limite chaque IP de 100 requête 
});
//  applique sur toute les requêtes
app.use(limiter);

app.use('/images', express.static(path.join(__dirname, 'images')));

//logique de route
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);


//Exporter cette application (const) pour y acceder depuis les autres fichiers
module.exports = app;