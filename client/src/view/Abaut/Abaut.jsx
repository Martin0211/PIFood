import React from 'react';
import styled from 'styled-components';
import Foto from '../Abaut/yo.jpg'

const AbautH3 = styled.h3`
    font-family: 'ubuntu',sans-serif;
    font-weight: 300;
    padding-left: 10vw;
    padding-right: 10vw;
    font-size: 1.06vw;
`
const ImgFoto = styled.img`
width:15vw;
border-radius: 999vw;
margin: 1vw;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(https://i.ibb.co/FHTNKNH/Fondo-Abaut.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: right bottom;
    overflow: hidden;
    margin: 0;
    height: 700vw;
    `
    const DivLetras = styled.div`
    background-color: #ffffffa6;
    margin-right: 10vw;
    margin-left: 10vw;
    border-radius: 3vw;
    `

export default function Nav(props) {
    return (
        <Div>
           <ImgFoto src={Foto} alt="not found" />
            <DivLetras>
            <AbautH3>
                ¡Bienvenido a FOOD, la aplicación web creada por Martin Blanco, también conocido como Mr. White! Este es mi Proyecto Individual (PI) del Bootcamp de programación de Soy Henry, donde he puesto toda mi pasión y compromiso en su desarrollo.<br/><br/>

                FOOD es una plataforma culinaria para los amantes de la gastronomía. Explora, comparte y descubre una amplia variedad de deliciosas recetas. Encuentra inspiración en categorías de platos, desde entrantes hasta postres.<br/><br/>

                Agrega tus propias recetas únicas y compártelas con la comunidad de FOOD. Los usuarios pueden explorar diferentes dietas y tipos de alimentos, convirtiendo esta aplicación en un valioso recurso para aquellos con preferencias dietéticas específicas.<br/><br/>

                Mi formación en el Bootcamp me ha brindado conocimientos en tecnologías modernas como JavaScript, React, Redux, CSS, HTML, DB, NodeJS, SQL, entre otras, que he utilizado para crear esta aplicación.<br/><br/>

                Además de mi experiencia en desarrollo web, tengo conocimientos en modelado 3D e impresión 3D, mercadeo, marketing digital, ventas, reparación y mantenimiento de equipos electrónicos y redes.<br/><br/>

                ¡Disfruta explorando el delicioso mundo de la comida a través de FOOD!<br/><br/>

            </AbautH3>
        </DivLetras>
        </Div>
            
    )
};
