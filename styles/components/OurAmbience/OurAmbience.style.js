import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const OurAmbienceWrapper  = styled.div`  

    background: #f6f2dc;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,251,237,0.8) 10%, rgba(255,239,187,0.5) 100%);
    padding-top: 0px;
    padding-bottom: 100px;
    text-align: center;    
    margin-top: 120px;

    .ambience-gallery-main{
        position: relative;
    }

   .ambience-gallery-main::after {
        position: absolute;
        content: "";
        right: -5px;
        top: 25px;
        bottom: 15px;
        background: url("images/dots.svg") repeat-y;
        width: 210px;
        z-index: 2;       
        opacity: .35;

        ${mediaQueries("mobile")` 
            width: 100px;
        `}
    }

`; 

export const OurAmbienceTitle  = styled.div`  

    margin-top: -40px;    
    margin-bottom: 60px;
    display: inline-block;


    ${mediaQueries("mobile")`    
       img{max-width: 85px;}
       margin-top: -35px;    
    `}
    
    
    h3{
        font-size: 48px;
        line-height: normal;
        letter-spacing: 0.2px;
        font-weight: 900;
        color: #000;
        font-family: 'Montserrat',sans-serif;
        margin-top: 15px;

        ${mediaQueries("lg")` 
            font-size: 38px;
            margin-top: 10px;
        `} 

        ${mediaQueries("mobile")` 
            font-size: 28px;
            margin-top: 10px;
        `}

    }

`; 

export const OurAmbienceGallery  = styled.div`  
    padding: 0 8px;

    ${mediaQueries("mobile")` 
        grid-gap: 16px;
    `}

    .ambience-gallery-wrapper{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 24px;

        ${mediaQueries("mobile")` 
            grid-gap: 16px;
        `}
    }

    img{
        border: 12px solid #fff;
        width: 100%;
        height: 100%;
        object-fit: cover;

        ${mediaQueries("mobile")` 
            border: 8px solid #fff;
        `}
    }
   

`; 

export const OurAmbienceGalleryBox  = styled.div` 
   height: 100%;

`; 