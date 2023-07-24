const axios = require('axios');
const { Diets } = require('../db');
const { Op } = require('sequelize');
require('dotenv').config();
const { YOUR_API_KEY } = process.env;

const getAllDiets = async (req, res) => {
    try {
        // Obtener todas las dietas almacenadas en la base de datos
        const diets = await Diets.findAll();

        if(diets.length === 0) {
            // Si no hay dietas en la base de datos, obtenerlas de la API externa
            
            // Realizar una solicitud a la API para obtener información de recetas
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true`)

            // Extraer las dietas únicas de los resultados de la API
            const apiDiets = response.data.results;
            const dietsUnique = Array.from(new Set(apiDiets.flatMap(recipe => recipe.diets)));

            // Guardar las dietas en la base de datos
            await Promise.all(dietsUnique.map(name => Diets.create({ name })));
            
            // Devolver las dietas únicas como respuesta
            res.status(200).json(dietsUnique);

        } else {
            // Si ya hay dietas en la base de datos, devolverlas como respuesta
            res.status(200).json(diets);
        }

    } catch (error) {
        // En caso de error, devolver un mensaje de error
        console.error(error);
        res.status(500).json({message: 'Error al obtener las dietas.'});   
    }
}

module.exports ={
    getAllDiets,
}