import React from "react";
import MainBox from "./components/Mainbox";
import styled from "styled-components";

const AppLayoutContainer = styled.div`
    background-color: black;
    display: contents;

    @media screen and (max-width: 2000px) {
        padding: 40px 5%;
        align-content: center;
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