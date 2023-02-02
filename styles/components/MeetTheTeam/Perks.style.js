import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/mediaQuery";

export const Pillar = styled.div`
  padding: 110px 0px;

  .container {
    max-width: 1430px;
    padding-left: 30px;
    padding-right: 30px;
  }

  ${mediaQueries("llg")` 
        margin-bottom: 45px
    `}

  ${mediaQueries("xl")` 
        margin-bottom:30px
    `} 

    .topHeading {
    margin-bottom: 65px;
  }
  .topHeading .before-dash {
    position: relative;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.2px;
    padding-left: 45px;
    font-style: italic;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 5px;
    display: block;

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

  .topHeading .before-dash::before {
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

  .topHeading h2 {
    font-size: 48px;
    line-height: 50px;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
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

  .team-section h2 {
    font-size: 40px;
    font-family: "Montserrat", sans-serif;
    color: #000;
    font-weight: 800;
    line-height: 1.2;
    text-align: left;
  }
  .team-section .position {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    color: rgb(64, 64, 64);
    font-style: italic;
    font-weight: 500;
    line-height: 1.2;
    text-align: left;
    display: inline-block;
    margin: 0px 0px 20px 0px;
  }
  .team-section .position a {
    display: inline-block;
    margin: 0px 0px 0px 12px;
    font-size: 20px;

    &:hover {
      color: #67c187;
    }

    &:first-child {
      margin: 0px 0px 0px 15px;
    }
  }
  .team-section p {
    font-size: 24px;
    font-family: "DINPro-Medium";
    font-weight: 500;
    color: rgb(0, 0, 0);
    line-height: 1.583;
    text-align: left;
    letter-spacing: 0.2px;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
  .team-section .row {
    margin-bottom: 150px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  .team-section .team-img {
    position: relative;
    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 100%;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -73px;
      left: 0px;
      background-image: url(../images/meetTheTeam/member-bottom-shape.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 74px;
      z-index: 1;
    }
  }
  .team-section .team-img img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const WeLookFor = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background: #f0f0f0;

  ${mediaQueries("mobile")`
        padding-top: 60px;
        padding-bottom: 60px;
    `}
  .container {
    max-width: 1430px;
    padding-left: 30px;
    padding-right: 30px;

    ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px;
        `}
  }
  h5 {
    font-size: 22px;
    line-height: 30px;
    font-family: "Montserrat", sans-serif;
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
  p {
    font-family: "DINPro-Medium";
    font-size: 18px;
    line-height: 28px;
    color: #000;
    margin: 0px;

    &:last-child {
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

  img {
    width: 90px;
    height: 90px;

    ${mediaQueries("mobile")` 
            width:75px;
            height:75px;
        `}
  }
`;
export const Tagline = styled.div`
  margin-bottom: 50px;

  ${mediaQueries("llg")` 
        margin-bottom: 45px
    `}

  ${mediaQueries("xl")` 
        margin-bottom:30px
    `} 

    .before-dash {
    position: relative;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0px;
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

  .before-dash::before {
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

  h2 {
    font-size: 40px;
    line-height: 50px;
    font-family: "Montserrat", sans-serif;
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

export const JobPart = styled.div`
  background-color: #f1f2fe;
  padding: 100px 0px;

  ${mediaQueries("xl")` 
        padding-bottom: 80px;
        padding-top: 80px;
    `}

  .container {
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
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
    margin-bottom: 20px;
    padding: 0 25px;
    overflow: hidden;
    border: none;

    ${mediaQueries("llg")`  
            padding: 0 15px;
            border-radius: 10px;
        `}
  }

  .accordion .accordion-button {
    background-color: transparent;
    font-family: "Montserrat", sans-serif;
    padding: 30px 0;
    background-repeat: repeat;
    border-bottom: none;
    box-shadow: none;
    display: block;

    &:focus {
      box-shadow: none;
    }

    &::after {
      display: none;
    }

    ${mediaQueries("llg")` 
            font-size: 20px;
            padding: 15px 0px;
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
        .btn-default {
      ${mediaQueries("mobile")`  
                font-size: 14px;
                line-height: 20px;
                padding: 4px 8px;
                border-radius: 4px;
            `}
      &:hover {
        ${mediaQueries("mobile")`  
                    padding: 4px 25px 4px 8px;
                `}
      }
      &:after {
        ${mediaQueries("mobile")`  
                    width: 12px;
                    height: 12px;
                `}
      }
    }
  }
  .accordion .accordion-button .cardHeader .positionDesc .headTitle {
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
  .accordion .accordion-button .cardHeader .positionDesc .btmBar {
    margin: 0;
    padding: 0px;
    display: flex;

    ${mediaQueries("llg")`  
            flex-wrap: wrap;
        `}
  }
  .accordion .accordion-button .cardHeader .positionDesc .btmBar li {
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
  }
  .accordion .accordion-button .cardHeader .positionDesc .btmBar li:after {
    content: "|";
    color: #a0a1a9;
    padding: 0 20px;

    ${mediaQueries("llg")`  
            padding: 0 10px;
        `}
  }
  .accordion
    .accordion-button
    .cardHeader
    .positionDesc
    .btmBar
    li:last-child:after {
    display: none;
  }
  .accordion .accordion-button .cardHeader .positionDesc .btmBar li span {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding-right: 8px;
  }

  .accordion .accordion-body {
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
  .accordion .accordion-body ul {
    margin: 0;
    padding: 0px;
  }
  .accordion .accordion-body ul li {
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
  }
  .accordion .accordion-body ul li:before {
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
       padding:40px 0px;
    `}
`;

export const JobCTA = styled.div`
  padding-top: 0px;
  padding-bottom: 100px;
  background: #f0f0f0;

  ${mediaQueries("xl")`  
        padding: 0px 0px 80px 0px;
        margin-bottom: 50px;
    `}
  ${mediaQueries("lg")`  
        padding: 0px 0px 60px 0px;
    `}

    .container {
    max-width: 1430px;
    padding-left: 30px;
    padding-right: 30px;

    ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px;
        `}
  }
`;

export const ctaSection = styled.div`
  &.ctaBox {
    padding: 0px 0px 120px 0px;

    ${mediaQueries("xl")`  
            padding: 0px 0px 0px 0px;
        `}
  }
`;
export const ctaInner = styled.div`
  &.ctaBoxInner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #67c187;
    border-radius: 25px 25px 0px 0px;
    padding: 90px 90px 60px 90px;
    position: relative;
    margin: 0 auto;

    ${mediaQueries("xl")`
            padding: 70px 60px 50px 60px;
        `}
    ${mediaQueries("tablet")`
            padding: 50px 40px 30px 40px;
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
                bottom: -30px;
                width: 90px;
                height: 30px;
            `}
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -38px;
      right: 0px;
      background: #67c187;
      border-radius: 0px 0px 25px 0px;
      width: calc(100% - 117px);
      height: 38px;
      z-index: 1;

      ${mediaQueries("sm")`  
                bottom: -29px;
                width: calc(100% - 90px);
                height: 30px;
            `}
    }
  }
`;

export const leftPart = styled.div`
  ${mediaQueries("mobile")`
        padding: 0px 20px 0px 0px;
    `}
  ${mediaQueries("sm")`
        padding: 0px;
    `}
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
export const rightPart = styled.div``;
export const ctaBtn = styled.div`
  &.ctaBtn {
    position: relative;

    ${mediaQueries("sm")`
            margin-top: 50px;
        `}

    &:before {
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
  & .btn-default {
    min-width: 300px;
    background: #fff;
    color: #3f3f3f;
    font-size: 28px;
    font-family: "DINPro-Bold";
    text-transform: unset;
    text-align: center;
    line-height: 1.4;

    &:hover,
    &:focus {
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
