const axios = require('axios');
const { Diets, Recipe } = require('../db');
const { Op } = require('sequelize');
require('dotenv').config();
const { YOUR_API_KEY } = process.env;

const getAllDiets = async (req, res) => {
    try {

        const diets = await Diets.findAll();

        if(diets.length === 0) {

            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true`)

            const apiDiets = response.data.results;
            
            // Obtener todas las dietas únicas
            const dietsUnique = Array.from(new Set(apiDiets.flatMap(recipe => recipe.diets)));

            // Guardar las dietas en la base de datos
            await Promise.all(dietsUnique.map(name => Diets.create({ name })));
            
            res.status(200).json(dietsUnique);

        } else {
            res.status(200).json(diets);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al obtener las dietas.'});   
    }
}

module.exports ={
    getAllDiets,
}