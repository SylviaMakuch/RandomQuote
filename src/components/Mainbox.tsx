import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 250px;
    padding: 1rem;
    position: relative;
    background: linear-gradient(to right, red, purple);
    padding: 3px;
`;

const Header = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 70px;
    line-height: 2.0;
    letter-spacing: 2.0;
    padding:50px 0px;
    @media screen and (max-width: 1200px) {
        font-size: 32px;
        text-align: center;
    }
`;

export default function Qoutation() {
    <MainContainer>
        <Header> The API says...</Header>
    </MainContainer>
};