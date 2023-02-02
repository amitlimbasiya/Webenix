import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const PageBannerWrapper = styled.div`
  background-image: url(images/meetTheTeam/banner-bg.jpg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  &.top-right {
    overflow: hidden;
  }
  &.top-right::before {
    position: absolute;
    content: "";
    right: -50px;
    opacity: 1;
    top: -50px;
    z-index: 0;
    background-image: url(images/career/pagebanner-topright-shape.svg);
    width: 600px;
    height: 500px;
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
    animation: distract 6s ease-out infinite !important;
  }

  .container {
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    max-width: 1430px;

    ${mediaQueries("llg")`
            padding-left: 30px;
            padding-right: 30px;
        `}
  }

  .row {
    align-items: center;
    padding-top: 100px;
    min-height: 600px;

    ${mediaQueries("llg")` 
           min-height: auto;
           padding-top: 120px;
           padding-bottom: 100px;
        `}

    ${mediaQueries("mobile")`          
           padding-top: 100px;
           padding-bottom: 60px;
        `}
  }

  ${mediaQueries("xxl")`
        
        .pagebannerimg-col{
            position: relative;
        }

    `}

  ${mediaQueries("llg")` 
        .pagebannercontent-col{
            width: 100%; 
        }
    `} 

  &.pagebanner-align-center .row {
    align-items: center;
  }
  &.pagebanner-align-center .pagebanner-imgpart {
    justify-content: flex-end;
  }
  ${mediaQueries("llg")` 
        .pagebannercontent-col{
            width: 100%; 
        }
        .pagebannerimg-col{
            display: none;
        }      
    `}

  @keyframes distract {
    0%,
    97%,
    to {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    20%,
    68% {
      -webkit-transform: scaleX(0.98) scaleY(0.9);
      transform: scaleX(0.98) scaleY(0.9);
    }
    48% {
      -webkit-transform: scaleX(0.96) scaleY(1);
      transform: scaleX(0.96) scale(1);
    }
    80% {
      -webkit-transform: scaleX(0.98) scaleY(1);
      transform: scaleX(0.98) scaleY(1);
    }
  }
`;
export const PageBannerContentPart = styled.div`
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 42px;
    letter-spacing: 0.2px;
    color: #000;
    margin-bottom: 8px;
    position: relative;

    ${mediaQueries("mobile")` 
            font-size: 32px;
            margin-bottom: 15px;
        `}

    &.greenBrd {
      display: inline-block;
      margin: 0 !important;

      :after {
        position: absolute;
        content: "";
        left: 0;
        background-color: rgba(27, 167, 140, 0.3);
        height: 6px;
        width: 100%;
        bottom: 0;
      }
    }
  }
  span {
    position: relative;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 42px;
    line-height: 1;
    color: #000;
    display: inline-block;

    ${mediaQueries("mobile")` 
            font-size: 32px;
            margin-bottom: 15px;
        `}

    :before {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      bottom: 6px;
      background-color: rgba(27, 167, 140, 0.3);
      height: 6px;
    }
  }
`;
