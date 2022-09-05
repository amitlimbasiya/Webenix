import styled, { css } from "styled-components";
import { mediaQueries } from "../../utils/mediaQuery";

export const ContactFormWrapper  = styled.div`
    position: relative;
    padding-bottom: 100px;

    .container{
        max-width: 1140px;       
        padding: 60px;
        border-radius: 20px;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 15%);

        ${mediaQueries("lg")` 
            max-width: calc(100% - 40px);
            padding: 30px;       
       `} 

        ${mediaQueries("mobile")`
            padding: 30px 20px;
            border-radius: 10px;
        `} 
    }

    .contact-form .form-label{
        font-size: 16px;
        color: #000;
    }
    .contact-form .form-control{
        background: #fff;
        border-color: #ddd;
        padding: 5px 12px;
        font-size: 16px;
        line-height: 26px;
        font-family: "DINPro-Regular";
    }

    ${mediaQueries("mobile")`
        .btn-default{
            font-size: 16px;
        }
    `} 



   
`;
