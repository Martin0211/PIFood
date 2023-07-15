const {Router} = require('express');
const router = Router();
const { getAllDiets } = require('../controllers/controllerDiets');

router.get('/', getAllDiets);

module.exports = router;