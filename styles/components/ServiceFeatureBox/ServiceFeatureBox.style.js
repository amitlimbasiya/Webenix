import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/mediaQuery";

export const ServiceFeatureBox  = styled.div` 

    background: url(images/noisy-texture.png) repeat;

    .container{
        max-width: 1140px;
        padding-left: 0px;
        padding-right: 0px;
    }
    padding: 130px 30px 130px; 

    ${mediaQueries("llg")` 
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 90px;
        padding-bottom: 60px;
    `} 

    ${mediaQueries("mobile")` 
        padding-top: 60px;
        padding-bottom: 60px;
    `} 
    ${mediaQueries("xxs")` 
        padding-top: 50px;
        padding-bottom:30px;
    `} 
`; 

export const SectionTagline  = styled.div`

    margin-bottom: 50px;

    ${mediaQueries("llg")` 
        margin-bottom: 45px
    `} 

    ${mediaQueries("xl")` 
        margin-bottom:50px
    `} 

    ${mediaQueries("mobile")` 
        margin-bottom: 40px 
    `} 

    ${mediaQueries("xxs")` 
        margin-bottom: 30px 
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
export const ServiceBox  = styled.div`

    .container{
        max-width: 1140px;
        
        ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px;
        `} 
    } 

    position: relative; 

    &:before{
        content: '';
        position: absolute;
        left: 0px;
        top: 48%;
        transform: translateY(-50%);
        width: 100%;     
    }

    & .itemBoxes{
        margin-bottom: 30px;
        ${mediaQueries("sm")` 
            width: 50%;
        `} 
        ${mediaQueries("xxs")` 
            width: 100%;
        `}
    }
`;

export const boxPart  = styled.div`
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 5%);
    padding: 15px;
    position: relative;
    margin-bottom: 30px;
    position: relative;
    text-align: center;
    background-color: #fff;
    border-bottom: 5px solid transparent;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 0px;

    &.pinkPart{border-color: #ff7db1;}
    &.pinkPart svg{fill: #ff7db1;}

    &.redPart{border-color: #f44e42;}
    &.redPart svg{fill: #f44e42;} 

    &.yellowPart{border-color: #ffe875;}
    &.yellowPart svg{fill: #ffe875;} 

    &.PlatinumPart{border-color: #acaa9c;}
    &.PlatinumPart svg{fill: #acaa9c;} 

    &.greenPart{border-color: #7dfa92;}
    &.greenPart svg{fill: #7dfa92;} 

    &.lightPinkPart{border-color: #ffb4bc;}
    &.lightPinkPart svg{fill: #ffb4bc;} 
 
    &.purplePart{border-color: #cf99ff;}
    &.purplePart svg{fill: #cf99ff;} 

    &.greenlightPart{border-color: #a0e4d5;}
    &.greenlightPart svg{fill: #a0e4d5;} 

    &.saffronPart{border-color: #ff9d8f;}
    &.saffronPart svg{fill: #ff9d8f;} 

    &.blushPart{border-color: #f4a196;}
    &.blushPart svg{fill: #f4a196;}

    &.carolinaBluePart{border-color: #98b4e5;}
    &.carolinaBluePart svg{fill: #98b4e5;} 

    &.espressoPart{border-color: #612718;}
    &.espressoPart svg{fill: #612718;}

    
    ${mediaQueries("llg")` 
        padding: 30px 15px;
    `} 
    ${mediaQueries("sm")` 
        padding: 20px;
        overflow: hidden;
    `}

`;

export const partItem  = styled.div`
    &.textPart{
        width: 100%;        
        height: 100%; 
    }
    &.imgPart{
        text-align: center;
        width: 100%;
        padding-top: 50px;
        position: relative;
        margin-bottom: 30px;

        ${mediaQueries("tablet")` 
            padding-top: 30px;
        `} 
        ${mediaQueries("sm")` 
            padding-top: 20px;
            margin-bottom: 10px;
        `} 
        
        img{
            width: 90px !important;
            height: 90px !important;
            position: relative;
            z-index: 9;
            
            ${mediaQueries("sm")`
                width: 60px !important;
                height: 60px !important;
            `} 
        }
    }
    
`;
export const boxHeading  = styled.h3`
    font-size: 18px;
    font-family: 'Montserrat', sans-serif; 
    font-weight: 700; 
    color: #000;
    line-height: 1.25;
    letter-spacing: 0.2px;
    margin:0px;

    ${mediaQueries("llg")` 
        font-size: 16px;
    `}
`;
export const iconOverlay  = styled.div`
    position: absolute;
    left: 40%;
    top: 40%;
    z-index: 0;
    transform: translate(-50%, -50%);

    ${mediaQueries("sm")` 
        left: 45%;
        top: 45%;
    `} 

    &.overlayImg{

        svg{
            width: 100px;
            height: 100px;
            -webkit-animation: spin 10s linear infinite;
            -moz-animation: spin 10s linear infinite;
            animation: spin 10s linear infinite;
            opacity: 0.25;
            
            ${mediaQueries("sm")` 
                width: 80px;
                height: 80px;
            `} 
        }

    }
    
    @keyframes spin {
        0% {
            -webkit-transform: scaleX(1) skewY(0deg) translateX(0) translateY(-10px);
            transform: scaleX(1) skewY(0deg) translateX(0) translateY(-10px)
        }

        50% {
            -webkit-transform: scaleX(1.3) skewY(-20deg) translateX(25px) translateY(15px);
            transform: scaleX(1.3) skewY(-20deg) translateX(25px) translateY(15px)
        }

        to {
            -webkit-transform: scaleX(1) skewY(0deg) translateX(0) translateY(-10px);
            transform: scaleX(1) skewY(0deg) translateX(0) translateY(-10px)
        }
    }
`;
