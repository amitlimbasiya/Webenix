import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/mediaQuery";

export const SectionIntroWrapper  = styled.div`  
    position: relative;
    .container{
        max-width: 1140px;
        padding-left: 0px;
        padding-right: 0px;
    } 

    background-image: url("images/noisy-texture.png");  
    padding-top: 120px; 
    padding-bottom: 100px; 
    padding-left: 30px;
    padding-right: 30px;

    &.noBg{
        background: transparent;
    }

    .containerBig{      
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
        max-width: 1430px;

        ${mediaQueries("llg")`
            padding-left: 20px;
            padding-right: 20px;
        `}
    } 

    .separatorPart:before{
        content: '';
        position: absolute;
        left: 50%;
        bottom: -43px;
        height: 43px;
        width: 100%;
        transform: translateX(-50%);
        background: url("images/solution/shaprator-shadow.png");  
        background-size: contain;
        background-repeat: no-repeat;
    }

    
    ${mediaQueries("llg")` 
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 90px;
        padding-bottom: 90px;
    `} 

    ${mediaQueries("mobile")` 
        padding-top: 60px;
        padding-bottom: 60px;
    `} 
    ${mediaQueries("xxs")` 
        padding-top: 50px;
        padding-bottom:50px;
    `} 

`; 

export const SectionTagline  = styled.div`
 
    margin-bottom:20px;
    
    ${mediaQueries("mobile")` 
        margin-bottom: 10px 
    `} 

    .before-dash{ 
        position: relative;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.2px;
        padding-left: 45px; 
        font-style: italic;

        ${mediaQueries("llg")` 
            font-size: 20px;
            line-height: 30px;
            margin-bottom: 10px;
            display: inline-block;
        `} 

        ${mediaQueries("llg")` 
            font-size: 20px;
            line-height: 30px;
        `} 
    }

    .before-dash::before{
        position: absolute; 
        content: "";
        height: 2px;
        width: 30px;
        position: absolute;
        left: 0;
        background-color: #000;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }

    h2{
        font-size: 40px;
        line-height: 50px;
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        margin: 0;

        ${mediaQueries("xlx")` 
            font-size: 30px;
            line-height: 40px;
        `}  

        ${mediaQueries("llg")` 
            font-size: 26px;
            line-height: 36px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 24px;
            line-height: 34px;
        `}
    }
    
`;

export const SectionHeader  = styled.div` 

    h3{
        font-size: 32px;
        line-height: 42px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 600;

        ${mediaQueries("xlx")` 
            font-size: 28px;
            line-height: 38px;
        `}

        ${mediaQueries("llg")` 
            font-size: 22px;
            line-height: 32px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 18px;
            line-height: 28px;
        `} 

        ${mediaQueries("xxs")`
           font-size: 16px;
           line-height: 26px;
        `}

    } 

    p{
        font-family: "DINPro-Medium";
        font-size: 22px;
        line-height: 32px;
        color: #000;

        &:last-child{
            margin-bottom: 0px;
        }

        ${mediaQueries("xlx")` 
            font-size: 18px;
            line-height: 28px;
        `}

        ${mediaQueries("llg")` 
            font-size: 16px;
            line-height: 24px;
        `}  
    }
`;