import React from 'react';
import CardsContainer from '../../components/CardsConteiner/CardsConteiner';
import styled from 'styled-components';

const FondoDiv = styled.div`
background-image: url(https://uploads-ssl.webflow.com/604f8c146baf6a1b1247a23e/60a7f93cdfb901d31d4c7fcb_%E7%BD%91%E7%AB%99blog%20cover%20%284%29.png);
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
background-position: right bottom;
margin: 0;
height: 100vh;
`

const Home = (props) => {
    return (
        <FondoDiv>
            <div>
                <h1>esta es la vista de Home</h1>
                <CardsContainer searchName={props.searchName} />
            </div>
        </FondoDiv>
    );
}

export default Home;