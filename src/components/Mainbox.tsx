import React from 'react';
import styled from 'styled-components';
import QuoteLogic from './QuoteLogic';

const MainContainer = styled.div`
    display: flex;
    background: linear-gradient(to left, #ff00d9, #08fffb);
    padding: 3px;
    /* margin: 10%; */
`;
const InnerContainer = styled.div`
    background: #000000;
    color: #ffffff;
    padding: 75px;
    margin: 10px;
    @media screen and (max-width: 500px) {
        padding: 8%;
    }
`;

const Header = styled.div`
    font-family: 'Playfair Display', serif;
    font-weight: 800;   
    letter-spacing: 2.0;
    padding: 20px 0px;
    text-align: center;
    font-size: 60px;
`;

export default function MainBox() {
    return (
        <MainContainer>
            <InnerContainer>
                <Header> Daily Quote</Header>
                <QuoteLogic />
            </InnerContainer>
        </MainContainer>
    )
};