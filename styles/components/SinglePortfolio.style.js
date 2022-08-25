import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const SinglePortfolioWrapper  = styled.div`
    
    padding-bottom: 100px;
    padding-top: 100px;
    position: relative;
    background-color: #fff7dd;
    z-index: 2;
    overflow:hidden;


    ${mediaQueries("lg")`
        padding-bottom: 70px;
        padding-top: 70px;
    `}

    ${mediaQueries("mobile")`
        padding-bottom: 40px;
        padding-top: 40px;
    `}


    &.zigzag-border-pattern::before{
        position: absolute;
        content: "";
        inset: 0;
        background: url('/images/zigzag-border.png') no-repeat;
        background-position: top right;
        opacity: 0.4;
        z-index: -1;
    }

    ${mediaQueries("lg")`
        .container{
            max-width: 100%;
            padding-left: 30px;
            padding-right: 30px;
        }
    `}

    ${mediaQueries("mobile")`
        .container{
            padding-left: 20px;
            padding-right: 20px;
        }
    `}


`;

export const PortfolioDescription  = styled.div`

    h3{
        font-size: 48px;
        font-weight: 700;
        line-height: 68px;
        color: #000;
        text-transform: uppercase;
        display: inline-block;
        border-bottom: 1px solid #000;
        letter-spacing: 0.2px;
        font-family: 'Montserrat',sans-serif;
        margin-bottom: 40px;


        ${mediaQueries("lg")`
            font-size: 36px;
            line-height: 56px;
            margin-bottom: 20px;
        `}
        ${mediaQueries("mobile")`
            font-size: 22px;
            line-height: 34px;
        `}
    }

    p{
        font-size: 24px;
        line-height: 38px;
        font-family: "DINPro-Medium";
        letter-spacing: 0.2px;

        ${mediaQueries("lg")`
            font-size: 20px;
            line-height: 30px;
        `}

        ${mediaQueries("mobile")`
            font-size: 16px;
            line-height: 26px;
        `}
    }
    
`;

export const PortfolioTechRow  = styled.div`
    
    display: grid;
    grid-template-columns: repeat(4,1fr);
    align-items: center;
    margin-top: 60px;
    grid-gap: 30px;
    font-size: 20px;

    ${mediaQueries("mobile")`
        grid-template-columns: repeat(2,1fr);
        margin-top: 30px;
    `}

    ${mediaQueries("xxs")`
        grid-template-columns: repeat(1,1fr);
    `}
`;

export const PortfolioTechBox  = styled.div`
    display: flex;
    align-items: center;

    p{
        margin-bottom: 0;
    }
    
`;

export const PortfolioTechIcon  = styled.div`
    
    width: 60px;
    height: 60px;
    display: flex;
    line-height: 60px;
    border-radius:100%;
    
    border: 1px solid #222;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    &.pink-bg{background-color: #fcbac9;}
    &.purple-bg{background-color: #c6bafc;}
    &.sky-bg{background-color: #b6f5fc;}
    &.yellow-bg{background-color: #ffd45e;}

    ${mediaQueries("lg")`
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin-right: 10px;
    `}   
`;

export const PortfolioTechContent  = styled.div`
    p{
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 0;

        ${mediaQueries("lg")`
            font-size: 14px;
        `}
    }
    a,
    h4{
        font-size: 20px;
        font-family: 'Montserrat',sans-serif;
        color: #000;
        font-weight: 700;
        margin-bottom: 0;

        ${mediaQueries("lg")`
            font-size: 18px;
        `}
        ${mediaQueries("mobile")`
            font-size: 16px;
        `}

    }
    a:hover{
        border-bottom: 1px solid #000;
        opacity: 0.75;
    }
`;

export const PortfolioBannerImg  = styled.div`

    margin-top: 100px;

    ${mediaQueries("mobile")`
         margin-top: 50px;
    `}

    img{
        border-radius: 20px;
        box-shadow: 0px 4px 20px rgba(0,0,0,0.8);
        max-width: 100%;
        height: auto;

        
    }
   
`;



