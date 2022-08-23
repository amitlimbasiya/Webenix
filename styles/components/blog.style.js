import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const blogSection  = styled.div`
    &.blogSection{
        padding: 120px 0px;
        background-color: #f4f2ec;
        background-image: url(../images/blog-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;

        ${mediaQueries("lg")`  
            padding: 80px 0px;
        `}
        ${mediaQueries("mobile")`  
            padding: 50px 0px;
        `}
    }   
    .container{
        max-width: 1390px;
        ${mediaQueries("xll")`  
            max-width: 1240px;
        `}

        ${mediaQueries("xll")`  
            max-width: 1140px;
        `}
        ${mediaQueries("llg")`  
            max-width: 100%;
            padding: 0 20px;
        `}
        ${mediaQueries("lg")`  
            padding: 0 20px;
        `}
        
            
    }
`;
export const blogTop  = styled.h2`
    &.topHeading{
        font-size: 38px;
        font-family: 'Montserrat', sans-serif;
        color: #000;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 60px;

        ${mediaQueries("tablet")`  
            font-size: 36px;
            margin-bottom: 30px;
        `}
        ${mediaQueries("sm")`  
            font-size: 26px;
        `}
    }   
`;
export const blogListing  = styled.h2`
    &.blogListing{
        font-size: 40px;
        font-family: 'Montserrat', sans-serif;
        color: #000;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 0px;
    }   
`;
export const blogItem  = styled.div`
    &.blogItem .blogLink{
        display: inline-block;
        position: relative;
        line-height: 25px;
        padding-bottom: 5px;
        font-size: 18px;
        color: #3f3f3f;
        font-family: "DINPro-Bold";
        font-weight: bold;
        text-transform: uppercase;
        -webkit-transition: all 0.3s 0s linear;
        -moz-transition: all 0.3s 0s linear;
        -o-transition: all 0.3s 0s linear;
        transition: all 0.3s 0s linear;

        &:after{
            content: '';
            position: absolute;
            bottom: 0px;
            right: 0px;
            height: 2px;
            width: 0%;
            background-color: #3f3f3f;
            -webkit-transition: all 0.3s 0s linear;
            -moz-transition: all 0.3s 0s linear;
            -o-transition: all 0.3s 0s linear;
            transition: all 0.3s 0s linear;
        }
        &:hover,
        &:focus{ 
            color: #67c187;
            
            &:after{
                width: 100%;
                left: 0;
                background-color: #67c187;
            }
        }

        ${mediaQueries("tablet")`  
            font-size: 16px;
        `}
    }
`;
export const blogImage  = styled.div`
    box-shadow: 0 8px 20px rgb(0 0 0 / 8%);
    border: 3px solid #fff;

    img{
        max-width: 100%;
        height: auto;
    }
`;
export const blogCategory  = styled.p`
    margin: 0;
    padding: 25px 0 20px;
    font-size: 11px;
    line-height: 1.4;
    color: #3f3f3f;
    font-family: "DINPro-Bold";
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;

    ${mediaQueries("mobile")`  
        padding: 20px 0 10px;
    `}   
`;
export const blogTitle  = styled.h4`

    &.postHeading{
        ${mediaQueries("tablet")`  
            margin-bottom: 0px;
        `}
    }

    &.postHeading a{
        margin-bottom: 35px;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        color: #000;
        font-weight: 600;
        line-height: 1.3;

        &:hover,
        &:focus{
            color: #67c187;
        }

        ${mediaQueries("tablet")`  
            margin-bottom: 0px;
            font-size: 16px;
            display: inline-block;
        `}
    }
`;
export const ctaSection  = styled.div`
    &.ctaBox{
        margin: 0px 0px 110px 0px;

        ${mediaQueries("lg")`  
            margin: 0px 0px 80px 0px;
        `}
        ${mediaQueries("mobile")`  
            margin: 0px 0px 60px 0px;
        `}
    }
    
`;
export const ctaInner  = styled.div`
    &.ctaBoxInner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #67c187;
        border-radius: 25px 25px 0px 0px;
        padding: 90px 90px 60px 90px;
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
            bottom: -38px;
            left: 0px;
            background-image: url(../images/blogRoundShape.png);
            background-repeat: no-repeat;
            background-size: contain;
            width: 120px;
            height: 38px;
            z-index: 1;

            ${mediaQueries("sm")`  
                bottom: -26px;
                left: 35px;
                width: 52px;
                height: 52px;
            `}
        }
        &:after {
            content: "";
            position: absolute;
            bottom: -38px;
            right: 0px;
            background:#67c187;
            border-radius: 0px 0px 25px 0px;
            width: calc(100% - 120px);
            height: 38px;
            z-index: 1;

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

