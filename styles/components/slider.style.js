import styled, { css } from "styled-components";
import { mediaQueries } from "../../utils/mediaQuery";

export const SliderCompany  = styled.div`
    &.homeSlider{
        display: inline-block;
        width: 100%;
        height: 100vh;
        position: relative;
        background: url(../images/home-banner-bg.jpg) no-repeat;
        background-size: cover;
        overflow: hidden;

        ${mediaQueries("mobile")`  
            height: auto;
            display: block;
        `}
    }
    .sliderBanner{
        height: calc(100vh - 110px);
        padding-top: 110px;
        justify-content: center;

        ${mediaQueries("mobile")`  
            height: auto;
            padding-top: 150px;
            padding-bottom: 100px;
        `}
        ${mediaQueries("sm")`  
            padding-top: 100px;
            padding-bottom: 60px;
        `}
    }
    .container{
        ${mediaQueries("llg")`  
            max-width: 100%;
            padding: 0 20px;
        `}
    }
`;
export const bannerLeft  = styled.div`
    
`;
export const bannerHeading  = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    line-height: 50px;
    letter-spacing: 0.6px; 
    font-weight: 500;
    margin-bottom: 0px;

    & strong{
        position: relative;
        display: inline-grid;
        font-family: "Montserrat", sans-serif;

        ::before {
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            bottom: 16px;
            background-color: rgba(27, 167, 140, 0.3);
            height: 8px;
        }
    }
    & .textGreen{
        font-weight: 900;
        font-family: "Montserrat", sans-serif;
        color:#5ebe81;
    }

    ${mediaQueries("llg")` 
        font-size: 28px;
        line-height: 48px;
    `}
    ${mediaQueries("tablet")` 
          text-align: center;
    `}
      
`;
export const bannerIcons  = styled.div`
    &.bannerIcons{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 50px;
        grid-gap: 30px;
        margin-left: -46px;

        ${mediaQueries("xl")` 
            margin-left: -25px;
        `}
        ${mediaQueries("tablet")` 
            margin-left: 0px;
        `}
        ${mediaQueries("sm")` 
            grid-template-columns: 1fr;
            margin-top: 40px;
            grid-gap: 20px;
        `}
    }
`;
export const iconBox = styled.div`
    &.bannerIcon{
        text-align: center;
        img{
            max-height: 90px;

            ${mediaQueries("sm")`
                max-height: 50px;
            `}
        }
        
    }
`;
export const iconHeading = styled.h2`
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 0.4px;
    margin-top: 20px;
    font-weight: 400;
`;

export const screenBottomBar = styled.div`
    &.btmBar{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fbfffb;
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        z-index: 2;

        ${mediaQueries("llg")` 
            padding: 10px 20px;
        `}
        ${mediaQueries("mobile")` 
            display: none;
        `}
    }
    & a{
        font-size: 22px;
        line-height: 35px;
        letter-spacing: 0.4px;
        color: #000;
        font-family: "DINPro-Medium";
        margin-right: 50px;

        ${mediaQueries("llg")` 
            font-size: 18px;
            margin-right: 20px;
        `}
        

        & img{
            width: 20px;
            height: 35px;
            margin-right: 10px;
        }

        &:last-child{
            margin-right: 0px;
        }

        &:hover{
            color: #5ebe81;
        }
    }
    
`;
export const leftPart = styled.div`
    &.leftPart{
        display: flex;
    }
`;
export const rightPart = styled.div`
    &.rightPart a{
        text-transform: uppercase;
        border-bottom: 1px solid #656664;

        &:hover{
            border-bottom-color: #5ebe81;
        }
    }
`;