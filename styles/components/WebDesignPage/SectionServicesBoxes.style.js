import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/mediaQuery";

export const SectionServiceTop  = styled.div`  
    .container{
        max-width: 1140px;
        padding-left: 0px;
        padding-right: 0px;
    }
    padding: 130px 30px 50px;
    background-image: url("images/noisy-texture.png");  

    ${mediaQueries("llg")` 
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 90px;
        padding-bottom: 50px;
    `} 

    ${mediaQueries("mobile")` 
        padding-top: 60px;
        padding-bottom: 30px;
    `} 
    ${mediaQueries("xxs")` 
        padding-top: 50px;
        padding-bottom:30px;
    `} 
`; 

export const SectionTagline  = styled.div`
 
    .before-dash{ 
        position: relative;
        font-size: 20px;
        line-height: 38px;
        letter-spacing: 0.2px;
        padding-left: 45px; 
        font-family: 'Montserrat', sans-serif; 
        font-style: italic;
        font-weight: 500;
        color: rgb(64, 64, 64);


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

    background-image: url("images/noisy-texture.png");  
    padding-bottom: 120px;
    position: relative;

    ${mediaQueries("llg")` 
        padding-bottom: 90px;
    `}

    ${mediaQueries("tablet")` 
        padding-bottom: 70px;
    `}
    
    ${mediaQueries("mobile")` 
        padding-bottom: 50px;
    `} 
    ${mediaQueries("xxs")` 
        padding-bottom: 40px;
    `} 

    .itemBoxes:nth-child(even) {
        margin-top: 30px;

        ${mediaQueries("tablet")` 
            margin-top: 20px;
            margin-bottom: 20px;
        `} 
    }

    &:before{
        content: '';
        position: absolute;
        left: 0px;
        top: 48%;
        transform: translateY(-50%);
        width: 100%;
        height: 480px;
        background: #efefef url("images/noisy-texture.png") repeat;
    }
`;
export const boxPart  = styled.div`
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 5%);
    padding: 30px 30px 30px 60px;
    position: relative;
    display: flex;
    align-items: top;
    justify-content: space-between;
    position: relative;

    ${mediaQueries("tablet")` 
        padding: 20px 20px 20px 40px;
    `} 
    ${mediaQueries("sm")` 
        padding: 20px 20px 20px 30px;
        overflow: hidden;
    `}  
    
    &:before{
        content: '';
        border-top-right-radius:10px;
        border-bottom-right-radius: 10px;
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 80%;
        
        ${mediaQueries("sm")` 
            width: 10px;
        `}
    }
    &.pinkPart{
        &:before{
            background-color: #ff7db1;
        }
    }
    &.orangePart{
        &:before{
            background-color: #ffb47a;
        }
    }
    &.yellowPart{
        &:before{
            background-color: #ffe875;
        }
    }
    &.greenPart{
        &:before{
            background-color: #7dfa92;
        }
    }   
    &.bluePart{
        &:before{
            background-color: #05d5fa;
        }
    }
    &.purplePart{
        &:before{
            background-color: #cf99ff;
        }
    }
`;
export const partItem  = styled.div`
    &.textPart{
        width: 60%;

        ${mediaQueries("tablet")` 
            width: 70%;
        `} 
    }
    .linkPart{
        font-size: 18px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 500; 
        color: #000;
        font-style: italic;
        line-height: 1.2;
        letter-spacing: 0.6px;
        margin: 0px;
        display: inline-block;

        ${mediaQueries("tablet")` 
            font-size: 16px;
        `}  
        

        &:hover{
            color:#67c187;
        }
    }

    &.imgPart{
        text-align: center;
        width: 40%;
        padding-top: 50px;
        position: relative;

        ${mediaQueries("tablet")` 
            padding-left:10px;
            width: 30%;
        `}
        
        ${mediaQueries("mobile")` 
            padding-top:15px;
        `}

        ${mediaQueries("sm")` 
            padding-top: 40px;
        `} 
        
        img{
            width: 100px;
            height: 100px;
            position: relative;
            z-index: 9;
            
            ${mediaQueries("mobile")` 
                width: 80px;
                height: 80px;
            `} 
            ${mediaQueries("sm")` 
                width: 60px;
                height: 60px;
            `} 
        }
    }
`;
export const boxHeading  = styled.h3`
    font-size: 28px;
    font-family: 'Montserrat', sans-serif; 
    font-weight: 700; 
    color: #000;
    line-height: 1.2;
    letter-spacing: 0.2px;
    margin: 0px 0px 10px;

    ${mediaQueries("llg")` 
        font-size: 24px;
    `}      
`;
export const textPart  = styled.p`
    font-size: 18px;
    font-family: "DINPro-Regular";
    font-weight: normal; 
    color: #000;
    line-height: 1.4;
    letter-spacing: 0.4px;
    margin: 0px 0px 20px;
    height: 176px;
    overflow: hidden;

    ${mediaQueries("tablet")` 
        height: auto;
    `} 
    ${mediaQueries("mobile")` 
        font-size: 16px;
        margin: 0px 0px 10px;
    `} 
`;
export const iconOverlay  = styled.div`
    position: absolute;
    left: 40%;
    top: 40%;
    z-index: 0;
    transform: translate(-50%, -50%);

    ${mediaQueries("sm")` 
        top: 30%;
    `} 

    &.overlayImg{

         img{
            width: 120px;
            height: 120px;
            -webkit-animation: spin 10s linear infinite;
            -moz-animation: spin 10s linear infinite;
            animation: spin 10s linear infinite;
            
            ${mediaQueries("sm")` 
                width: 90px;
                height: 90px;
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
