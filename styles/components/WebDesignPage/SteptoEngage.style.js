import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const SteptoEngageWrapper  = styled.div` 

    margin-top: -320px;


    ${mediaQueriesmin("xxl")`  
       .container{
        max-width: 1440px;
       }
    `} 

    ${mediaQueries("tablet")`  
       .container{
            max-width: 100%;
            padding-left: 30px;
            padding-right: 30px;
       }
    `} 

   

`;


export const SectionTagline  = styled.div`
 
    margin-bottom: 200px;

    ${mediaQueries("llg")`  
        margin-bottom: 120px
    `}  

    ${mediaQueries("tablet")`  
        margin-bottom: 80px
    `}

    ${mediaQueries("mobile")` 
        margin-bottom: 60px 
    `} 

    ${mediaQueries("xxs")` 
        margin-bottom: 30px;
    `} 

    .before-dash{ 
        position: relative; 
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.2px;
        padding-left: 45px; 

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

        ${mediaQueries("llg")` 
            font-size: 36px;
            line-height: 55px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 26px;
            line-height: 40px;
        `}
    }
    
`;

export const SteptoEngageSection  = styled.div` 
    background-color: #424a7a;
    padding-bottom: 60px;

    ${mediaQueries("llg")` 
        padding-bottom: 80px;
    `}  

    ${mediaQueries("mobile")` 
        padding-top: 80px;
        padding-bottom: 50px;
    `};

`;


export const SteptoEngageBlock  = styled.div` 

    display: grid;
    grid-template-columns: 28.25% 28.25% 28.25% auto;

    ${mediaQueries("llg")` 
        grid-template-columns: 28% 28% 28% auto;
    `} 

    ${mediaQueries("mobile")` 
        grid-template-columns: repeat(1,1fr);
        text-align: center;
        justify-items: center;
        justify-content: center;
    `}

`;

export const SteptoEngageBox  = styled.div` 

   
    position: relative;

    ${mediaQueries("mobile")` 
       max-width: 250px;
       margin-bottom: 30px;
    `}



    &:not(:last-child)::before{
        content: '';
        position: absolute;
        right: 0;
        top: 37px;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 8px solid #fff;
        width: 46%;
        -webkit-animation: slide-in-left 5s linear infinite forwards;
        animation: slide-in-left 5s linear infinite forwards;

        ${mediaQueries("tablet")`  
            top: 23px
        `}

        ${mediaQueries("mobile")` 
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            border-top: 8px solid #fff;
            width: auto;
            left: auto;
            right: 0;
            z-index: 99;
            height: 80px;
            top: auto;
            bottom: 0;
            left: 0;
            margin-left: auto;
            margin-right: auto;
            width: 10px;
            -webkit-animation: slide-in-down 5s linear infinite forwards;
            animation: slide-in-down 5s linear infinite forwards;
        `}
    } 

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 45px;
        right: 0;
        font-size: 22px;
        color: #fff;
        border-bottom: 1px dashed #fff;
        width: 46%;

        ${mediaQueries("tablet")`  
            top: 30px;
        `}
        
        ${mediaQueries("mobile")`  
            top: 0;
            border-bottom: none;
            border-left: 1px dashed #fff;
            left: 0;
            right: 0;
            margin: 30px auto 0;
            width: 1px;
            height: 80px;
            position: relative;
            display: inline-block;
        `}


    }

    @-webkit-keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
        50%{
            -webkit-transform: translateX(50%);
            transform: translateX(50%);
            opacity:0.6
        }
        100% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity:0.3;
        }
    }

    @keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
        50%{
            -webkit-transform: translateX(50%);
            transform: translateX(50%);
            opacity:0.6
        }
        100% {
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            opacity:0.3;
        }
    }

    @keyframes slide-in-down {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
        50%{
            -webkit-transform: translateY(50%);
            transform: translateY(50%);
            opacity:0.6
        }
        100% {
            -webkit-transform: translateY(100%);
            transform: translateY-(100%);
            opacity:0.3;
        }
    }


    p{
        font-size: 20px;
        font-family: "DINPro-Medium";
        color: #fff;
        line-height: 32px;
        margin-top: 37px;
        letter-spacing: 0.4px;
        margin-bottom: 0;
        max-width: 240px;

        ${mediaQueries("tablet")`  
            font-size: 18px;
            line-height: 30px;
            letter-spacing: 0.2px;
            max-width: 170px;
        `}

        ${mediaQueries("mobile")` 
            max-width: 100%;
            font-size: 17px;
            line-height: 28px;
            margin-top: 15px;
        `}
    }

`;

export const NumberShapeBox  = styled.div` 
    font-size: 60px;
    font-family: "Montserrat", sans-serif;
    color: #000;
    font-weight: 700;
    line-height: 134px;
    border-radius: 20px;
    position: relative;
    text-align: center;
    background: #fff;
    width: 134px;
    height: 134px;
    box-shadow: 0px 0px 30px rgb(0 0 0 / 30%);
    -webkit-box-shadow: 0px 0px 30px rgb(0 0 0 / 30%);
    transform: rotate(45deg);
    left: 30px;
    margin-top: -67px;

    ${mediaQueries("llg")` 
        width: 100px;
        height: 100px;
        line-height: 100px;
        font-size: 44px;
        margin-top: -50px;
    `}  

    ${mediaQueries("tablet")`  
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: 36px;
        margin-top: -35px;
    `} 

    ${mediaQueries("mobile")` 
       left: 0;
       margin: 0 auto;
    `}

    span{
        position: relative;
        font-family: "Montserrat",sans-serif;
        font-weight: 700;
        z-index: 1;
        transform: rotate(-45deg);
        display: inline-block;
    }
`;

