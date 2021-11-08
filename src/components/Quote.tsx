import React from "react";
import styled from "styled-components";
import QuoteLogic from "./QuoteLogic";

const QuoteBox = styled.div`
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 1.3em;
    line-height: 1.5;
    letter-spacing: 1.5;
    padding: 30px 0px;
    text-align: center;

    @media screen and (max-width: 690px) {
        padding: 10%;
        font-size: 95%;
        letter-spacing: 2.0;
        line-height: 2.0;
    }
    `
export default function Qoute() {
    return(
        <QuoteBox>
        <QuoteLogic />
        </QuoteBox>
    )
};