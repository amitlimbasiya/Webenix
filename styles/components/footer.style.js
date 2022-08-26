import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const footer  = styled.footer`
    background: #f0f0f0 url(../images/footer-shape.svg) no-repeat right bottom;
    background-size: contain;
    padding: 120px 0px 0px;
    position: relative;

    ${mediaQueries("xll")`  
        padding: 100px 0px 0px;
    `}
    ${mediaQueries("llg")`  
        padding: 60px 0px 0px;
    `}
    ${mediaQueries("tablet")`  
        padding: 50px 0px 0px;
    `}

    .container{
        max-width: 1300px;

        ${mediaQueries("xll")`  
            max-width: 1240px;
        `}
    }
`;
export const footerShape  = styled.div`
    &.ftShape{
        width: 332px;
        height: 353px;
        position: absolute;
        left: -225px;
        top: -90px;
        border-radius: 50px;
        box-shadow: 0 3px 36px rgb(0 0 0 / 16%);
        transform: rotate(45deg);
        background: #fff;

        ${mediaQueries("xll")`  
            width: 282px;
            height: 303px;
            top: -145px;
        `}
        ${mediaQueries("llg")`  
            display:none;
        `}
        
    }
`;
export const copyRight  = styled.div`
    background: #e1e1e1;
    text-align: center;
`;
export const ftCointainer  = styled.div`
    background: #e1e1e1;
    text-align: center;
`;
export const topRow  = styled.div`
    &.topRow{
        padding-bottom: 30px;
        text-align: center;
    }
`;
export const heading  = styled.h3`
    margin:0px;

    &.ftHeading{
        margin-bottom: 20px;
        font-size: 24px;
        line-height: 1.458;
        color: #000;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        ${mediaQueries("sm")`  
            font-size: 18px;
        `}
    }
    &.ftAddress{
        font-size: 18px;
        line-height: 24px;
        color: #000;
        ${mediaQueries("sm")`  
            font-size: 15px;
        `}
    }
`;
export const middelRow  = styled.div`
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    padding: 30px 0;
    text-align: center;
    
    ${mediaQueries("mobile")`  
        padding: 30px 0 15px;
    `}
`;
export const midHeading  = styled.h4`
    margin-bottom: 25px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    font-family: "Montserrat", sans-serif;

    ${mediaQueries("sm")`  
        font-size: 18px;
    `}

`;
export const contactInfo  = styled.div`
    &.contactInfo{
        display: flex;
        align-items: center;
        justify-content: space-around;

        ${mediaQueries("mobile")`  
            flex-wrap: wrap;
        `}
        ${mediaQueries("mobile")`  
            flex-wrap: wrap;
        `}
    }
`;
export const infoBox  = styled.div`
    &.infoBox{
        position: relative;
        padding: 0 0 0 67px;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  

        ${mediaQueries("mobile")`  
            padding:15px 20px 15px 67px;
        `}
        ${mediaQueries("sm")`  
            padding:15px 20px 15px 67px;
            min-width: 240px;
            align-items: flex-start;
        `}
    }

`;
export const iconBox  = styled.div`
    
    position: absolute;
    background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    left: 0;

    & img{
        width: 25px;
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
   
`;
export const copyText  = styled.p`
    color: #4b4b4b;
    font-size: 16px;
    line-height: 1.4;
    padding: 19px 0;
    margin:0px;

    ${mediaQueries("sm")`  
        font-size: 14px;
    `}


`;
export const infoDesc  = styled.div`
    a.linked{
        color: #000;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
    
        &:hover,
        &:focus{
            color: #67c187;
        }
    }
`;
export const spanPart  = styled.span`
    display: block;
    font-size: 16px;
    line-height: 1;
    color: #3f3f3f;
    margin-bottom: 5px;
    font-weight: 400;
`;
export const endRow  = styled.div`
    text-align: center;
    padding: 25px 0;


    ${mediaQueries("sm")`  
        padding: 10px 0;
    `}

    & a{
        color: #1d1e31;
        font-size: 21px;
        margin: 0 12px;
        display:inline-block;
        
        & svg{
            width:22px;
            height:22px;

            ${mediaQueries("sm")`  
                width:20px;
                height:20px;
            `}
            
        }

        &:hover,
        &:focus{
            color: #67c187;
        }
    }
`;

export const SectionTitle  = styled.h1`
    color: #fff;
    font-size: 50px;

    &:hover,
    &:focus{
        color: red;
    }
    ${mediaQueries("lg")`  
        font-size: 50px;
    `}    
`;

