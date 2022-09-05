import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/mediaQuery";

export const SectionIntroWrapper  = styled.div`  

    /* background-image: url("images/noisy-texture.png");   */
    padding-top: 120px; 
    padding-bottom: 100px; 
    
    ${mediaQueries("llg")` 
        padding-top: 90px;
        padding-bottom: 90px;
    `} 

    ${mediaQueries("mobile")` 
        padding-top: 60px;
        padding-bottom: 60px;
    `} 
    ${mediaQueries("xxs")` 
        padding-top: 50px;
        padding-bottom:50px;
    `} 

    .container{
        max-width: 1430px;
        padding-left: 30px;
        padding-right: 30px;

        ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px;
        `} 
    } 

`; 

export const SectionTagline  = styled.div`
 
    margin-bottom: 50px;


    ${mediaQueries("llg")` 
        margin-bottom: 45px
    `} 

    ${mediaQueries("xl")` 
        margin-bottom:30px
    `} 

    ${mediaQueries("mobile")` 
        margin-bottom: 10px 
    `} 

    ${mediaQueries("xxs")` 
        margin-bottom: 10px 
    `} 

    .before-dash{ 
        position: relative;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.2px;
        padding-left: 45px; 
        font-style: italic;

        ${mediaQueries("llg")` 
            font-size: 20px;
            line-height: 30px;
            margin-bottom: 10px;
            display: inline-block;
        `} 

        ${mediaQueries("llg")` 
            font-size: 20px;
            line-height: 30px;
        `} 
    }

    .before-dash::before{
        position: absolute; 
        content: "";
        height: 2px;
        width: 30px;
        position: absolute;
        left: 0;
        background-color: #000;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }

    h2{
        font-size: 40px;
        line-height: 50px;
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        margin: 0;

        ${mediaQueries("xlx")` 
            font-size: 30px;
            line-height: 40px;
        `}  

        ${mediaQueries("llg")` 
            font-size: 26px;
            line-height: 36px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 24px;
            line-height: 34px;
        `}
    }
    
`;

export const SectionHeader  = styled.div` 
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 1fr;
    grid-column-gap: 50px;

    ${mediaQueries("llg")` 
        grid-template-columns: 1fr 4fr;
        grid-column-gap: 30px;
    `} 
    ${mediaQueries("tablet")` 
        grid-template-columns: 1fr 3fr;
        grid-column-gap: 10px;
    `}  
    ${mediaQueries("mobile")` 
        grid-template-columns: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 10px;
    `}  
    h3{
        font-size: 32px;
        line-height: 42px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 600;

        ${mediaQueries("xlx")` 
            font-size: 28px;
            line-height: 38px;
        `}

        ${mediaQueries("llg")` 
            font-size: 22px;
            line-height: 32px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 18px;
            line-height: 28px;
        `} 

        ${mediaQueries("xxs")`
           font-size: 16px;
           line-height: 26px;
        `}
    }
    .shapePart{
        position: relative;

        :before{
            content: "";
            background-color: #8cd170;
            width: 72px;
            height: 72px;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;

            ${mediaQueries("llg")` 
                width: 60px;
                height: 60px;
            `}
            ${mediaQueries("tablet")` 
                width: 50px;
                height: 50px;
            `}
            ${mediaQueries("mobile")` 
                width: 40px;
                height: 40px;
            `}
        }
    }
    h4{ 
        font-size: 24px;
        font-family: 'Montserrat',sans-serif;
        color: #000;
        font-weight: 700;
        line-height: 1.5;
        text-align: left;
        background: #fff;
        margin: 0px 0px 0px 40px;
        z-index: 1;
        padding: 0 0px 0 15px;
        min-height: 72px;

        ${mediaQueries("llg")` 
            margin: 0px 0px 0px 30px;
            font-size: 20px;
            min-height: 60px;
        `} 
        ${mediaQueries("tablet")` 
            margin: 0px 0px 0px 25px;
            font-size: 18px;
            min-height: 50px;
        `}
        ${mediaQueries("mobile")` 
            line-height: 40px;
            margin: 0px 0px 0px 20px;
        `}
    }

    p{
        font-family: "DINPro-Medium";
        font-size: 22px;
        line-height: 32px;
        color: #000;

        &:last-child{
            margin-bottom: 0px;
        }

        ${mediaQueries("xlx")` 
            font-size: 18px;
            line-height: 28px;
        `}

        ${mediaQueries("llg")` 
            font-size: 16px;
            line-height: 24px;
        `}  
    }
`;