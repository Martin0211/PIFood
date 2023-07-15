const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRoute = require('./routesRecipe');
const dietsRouter = require('./routesDiets');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', recipeRoute);
router.use('/diets', dietsRouter);

module.exports = router;
