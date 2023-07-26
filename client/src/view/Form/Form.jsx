import React, { useState } from "react";
import validate from './validation'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { postCreateRecipe } from '../../redux/actions';

const TextArea = styled.textarea`
    width: 30vw;
    height: 4vw;
    border: 1px solid #272d2d;
    background-color: transparent;
    border-radius: .5vw;
`;

const DivInterno = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Input = styled.input`
    width: 30vw;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid;
`
const InputNum = styled.input`
    width: 30vw;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid;
`
const DivCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ErrorContainer = styled.div`
    visibility: ${props => (props.$visible ? 'visible' : 'hidden')};
    font-family: 'ubuntu', sans-serif;
    font-weight: bold;
    font-style: italic;
    color: red;
    font-size: .7vw;
  
`;

const ErrorMessageContainer = styled.div`
    height: 1.5vw; 
    padding-top: 0.2vw;
`;

const MyButtonStyled = styled.button`
    border: 1.5px solid #272d2d;
    background-color: #272d2d13;
    color: #272d2d;
    padding: 1vw 4vw;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #a846a0;
      color: #f6f8ff;
    }
  `
const AlCheckBox = styled.div`
    display: flex;
    align-items: center;
`

const CheckboxInput = styled.input`
    width: 15px;
    height: 15px;
    margin-right: 5px;
    appearance: none;
    border: 1.5px solid #272d2d5a;
    border-radius: 4px;
    cursor: pointer;

  
    &:checked {
      background-color: #a846a0;
      border-color: #a846a0;
    }
`;

const FondoForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f8ff;
    height: 71vh;
    width: 40vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    overflow: hidden;
    justify-content: center;
    border-radius: 1vw;
    border: 1px solid #272d2d;

  `
const FlexGeneral = styled.div`
    display: flex;
    align-items: center;
    padding-top: 3vw;
    padding-bottom: 3vw;
    justify-content: center;
`

 const BgDiv = styled.div`
    background-image: url(https://images.alphacoders.com/104/thumb-1920-1043013.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: right bottom;
    overflow: hidden;
    margin: 0;
    height: 700vw;
  `

const Label = styled.label`
    font-family: 'ubuntu', sans-serif;
    font-weight: bold;
    font-size: .8vw;
`
const LabelCheckbox = styled.label`
    font-family: 'ubuntu', sans-serif;
    font-weight: 300;
    font-size: .8vw;
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
      window.alert("Receta creada exitosamente");
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
    <BgDiv>
      <FlexGeneral>
    <FondoForm action="" onSubmit={handleSubmit}>
      <DivInterno>
        <Label htmlFor="title">Name</Label>
        <Input type="text" placeholder="Name of your Recipe..." name="title" value={formData.title} onChange={handleChange} />
      </DivInterno>
      <ErrorMessageContainer>
        <ErrorContainer $visible={!!errors.title}>{errors.title}</ErrorContainer>
      </ErrorMessageContainer>
      <DivInterno>
        <Label htmlFor="healthScore">Health Score</Label>
        <InputNum type="text" name="healthScore" value={formData.healthScore} onChange={handleChange} />
      </DivInterno>
      <ErrorMessageContainer>
        <ErrorContainer $visible={!!errors.healthScore}>{errors.healthScore}</ErrorContainer>
      </ErrorMessageContainer>
      <DivInterno>
        <Label htmlFor="summary">Resumen del plato</Label>
        <TextArea type="text" placeholder="Description..." name="summary" value={formData.summary} onChange={handleChange} />
      </DivInterno>
      <ErrorMessageContainer>
        <ErrorContainer $visible={!!errors.summary}>{errors.summary}</ErrorContainer>
      </ErrorMessageContainer>
      <DivInterno>
        <Label htmlFor="">Paso a paso</Label>
        <TextArea type="text" placeholder="Description..." name="instructions" value={formData.instructions} onChange={handleChange} />
      </DivInterno>
      <ErrorMessageContainer>
        <ErrorContainer $visible={!!errors.instructions}>{errors.instructions}</ErrorContainer>
      </ErrorMessageContainer>
      <DivInterno>
        <Label htmlFor="image">Imagen</Label>
        <Input type="text" placeholder="Url image..." name="image" value={formData.image} onChange={handleChange} />
      </DivInterno>
      <ErrorMessageContainer>
        <ErrorContainer $visible={!!errors.image}>{errors.image}</ErrorContainer>
      </ErrorMessageContainer>
      <div>
        <Label>Puedes agregar varios tipos de dieta</Label>
        <DivCheckbox>
          <div>
            <AlCheckBox>
              <CheckboxInput
                type="checkbox"
                id="glutenFree"
                name="diets"
                value="gluten free"
                checked={formData.diets.includes("gluten free")}
                onChange={handleChange}
              />
              <LabelCheckbox htmlFor="glutenFree">Gluten Free</LabelCheckbox>
            </AlCheckBox>
            <AlCheckBox>
              <CheckboxInput
                type="checkbox"
                id="dairyFree"
                name="diets"
                value="dairy free"
                checked={formData.diets.includes("dairy free")}
                onChange={handleChange}
              />
              <LabelCheckbox htmlFor="dairyFree">Dairy Free</LabelCheckbox>
            </AlCheckBox>
            <AlCheckBox>
              <CheckboxInput
                type="checkbox"
                id="lactoOvoVegetarian"
                name="diets"
                value="lacto ovo vegetarian"
                checked={formData.diets.includes("lacto ovo vegetarian")}
                onChange={handleChange}
              />
              <LabelCheckbox htmlFor="lacto ovo vegetarian">Lacto Ovo Vegetarian</LabelCheckbox>
            </AlCheckBox>
          </div>
          <div>
            <AlCheckBox>
              <CheckboxInput
                type="checkbox"
                id="vegan"
                name="diets"
                value="vegan"
                checked={formData.diets.includes("vegan")}
                onChange={handleChange}
              />
              <LabelCheckbox htmlFor="vegan">Vegan</LabelCheckbox>
            </AlCheckBox>
            <AlCheckBox>
              <CheckboxInput
                type="checkbox"
                id="paleolithic"
                name="diets"
                value="paleolithic"
                checked={formData.diets.includes("paleolithic")}
                onChange={handleChange}
              />
              <LabelCheckbox htmlFor="paleolithic">Paleolithic</LabelCheckbox>
            </AlCheckBox>
            <AlCheckBox>
              <CheckboxInput
                type="checkbox"
                id="primal"
                name="diets"
                value="primal"
                checked={formData.diets.includes("primal")}
                onChange={handleChange}
              />
              <LabelCheckbox htmlFor="primal">Primal</LabelCheckbox>
            </AlCheckBox>
            <AlCheckBox>
              <CheckboxInput
                type="checkbox"
                id="whole30"
                name="diets"
                value="whole 30"
                checked={formData.diets.includes("whole 30")}
                onChange={handleChange}
              />
              <LabelCheckbox htmlFor="whole 30">Whole 30</LabelCheckbox>
            </AlCheckBox>
          </div>
        </DivCheckbox>
      </div>
      <MyButtonStyled>Crear Receta</MyButtonStyled>
    </FondoForm>
    </FlexGeneral>
    </BgDiv>
  )
}

export default Form;
