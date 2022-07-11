import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const BenefitWrapper  = styled.div` 

    padding: 120px 0px 60px;
    position: relative;   

    ${mediaQueries("llg")` 
        padding-top: 80px;
        padding-bottom: 00px;
    `}  

    ${mediaQueries("mobile")` 
        padding-top: 60px;
        padding-bottom: 0px;
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
        margin-bottom: 80px;
    }
    
`;


export const SectionTagline  = styled.div`
 
    margin-bottom: 100px;


    ${mediaQueries("llg")` 
        margin-bottom: 100px;
    `} 

   
    ${mediaQueries("mobile")` 
        margin-bottom: 90px;
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

export const BenefitTitle  = styled.h3`
    background: rgb(240,240,240);
    background: -moz-linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 100%);
    background: linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 100%);
    margin-top: -100px;
    padding: 0px 15px;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    color: #000;
    font-weight: 700;
    letter-spacing: 0.4px;
    line-height: 30px;
    border-radius: 10px;
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;


    ${mediaQueries("llg")`
        font-size: 22px;
        line-height: 28px;
        min-height: 90px;
    `}


    ${mediaQueries("mobile")`
        font-size: 18px;
        line-height: 28px;
        min-height: 70px;
    `}

        
`;

export const BenefibtBox  = styled.div`

    background: #f0f0f0;
    padding: 50px 20px;
    border-radius: 20px;
    text-align: center;
    margin-bottom: 0px;
    height: 100%;

    img{
        max-width: 75px;
        width: 75px;
        height: 75px;
        margin: 0px auto 35px;


        ${mediaQueries("mobile")` 
            width: 50px;
            height: 50px;
            margin: 0px auto 10px;
        `}
    }

    p{
        font-size: 20px;
        font-family: 'DINPro-Regular';
        color: #000;
        line-height: 1.5;
        text-align: center;
        margin-bottom: 0;

        ${mediaQueries("llg")` 
            font-size: 16px;
            padding: 15px 0px;
        `}  
    }

    ${mediaQueries("mobile")` 
       padding-bottom: 30px;
    `}
        
`;



