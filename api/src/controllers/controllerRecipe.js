const axios = require('axios');
const { Diets, Recipe } = require('../db');
const { Op } = require('sequelize');
require('dotenv').config();
const { YOUR_API_KEY } = process.env;

const getRecipeById = async (req, res) => {
    const {idRecipe} = req.params;
    try {
        const recipeDB = await Recipe.findByPk(idRecipe, {include: [Diets]});
        if(recipeDB) {
            res.status(200).json(recipeDB)
        } else {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${YOUR_API_KEY}`);
            const recipeAPI = response.data;

            const recipe = {
                id : recipeAPI.id,
                title: recipeAPI.title,
                image: recipeAPI.image,
                summary: recipeAPI.summary,
                healthScore: recipeAPI.healthScore,
                instructions: recipeAPI.instructions,
                diets: recipeAPI.diets,
            }
            res.status(200).json(recipe);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el receta por id' })
    }
}

const getRecipeByName =async (req, res) => {

    try {
        const recipeName = req.query.title.toLowerCase();
        const recipeDB = await Recipe.findAll({
            where: {
                title: {
                    [Op.iLike]: `%${recipeName}%`
                }

            },
            limit: 100
        });

        // Hacer la solicitud al endpoint que trae todas las recetas
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&number=100`
        );

        // Filtrar las recetas por nombre
        
        const apiRecipe = response.data.results.filter((recipe) => 
        recipe.title.toLowerCase().includes(recipeName));
        
        if(apiRecipe.length === 0) {
            return res.status(404).json({
                mesage: 'No se encontraron recetas con ese nombre'
            })
        }

        const allRecipe = [...recipeDB, ...apiRecipe];

        if (allRecipe.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron recetas con ese nombre'
            })
        }
        
        res.status(200).json(allRecipe);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al buscar las recetas por nombre'})
    }
}

const postNewRecipe = async (req, res) => {
    try {
        const{id, title, image, summary, healthScore, instructions, diets} = req.body;
        const newRecipe = await Recipe.create({
            id, 
            title, 
            image, 
            summary, 
            healthScore, 
            instructions, 
        });

        if(diets && diets.length > 0) {
            const foundDiets = await Diets.findAll({
                where: {
                    name: diets,
                },
            });
            await newRecipe.addDiets(foundDiets);
        }

        res.status(201).json({message: 'Receta creado exidotosamente.'})

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al crear el Receta.'});
    }
}



module.exports ={
    getRecipeById,
    getRecipeByName,
    postNewRecipe,
}