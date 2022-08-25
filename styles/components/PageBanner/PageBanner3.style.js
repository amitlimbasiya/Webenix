import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const PageBannerWrapper  = styled.div` 
    &.lightPurplBg{
        background-color: rgb(223 224 246 / 50%);
        position: relative;
        overflow: hidden;
    }
    &.infraBg{
        background:url(images/infrastrureBg.jpg) no-repeat  top center / cover;
        position: relative;
        overflow: hidden;
    }

    &.top-bottom{overflow: hidden;}
    &.top-bottom::before{
        position: absolute;
        content: "";
        left: -30px;
        opacity: 1;
        bottom: -30px;
        z-index: 0;
        background-image: url(images/Infrastructure-bottomleft-shape.svg);
        width: 600px;
        height: 500px;
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: contain;
        animation: distract 6s ease-out infinite !important;
    }

    .container{      
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
        max-width: 1430px;

        
        ${mediaQueries("llg")`
            padding-left: 20px;
            padding-right: 20px;
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
        background: rgb(210, 245, 238);
    }
    &.bg_lightgreen.pagebanner-shape::before{
        
    }
    &.pagebanner-shape::before{
        content: '';
        position: absolute;
        bottom:0px;
        left:0px;
        background-color: rgb(188, 243, 232);
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
        justify-content: center;
    }
    .at-right-bottom{
        position: absolute;
        bottom: -7px;
        right: 0;
    }

    @keyframes distract {
        0%,
        97%,
        to {
            -webkit-transform:scale(1);
            transform:scale(1)
        }
        20%,
        68% {
            -webkit-transform:scaleX(.98) scaleY(.90);
            transform:scaleX(.98) scaleY(.90);
        }
        48% {
            -webkit-transform:scaleX(.96) scaleY(1);
            transform:scaleX(.96) scale(1);
        }
        80% {
            -webkit-transform:scaleX(.98) scaleY(1);
            transform:scaleX(.98) scaleY(1);
        }
    }
`;

export const PageBannerContentPart  = styled.div` 
    
    h1{ 
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        font-size: 42px;
        letter-spacing: 0.2px;
        color: #000;
        margin-bottom:8px;

        ${mediaQueries("mobile")` 
            font-size: 32px;
            margin-bottom: 15px;
        `} 
    }
    span{ 
        position: relative;
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        font-size: 42px;
        line-height: 1;
        color: #000;
        display: inline-block;

        ${mediaQueries("mobile")` 
            font-size: 32px;
            margin-bottom: 15px;
        `} 

        :before{
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            bottom: 0px;
            background-color: rgba(27,167,140,0.3);
            height: 6px;
        }
    }
`;

export const PageBannerImagePart  = styled.div` 
    display: flex;   
`;


export const IntroductionWrapper  = styled.div`     
    padding-top: 120px;
    padding-bottom: 250px;       
`;

export const BackHeading  = styled.div`
    &.backHeading{
        position: absolute;
        left: 0%;
        bottom: 0px;
        font-size: 665px;
        line-height: 515px;
        text-transform: uppercase;
        font-weight: bold;
        color: #000;
        opacity: 0.03;
        font-family: "DINPro-Bold";

        ${mediaQueries("xlx")` 
            font-size: 515px;
            line-height: 415px;
        `} 
        ${mediaQueries("llg")` 
            font-size: 435px;
            line-height: 345px;
        `} 
        ${mediaQueries("tablet")` 
            font-size: 285px;
            line-height: 225px;
        `} 
        ${mediaQueries("mobile")` 
            font-size: 245px;
            line-height: 195px;
        `}
        ${mediaQueries("sm")` 
            font-size: 155px;
            line-height: 115px;
        `} 
    }
`;
