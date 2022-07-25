import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/mediaQuery";

export const SectionIntroWrapper  = styled.div`  

    padding-top: 0px; 
    padding-bottom: 100px; 
    
    ${mediaQueries("llg")` 
        padding-bottom: 90px;
    `} 

    ${mediaQueries("mobile")` 
        padding-bottom: 60px;
    `} 
    ${mediaQueries("xxs")` 
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

        ${mediaQueries("mobile")`
           font-size: 14px;
           line-height: 24px;
        `} 

    }
`;
export const LeftRightPart  = styled.div` 
    
    overflow: hidden;

    .container{
        max-width: 1430px;
        padding-left: 30px;
        padding-right: 30px;

        ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px;
        `} 
    } 

    padding: 70px 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    ${mediaQueries("mobile")`
        padding: 50px 0;
    `} 

    .right-slant{
        position: absolute;
        right: 0;
        height: 100%;
        width: 25vw;

        ${mediaQueries("mobile")` 
            height: 30vh;
            width: 100vw;
            bottom: 0;
        `} 
    }
    .left-slant{
        position: absolute;
        left: 0;
        height: 100%;
        width: 30vw;

        ${mediaQueries("mobile")` 
            height: 30vh;
            width: 100vw;
            bottom: 0;
        `} 
    }
    .anmtn-element{
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .right-slant .anmtn-element:after {
        content: "";
        width: 375px;
        height: 375px;
        background-image: url(images/career/round-line-shape.svg);
        background-size: 100%;
        background-position: bottom right;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
        bottom: 0;

        ${mediaQueries("mobile")` 
            width: 235px;
            height: 235px;
        `}
    }
    .left-slant .anmtn-element:after {
        content: "";
        width: 375px;
        height: 375px;
        background-image: url(images/career/left-round-line-shape.svg);
        background-size: 100%;
        background-position: bottom left;
        background-repeat: no-repeat;
        position: absolute;
        left: 0;
        bottom: 0;

        ${mediaQueries("mobile")` 
            width: 235px;
            height: 235px;
        `}
    }
    .animated-cuts-right{
        height: 100%;
        width: 100%;
        
        :after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            height: 120%;
            width: 100%;
            z-index: 9;
            background-color: #fff;
            -webkit-transform: translateY(-50%) translateX(0);
            -ms-transform: translateY(-50%) translateX(0);
            transform: translateY(-50%) translateX(0);
        }
    }
    .right-bg{
        background-color: #f4f7ff;
        height: 100%;
        width: 100%;
    }
    .in-view .animated-cuts-top:after {
        animation: cutElemTop 1.5s forwards;
        -webkit-animation: cutElemTop 1.5s forwards
    }

    .in-view .animated-cuts-right:after {
        animation: cutElemLeft 1.5s forwards;
        -webkit-animation: cutElemLeft 1.5s forwards
    }

    .in-view .animated-cuts-left:after {
        animation: cutElemRight 1s forwards;
        -webkit-animation: cutElemRight 1s forwards
    }
    @keyframes cutElemLeft {
        0% {
            -webkit-transform: translateY(-50%) translateX(0);
            transform: translateY(-50%) translateX(0);
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14)
        }

        50% {
            -webkit-transform: translateY(-50%) translateX(-50%) skewX(20deg);
            transform: translateY(-50%) translateX(-50%) skewX(20deg)
        }

        to {
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14);
            -webkit-transform: translateY(-50%) translateX(-100%);
            transform: translateY(-50%) translateX(-100%)
        }
    }

    @-webkit-keyframes cutElemTop {
        0% {
            -webkit-transform: translateX(-50%) translateY(0);
            transform: translateX(-50%) translateY(0);
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14)
        }

        50% {
            -webkit-transform: translateX(-50%) translateY(-50%) skewY(20deg);
            transform: translateX(-50%) translateY(-50%) skewY(20deg)
        }

        to {
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14);
            -webkit-transform: translateX(-50%) translateY(-100%);
            transform: translateX(-50%) translateY(-100%)
        }
    }

    @keyframes cutElemTop {
        0% {
            -webkit-transform: translateX(-50%) translateY(0);
            transform: translateX(-50%) translateY(0);
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14)
        }

        50% {
            -webkit-transform: translateX(-50%) translateY(-50%) skewY(20deg);
            transform: translateX(-50%) translateY(-50%) skewY(20deg)
        }

        to {
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14);
            -webkit-transform: translateX(-50%) translateY(-100%);
            transform: translateX(-50%) translateY(-100%)
        }
    }

    @-webkit-keyframes cutElemLeft {
        0% {
            -webkit-transform: translateY(-50%) translateX(0);
            transform: translateY(-50%) translateX(0);
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14)
        }

        50% {
            -webkit-transform: translateY(-50%) translateX(-50%) skewX(20deg);
            transform: translateY(-50%) translateX(-50%) skewX(20deg)
        }

        to {
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14);
            -webkit-transform: translateY(-50%) translateX(-100%);
            transform: translateY(-50%) translateX(-100%)
        }
    }

    @keyframes cutElemRight {
        0% {
            -webkit-transform: translateY(-50%) translateX(0);
            transform: translateY(-50%) translateX(0);
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14)
        }

        50% {
            -webkit-transform: translateY(-50%) translateX(50%) skewX(20deg);
            transform: translateY(-50%) translateX(50%) skewX(20deg)
        }

        to {
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14);
            -webkit-transform: translateY(-50%) translateX(100%);
            transform: translateY(-50%) translateX(100%)
        }
    }

    @-webkit-keyframes cutElemRight {
        0% {
            -webkit-transform: translateY(-50%) translateX(0);
            transform: translateY(-50%) translateX(0);
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14)
        }

        50% {
            -webkit-transform: translateY(-50%) translateX(50%) skewX(20deg);
            transform: translateY(-50%) translateX(50%) skewX(20deg)
        }

        to {
            -webkit-animation-timing-function: cubic-bezier(.815, .09, .885, .14);
            -webkit-transform: translateY(-50%) translateX(100%);
            transform: translateY(-50%) translateX(100%)
        }
    }
    
    .perk-plate{
        margin-bottom: 60px;
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;

        ${mediaQueries("mobile")` 
            max-width: 96%;
            margin-bottom: 50px;
        `} 
    }
    .perk-plate:last-child{
        margin-bottom: 0px;
    }
    .perk-plate .perk-title {
        display: flex;
    }
    .perk-plate .perk-title .perk-num {
        position: relative;
    }
    .perk-plate .perk-title .perk-num:before {
        content: "";
        background-color: #a0e4d5;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        left: -10px;
        top: -16px;

        ${mediaQueries("tablet")` 
            width: 40px;
            height: 40px;
            top: -10px;
        `}  
    }
    .perk-plate .perk-title .perk-num h6 {
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        font-size: 30px;
        line-height: 22px;
        text-align: center;
        color: #202133;
        position: relative;
        z-index: 1;

        ${mediaQueries("xlx")` 
            font-size: 26px;
        `}
        ${mediaQueries("tablet")` 
            font-size: 20px;
        `} 
        ${mediaQueries("mobile")` 
            font-size: 18px;
        `}       
    }
    .perk-plate .perk-title .perk-num:after {
        content: "";
        background-color: #fff;
        width: 25px;
        height: 50px;
        position: absolute;
        left: 20px;
        top: -16px;

        ${mediaQueries("tablet")` 
            left: 12px;
            top: -10px;
            height: 40px;
        `} 
    }
    .perk-plate .perk-title .perk-num.perk-two:before {
        background-color: #9985ff;
    }
    .perk-plate .perk-title .perk-num.perk-three:before {
        background-color: #ffd45e;
    }
    .perk-plate .perk-title .perk-num.perk-four:before {
        background-color: #ffb4bc;
    }
    .perk-plate .perk-title .perk-tit {
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 48px;
        text-align: left;
        color: #202133;
        margin-top: -15px;
        margin-left: 10px;

        ${mediaQueries("xlx")` 
            font-size: 22px;
            line-height: 48px;
            margin-top: -12px;
        `}
        ${mediaQueries("tablet")` 
            font-size: 20px;
        `} 
        ${mediaQueries("mobile")` 
            font-size: 18px;
            line-height: 24px;
            margin-top: 0;
        `}
    }
    .perk-plate .perk-desc {
        margin-top: 15px;
        text-align: left;
        color: #1d1e31;
        font-family: "DINPro-Medium";
        font-size: 22px;
        line-height: 32px;

        ${mediaQueries("xlx")` 
            font-size: 18px;
            line-height: 28px;
        `}

        ${mediaQueries("llg")` 
            font-size: 16px;
            line-height: 24px;
        `}  

        ${mediaQueries("mobile")`
           font-size: 14px;
           line-height: 24px;
        `} 
    }
    
    .rellimage {
        background-size: 700px;
        background-attachment: fixed;
        height: 575px;
        max-width: 575px;
        margin-left: auto;
        width: 100%;
        position: relative;
        -webkit-animation: slideback 12s infinite alternate;
        animation: slideback 12s infinite alternate;

        ${mediaQueries("mobile")`
            height: 375px;
            margin-top: 50px;
        `} 
    }
    .rellimage.neverstoplearning {
        background-image: url(images/career/career-man.jpg);
    }
    @keyframes slideback {
        0% {
            background-position: 0
        }

        to {
            background-position: 300px
        }
    }

`;
export const WeLookFor  = styled.div` 
    padding-bottom: 100px;

    ${mediaQueries("mobile")`
        padding-bottom: 60px;
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
    h5{
        font-size: 24px;
        line-height: 44px;
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        margin: 30px 0px 15px 0px;

        ${mediaQueries("llg")` 
            font-size: 20px;
            line-height: 30px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 18px;
            line-height: 28px;
        `}
    }
    p{
        font-family: "DINPro-Medium";
        font-size: 22px;
        line-height: 32px;
        color: #000;
        margin: 0px;

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

        ${mediaQueries("mobile")`
           font-size: 14px;
           line-height: 24px;
        `} 

    }
    
    img{
        width:90px;
        height:90px;

        ${mediaQueries("mobile")` 
            width:75px;
            height:75px;
        `} 
    }
    
`;
export const Tagline  = styled.div`
 
    margin-bottom: 50px;

    ${mediaQueries("llg")` 
        margin-bottom: 45px
    `} 

    ${mediaQueries("xl")` 
        margin-bottom:30px
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
        z-index: 0;
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

export const JobPart  = styled.div` 
    background-color: #f1f2fe;
    padding: 100px 0px;  

    .container{
        max-width: 1430px;
        padding-left: 30px;
        padding-right: 30px;

        ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px;
        `} 
    } 
    .accordion .accordion-item {
        border-radius: 20px;
        background-color:transparent;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
        margin-bottom:  20px;
        padding: 0 25px;
        overflow: hidden;
        border: none;

        ${mediaQueries("llg")`  
            padding: 0 15px;
            border-radius: 10px;
        `}
    }

    .accordion .accordion-button{
        background-color: transparent;
        font-family: "Montserrat", sans-serif;
        padding:30px 0;
        background-repeat: repeat;
        border-bottom: none;
        box-shadow:none; 
        display: block;
        
        &:focus{
            box-shadow: none;
        }

        &::after{
            display: none;
        }

        ${mediaQueries("llg")` 
            font-size: 20px;
            padding: 15px 10px;
        `} 
        ${mediaQueries("mobile")`  
            padding: 15px 0px;
        `}

    }
    .accordion .accordion-button .cardHeader {
        display: grid;
        grid-template-columns: 4% auto 12%;
        grid-template-rows: 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 0px;
        align-items: center;
        position: relative;

        ${mediaQueries("xl")` 
            grid-template-columns: 4% auto 14%;
        `} 
        ${mediaQueries("tablet")`  
            grid-row-gap: 10px;
            grid-template-columns: auto;
        `}
    }
    .accordion .accordion-button .cardHeader .headIcon img {
        width: 70px;
        height: 70px;

        ${mediaQueries("tablet")`  
            width: 50px;
            height: 50px;
        `}
    }
    .accordion .accordion-button .cardHeader .buttonPart {
        text-align: right;

        ${mediaQueries("tablet")`  
            position: absolute;
            top: 5px;
            right: 0;
        `}
        ${mediaQueries("mobile")`  
            top: 12px;
        `}
        .btn-default{
            ${mediaQueries("mobile")`  
                font-size: 14px;
                line-height: 20px;
                padding: 4px 8px;
                border-radius: 4px;
            `}
            &:hover{
                ${mediaQueries("mobile")`  
                    padding: 4px 25px 4px 8px;
                `}
            }
            &:after{
                ${mediaQueries("mobile")`  
                    width: 12px;
                    height: 12px;
                `}
            }
        }
    }
    .accordion .accordion-button .cardHeader .positionDesc .headTitle{ 
        font-size: 24px;
        line-height: 1.4;
        font-weight: 800;
        color: #000;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 0px;

        ${mediaQueries("llg")`  
            font-size: 20px;
        `}
        ${mediaQueries("mobile")`  
            font-size: 18px;
        `}
        ${mediaQueries("llg")`  
            font-size: 16px;
        `}
    }
    .accordion .accordion-button .cardHeader .positionDesc .btmBar{
        margin: 0;
        padding: 0px;
        display: flex;

        ${mediaQueries("llg")`  
            flex-wrap: wrap;
        `}
    }
    .accordion .accordion-button .cardHeader .positionDesc .btmBar li{
        margin: 0px;
        padding: 0px 0px 0px;
        font-size: 18px;
        line-height: 28px;
        color: #000;
        font-weight: normal;
        position: relative;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;

        ${mediaQueries("llg")`  
            font-size: 16px;
        `}
        ${mediaQueries("tablet")`  
            font-size: 16px;
        `}
        ${mediaQueries("mobile")`  
            font-size: 14px;
        `}
    }
    .accordion .accordion-button .cardHeader .positionDesc .btmBar li:after{
        content: "|";
        color: #a0a1a9;
        padding: 0 15px;
        
        ${mediaQueries("llg")`  
            padding: 0 10px;
        `}
    }
    .accordion .accordion-button .cardHeader .positionDesc .btmBar li:last-child:after{
        display: none;
    }
    .accordion .accordion-button .cardHeader .positionDesc .btmBar li span{
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        padding-right: 8px;
    }
    
    
    .accordion .accordion-body{
        background-color: transparent;
        padding: 30px;
        border-top: 1px solid #dadcef;

        ${mediaQueries("llg")`  
            padding: 30px 20px;
        `}
        ${mediaQueries("tablet")`  
            padding: 25px 10px;
        `}
        ${mediaQueries("tablet")`  
            padding: 20px 0px;
        `}
    }

    .accordion .accordion-body p {
        margin-bottom: 0;
        font-size: 18px;
    }
    .accordion .accordion-body ul{
        margin: 0;
        padding: 0px;
    }
    .accordion .accordion-body ul li{
        margin: 0px;
        padding: 0px 0px 8px 30px;
        font-size: 18px;
        line-height: 24px;
        color: #000;
        font-weight: normal;
        position: relative;

        ${mediaQueries("llg")`  
            font-size: 16px;
            padding: 0px 0px 8px 20px;
        `}
        ${mediaQueries("tablet")`  
            font-size: 14px;
        `}
        
    }
    .accordion .accordion-body ul li:before{
        content: "";
        min-width: 6px;
        min-height: 6px;
        background: #000;
        position: absolute;
        left: 0px;
        top: 10px;
        border-radius: 50%;

        ${mediaQueries("llg")`  
            min-width: 5px;
            min-height: 5px;
        `}
    }

    ${mediaQueries("llg")` 
       padding: 60px 0px 40px;
    `} 

    ${mediaQueries("mobile")` 
       padding-bottom: 40px;
    `} 
   
`;
export const JobCTA  = styled.div` 
    padding: 100px 0px 0px;

    ${mediaQueries("xl")`  
        padding: 80px 0px 80px 0px;
    `}
    ${mediaQueries("lg")`  
        padding: 60px 0px 60px 0px;
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

export const ctaSection  = styled.div`
    &.ctaBox{
        padding: 0px 0px 120px 0px;

        ${mediaQueries("xl")`  
            padding: 0px 0px 0px 0px;
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
        padding: 90px;
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
            background-color: #fff;
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
    ${mediaQueries("mobile")`
        padding: 0px 20px 0px 0px;
    `}
    ${mediaQueries("sm")`
        padding: 0px;
    `}
`;
export const bigHeading = styled.h3`
    color: #18705f;
    font-size: 70px;
    line-height: 1;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 0px;
    margin: 0px 0px 10px;

    ${mediaQueries("xll")`
        font-size: 60px;
    `}
    ${mediaQueries("xl")`
        font-size: 40px;
    `}
    ${mediaQueries("mobile")`
        font-size: 36px;
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
        ${mediaQueries("llg")`
            min-width: 200px;
            font-size: 22px;
        `}
        ${mediaQueries("tablet")`
            min-width: 200px;
            font-size: 22px;
        `}
    }
`;

