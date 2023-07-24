import React, { useState } from "react";
import validate from './validation'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { postCreateRecipe } from '../../redux/actions';

const TextArea = styled.textarea`
  width: 100%; /* O el ancho deseado */
  height: 200px; /* Altura deseada para el cuadro de texto */
`;

const Errors = styled.p`
color: red;
font-weight: bold;
`

const Form = () => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        summary: "",
        healthScore: 0,
        instructions: "",
        diets: []
    })

    const [errors, setErrors] = useState({
        title: "",
        image: "",
        summary: "",
        healthScore: 0,
        instructions: "",
        diets: []
    });


    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
          if (checked) {
            setFormData((prevData) => ({
              ...prevData,
              [name]: [...prevData[name], value],
            }));
          } else {
            setFormData((prevData) => ({
              ...prevData,
              [name]: prevData[name].filter((diet) => diet !== value),
            }));
          }
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      
        setErrors(
          validate({
            ...formData,
            [name]: type === "checkbox" ? (checked ? [...formData[name], value] : formData[name].filter((diet) => diet !== value)) : value,
          })
        );
      };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (Object.keys(errors).length) {
            window.alert("Debes corregir los errores");
        } else {
            console.log(formData)
            dispatch(postCreateRecipe(formData));
            setFormData({
                title: "",
                image: "",
                summary: "",
                healthScore: 0,
                instructions: "",
                diets: [],
            });
            setErrors({
                title: "",
                image: "",
                summary: "",
                healthScore: 0,
                instructions: "",
                diets: [],
            });
        }
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Name</label>
                <input type="text" placeholder="Name of your Recipe..." name="title" value={formData.title} onChange={handleChange} />
            </div>
            {errors.title ? <Errors>{errors.title}</Errors> : null}
            <div>
                <label htmlFor="summary">Resumen del plato</label>
                <TextArea type="text" placeholder="Description..." name="summary" value={formData.summary} onChange={handleChange} />
            </div>
            {errors.summary ? <Errors>{errors.summary}</Errors> : null}
            <div>
                <label htmlFor="healthScore">Health Score</label>
                <input type="text" name="healthScore" value={formData.healthScore} onChange={handleChange} />
            </div>
            {errors.healthScore ? <Errors>{errors.healthScore}</Errors> : null}
            <div>
                <label htmlFor="">Paso a paso</label>
                <TextArea type="text" placeholder="Description..." name="instructions" value={formData.instructions} onChange={handleChange} />
            </div>
            {errors.instructions ? <Errors>{errors.instructions}</Errors> : null}
            <div>
                <label htmlFor="image">Imagen</label>
                <input type="text" placeholder="Url image..." name="image" value={formData.image} onChange={handleChange} />
            </div>
            {errors.image ? <Errors>{errors.image}</Errors> : null}
            <div>
        <label>Posibilidad de seleccionar/agregar varios tipos de dieta en simultáneo</label>
        <div>
          <input
            type="checkbox"
            id="glutenFree"
            name="diets"
            value="gluten free"
            checked={formData.diets.includes("gluten free")}
            onChange={handleChange}
          />
          <label htmlFor="glutenFree">Gluten Free</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="dairyFree"
            name="diets"
            value="dairy free"
            checked={formData.diets.includes("dairy free")}
            onChange={handleChange}
          />
          <label htmlFor="dairyFree">Dairy Free</label>
        </div>
        <div>
        <input
            type="checkbox"
            id="lactoOvoVegetarian"
            name="diets"
            value="lacto ovo vegetarian"
            checked={formData.diets.includes("lacto ovo vegetarian")}
            onChange={handleChange}
          />
          <label htmlFor="lacto ovo vegetarian">Lacto Ovo Vegetarian</label>    
        </div>
        <div>
        <input
            type="checkbox"
            id="vegan"
            name="diets"
            value="vegan"
            checked={formData.diets.includes("vegan")}
            onChange={handleChange}
          />
          <label htmlFor="vegan">Vegan</label>    
        </div>
        <div>
        <input
            type="checkbox"
            id="paleolithic"
            name="diets"
            value="paleolithic"
            checked={formData.diets.includes("paleolithic")}
            onChange={handleChange}
          />
          <label htmlFor="paleolithic">Paleolithic</label>    
        </div>
        <div>
        <input
            type="checkbox"
            id="primal"
            name="diets"
            value="primal"
            checked={formData.diets.includes("primal")}
            onChange={handleChange}
          />
          <label htmlFor="primal">Primal</label>    
        </div>
        <div>
        <input
            type="checkbox"
            id="whole30"
            name="diets"
            value="whole 30"
            checked={formData.diets.includes("whole 30")}
            onChange={handleChange}
          />
          <label htmlFor="whole 30">Whole 30</label>    
        </div>
      </div>
            <button>Crear Receta</button>
        </form>
    )
}

export default Form;
