import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const Listing  = styled.div`  

    padding-top: 0px; 
    padding-bottom: 150px; 
    background: -moz-linear-gradient(top,  rgba(255,255,255,0.5) 0%, rgba(255,239,186,0.5) 41%, rgba(255,239,186,0.5) 100%);
    background: -webkit-linear-gradient(top,  rgba(255,255,255,0.5) 0%,rgba(255,239,186,0.5) 41%,rgba(255,239,186,0.5) 100%);
    background: linear-gradient(to bottom,  rgba(255,255,255,0.5) 0%,rgba(255,239,186,0.5) 41%,rgba(255,239,186,0.5) 100%);
    
    ${mediaQueries("llg")` 
        padding-bottom: 90px;
    `} 

    ${mediaQueries("tablet")` 
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
    .slick-slider{
        margin-top: -150px;

        ${mediaQueries("xlx")` 
            margin-top: -100px;
        `}
        ${mediaQueries("tablet")` 
            margin-top: -80px;
            padding-bottom: 30px;
        `}
    }
    .slick-slide{
        padding: 0 30px;
        position: relative;

        ${mediaQueries("xlx")` 
            padding: 0 20px;
        `} 
    }
    .slick-slide .datePart{
        background: rgba(32,32,32,.75);
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 0px;
        padding: 8px 16px;
        font-weight: 500;
        letter-spacing: 0.4px;
        color: #fff;
        width: auto;
        position: absolute;
        bottom: -3px;
        left: -3px;
    }
    .slick-slide .blogItem > a{
        padding: 30px 30px 0px 0px;
        display: block;
        background: #fff;

        ${mediaQueries("xlx")` 
            padding: 20px 20px 0px 0px;
        `} 
        ${mediaQueries("tablet")` 
            padding: 10px 10px 0px 0px;
        `} 
    }
    .slick-slide .blogItem img{
        height: auto;
        max-width: 100%;
        object-fit: initial;
        max-height: 202px;
    }
    .slick-slide::before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
    .slick-next,
    .slick-prev{
        top: -40px;
        left: auto;
        transition: none !important;
        font-family: unset;
        
        ${mediaQueries("tablet")` 
            bottom:0px;
            top: auto;
        `} 
    }
    .slick-next {
        right: 40px;

        ${mediaQueries("tablet")` 
            right: calc(50% - 30px); 
        `} 
    }
    .slick-prev{
        right: 80px;
        ${mediaQueries("tablet")` 
            left:calc(50% - 30px); 
        `} 
    }
    .slick-prev:before, .slick-next:before{
        color: #000;
        font-family: unset;
        opacity: 1;
    }
`; 
export const blogListing  = styled.div`
    &.blogListing{
        padding-top: 170px;
        font-size: 40px;
        font-family: 'Montserrat', sans-serif;
        color: #000;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 0px;

        ${mediaQueries("xlx")` 
            padding-top: 100px;
        `} 
        ${mediaQueries("lg")` 
            padding-bottom: 60px;
        `}
        ${mediaQueries("tablet")` 
            padding-top: 30px;
            padding-bottom: 0px;
        `} 
    }   

    .paginationPart{
        position: relative;
        padding-top: 0px;
        margin-top: 20px;

        &:before{
            content: '';
            border-top: 2px solid #808080;
            display: inherit;
        }

        a{
            
            line-height: 1;
            font-size: 18px;
            color: #000;
            font-family: "DINPro-Bold";
            font-weight: bold;
            display: inline-block;
            -webkit-transition: all 0.3s 0s linear;
            -moz-transition: all 0.3s 0s linear;
            -o-transition: all 0.3s 0s linear;
            transition: all 0.3s 0s linear;
            margin: 0 10px 0 0;

            &:hover,
            &:focus{ 
                color: #67c187;
            }
        }
        a.pagi{
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 50%;
            
            &:hover{
                background: #808080;    
                color: #fff;
            }
        }
    }
