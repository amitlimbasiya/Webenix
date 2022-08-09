import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

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
            font-size: 24px;
            line-height: 34px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 20px;
            line-height: 30px;
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
    
    &.leftRightPart{
        background: linear-gradient(90deg,#f6f2d9 20%,#f6f7ee 60%,#fff 0,#fff 80%,#fff);
        overflow: hidden;
        margin-bottom: 100px;

        ${mediaQueries("mobile")` 
            background: linear-gradient(90deg,#f6f2d9 20%,#f6f7ee 100%,#fff 0,#fff 100%,#fff);
            margin-bottom: 50px;
        `} 

        :nth-child(even){
            background: linear-gradient(-90deg,#f6f2d9 20%,#f6f7ee 60%,#fff 0,#fff 80%,#fff);

            .multiple-infraplates{
                grid-template-columns: 1fr;
                margin: 0px;
            }
            .infraplates{
                margin: 0px;
            }

            ${mediaQueries("mobile")` 

                background: linear-gradient(-90deg,#f6f2d9 20%,#f6f7ee 100%,#fff 0,#fff 100%,#fff);

                .row div:nth-child(odd){
                    order: 2;
                }
                .row div:nth-child(even){
                    order: 1;
                    margin-bottom: 20px;
                }
            `} 
        }


    }

    .container{
        max-width: 1430px;
        padding-left: 30px;
        padding-right: 30px;

        ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px;
        `} 
    } 

    padding: 105px 0px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    ${mediaQueries("lg")`
        padding: 60px 0;
    `} 

    ${mediaQueries("mobile")`
        padding: 50px 0;
    `} 

    .multiple-infraplates{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        ${mediaQueries("sm")`
           grid-template-columns: 1fr;
        `} 

    }
    .infraplates{
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 8%);
        padding: 50px 25px 25px;
        position: relative;
        top: 0;
        transition: all .5s;
        margin-right: 15px;
        overflow: hidden;
        margin-top: 10px;
        margin-bottom: 50px;

        ${mediaQueries("lg")`
            padding: 40px 15px 20px;
            margin-right: 10px;
            margin-bottom: 30px;
        `} 

    }
    .infraplates:before{
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 30px;

        ${mediaQueries("sm")`
           height: 20px;
        `} 
    }
    .ROSIEBG.infraplates:before{
        background: #fcbac9;
    }
    .LAVENDERTONICBG.infraplates:before{
        background: #c6bafc;
    }
    .NORTHRENDBG.infraplates:before{
        background: #b6f5fc;
    }
    .MINIONYELLOWBG.infraplates:before{
        background: #ffd45e;
    }
    .infraplates p{
        font-size: 20px;
        line-height: 1;
        font-family: 'Montserrat',sans-serif;
        font-weight: 400;
        margin: 0px 0px 15px;
        letter-spacing: 0.2px;

        ${mediaQueries("lg")`
            font-size: 16px;
            margin: 0px 0px 10px;
        `} 
        
    }
    .infraplates h6{
        font-size: 24px;
        line-height: 1;
        font-family: 'Montserrat',sans-serif;
        font-weight: 700;
        margin: 0;

        ${mediaQueries("lg")`
            font-size: 18px;
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

    .right-slant{
        position: absolute;
        right: 0;
        height: 100%;
        width: 29vw;

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
        width: 29vw;

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
        width: 142px;
        height: 700px;
        background-image: url(images/infrastructure/dotsImg.png);
        background-size: 100%;
        background-position: center right;
        background-repeat: no-repeat;
        position: absolute;
        right: -10px;
        top: 50%;
        transform: translateY(-50%);

        ${mediaQueries("mobile")` 
            width: 100px;
            height: 250px;
        `}
    }
    .left-slant .anmtn-element:after {
        content: "";
        width: 142px;
        height: 700px;
        background-image: url(images/infrastructure/dotsImg.png);
        background-size: 100%;
        background-position: center left;
        background-repeat: no-repeat;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);

        ${mediaQueries("mobile")` 
            width: 100px;
            height: 250px;
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
        background: #f6f8f2;
        background: -moz-linear-gradient(left,  #f6f8f2 0%, #f6fafc 100%);
        background: -webkit-linear-gradient(left,  #f6f8f2 0%,#f6fafc 100%);
        background: linear-gradient(to right,  #f6f8f2 0%,#f6fafc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6f8f2', endColorstr='#f6fafc',GradientType=1 );

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
    
    .rellimage {
        border-radius: 15px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        -webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) ;
        background-size: 1100px;
        background-attachment: fixed;
        height: 550px;
        max-width: 550px;
        margin-left: auto;
        width: 100%;
        position: relative;
        -webkit-animation: slideback 12s infinite alternate;
        animation: slideback 12s infinite alternate;
        margin-top: 150px;


        ${mediaQueries("lg")`
            height: 450px;
            max-width: 450px;
        `} 
        
        ${mediaQueries("mobile")`
            margin-top: 30px;
            height: 400px;
            max-width: 100%;
        `} 
    }
    .rellimage.neverstoplearning {
        background-image: url(images/infrastructure/webenix-office.jpg);
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