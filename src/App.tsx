import React from "react";
import MainBox from "./components/Mainbox";
import styled from "styled-components";

const AppLayoutContainer = styled.img`
    min-height: 100%;
    background-color: black;
    

    @media screen and (max-width: 2000px) {
        padding: 40px 5%;
    }    
    @media screen and (max-width: 600px) {
        padding: 20px 5%;
    }      
`;

function App() {
    return (
        <AppLayoutContainer>
            <MainBox />
        </AppLayoutContainer>
    )
}
export default App;