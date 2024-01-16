import axios from 'axios'

export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const GET_RECIPE_ALL = "GET_RECIPE_ALL";
export const POST_CREATE_RECIPE = "POST_CREATE_RECIPE";
export const GET_DIETS_ALL = "GET_DIETS_ALL";


export const getRecipeByName = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/recipes/name?title=${name}`);
        const recipe = apiData.data;
        dispatch({type: GET_RECIPE_BY_NAME, payload: recipe});
    }
};

export const getRecipeAll = () => {
    return async function (dispatch) {
    try {
            const apiData = await axios.get(`http://localhost:3001/allrecipes`);
            const recipe = apiData.data;
            dispatch({type: GET_RECIPE_ALL, payload: recipe});
        
    } catch (error) { window.alert(error)
        
    }

}};

export const getRecipeById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/recipes/${id}`);
        const details = apiData.data;
        dispatch({type: GET_RECIPE_BY_ID, payload: details});
    }
};
export const postCreateRecipe = (formData) => {
    return async function (dispatch) {
        const apiData = await axios.post(`http://localhost:3001/recipes`, formData);
        const createRecipe = apiData.data;
        dispatch({type: POST_CREATE_RECIPE, payload: createRecipe});


    }
};
export const getDietsAll = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/diets/`);
        const diets = apiData.data;
        dispatch({type: GET_DIETS_ALL, payload: diets});
    }
};


