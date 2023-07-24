const {Router} = require('express');
const router = Router();
const {getRecipeById, getRecipeByName, postNewRecipe, getAllRecipes} = require('../controllers/controllerRecipe');


router.get('/recipes/name', getRecipeByName);
router.get('/recipes/:idRecipe', getRecipeById);
router.get('/allrecipes', getAllRecipes)
router.post('/recipes', postNewRecipe)

module.exports = router;