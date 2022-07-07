import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const aboutCompany  = styled.div`
    &.aboutCompany{
        background: url(../images/about-webenix-bg.jpg) no-repeat;
        background-size: cover;
        padding:120px 0px;

        ${mediaQueries("lg")`  
            padding: 90px 0px;
        `}
        ${mediaQueries("mobile")`  
            padding: 70px 0px;
            background-position: center;
        `}
        ${mediaQueries("xxs")`  
            padding: 50px 0px;
        `}
    }
    & .aboutContentbox {
        padding-right: 30px;

        ${mediaQueries("mobile")`  
            text-align: center;
            padding-right: 12px;
            padding-bottom: 50px;
        `}
    }
    .container{
        ${mediaQueries("llg")`  
            max-width: 100%;
            padding: 0 20px;
        `}
    }
`;
export const compnayHeading  = styled.h2`
    font-size: 48px;
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    margin-bottom: 40px;
    line-height: 1.3;

    ${mediaQueries("lg")`  
        font-size: 38px;
        margin-bottom: 20px;
    `}
    ${mediaQueries("tablet")`  
        font-size: 34px;
    `}
    ${mediaQueries("sm")`  
        font-size: 30px;
    `}
`;
export const greenText  = styled.span`
    &.textGreen{ 
        font-family: "Montserrat", sans-serif;
        color: #5ebe81;
        text-transform: uppercase;
        font-weight: 700;
    }
`;
export const copnayText  = styled.p`
    font-family: "DIN Pro Medium";
    font-weight: 500;
    font-size: 20px;
    color: #000;
    letter-spacing: 1px;
    margin-bottom: 60px;

    ${mediaQueries("lg")`  
        font-size: 18px;
        margin-bottom: 30px;
    `}
    ${mediaQueries("tablet")`  
        font-size: 16px;
    `}
    
`;