import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/mediaQuery";

export const SectionIntroWrapper  = styled.div`  

    .container{
        max-width: 1140px;
        padding-left: 0px;
        padding-right: 0px;
    } 

    background-image: url("images/noisy-texture.png");  
    padding-top: 120px; 
    padding-bottom: 110px; 
    padding-left: 30px;
    padding-right: 30px;
    position: relative;

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

    &.separatorPart:before{
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
`; 

export const SectionTagline  = styled.div`
 
    margin-bottom: 50px;

    ${mediaQueries("llg")` 
        margin-bottom: 45px
    `} 

    ${mediaQueries("xl")` 
        margin-bottom:20px
    `} 

    ${mediaQueries("mobile")` 
        margin-bottom: 10px 
    `} 

    ${mediaQueries("xxs")` 
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
        font-size: 48px;
        line-height: 68px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 700; 
        margin: 0;

        ${mediaQueries("xl")` 
            font-size: 42px;
            line-height: 52px;
        `}  

        ${mediaQueries("llg")` 
            font-size: 36px;
            line-height: 46px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 26px;
            line-height: 36px;
        `}
    }
    
`;

export const SectionHeader  = styled.div` 

    h3{
        font-size: 36px;
        line-height: 50px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 600;

        ${mediaQueries("xl")` 
            font-size: 32px;
            line-height: 42px;
        `}

        ${mediaQueries("llg")` 
            font-size: 28px;
            line-height: 48px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 22px;
            line-height: 32px;
        `} 

        ${mediaQueries("xxs")`
           font-size: 22px;
           line-height: 32px;
        `}

    } 

    p{
        font-family: "DINPro-Medium";
        font-size: 24px;
        line-height: 38px;
        color: #000;

        &:last-child{
            margin-bottom: 0px;
        }

        ${mediaQueries("mobile")`
           font-size: 20px;
           line-height: 30px;
        `} 

        ${mediaQueries("xxs")`
           font-size: 16px;
           line-height: 26px;
        `} 
    }
`;