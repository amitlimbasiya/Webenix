import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const OurExpertiseWrapper  = styled.div` 
    .container{
        max-width: 1140px;
        padding-left: 0px; 
        padding-right: 0px;
    } 

    padding: 120px 0 60px;  
    background-color: #fff;    

    [class*="col-"]{
        padding-left: 15px;
        padding-right: 15px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
    }

    
    ${mediaQueries("llg")` 
        padding-top: 80px;
        padding-bottom: 0px;
    `} 

    .container{

        ${mediaQueries("llg")` 
            max-width: 100%;
            padding-left: 30px;
            padding-right: 30px;
        `} 
    }

    ${mediaQueries("mobile")`

        [class*="col-"]{
            width: 50%;
        } 

    `} 

    ${mediaQueries("sm")`

        [class*="col-"]{
            width: 100%;
        } 

        [class*="col-"]:last-child .ourexpertis-box {
            margin-bottom: 70px;
        }        
    `}     
    
`;


export const SectionTagline  = styled.div`
 
    margin-bottom: 100px;


    ${mediaQueries("llg")` 
        margin-bottom:90px;
    `} 

   
    ${mediaQueries("mobile")` 
        margin-bottom: 80px;
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
        font-size: 48px;
        line-height: 68px;
        font-family: 'Montserrat', sans-serif; 
        font-weight: 700; 

        ${mediaQueries("xl")` 
            font-size: 42px;
            line-height: 52px;
        `}  

        ${mediaQueries("llg")` 
            font-size: 36px;
            line-height: 46px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 26px;
            line-height: 36px;
        `}
    }
    
`;

export const OurExpertisBox  = styled.div` 

    position: relative;
    padding: 30px 30px 30px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0 0 0 / 20%);
    -webkit-box-shadow: 0px 0px 10px rgba(0 0 0 / 20%);
    margin-bottom: 90px;
    background-image: url(images/noisy-texture.png);
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    -ms-flex: 1 1 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1 100%;
    -ms-flex: 1 100%;
    flex: 1 100%;

    ${mediaQueries("llg")`
        padding: 20px;
    `}
    ${mediaQueries("mobile")`
        margin-bottom: 60px;
    `}

`;

export const OurExpertisNumber  = styled.div` 

    width: 80px;
    height: 80px;
    border-radius: 100%;
    line-height: 80px;
    padding: 15px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    margin: 0 auto 30px;
    box-shadow: 0px 0px 14px rgba(0 0 0 / 30%);
    -webkit-box-shadow: 0px 0px 14px rgba(0 0 0 / 30%);
    font-size: 30px;
    font-family: 'Montserrat',sans-serif;
    letter-spacing: 1px;    

    ${mediaQueries("llg")`
        font-size: 22px;
        line-height: 32px;
        width: 70px;
        height: 70px;
        top: -35px;
    `}
    ${mediaQueries("mobile")`
        font-size: 20px;
        line-height: 30px;
        width: 60px;
        height: 60px;
        top: -30px;
    `}
`;

export const OurExpertisTitle  = styled.h3` 
    font-size: 22px;
    line-height: 32px;
    font-family: "DINPro-Bold";  
    margin-top: 30px; 
    text-transform: capitalize;

    ${mediaQueries("llg")` 
        font-size: 20px;
        line-height: 30px;
    `} 

    ${mediaQueries("mobile")`
        font-size: 18px;
    `}
`;