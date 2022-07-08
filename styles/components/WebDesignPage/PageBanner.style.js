import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const PageBannerWrapper  = styled.div` 
    background: url('images/webDesign/solution-banner-bg.jpg') no-repeat;  
    min-height: 700px;
    position: relative;
    overflow: hidden;
    ${mediaQueries("xl")`
        min-height: unset;
    `}
    &:before{
        content: '';
        position: absolute;
        bottom:0px;
        left:0px;
        background: url('images/webDesign/solution-banner-shape.png') no-repeat;          
        height: 328px;
        width: 713px;
    }

    .container{      
        position: relative;
        padding-top: 180px;
        padding-left: 30px;
        padding-right: 30px;
        max-width: 1430px;

        ${mediaQueries("xl")`
            padding-top: 150px;
            padding-bottom: 110px;
        `}
        ${mediaQueries("llg")`
            padding-left: 20px;
            padding-right: 20px;
        `}
        ${mediaQueries("mobile")`
            padding-top: 100px;
            padding-bottom: 60px;
        `}
    } 

    .row{
        align-items:center;
    }
    .pagebannerimg-col{
        text-align: right;
    }
    .pagebannerimg-col img{
        height: 430px;
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
    padding-right: 50px;

    ${mediaQueries("xll")`
        padding-right: 0px;
    `}
   

    h1{ 
        font-family: 'Montserrat', sans-serif;   
        font-weight: 900; 
        font-size: 48px;
        letter-spacing: 0.2px;
        color: #000;

        ${mediaQueries("mobile")` 
            font-size: 36px;
        `} 
    }


    p{
        font-family: "DINPro-Medium";
        font-size: 24px;
        line-height: 38px;
        color: #000;

        ${mediaQueries("mobile")` 
            font-size: 20px;
            line-height: 34px;
        `}
    }
     
    .btn-default{
        margin-top: 20px; 

 
        ${mediaQueries("xl")` 
             margin-top: 0px;
        `}
    }

    ${mediaQueries("xxl")` 
    //    padding-bottom: 90px; 
    //    padding-right: 90px;
    `} 

    ${mediaQueries("lg")` 
        // padding-bottom: 60px;
        // padding-left: 40px;
        // padding-right: 40px; 
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
