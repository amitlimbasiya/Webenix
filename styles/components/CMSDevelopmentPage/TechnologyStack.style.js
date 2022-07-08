import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const TechnologyStackWrapper  = styled.div` 

    ${mediaQueriesmin("xxl")`  
       .container{
        max-width: 1440px;
       }
    `} 

    padding-top: 110px;
    padding-bottom: 350px;
    background: url("images/CMSDevelopmentPage/dot-abstract-bg.png") no-repeat;
    background-position: center bottom;
    padding-left: 30px; 
    padding-right: 30px;   

    ${mediaQueries("mobile")`

        padding-top: 60px;
        .container{ 
            max-width: 100%;
        }       
    `}

    ${mediaQueries("sm")` 
        .container{
            max-width: 100%;           
        }       
    `}

    ${mediaQueries("sm")` 
        padding-left: 10px;
        padding-right: 10px;     
    `}


`;

export const SectionTagline  = styled.div` 
 
    margin-bottom: 50px;


    ${mediaQueries("llg")` 
        margin-bottom: 60px
    `}  

    ${mediaQueries("mobile")` 
        margin-bottom: 30px 
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

        ${mediaQueries("llg")` 
            font-size: 36px;
            line-height: 55px;
        `}  

        ${mediaQueries("mobile")`
            font-size: 26px;
            line-height: 40px;
        `}
    }
    
`;
 

export const TechnologyStackTab  = styled.div`

    padding-bottom: 70px;

    .technologystack-list{
        border-bottom: 1px solid #c9c9c9;
        justify-content: center;
    }
    .technologystack-list .nav-item .nav-link {
        padding: 10px 30px;
        font-size: 28px;
        font-family: "Montserrat", sans-serif;
        color: #808080;
        font-weight: 700;
        line-height: 1;
        text-align: center; 
        border: none;
        background: none;
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        margin-left: 55px; 
        margin-right: 55px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;

        &:hover{
            color: #404040;
        }

        ${mediaQueries("xll")`
            padding: 10px 20px;
            font-size: 24px;
            margin-left: 30px; 
            margin-right: 30px;
       `}

        ${mediaQueries("tablet")`
            padding: 10px 15px;
            font-size: 20px;
            margin-left: 20px; 
            margin-right: 20px;
       `}

        ${mediaQueries("mobile")`
            padding: 8px 4px;
            font-size: 13px;
            margin-left: 5px; 
            margin-right: 5px;
       `}

    }

    .technologystack-list .nav-item .nav-link:after {
        content: "";
        position: absolute; 
        bottom: -4px;
        background-color: #404040;
        border-radius: 5px; 
        width: 0%;
        height: 5px; 
        right: 0px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;

        
        ${mediaQueries("mobile")`
           height: 3px;
           bottom: -2px;
       `}

    }
    .technologystack-list .nav-item .nav-link.active:after,
    .technologystack-list .nav-item .nav-link:hover:after,
    .technologystack-list .nav-item .nav-link:focus:after { 
        width: 100%;
        left: 0;
    }

    .technologystack-list .nav-item .nav-link.active{
        color: #404040;
        position: relative;
    }



`

export const TechnologyStackContent  = styled.div` 

    text-align: center;

    
    a{
        color: #000000;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        display: inline-block;
        text-decoration: none;
        margin: 60px 55px 0px;      
        
        &:hover .technologystack-icon{
            border-color: #000000;
            box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 5%);
        }

        ${mediaQueries("xll")`
            margin: 50px 45px 0px;  
       `}

        ${mediaQueries("tablet")`
            margin: 40px 30px 0px;  
       `}

        ${mediaQueries("mobile")`
            margin: 30px 10px 0px;  
       `}
    }


    p {
        margin-bottom: 0;

        ${mediaQueries("mobile")`
            font-size: 13px;
       `}
    }

`

export const TechnologyStackLogo  = styled.div`
    padding: 20px;
    width: 100px;
    text-align: center;
    border: 1px solid #404040;
    border-radius: 100px;
    height: 100px;
    display: flex;
    align-items: center; 
    justify-content: center;
    margin: 0 auto 15px;
    background: #f5f5f5;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;


    img{
        max-height: 60px;

        ${mediaQueries("mobile")` 
           max-height: 23px;
        `}

    }

    ${mediaQueries("mobile")` 
        width: 55px;
        height: 55px;
        padding: 10px;
        margin-bottom: 5px;
    `}

`