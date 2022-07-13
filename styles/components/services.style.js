import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const service  = styled.div`
    &.servicesSection{
        position: relative;
        background: #fff url(../images/services-bg.png) no-repeat top center;
        background-size: cover;
        overflow: hidden;
    }
`;
export const bigText  = styled.div`
    &.bigText{
        font-size: 340px;
        line-height: 1;
        font-weight: 700;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        text-transform: uppercase;
        position: absolute;
        top: -48px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;

        ${mediaQueries("xxl")`
            font-size: 310px;
            top: -45px;
        `}
        ${mediaQueries("xll")`
            font-size: 275px;
            top: -35px;
        `}
        ${mediaQueries("xll")`
            font-size: 260px;
            top: -40px;
        `}
        ${mediaQueries("llg")`
            font-size: 197px;
            top: -28px;
        `}
        ${mediaQueries("lg")`
            font-size: 190px;
            top: -25px;
        `}
        ${mediaQueries("tablet")`
            font-size: 147px;
            top: -20px;
        `}
        ${mediaQueries("sm")`
            font-size: 67px;
            top: -8px;
        `}
    }
`;
export const topPart  = styled.div`
    &.topPart{
        position: relative;
        z-index: 1;
        padding-top: 115px;
        padding-bottom: 90px;
        
        ${mediaQueries("llg")`
            padding-top: 85px;
            padding-bottom: 60px;
        `}
        ${mediaQueries("tablet")`
            padding-top: 55px;
            padding-bottom:45px;
        `}
        ${mediaQueries("sm")`
            padding-top: 30px;
            padding-bottom:30px;
        `}

    & .container{
        ${mediaQueries("llg")`
            max-width:100%;
            padding:0px 20px;
        `}
    }
    }
`;
export const topTitle  = styled.h4`
    font-size: 42px;
    font-family: 'Montserrat', sans-serif;
    color: #000;
    font-weight: 700;
    line-height: 1.2;
    text-align: left;
    margin: 0;
    
    ${mediaQueries("lg")`
        font-size: 36px;
    `}
    ${mediaQueries("tablet")`
        font-size: 30px;
    `}
    ${mediaQueries("sm")`
        font-size: 26px;
    `}
`;

export const serviceListing  = styled.div`
    &.servicesListing{
        padding-bottom: 120px;
        
        ${mediaQueries("llg")`  
            padding-bottom: 100px;
        `}
        ${mediaQueries("lg")`  
            padding-bottom: 80px;
        `}
        ${mediaQueries("mobile")`
            padding-bottom: 0px;
        `}
    }
`;

export const serviceItem  = styled.div`
    &.serviceItem{
        position: relative;
        margin-bottom: 200px;

        .container{
            max-width: 1300px;
            ${mediaQueries("xlx")`  
                max-width: 1140px;
            `}
            ${mediaQueries("llg")`  
                max-width: 96%;
                padding: 0 20px;
            `}
            ${mediaQueries("mobile")`  
                max-width: 100%;
            `}
        }

        ${mediaQueries("xxl")`
            margin-bottom: 150px;
        `}
        ${mediaQueries("xl")`  
            margin-bottom: 100px;
        `}
        ${mediaQueries("mobile")`  
            margin-bottom: 50px;
        `}

        &:before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 40%;
            height: 80%;
            z-index: 0;
            background: rgb(177, 231, 220);
            background: -moz-linear-gradient( 89deg, rgba(177, 231, 220, 1) 0%, rgba(251, 255, 214, 1) 100%);
            background: -webkit-linear-gradient( 89deg, rgba(177, 231, 220, 1) 0%, rgba(251, 255, 214, 1) 100%);
            background: linear-gradient( 89deg, rgba(177, 231, 220, 1) 0%, rgba(251, 255, 214, 1) 100%);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#b1e7dc", endColorstr="#fbffd6", GradientType=1);
        }

        &:nth-child(odd) .leftPart{
            padding: 0px 60px 0px 12px;
            
            ${mediaQueries("xl")`
                padding: 0px 40px 0px 12px;
            `}
            ${mediaQueries("mobile")`
                padding: 0px 12px 0px 12px;
            `}
            
        } 
        &:nth-child(even) .leftPart{
            padding: 0px 12px 0px 60px;

            ${mediaQueries("xl")`
                padding: 0px 12px 0px 40px;
            `}
            ${mediaQueries("mobile")`
                padding: 0px 12px 0px 12px;
            `}
        }   
    }
    &.bottom:before{
        top: auto;
        bottom: 0;
    }
    &.right:before{
        left: auto;
        right: 0;

        ${mediaQueries("mobile")`
            right: auto;
            bottom: 0;
            top: auto;
            width: 100%;
            height: 100px;
        `}
    }
    & .rightPart{
        ${mediaQueries("mobile")`
            text-align: center;
            padding-top: 30px;
            padding-bottom: 20px;
        `}
    }
    & .rightPart img{
        position: relative;
    }
    
    &:nth-child(even)::before {
        top: 50%;
        transform: translateY(-50%);
        bottom: auto;

        ${mediaQueries("mobile")`
            right: auto;
            bottom: 0;
            top: auto;
            width: 100%;
            height: 100px;
            transform: unset;
        `}
    }
    &:last-child{
        margin-bottom: 0px;
    }

    
`;
export const titlePart  = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 700;
    color: #67c187;
    margin-bottom: 20px;

    ${mediaQueries("sm")`
        margin-bottom: 15px;
        font-size: 24px;
    `}

`;
export const desc  = styled.p`
    font-family: "DINPro-Medium";
    font-size: 18px;
    line-height: 28px;
    color: #000;
    margin-bottom: 30px;
    font-weight: 500;

    & a{
        font-family: "DINPro-Medium";
        color: #67c187;
        font-weight: 500;
        text-transform: uppercase;
    }

    ${mediaQueries("xl")`
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 30px;
    `}
`;
export const serviceLinks  = styled.div`
    & ul{
        display: flex;
        flex-wrap: wrap;
        margin: 0px -12px;
        padding: 0px;
    }
    & ul li{
        width: 50%;
        margin-bottom: 15px;
        padding: 0 12px;

        ${mediaQueries("llg")`
            width: 100%;
        `}
        ${mediaQueries("mobile")`
            width: 50%;
        `}
        ${mediaQueries("sm")`
            width: 100%;
        `}
    }
    & a{
        display: block;
        position: relative;
        padding-left: 35px;
        line-height: 25px;
        border-bottom: 1px solid #3f3f3f;
        padding-bottom: 8px;
        font-size: 18px;
        color: #3f3f3f;
        font-family: "DINPro-Medium";
        -webkit-transition: all 0.3s 0s linear;
        -moz-transition: all 0.3s 0s linear;
        -o-transition: all 0.3s 0s linear;
        transition: all 0.3s 0s linear; 

        ${mediaQueries("xl")`
            font-size: 16px;
        `}
        ${mediaQueries("llg")`
            font-size: 16px;
            display: inline-block;
        `}
        ${mediaQueries("mobile")`
            display: block;
        `}
        ${mediaQueries("sm")`
            display: inline-block;
        `}

        & img{
            position: absolute !important;
            left: 0;
            width: 24px !important;
            height: 24px !important;
        }

        &:hover,
        &:focus{
            color: #67c187;
            border-bottom: 1px solid #67c187;
        }
    }
`;
export const ctaPart  = styled.div`
    margin-top: 30px;
    text-align: center;

    ${mediaQueries("llg")`
        text-align: left;
    `}
    ${mediaQueries("tablet")`
        margin-top: 20px;
    `}

`;