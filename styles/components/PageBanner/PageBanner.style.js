import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const PageBannerWrapper  = styled.div` 
    background-color: rgba(218,218,242,0.75);
    position: relative;
    overflow: hidden;

    &.darkGreenNoice{
        background:url(images/career/banner-bg.jpg) no-repeat  top center / cover;
    }
    &.top-right{overflow: hidden;}
    &.top-right::before{
        position: absolute;
        content: "";
        right: -50px;
        opacity: 1;
        top: -50px;
        z-index: 0;
        background-image: url(images/career/pagebanner-topright-shape.svg);
        width: 600px;
        height: 500px;
        background-repeat: no-repeat;
        background-position: top right;
        background-size: contain;
        animation: distract 6s ease-out infinite!important;
    }

    .container{      
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
        max-width: 1430px;

        
        ${mediaQueries("llg")`
            padding-left: 30px;
            padding-right: 30px;
        `}       
    } 

    .row{
        align-items: center;
        padding-top: 100px;
        min-height: 600px;


        ${mediaQueries("llg")` 
           min-height: auto;
           padding-top: 120px;
           padding-bottom: 100px;
        `} 

        ${mediaQueries("mobile")`          
           padding-top: 100px;
           padding-bottom: 60px;
        `} 

    }

    ${mediaQueries("xxl")`
        
        .pagebannerimg-col{
            position: relative;
        }

    `}   
    
    ${mediaQueries("llg")` 
        .pagebannercontent-col{
            width: 100%; 
        }
        .pagebannerimg-col{
            display: none;
        }      
    `} 

    &.bg_lightgreen{
        background-color: rgb(210, 245, 238);
    }
    &.bg_lightgreen.pagebanner-shape::before{
        background-color: rgb(188, 243, 232);
    }
    &.bgIceCold{
        background-color:#b8f4e8;
    }
    &.bgIceCold.pagebanner-shape::before{
        background-color: #adeddf;
    }
    &.bgMistyRose{
        background-color:#ffe1dd;
    }
    &.bgMistyRose.pagebanner-shape::before{
        background-color: #fbd9d4;
    }
    &.bgLightPink{
        background-color:#FFD1DF;
    }
    &.bgLightPink.pagebanner-shape::before{
        background-color: #ffc3db;
    }
    &.bgEggWhite{
        background-color:#ffefc6;
    }
    &.bgEggWhite.pagebanner-shape::before{
        background-color: #fde8b5;
    }
    &.bgLavenderMist{
        background-color:rgb(231, 226, 255);
    }
    &.bgLavenderMist.pagebanner-shape::before{
        background-color:#d9d1fc;
    }
    &.pagebanner-shape::before{
        content: '';
        position: absolute;
        bottom:0px;
        left:0px;
        
        -webkit-mask-image: url('images/banner-shape-before.svg');
        mask-image: url('images/banner-shape-before.svg') no-repeat;
        background-repeat:no-repeat;
        height: 328px;
        width: 710px;
        opacity: 1;

        ${mediaQueries("mobile")`
            height: 200px;
            background-size: contain;
        `}
    }

    &.pagebanner-align-center .row{
        align-items: center;
    }
    &.pagebanner-align-center .pagebanner-imgpart{
        justify-content: end;
    }
    .at-right-bottom{
        position: absolute;
        bottom: -7px;
        right: 0;
    }

`;

export const PageBannerContentPart  = styled.div` 
    padding-right: 100px;
    padding-bottom: 50px;
    
    ${mediaQueries("xll")`
        padding-right: 0px;
    `}
    ${mediaQueries("llg")`
        padding-bottom: 0px;
    `}
  

    h1{ 
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        font-size: 42px;
        letter-spacing: 0.2px;
        color: #000;
        margin-bottom: 20px;

        ${mediaQueries("mobile")` 
            font-size: 32px;
            margin-bottom: 15px;
        `} 
    }


    div, p{
        font-family: "DINPro-Medium";
        font-size: 22px;
        line-height: 32px;
        color: #000;
        margin: 0px 0px 15px;

        :last-child{
            margin: 0px;
        }

        ${mediaQueries("xl")` 
            font-size: 20px;
            line-height: 34px;
        `}
        ${mediaQueries("mobile")` 
            font-size: 18px;
            line-height: 28px;
        `}
    }
     
    .btn-default{
        margin-top: 25px; 
    }

    ${mediaQueries("mobile")` 
       text-align: center;
        padding-left: 0;
        padding-right: 0; 
    `}
`;

export const PageBannerImagePart  = styled.div` 
    display: flex;   
`;


export const IntroductionWrapper  = styled.div`     
    padding-top: 120px;
    padding-bottom: 250px;   
    
`;
