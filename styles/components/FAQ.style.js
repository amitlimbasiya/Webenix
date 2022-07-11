import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const FAQWrapper  = styled.div` 

    background-color:#f0f0f0;
    padding: 120px 0px 120px;
    position: relative;

    ${mediaQueries("llg")` 
        padding-top: 80px;
        padding-bottom: 80px;
    `}  

    ${mediaQueries("mobile")` 
        padding-top: 60px;
        padding-bottom: 30px;
    `}

    .container{   

        ${mediaQueries("xl")` 
            max-width: 100%;
            padding-left: 30px;
            padding-right: 30px;
        `}
        ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px;
        `}
    }

    [class*="col-"] {
        margin-bottom: 30px;
    }
    
    
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

export const FAQTitle  = styled.h3`
    font-size: 22px;
    line-height: 1.4;
    font-family: "Montserrat", sans-serif;
    color: #000;
    font-weight: 700;
    padding: 15px 22px;
    border-radius: 5px;
    background-image: url(../images/noisy-texture.png);
    background-size: contain;
    background-repeat: repeat;


    ${mediaQueries("llg")` 
       font-size: 18px;
       padding: 15px 20px;
    `}  
        
`;

export const FAQBox  = styled.div`

    border-radius: 5px;
    background-color: rgb(239, 243, 247);
    box-shadow: 0px 0px 14px rgb(0 0 0 / 30%);
    -webkit-box-shadow: 0px 0px 14px rgb(0 0 0 / 30%);
    height: 100%;

    p{
        font-size: 18px;
        line-height: 1.4;
        padding: 25px;
        font-family: "DINPro-Regular";
        font-weight: normal;

        ${mediaQueries("llg")` 
            font-size: 16px;
            padding: 15px 20px;
        `}  
    }
        
`;



