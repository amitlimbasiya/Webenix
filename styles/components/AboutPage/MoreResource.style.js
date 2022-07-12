import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/mediaQuery";
 
export const MoreResourceWrapper  = styled.div`  

    position: relative;
    background-image: url("images/noisy-texture.png");  
 
    &:before{
        position: absolute;
        content: "";
        inset: 0;
        background-color: rgba(94,190,129,0.5);
        height: 215px;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        z-index: -1;

        ${mediaQueries("xll")`
            height: 150px;
        `}  
        ${mediaQueries("tablet")`
            height: 120px;
        `}    
        ${mediaQueries("mobile")`
            height: 100px;
        `}

        ${mediaQueries("xxs")`
            height: 60px;
        `}
    }

    .container{

        max-width: 1430px;

        ${mediaQueries("xxl")` 
            padding-left: 30px;
            padding-right: 30px; 
            max-width: 1200px;
        `} 
        ${mediaQueries("llg")` 
            padding-left: 20px;
            padding-right: 20px; 
        `} 

        ${mediaQueries("mobile")` 
            padding-left: 20px;
            padding-right: 20px; 
        `}
    }
 
`;

export const MoreResourceBlock  = styled.div`
        background-color: #ecf9f3;
        padding:50px;
        border-radius: 60px;
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 120px;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 3px 30px rgb(0, 0, 0, 0.25);
        word-break: break-word;

        ${mediaQueries("xxl")`
            grid-column-gap: 80px;
        `}

        ${mediaQueries("llg")` 
           padding: 30px;
           border-radius: 30px;
           grid-column-gap: 50px;
        `}

        ${mediaQueries("mobile")` 
           padding: 30px 20px;
           border-radius: 20px;
           grid-column-gap: 30px;
        `}

        ${mediaQueries("xxs")` 
           padding: 20px 15px;
           border-radius: 20px;
           grid-column-gap: 30px;
        `}

`;

export const DobuleSizeTitle  = styled.div`  

    h3{
        font-size: 200px;
        line-height: 50px;
        color: #404040;
        font-family: 'DINPro-CondensedBlack';

        ${mediaQueries("llg")` 
            font-size: 150px;
        `} 
        ${mediaQueries("tablet")` 
            font-size: 120px;
        `} 

        ${mediaQueries("mobile")` 
            font-size: 90px;
        `} 

        ${mediaQueries("xxs")` 
            font-size: 60px;
        `} 


    }

`;

export const MoreResourceContent  = styled.div`  

    h4{
        font-size: 70px;
        font-family: 'DINPro-CondensedBlack';
        line-height: 70px;
        margin: 15px 0;

        ${mediaQueries("xxl")` 
            font-size: 60px;
            line-height: 60px;
        `} 

        ${mediaQueries("llg")` 
           font-size: 50px;
           line-height: 50px;
           margin: 10px 0;
        `}
        ${mediaQueries("tablet")` 
            font-size: 40px;
            line-height: 35px;
        `} 

        ${mediaQueries("mobile")` 
            font-size: 36px;
            line-height: 30px;
        `} 

        ${mediaQueries("xxs")` 
            font-size: 24px;
            line-height:18px;
        `} 

    }

    h4.light-green{color: #5ebe81;}
    h4.dark-green{color: #1ba78c;}
    h4.regular-green{color: #36baa0;}


`;
