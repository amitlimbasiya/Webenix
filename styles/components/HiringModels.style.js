import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const HiringModelsWrapper  = styled.div`

    padding-top: 120px;

    ${mediaQueries("llg")` 
        padding-top: 80px;
    `} 


    .container{        
        ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px;
        `}
        ${mediaQueries("tablet")` 
            max-width: 100%;
            
        `}
    }
    
`;

export const SectionTagline  = styled.div`
 
    margin-bottom: 180px;


    ${mediaQueries("llg")` 
        margin-bottom: 130px;
    `} 

   
    ${mediaQueries("mobile")` 
        margin-bottom: 40px;
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


export const HiringBoxWrapper  = styled.div`

    background-color: #f0f0f0;  
    padding-bottom: 60px;

    ${mediaQueries("mobile")`
      background-color: #fff;  
      padding-bottom: 0;
    `} 

`;

export const HiremodelBox  = styled.div` 
    margin-top: -120px;

    ${mediaQueries("llg")`
       margin-top: -78px;
    `} 

    ${mediaQueries("mobile")`
       margin-top: 0;
       background: #f0f0f0;
       margin-bottom: 30px;
       border-radius: 15px;
       padding: 15px 15px 30px;
    `} 

`;

export const HiremodelBoxTitle  = styled.h3` 
    background: #f0f0f0;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    color: #000;
    font-weight: 700;
    padding: 48px 30px;
    line-height: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-bottom: 0;

    ${mediaQueries("llg")`             
       font-size: 20px;
       padding: 30px 20px;
    `} 

    ${mediaQueries("mobile")`
       font-size: 20px;
       padding: 15px 20px 0;
       margin-bottom: 20px;
    `} 
`;


export const HiremodelInnerBox  = styled.div`    
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 20px;
    padding: 50px 30px;
    position: relative;
    margin: 0 30px;

    ${mediaQueries("xl")`             
        grid-template-columns: auto auto;
    `} 

    ${mediaQueries("llg")`             
        margin: 0 10px;
        padding: 40px 15px;
    `} 

    ${mediaQueries("tablet")` 
        grid-template-columns: repeat(1,1fr);
    `} 

    ${mediaQueries("mobile")` 
        margin-bottom: 0;
        border-radius: 15px;
        padding: 30px 15px;
        margin: 0 5px;
    `} 

`;

export const HiremodelContentBox  = styled.div`

    font-size: 22px;
    font-family: "Montserrat", sans-serif;
    color: #000;
    font-weight: 700;
    line-height: 30px;

    ${mediaQueries("xl")`             
        font-size: 18px;
    `} 

    ${mediaQueries("tablet")`             
       order: 2;
       text-align: center;
    `} 

    ${mediaQueries("mobile")`
       text-align: left;
    `} 


    
    p{
        font-size: 18px;
        font-family: "DINPro-Bold";
        color: #000;
        line-height: 24px;
        padding-bottom: 10px;
        margin-bottom: 0;

        ${mediaQueries("mobile")`
            font-size: 16px;
            padding-bottom: 5px;
        `} 


    }
    .green-text {
        color: #67c187;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
        font-size: 22px;

        ${mediaQueries("xl")`             
            font-size: 18px;
        `}
    }

`;

export const HiremodelIconBox  = styled.div`

    text-align: right;

    img{
        width: 100px;
        
        ${mediaQueries("xl")`
            width: 70px;
        `} 

        ${mediaQueries("xl")`
            width: 60px;
            margin-bottom: 10px;
        `} 

    }

    ${mediaQueries("tablet")` 
        text-align: center;
        order: 1;
        margin-bottom: 10px;
    `} 

    ${mediaQueries("mobile")`
        height: 65px;
        width: 65px;
        border-radius: 100%;
        padding: 12px;
        box-shadow: 0px 2px 3px rgba(0,0,0,0.2);
        margin-left: auto;
        margin-top: -65px;
        background-color: #fff;
    `}

`;


