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
            padding-left: 20px;
            padding-right: 20px;
       }
    `} 

   

`;


export const SectionTagline  = styled.div`
 
    margin-bottom: 150px;

    ${mediaQueries("llg")`  
        margin-bottom: 100px
    `}  

    ${mediaQueries("tablet")`  
        margin-bottom: 80px
    `}

    ${mediaQueries("mobile")` 
        margin-bottom: 50px 
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

export const SteptoEngageSection  = styled.div` 
    background-color: #424a7a;
    padding-bottom: 60px;

    ${mediaQueries("llg")` 
        padding-bottom: 50px;
    `}  

    ${mediaQueries("mobile")` 
        padding-top: 50px;
        padding-bottom: 20px;
    `};

`;


export const SteptoEngageBlock  = styled.div` 

    justify-content: space-between;
    display: flex;

    ${mediaQueries("mobile")` 
        flex-wrap: wrap;
        text-align: center;
        justify-items: center;
        justify-content: center;
    `}

`;

export const SteptoEngageBox  = styled.div` 

   
    position: relative;

    ${mediaQueries("mobile")` 
       width: 50%;
       margin-bottom: 30px;
    `}
    ${mediaQueries("sm")` 
       width: 100%;
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
        display: none;

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
        ${mediaQueries("sm")` 

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
        display: none;

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
            display: none;
        `}
        ${mediaQueries("sm")`  
            margin: 20px auto 0;
            width: 1px;
            height: 80px;
            position: relative;
            display: none;
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
        max-width: 250px;
        text-align: center;

        ${mediaQueries("llg")`  
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 0.2px;
            max-width: 180px;
            margin-top: 20px;
        `}

        ${mediaQueries("tablet")` 
            max-width: 100%;
            margin-top: 15px;
        `}
        ${mediaQueries("mobile")` 
            max-width: 200px;
            margin-top: 15px;
            margin-left: auto;
            margin-right: auto;
        `}
        ${mediaQueries("sm")` 
            font-size: 14px;
            line-height: 24px;
            margin-top: 15px;
        `}
    }

`;

export const NumberShapeBox  = styled.div` 
    font-size: 45px;
    font-family: "Montserrat", sans-serif;
    color: #424a7a;
    font-weight: 700;
    line-height: 170px;
    border-radius: 20px;
    position: relative;
    text-align: center;
    /* background: #fff; */
    width: 170px;
    height: 170px;
    /* box-shadow: 0px 0px 30px rgb(0 0 0 / 30%);
    -webkit-box-shadow: 0px 0px 30px rgb(0 0 0 / 30%);
    transform: rotate(45deg); */
    /* left: 0px; */
    margin-top: -85px;
    margin-left: auto;
    margin-right: auto;

    &.one{
        background: url('images/f-engage-1.svg') no-repeat;
    }
    &.two{
        background: url('images/f-engage-2.svg') no-repeat;
    }
    &.three{
        background: url('images/f-engage-3.svg') no-repeat;
    }
    &.four{
        background: url('images/f-engage-4.svg') no-repeat;
    }

    ${mediaQueries("llg")` 
        width: 150px;
        height: 150px;
        line-height: 150px;
        font-size: 35px;
        margin-top: -75px;
    `}  

    ${mediaQueries("tablet")`  
        width: 120px;
        height: 120px;
        line-height: 120px;
        font-size: 30px;
        margin-top: -60px;
    `} 

    ${mediaQueries("mobile")` 
        margin-top: 0px;
    `}

    span{
        position: relative;
        font-family: "Montserrat",sans-serif;
        font-weight: 700;
        z-index: 1;
        /* transform: rotate(-45deg); */
        display: inline-block;
    }
`;

