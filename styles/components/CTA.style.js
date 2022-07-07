import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const ctaSection  = styled.div`
    &.ctaBox{
        padding: 0px 0px 120px 0px;

        ${mediaQueries("lg")`  
            padding: 0px 0px 80px 0px;
        `}
        ${mediaQueries("mobile")`  
            padding: 0px 0px 60px 0px;
        `}
    }
    
`;
export const ctaInner  = styled.div`
    &.ctaBoxInner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #67c187;
        border-radius: 25px;
        padding: 90px 90px 90px 130px;
        position: relative;
        margin: 0 auto;

        ${mediaQueries("xl")`
            padding: 70px 60px 80px 60px;
        `}
        ${mediaQueries("tablet")`
            padding: 50px 40px 60px 40px;
        `}
        ${mediaQueries("sm")`  
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
        `}

        &:before {
            content: "";
            position: absolute;
            bottom: -36px;
            left: 45px;
            width: 72px;
            height: 72px;
            background-color: #f4f2ec;
            border-radius: 50%;

            ${mediaQueries("sm")`  
                bottom: -26px;
                left: 35px;
                width: 52px;
                height: 52px;
            `}
        }
    }
`;
export const leftPart  = styled.div`
    
`;
export const bigHeading = styled.h3`
    color: #18705f;
    font-size: 120px;
    line-height: 1;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0px;

    ${mediaQueries("xl")`
        font-size: 100px;
    `}
    ${mediaQueries("tablet")`
        font-size: 80px;
    `}
    ${mediaQueries("mobile")`
        font-size: 60px;
    `}
`;
export const midHeading = styled.h5`
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    font-weight: 300;
    line-height: 1;
    color: #fff;
    margin: 0px 0px 10px 0px;

    ${mediaQueries("tablet")`
        font-size: 20px;
    `}
    ${mediaQueries("mobile")`
        font-size: 16px;
        line-height: 1.2;
    `}
        
`;
export const smHeading = styled.h6`
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    color: #fff;
    margin: 0;
    ${mediaQueries("mobile")`
        font-size: 16px;
    `}
`;
export const rightPart = styled.div`    
`;
export const ctaBtn = styled.div`    
    &.ctaBtn{
        position: relative;

        ${mediaQueries("sm")`
            margin-top: 50px;
        `}

        &:before{
            content: "";
            background-image: url(../images/cta-btn-shape.svg);
            background-size: 150px;
            height: 130px;
            width: 150px;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background-repeat: no-repeat;
            background-position: 50%;

            ${mediaQueries("tablet")`
                background-size: 110px;
                height: 110px;
                width: 130px;
            `}
            
        }
    }
    & .btn-default{
        min-width: 300px;
        background: #fff;
        color: #3f3f3f;
        font-size: 28px;
        font-family: "DINPro-Bold";
        text-transform: unset;
        text-align: center;
        line-height: 1.4;

        &:hover,
        &:focus{
            background: #3f3f3f;
            color: #fff;
            box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
            -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
        }
        ${mediaQueries("tablet")`
            min-width: 200px;
            font-size: 22px;
        `}
    }
`;

