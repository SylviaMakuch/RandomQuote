import React from "react";
import MainBox from "./components/Mainbox";
import styled from "styled-components";

const AppLayoutContainer = styled.div`
    background-color: black;
   
`;

function App() {
    return (
        <AppLayoutContainer>
            <MainBox />
        </AppLayoutContainer>
    )
}
export default App;