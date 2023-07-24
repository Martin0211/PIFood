const axios = require('axios');
const { Diets, Recipe } = require('../db');
const { Op } = require('sequelize');
require('dotenv').config();
const { YOUR_API_KEY } = process.env;

// Obtener una receta por su ID
const getRecipeById = async (req, res) => {
    const { idRecipe } = req.params;
    try {
        // Buscar la receta en la base de datos local
        const recipeDB = await Recipe.findByPk(idRecipe, { include: [Diets] });

        if (recipeDB) {
            // Si se encuentra la receta en la base de datos, devolverla como respuesta
            const diets = recipeDB.Diets.map(diet => diet.name);

            const recipe = {
                id: recipeDB.id,
                title: recipeDB.title,
                image: recipeDB.image,
                summary: recipeDB.summary,
                healthScore: recipeDB.healthScore,
                instructions: recipeDB.instructions,
                diets: diets,
            };

            res.status(200).json(recipe);
        } else {
            // Si no se encuentra en la base de datos, obtenerla de la API externa
            const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${YOUR_API_KEY}`);
            const recipeAPI = response.data;

            // Crear un objeto con la información de la receta desde la API
            const recipe = {
                id: recipeAPI.id,
                title: recipeAPI.title,
                image: recipeAPI.image,
                summary: recipeAPI.summary,
                healthScore: recipeAPI.healthScore,
                instructions: recipeAPI.instructions,
                diets: recipeAPI.diets,
            }

            // Devolver la receta como respuesta
            res.status(200).json(recipe);
        }
    } catch (error) {
        // En caso de error, devolver un mensaje de error
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la receta por id' });
    }
}

// Obtener recetas por su nombre
const getRecipeByName = async (req, res) => {
    try {
        // Convertir el nombre de la receta a minúsculas
        const recipeName = req.query.title.toLowerCase();

        // Buscar recetas en la base de datos local que coincidan con el nombre
        const recipeDB = await Recipe.findAll({
            where: {
                title: {
                    [Op.iLike]: `%${recipeName}%`
                }
            },
            limit: 100,
            include: [Diets],
        });

        const mappedRecipes = recipeDB.map(recipe => ({
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            instructions: recipe.instructions,
            diets: recipe.Diets.map(diet => diet.name),
        }));

        // Hacer una solicitud a la API para obtener recetas que coincidan con el nombre
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);

        // Filtrar las recetas de la API por nombre
        const apiRecipe = response.data.results.filter((recipe) => 
            recipe.title.toLowerCase().includes(recipeName)
        );

        // Comprobar si se encontraron recetas en la base de datos o la API
        if (apiRecipe.length === 0 && mappedRecipes.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron recetas con ese nombre'
            })
        }

        // Combinar las recetas de la base de datos y la API
        const allRecipe = [...mappedRecipes, ...apiRecipe];
        res.status(200).json(allRecipe);

    } catch (error) {
        // En caso de error, devolver un mensaje de error
        console.error(error);
        res.status(500).json({ message: 'Error al buscar las recetas por nombre' });
    }
}

// Obtener todas las recetas por defecto, incluyendo las de la base de datos
const getAllRecipes = async (req, res) => {
    try {
        // Hacer una solicitud a la API para obtener todas las recetas
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);

        // Obtener las recetas de la respuesta de la API
        const apiRecipe = response.data.results;

        // Comprobar si se encontraron recetas en la API
        if (apiRecipe.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron recetas'
            });
        }

        // Obtener todas las recetas almacenadas en la base de datos local
        const recipeDB = await Recipe.findAll({
            limit: 100,
            include: [Diets],
        });

        const mappedRecipes = recipeDB.map(recipe => ({
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            instructions: recipe.instructions,
            diets: recipe.Diets.map(diet => diet.name),
        }));

        // Combinar las recetas de la base de datos y la API
        const allRecipe = [...mappedRecipes, ...apiRecipe];
        res.status(200).json(allRecipe);

    } catch (error) {
        // En caso de error, devolver un mensaje de error
        console.error(error);
        res.status(500).json({ message: 'Error al obtener todas las recetas' });
    }
}

// Crear una nueva receta
const postNewRecipe = async (req, res) => {
    try {
        // Obtener los datos de la receta del cuerpo de la solicitud
        const { id, title, image, summary, healthScore, instructions, diets } = req.body;

        // Crear una nueva receta en la base de datos
        const newRecipe = await Recipe.create({
            id,
            title,
            image,
            summary,
            healthScore,
            instructions,
        });

        // Si se especificaron dietas, buscarlas en la base de datos
        if (diets && diets.length > 0) {
            const foundDiets = await Diets.findAll({
                where: {
                    name: diets,
                },
            });

            // Asociar las dietas encontradas a la nueva receta
            await newRecipe.addDiets(foundDiets);
        }

        // Devolver una respuesta exitosa
        res.status(201).json({ message: 'Receta creada exitosamente.' });

    } catch (error) {
        // En caso de error, devolver un mensaje de error
        console.error(error);
        res.status(500).json({ message: 'Error al crear la Receta.' });
    }
}

module.exports ={
    getRecipeById,
    getRecipeByName,
    postNewRecipe,
    getAllRecipes
}