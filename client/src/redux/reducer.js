import { GET_RECIPE_BY_NAME, GET_RECIPE_BY_ID, GET_RECIPE_ALL, POST_CREATE_RECIPE, GET_DIETS_ALL } from './actions';


const initialState = {
    recipes: [],
    details: [],
    recipesLoaded: false,
    diets: [],
    dietsLoaded: false,
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPE_BY_NAME:
            return { ...state, recipes: action.payload };

        case GET_RECIPE_BY_ID:
            return { ...state, details: [action.payload] }

        case GET_RECIPE_ALL:
            return { ...state, recipes: action.payload, recipesLoaded: true };

        case POST_CREATE_RECIPE:
            return { ...state, recipes: [...state.recipes, action.payload] };

            case GET_DIETS_ALL:
                return { ...state, diets: action.payload, dietsLoaded: true };


        default:
            return { ...state };
    }
};

export default rootReducer;