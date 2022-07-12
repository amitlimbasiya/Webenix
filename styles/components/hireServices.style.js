import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const hireSection  = styled.div`
    &.hireSection{
        background-color: #f1f2fe;
        overflow: hidden;
    }
    .container{
        position: relative;
        padding-bottom: 120px;

        ${mediaQueries("llg")`  
            padding-bottom: 100px;
        `}
        ${mediaQueries("tablet")`  
            max-width: 100%;
            padding-bottom: 80px;
        `}
        ${mediaQueries("sm")`  
            padding-bottom: 60px;
        `}
    }
    
`;
export const dotOverlay  = styled.div`
    &.dotOverlay{
        position: absolute;
        left: 12px;
        top: 0;
        width: calc(100% - 24px);
        height: 100%;
        display: flex;
        z-index: 0;
    }
`;
export const dot  = styled.div`
    flex: 1;
    position: relative;
    &:last-child:before{
        z-index: 1;
        content: "";
        height: 100%;
        width: 1px;
        border-right: 1px dashed #B4B7D9FF;
        position: absolute;
        right: 0;

        ${mediaQueries("sm")`  
            display:none;
        `}        
    }
    &:after{
        z-index: 1;
        content: "";
        height: 100%;
        width: 1px;
        border-right: 1px dashed #B4B7D9FF;
        position: absolute;
        ${mediaQueries("sm")`  
            display:none;
        `}   
    }
`;
export const topContent  = styled.div`
    &.topContent{
        text-align: center;
        font-family: "Montserrat", sans-serif;
        z-index: 0;
        position: relative;
        padding: 120px 0px 0px;

        ${mediaQueries("llg")`  
            padding: 100px 0px 0px;
        `}
        ${mediaQueries("tablet")`  
            padding: 80px 0px 0px;
        `}
        ${mediaQueries("sm")`  
            padding: 50px 0px 0px;
        `}
    }
`;
export const heading  = styled.h2`
    font-size: 38px;
    line-height: 1.4;
    font-weight: 700;
    color: #000;
    margin: 0px;
    font-family: "Montserrat", sans-serif;

    ${mediaQueries("lg")`
        font-size: 36px;
    `}
    ${mediaQueries("tablet")`
        font-size: 30px;
    `}
    ${mediaQueries("sm")`
        font-size: 24px;
    `}
`;
export const subHeading  = styled.h3`
    font-size: 24px;
    line-height: 34px;
    color: #000;
    margin-bottom: 50px;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;

    ${mediaQueries("lg")`
        font-size: 22px;
    `}
    ${mediaQueries("tablet")`
        font-size: 18px;
    `}
    ${mediaQueries("sm")`
        font-size: 16px;
        margin-bottom: 30px;
    `}
`;
export const hireServicesList  = styled.div`
    &.hireServicesList{
        margin-top: 75px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        padding: 0px;

        ${mediaQueries("sm")`
            margin-top: 0px;
        `}

        &:before {
            content: "";
            position: absolute;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
            height: 1px;
            border-top: 1px dashed #B4B7D9FF;
            ${mediaQueries("sm")`  
                display:none;
            `}   
        }
        &::after {
            content: "";
            position: absolute;
            width: 100vw;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            height: 1px;
            border-top: 1px dashed #B4B7D9FF;
            ${mediaQueries("sm")`  
                display:none;
            `}   
        }
    }
`;
export const hireServicesItem  = styled.div`
    text-align: center;
    margin: 0 auto;
    flex: 1;
    position: relative;

    ${mediaQueries("sm")`  
        flex: 50% 1;
        border: 1px dashed #B4B7D9FF;
        margin-left: -1px;
        margin-bottom: -1px;
    `}  
    
    &:before {
        position: absolute;
        content: "";
        left: -10px;
        background: #b4b7d9;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: -10px;
        ${mediaQueries("tablet")`  
            left: -7.5px;
            top: -7.5px;
            width: 15px;
            height: 15px;
        `}
        ${mediaQueries("sm")`  
            display:none;
        `}   
    }
    &:after {
        position: absolute;
        content: "";
        left: -10px;
        background: #b4b7d9;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        bottom: -10px;

        ${mediaQueries("tablet")`  
            left: -7.5px;
            bottom: -7.5px;
            width: 15px;
            height: 15px;
        `}
        ${mediaQueries("sm")`  
            display:none;
        `}   
    }

    .iconBoxLink{
        position: relative;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        padding: 80px 10px !important;
        transition: 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        ${mediaQueries("tablet")`  
            padding: 50px 10px !important;
        `}
        ${mediaQueries("sm")`  
            padding: 25px 10px !important;
        `}  
        
        &:hover{
            h3{
                text-decoration: underline;
            }
            .icon{
                border-color:rgba(0,0,0,0.2);                
                box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 5%);
            }
        }

        &:before{
            content: "";
            position: absolute;
            right: -10px;
            background: #b4b7d9;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            top: -10px;
            
            ${mediaQueries("tablet")`  
                right: -7.5px;
                top: -7.5px;
                width: 15px;
                height: 15px;
            `}
            ${mediaQueries("sm")`  
                display:none;
            `}   
        }
        &:after {
            position: absolute;
            content: "";
            right: -10px;
            background: #b4b7d9;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            bottom: -10px;
            ${mediaQueries("tablet")`  
                right: -7.5px;
                bottom: -7.5px;
                width: 15px;
                height: 15px;
            `}
            ${mediaQueries("sm")`  
                display:none;
            `}   
        }
    }
`;
export const iconBox  = styled.div`
    &.icon{
        width: 155px;
        height: 155px;
        line-height: 155px;
        border-radius: 50%; 
        margin-bottom: 30px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border:1px solid transparent;
        transition: 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        ${mediaQueries("xl")`
            width: 140px;
            height: 140px;
            line-height: 140px;
            margin-bottom: 20px;
        `}
        ${mediaQueries("tablet")`
            width: 100px;
            height: 100px;
            line-height: 100px;
            margin-bottom: 20px;
        `}
        ${mediaQueries("mobile")`
            width: 70px;
            height: 70px;
            line-height: 70px;
            margin-bottom: 15px;
        `}

        & img{
            max-width: 80px;
            vertical-align: middle;
            height: auto;
            width: auto;

            ${mediaQueries("xl")`
                max-width: 60px;
            `}
            ${mediaQueries("tablet")`
                max-width: 50px;
            `}
            ${mediaQueries("mobile")`
                max-width: 35px;
            `}
        }
    }    
    
`;
export const serviceName  = styled.h3`
    font-size: 18px;
    font-family: "DINPro-Medium";
    color: #000;
    line-height: 1.2;
    text-align: center;
    font-weight: 500;
    margin: 0px;
    transition: 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;

    ${mediaQueries("tablet")`
        font-size: 16px;
    `}
    ${mediaQueries("tablet")`
        font-size: 14px;
    `}
`;