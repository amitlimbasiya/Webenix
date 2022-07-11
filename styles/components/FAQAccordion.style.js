import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const FAQAccordionWrapper  = styled.div` 

    padding: 0px 0 100px;  


    .container{
        max-width: 1140px;
    }
    
    
    .accordion .accordion-item {
        border-radius: 5px;
        background-color: rgb(239, 243, 247);
        box-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
        margin-bottom:  20px;
    }

    .accordion .accordion-button{
        background-color: transparent;
        font-size: 22px;
        line-height: 1.4;
        font-family: "Montserrat", sans-serif;
        color: #000;
        font-weight: 700;
        padding: 15px 30px;
        border-radius: 5px 5px 0 0;
        background-image: url(../images/noisy-texture.png);
        background-size: contain;
        background-repeat: repeat;
        border-bottom: none;


        &:focus{
            box-shadow: none;
        }

        &::after{
            display: none;
        }

        svg{
            right: 25px;
            position: absolute;
            transition: transform .2s ease-in-out;
        }

        &:not(.collapsed) svg {
            transform: rotate(-180deg);
        }


        ${mediaQueries("llg")` 
            font-size: 20px;
            padding: 15px 20px;
        `} 

    }
    

    .accordion .accordion-body{
        border-radius: 5px;
        background-color: rgb(239, 243, 247);
        padding: 20px 30px;
    }

    .accordion .accordion-body p {
        margin-bottom: 0;
        font-size: 18px;
    }


    ${mediaQueries("llg")` 
       padding: 15px 20px 60px;
    `} 

    ${mediaQueries("mobile")` 
       padding-bottom: 40px;
    `} 

    
`;


export const SectionTagline  = styled.div`
 
    margin-bottom: 80px;


    ${mediaQueries("llg")` 
        margin-bottom: 60px;
    `} 

   
    ${mediaQueries("mobile")` 
        margin-bottom: 40px;
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
        font-size: 48px;
        line-height: 68px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 700; 

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
 
