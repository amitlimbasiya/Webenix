import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";


export const portolioSection  = styled.div`

    margin-bottom: 60px;
    overflow: hidden;

    .portfolio-box {
        margin-bottom: 50px;

        ${mediaQueries("mobile")`  
            margin-bottom: 30px;
        `}        
    }  
    .portfolio-box:nth-child(3n+1){
        clear: both;
    }
    .isotope-pager{
        text-align: center;
        position: relative;
        padding-top: 30px;
        margin-top: 20px;
        border-top: 2px solid #808080;
    }
    .isotope-pager a {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        font-size: 18px;
        transition: all 0.3s 0s linear;
        margin: 0 10px 0 0;
        font-family: "DINPro-Bold";
        font-weight: bold;
        display: inline-block;
    }
    .isotope-pager a:hover,
    .isotope-pager a.active{
        background: #808080;
        color: #fff;
    }

    ${mediaQueries("mobile")`  
        .container{
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
        }
    `}

`;

export const PortfolioFilterWrapper  = styled.div`

    text-align: center;
    padding-top: 80px;
    padding-bottom: 80px;

    &#stuff-filters{
        padding: 0 0 0;
        border-bottom: 1px solid #eee;
        font-family: "Montserrat",sans-serif;
        transition: all 0.3s ease-in-out;
        margin-bottom: 60px;
        padding-top: 90px;
    }
    p{
        display: inline-block;
        margin-bottom: 0;
    }
    &#stuff-filters input{
        display: none;
    }

    &#stuff-filters span {
        font-size: 20px;
        font-weight: 700;
        line-height: 40px;
        margin: 0 20px;
        padding: 10px 5px;
        position: relative;
        font-family: "Montserrat",sans-serif;
        transition: all 0.3s ease-in-out;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        font-style: normal;
        cursor: pointer;

        &::before{
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            bottom: 0;
            top: auto;
            background-color: #f16122;
            height: 5px;
            transition: all 0.3s ease-in-out;
            width: 0;

            ${mediaQueries("mobile")`  
                height: 3px;
                bottom: -7px;
            `}
        }

        ${mediaQueries("tablet")`  
            font-size: 18px;
            margin: 0 15px;
            padding: 8px 5px;
        `}

        ${mediaQueries("mobile")`  
            font-size: 14px;
            margin: 0 3px;
            padding: 5px 5px;
        `}
    }  
    
    .portfolio-list-item:hover span::before,
    .portfolio-list-item.active span::before {
        width: 100% !important;
    }
    .portfolio-list-item:hover span,
    .portfolio-list-item.active span{
        color: #f16122;
    }
`;

export const PortfolioWrapper  = styled.div`

`;

export const PortfolioBlock  = styled.div`
  
    &:hover .portfolio-overlay-content{
        opacity: 1;
    }    
    
`;

export const portfolioImgWrapper  = styled.div`
    position: relative;
`;

export const portfolioThumbImg  = styled.div`

    img{
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
        max-width: 100%;
        height: auto;
    }
`;

export const portfolioOverlayContent  = styled.div`
    position: absolute;    
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 30px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    color: #fff;
    border-radius: 10px;

    h4{
        font-size: 18px;
        line-height: 28px;
        font-weight: 600;
        font-family: "Montserrat",sans-serif;
    }
        
`;


export const portfolioTag  = styled.div`

    .lightpink{background-color: #ffcbcb;}
    .lightgreen{background-color: #c7ff9e;}
    .lightorange{background-color: #ff8b58;}

    .tag{
        display: inline-block;
        margin: 0 5px;
        border-radius: 5px;
        padding: 5px 6px;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: .5px;
        color: #000;
        position: relative;
        z-index: 1;
        font-family: "DINPro-Bold";

        ${mediaQueries("mobile")`  
            font-size: 10px;
            line-height: 14px;
            padding: 5px;
        `}
    }
        
`;

export const portfolioBottomContent  = styled.div`

    margin-top: 25px;

    .portfolio-industry{
        text-transform: uppercase;
        display: inline-block;
        font-family: "DINPro-Bold";
        font-size: 11px;
        line-height: 20px;
        letter-spacing: 1.8px;
        color: #f16122;
        padding: 0 8px;
        border-radius: 4px;
        border: 1px solid hsla(0,0%,43.9%,.4);
        transition: all 0.2s ease-in-out;
        margin-bottom: 10px;
    }

    .portfolio-name{
        margin: 0;
        font-family: "Montserrat",sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        color: #000;
        text-align: left;
        transition: all 0.2s ease-in-out;

        ${mediaQueries("mobile")`  
            font-size: 16px;
            line-height: 26px;
        `}
    }
        
`;