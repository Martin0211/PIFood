const {Router} = require('express');
const router = Router();
const {getRecipeById, getRecipeByName, postNewRecipe} = require('../controllers/controllerRecipe');


router.get('/recipes/name', getRecipeByName);
router.get('/recipes/:idRecipe', getRecipeById);
router.post('/recipes', postNewRecipe)

module.exports = router;