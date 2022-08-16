import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/mediaQuery";

export const EngagementModelWrapper  = styled.div`
    position: relative;

`;

export const SectionTagline  = styled.div`

    background-image: url("images/noisy-texture.png");  
    padding-top: 60px; 
    padding-bottom: 100px;

    ${mediaQueries("lg")` 
        .container{
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
        }
    `} 
   
    ${mediaQueries("mobile")` 
        margin-bottom: 0;
        padding-bottom: 40px;
        padding-top: 15px; 
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

export const EngagementModelSection  = styled.div`

   position: relative;

   ${mediaQueries("lg")` 
        .container{
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
        }
    `} 
    
    &::before{
        position: absolute;
        content: "";
        inset: 0;
        background-color: #f1f2fe;
        z-index: -1;
        bottom: 5px;

    }

    
`;

export const EngagementModelRow  = styled.div`

    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 30px;
    align-items: flex-end!important;
    margin-bottom: 320px;

    &.custom-margin{
        margin-bottom: 250px;
        margin-top: 80px;

        ${mediaQueries("lg")` 
            margin-bottom: 180px;
        `} 

        ${mediaQueries("mobile")` 
            margin-top: 0px;
            margin-bottom: 50px;
        `} 
    }
    &.custom-margin .engagementmodel-imgbox{
       padding-top: 80px;

        ${mediaQueries("mobile")` 
            padding-top: 30px;
        `} 
    }

    ${mediaQueries("lg")` 
        grid-gap: 15px;
        margin-bottom: 250px;
    `} 

    ${mediaQueries("mobile")` 
       grid-template-columns: repeat(1,1fr);
       margin-bottom: 50px;
    `} 

    &.engagementmodel-alt .engagementmodel-imgbox{
        order: 1;

        ${mediaQueries("mobile")` 
            order: 2;
        `} 
    }
    &.engagement-green-titlebg h4 {
        background-color: #a9f3c0;
    }
    &.engagement-orange-titlebg h4{
        background-color: #ffdec4;
    }
    &.engagement-pink-titlebg h4{
        background-color: #fedfe6;
    }
`;

export const EngagementModelImgBox  = styled.div`
    padding-top: 170px;

    ${mediaQueries("mobile")` 
      order: 2;
      padding-top: 30px;
    `} 
`;

export const EngagementModelContentBox  = styled.div`
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.3);
    max-width: 550px;
    margin: -30% auto -8%;

    ${mediaQueries("mobile")` 
      margin: 50px auto  0;
      order: 1;
      border-radius: 15px;
    `} 
    
`;

export const EngagementModelContentMainTitle  = styled.div`

    position: relative;

    & > span{
        position: absolute !important;
        right: 50px;
        top: -50px;

        ${mediaQueries("lg")` 
            right: 25px;
            top: -30px;
            width: 70px !important;
        `}

        ${mediaQueries("mobile")` 
            right: 20px;
            top: -30px;
            width: 60px !important;
        `}
    }

    h4{
        padding: 25px 50px;
        background-color: #e7e2ff;
        border-radius: 30px 30px 0 0;
        position: relative;
        font-size: 30px;
        font-weight: 900;
        font-family: 'Montserrat',sans-serif;   
        
        ${mediaQueries("xl")`
            padding: 20px 60px;
            font-size: 26px;
        `} 

        ${mediaQueries("lg")` 
            padding: 20px 20px 10px;
            font-size: 22px;
        `}    
         ${mediaQueries("mobile")` 
            padding: 20px 15px 10px;
            font-size: 18px;
            border-radius: 15px 15px 0 0;
        `}  
    }  

`;

export const EngagementModelContentInnerBox  = styled.div`
    padding: 60px 55px 100px;   

    ${mediaQueries("xl")` 
        padding: 40px 40px 70px;
    `} 

    ${mediaQueries("lg")` 
        padding: 20px 20px 40px;
    `}
    ${mediaQueries("mobile")` 
        padding: 15px 15px 30px;
    `}

    h3{
        font-size: 34px;
        line-height: 44px;
        font-weight: 900;
        font-family: 'Montserrat',sans-serif;
        display: inline-block;
        position: relative;
        z-index: 2;
        margin-bottom: 40px;
        color: #000;

        &::before{
            position: absolute;
            content: "";
            bottom: 0;
            left: 0;
            right: 0;
            border-bottom: 7px solid #bae4dc;
            z-index: -1;
        }

        ${mediaQueries("xl")` 
            font-size: 32px;
            line-height: 42px;
        `} 

        ${mediaQueries("lg")` 
            font-size: 28px; 
            line-height: 38px;
            margin-bottom: 25px;   
        `}

        ${mediaQueries("lg")` 
            font-size: 24px;   
            line-height: 34px;
        `}
    }

    p{
        font-size: 22px;
        line-height: 34px;
        font-family: "DINPro-Medium";
        margin-bottom: 50px;

        ${mediaQueries("lg")` 
            font-size: 20px; 
            line-height: 32px;   
            margin-bottom: 30px;
        `}
         ${mediaQueries("mobile")` 
            font-size: 17px; 
            line-height: 30px;  
        `}
    }

    ul{
        padding-left: 0;

        li{
            font-family: "DINPro-Bold";
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 15px;
            color: #000;
            position: relative;
            padding-left: 18px;

            &::before{              
                position: absolute;
                content: "";
                width: 7px;
                height: 7px;
                border-radius: 100%;
                top: 9px;
                left: 0;
                display: inline-block;
                background-color: #000;

                ${mediaQueries("lg")` 
                    width: 5px;
                    height: 5px;
                    top: 11px;                    
                `}
            }

            ${mediaQueries("lg")` 
                font-size: 16px; 
                line-height: 26px;
                padding-left: 15px;
            `}

             ${mediaQueries("mobile")` 
                font-size: 14px; 
                line-height: 24px;
                padding-left: 15px;
                margin-bottom: 10px;
            `}
        }
    }

`;