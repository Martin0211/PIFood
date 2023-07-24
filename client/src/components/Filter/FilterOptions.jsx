import React from "react";

const FilterOptions = ({ onSortChange, onFilterChange }) => {
    return (
        <div>
            {/* Opciones de ordenamiento por health score */}
            <h2>Health Score</h2>
            <button onClick={() => onSortChange('asc')}>Ascending</button>
            <button onClick={() => onSortChange('desc')}>Descending</button>

            {/* Opciones de ordenamiento alfabético */}
            <h2>Alfabética</h2>
            <button onClick={() => onSortChange('A-Z')}>A-Z</button>
            <button onClick={() => onSortChange('Z-A')}>Z-A</button>
            
            {/* Opciones de filtrado por tipo de dieta */}
            <h2>Health Score</h2>
            <button onClick={() => onFilterChange ('gluten free')}>Gluten Free</button>
            <button onClick={() => onFilterChange ('dairy free')}>Dairy Free</button>
            <button onClick={() => onFilterChange ('lacto ovo vegetarian')}>Lacto Ovo Vegetarian</button>
            <button onClick={() => onFilterChange ('vegan')}>Vegan</button>
            <button onClick={() => onFilterChange ('paleolithic')}>Paleolithic</button>
            <button onClick={() => onFilterChange ('primal')}>Primal</button>
            <button onClick={() => onFilterChange ('whole 30')}>Whole 30</button> 
        </div>
    );
};

export default FilterOptions;