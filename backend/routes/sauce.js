//Importations : 
const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const validate = require('../middleware/validate-inputs');

//"router" = "app" on a remplacé les "app" par "router"

// "auth" pour proteger nos routes
router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, validate.id, sauceCtrl.getOneSauce);
router.post('/', auth, multer, validate.sauce, sauceCtrl.createSauce);
router.put('/:id', auth, multer, validate.id, validate.sauce, sauceCtrl.modifySauce);
router.delete('/:id', auth, validate.id, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, validate.id, validate.like, sauceCtrl.likeOrDislikeSauce);

module.exports = router;