`;
export const blogItem  = styled.div`
    
    &.blogItem .blogLink{
        display: inline-block;
        position: relative;
        line-height: 25px;
        padding-bottom: 5px;
        font-size: 18px;
        color: #3f3f3f;
        font-family: "DINPro-Bold";
        font-weight: bold;
        text-transform: uppercase;
        -webkit-transition: all 0.3s 0s linear;
        -moz-transition: all 0.3s 0s linear;
        -o-transition: all 0.3s 0s linear;
        transition: all 0.3s 0s linear;

        &:after{
            content: '';
            position: absolute;
            bottom: 0px;
            right: 0px;
            height: 2px;
            width: 0%;
            background-color: #3f3f3f;
            -webkit-transition: all 0.3s 0s linear;
            -moz-transition: all 0.3s 0s linear;
            -o-transition: all 0.3s 0s linear;
            transition: all 0.3s 0s linear;
        }
        &:hover,
        &:focus{ 
            color: #67c187;
            
            &:after{
                width: 100%;
                left: 0;
                background-color: #67c187;
            }
        }

        ${mediaQueries("tablet")`  
            font-size: 16px;
        `}
    }
    p{
        font-size: 18px;
        font-family: "DINPro-Regular";
        color: rgb(0, 0, 0);
        line-height: 1.556;
        margin: 0px;
        
        ${mediaQueries("tablet")`  
            font-size: 16px;
        `}
    }
    .datePart {
        font-size: 14px;
        color: rgb(128, 128, 128);
        font-family: "DINPro-Bold";
        font-weight: bold;
        line-height: 1;
        letter-spacing: 1.6px;
        margin-top: 20px;
    }
`;
export const blogImage  = styled.div`
    box-shadow: 0 8px 20px rgb(0 0 0 / 8%);
    border: 3px solid #fff;
    position: relative;

    img{
        max-width: 100%;
        height: auto;
        width: 100%;
    }
`;
export const blogCategory  = styled.div`
    margin: 0;
    padding: 20px 0 20px;
    font-size: 14px;
    line-height: 1;
    font-family: "DINPro-Bold";
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.6px;

    ${mediaQueries("mobile")`  
        padding: 20px 0 10px;
    `}   
`;
export const blogTitle  = styled.h4`

    &.postHeading{
        margin-bottom: 20px;
    }

    &.postHeading a{
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        color: #000;
        font-weight: 700;
        line-height: 1.3;
        display: inline-block;

        &:hover,
        &:focus{
            color: #67c187;
        }

        ${mediaQueries("xl")`  
            font-size: 18px;
        `} 
        ${mediaQueries("llg")`  
            font-size: 16px;
        `} 
        ${mediaQueries("tablet")`  
            margin-bottom: 0px;
            font-size: 16px;
            display: inline-block;
        `}
        
    }
`;
export const CategoryList  = styled.div`
    padding: 25px;
    box-shadow: 0 8px 20px rgb(0 0 0 / 8%);
    border: 3px solid #fff;
    position: sticky;
    top: 66px;

    ${mediaQueries("tablet")`  
        top: 0px;
        position: relative;
        padding: 25px;
    `}

    ${mediaQueries("sm")`  
        padding: 20px;
    `}

    .catListPart{
        display: grid;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 15px;
        margin: 0px;
        padding: 0px;

        ${mediaQueries("tablet")`  
            grid-row-gap: 5px;
            grid-template-columns: auto auto auto;
        `}
        ${mediaQueries("mobile")`  
            grid-template-columns: auto auto;
        `}
        ${mediaQueries("sm")`  
            grid-template-columns:auto auto;
        `}

        li{
            display: inherit;
            margin: 0 auto 0 0;
            padding: 0;
        }
    }
    a{
        position: relative;
        line-height: 25px;
        padding-bottom: 5px;
        font-size: 18px;
        color: #000;
        font-family: "DINPro-Bold";
        font-weight: bold;
        text-transform: uppercase;
        -webkit-transition: all 0.3s 0s linear;
        -moz-transition: all 0.3s 0s linear;
        -o-transition: all 0.3s 0s linear;
        transition: all 0.3s 0s linear;
        display: inline-block;

        &:after{
            content: '';
            position: absolute;
            bottom: 0px;
            right: 0px;
            height: 2px;
            width: 0%;
            background-color: #000;
            -webkit-transition: all 0.3s 0s linear;
            -moz-transition: all 0.3s 0s linear;
            -o-transition: all 0.3s 0s linear;
            transition: all 0.3s 0s linear;
        }
        &:hover,
        &:focus{ 
            color: #67c187;
            
            &:after{
                width: 100%;
                left: 0;
                background-color: #67c187;
            }
        }

        ${mediaQueries("tablet")`  
            font-size: 16px;
            display: inline-block;
            margin-right: 20px;
        `}
    }
`;
export const catHeading  = styled.h2`
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    color: #000;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #3f3f3f;

    ${mediaQueries("tablet")`  
        margin-bottom: 15px;
    `}
    ${mediaQueries("sm")`  
        font-size: 20px;
    `}
`;
