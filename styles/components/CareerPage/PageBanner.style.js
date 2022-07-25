import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const PageBannerWrapper  = styled.div` 
    background:url(images/career/banner-bg.jpg) no-repeat  top center / cover;
    position: relative;

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
        padding-top: 180px;
        /* padding-bottom: 180px; */
        padding-left: 30px;
        padding-right: 30px;
        max-width: 1430px;

        ${mediaQueries("xl")`
            padding-top: 150px;
            padding-bottom: 0px;
        `}
        ${mediaQueries("llg")`
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 110px;
        `}
        ${mediaQueries("mobile")`
            padding-top: 100px;
            padding-bottom: 60px;
        `}
    } 

    .row{
        align-items: flex-end;
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

    @keyframes distract {
        0%,
        97%,
        to {
        -webkit-transform:scale(1);
        transform:scale(1)
        }
        20%,
        68% {
        -webkit-transform:scaleX(.90) scaleY(.98);
        transform:scaleX(.90) scaleY(.98)
        }
        48% {
        -webkit-transform:scaleX(1) scaleY(.96);
        transform:scaleX(1) scaleY(.96)
        }
        80% {
        -webkit-transform:scaleX(1) scaleY(.98);
        transform:scaleX(1) scaleY(.98)
        }
    }
`;

export const PageBannerContentPart  = styled.div` 
    padding-right: 80px;
    padding-bottom: 130px;
    
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
        margin-bottom: 0px;

        ${mediaQueries("mobile")` 
            font-size: 36px;
        `} 
    }


    p{
        font-family: "DINPro-Medium";
        font-size: 22px;
        line-height: 32px;
        color: #000;
        margin: 0px;

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
        padding-left: 00px;
        padding-right: 00px; 
    `} 


`;

export const PageBannerImagePart  = styled.div` 

`;


export const IntroductionWrapper  = styled.div` 
    
    padding-top: 120px;
    padding-bottom: 250px;   
    
`;
