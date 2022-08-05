import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const WhyUsWrapper  = styled.div`  
  
  padding-top: 110px;
  padding-bottom: 150px;
  background-image: url("images/noisy-texture.png");


    ${mediaQueries("xll")`
        padding-left: 60px; 
        padding-right: 60px;
    `}
    ${mediaQueries("tablet")`
        padding-left: 60px; 
        padding-right: 60px;
        padding-bottom: 100px;
    `}    
    ${mediaQueries("mobile")`
        padding-top: 60px; 
        padding-left: 20px; 
        padding-right: 20px;
        padding-bottom: 60px;
    `}
    
    .container{ 
        max-width: 1200px;
    }

`;

export const SectionTagline  = styled.div`
 
    margin-bottom: 100px;


    ${mediaQueries("llg")` 
        margin-bottom: 60px
    `} 

    .before-dash{ 
        position: relative;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.2px;
        padding-left: 45px; 
        font-family: 'Montserrat', sans-serif; 
        font-style: italic;
        font-weight: 500;
        color: rgb(64,64,64);

        ${mediaQueries("llg")` 
            font-size: 20px;
            ine-height: 30px;
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
        font-size: 42px;
        line-height: 52px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 700; 

        ${mediaQueries("llg")` 
            font-size: 36px;
            line-height: 46px;
        `} 

        ${mediaQueries("mobile")`
            font-size: 28px;
            line-height: 40px;
        `}

    }
    
`;

export const WhyusBoxWrapper  = styled.div`  
  
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 150px;
    grid-row-gap: 100px;

    ${mediaQueries("llg")` 
        grid-column-gap: 100px;
        grid-row-gap: 50px;
    `} 

    ${mediaQueries("mobile")` 
        grid-template-columns: repeat(1,1fr);
        grid-column-gap: 0;
        grid-row-gap: 50px;
        
    `} 
`;

export const WhyusBox  = styled.div`  
    
    max-width: 600px;

    ${mediaQueriesmin ("lg")` 
        &:nth-child(2n){
            padding-top: 270px;
        }
    `}
    ${mediaQueriesmin ("991")` 
        &:nth-child(2n){
            padding-top: 200px;
        }
    `}
    ${mediaQueriesmin ("md")` 
        &:nth-child(2n){
            padding-top: 150px;
        }
    `}

    h3{
        font-size: 28px;
        line-height: normal;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        position: relative;
        margin-bottom: 0;

        ${mediaQueries("xll")`
            font-size: 24px;
        `}

        ${mediaQueries("mobile")`
            font-size: 20px;
        `}
    }

    h3::before{
        position: absolute;
        content:"";
        width: 100px;
        height: 100px;
        border-radius: 100%;
        display: inline-block;
        left: -40px;
        top: -35px;
        z-index: -1;
        box-shadow: 0px 2px 20px rgb(0 0 0 / 20%);

        ${mediaQueries("xll")`
            width: 70px;
            height: 70px;
            left: -25px;
            top: -20px;
        `}
        ${mediaQueries("mobile")`
            width: 60px;
            height: 60px;
            left: -15px;
            top: -20px;
        `}

    }

    &.why_motivate h3::before{
        background-color: #ffc4c4;
    }
    &.why_motivate .whyuscontent-box::before{
        background: url("images/motivation.svg") no-repeat;
        width: 131px;
        height: 333px;
    }


    &.why_disciplined h3::before{
        background-color: #a9f3c0;
    }
    &.why_disciplined .whyuscontent-box::before{
        background: url("images/disciplined.svg") no-repeat;
        width: 121px;
        height: 254px;
    }

    &.why_consistent h3::before{
        background-color: #c1c6ff;
    }
    &.why_consistent .whyuscontent-box::before{
        background: url("images/consistent.svg") no-repeat;
        width: 120px;
        height: 311px;        
    }

    &.why_battletested h3::before{
        background-color: #ffeec0;
    }
    &.why_battletested .whyuscontent-box::before{
        background: url("images/battle-tested.svg") no-repeat;
        width: 121px;
        height: 208px;
    }

    &.why_responsible h3::before{
        background-color: #c8e2ee;
    } 
    &.why_responsible .whyuscontent-box::before{
        background: url("images/responsible.svg") no-repeat;
        width: 120px;
        height: 239px;
    }

    ${mediaQueries("llg")`
        &.whyusbox .whyuscontent-box::before{
            width: 90px; 
        }
    `}

    ${mediaQueries("mobile")`
       &.whyusbox .whyuscontent-box::before{
            width: 70px; 
            margin-top:0px;
            right: 0;
            left: auto;
            top: 50%;
            transform: translateY(-50%);
            height: 150px;
            background-size: contain;
        }
    `}

`;

export const WhyusBoxContent  = styled.div`  

    padding: 0 0px 0 50px;
    position: relative;
    font-size: 18px;
    line-height: 28px;
    font-family: "DINPro-Medium";
    letter-spacing: 0.2px;
    position: relative;
    padding-top: 20px;
    max-width: 500px;

    ${mediaQueries("llg")`
        font-size: 16px;
        line-height: 26px;
    `}

    ${mediaQueries ("mobile")` 
        max-width: 100%;
        margin-bottom: 0;
    `}
    
    ${mediaQueries("mobile")`
        font-size:15px;
        padding-top: 10px;
    `}



    &.whyuscontent-box::before{
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        margin: 0 auto;        
        bottom: 0;
        top: 0;    
        z-index: -1;  
        background-size: contain; 
        margin-top:-25px;

        ${mediaQueries("llg")`
            margin-top: 10px;
        `}

        
    }    

`;

