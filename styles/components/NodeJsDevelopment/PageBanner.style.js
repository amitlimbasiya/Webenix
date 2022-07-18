import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const PageBannerWrapper  = styled.div` 
    background-color: #dbf5d1;  
    position: relative;
    overflow: hidden;

    &:before{
        content: '';
        position: absolute;
        bottom:0px;
        left:0px;
        background: url('images/nodejsDevelopment/solution-banner-shape.png') no-repeat;
        height: 328px;
        width: 713px;
    }

    .container{      
        position: relative;
        padding-top: 200px;
        padding-bottom: 150px;
        padding-left: 30px;
        padding-right: 30px;
        max-width: 1430px;

        ${mediaQueries("xxl")`
            padding-top: 180px;
            padding-bottom: 120px;
        `}
        ${mediaQueries("xl")`
            padding-top: 150px;
            padding-bottom: 100px;
        `}
        ${mediaQueries("llg")`
            padding-left: 20px;
            padding-right: 20px;
        `}
        ${mediaQueries("tablet")`
            padding-top: 120px;
            padding-bottom: 80px;
        `}
        ${mediaQueries("mobile")`
            padding-top: 100px;
            padding-bottom: 50px;
        `}
    } 

    .row{
        align-items:center;
    }
    .pagebannerimg-col{
        text-align: right;
    }
    .pagebannerimg-col img{
        height: 250px;
        width: 100%;
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

`;

export const PageBannerContentPart  = styled.div` 
    padding-right: 80px;
    
    ${mediaQueries("xlx")`
        padding-right: 0px;
    `}
    
    h1{ 
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        font-size: 42px;
        letter-spacing: 0.2px;
        color: #000;
        margin-bottom: 20px;

        ${mediaQueries("mobile")` 
            font-size: 36px;
        `} 
    }


    p{
        font-family: "DINPro-Medium";
        font-size: 22px;
        line-height: 32px;
        color: #000;
        margin: 0px 0px 15px;

        &:last-child{
            margin: 0px 0px 0px;
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
        padding-left: 00px;
        padding-right: 00px; 
    `} 

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
