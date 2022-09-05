import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const SingleBlogWrapper  = styled.div`
    
    padding-bottom: 60px;

    ${mediaQueries("mobile")`
        padding-bottom: 30px;
    `}

    img{
        max-width: 100%;
        height: auto;
    }

    .container{
        margin-top: 120px;
        max-width: 1230px; 
        padding-left: 20px;
        padding-right: 20px;

        ${mediaQueries("lg")`
            margin-top: 80px;
        `}

        ${mediaQueries("mobile")`
            margin-top: 60px;
        `}

        .row{

            justify-content: space-between;

            .singleblog-banner-content .blog-category{
                font-size: 18px;
                letter-spacing: 1.6px;
                font-family: "DINPro-Bold";
                margin-bottom: 5px;

                ${mediaQueries("mobile")`
                    font-size: 15px;
                    line-height: 24px;
                `}
            }
            .orangeColor{color: #ff9000;}

            .blog-title{
                font-size: 34px;
                line-height: 44px;
                letter-spacing: 0.4px;
                color: #000;
                font-family: "Montserrat",sans-serif;
                font-weight: 700;    
                
                ${mediaQueries("mobile")`
                    font-size: 22px;
                    line-height: 32px;
                `}
            }
            .singleblog-banner-img{
                margin-top: 30px;
                margin-bottom: 50px;

                ${mediaQueries("mobile")`
                    margin-top: 0;
                    margin-bottom: 30px;
                `}
                
            }
            .singleblog-banner-img img{               
                width: 100%;
                max-width: 100%;
                height: auto;
            }
            .imgwith-boxshadow{
                box-shadow: 2px 2px 15px rgb(0 0 0 / 50%);
                border: 3px solid #fff;
            }

            .blog-date{
                font-family: "DINPro-Bold";
                font-size: 14px;
                color: #808080;
                letter-spacing: 1.6px;
                text-transform: uppercase;

                ${mediaQueries("mobile")`
                    letter-spacing: 1.2px;
                `}
            }            
        }
    }

`;

export const SingeBlogHeaderBg  = styled.div`
    padding-top: 100px;
    background-color: rgba(219,220,243,1);   

    ${mediaQueries("mobile")`
        padding-top: 70px;
    `}
`;

export const BlogContentWrapper  = styled.div`
    display: inline-block;
    margin-bottom: 30px;
    
    ${mediaQueries("mobile")`
        margin-bottom: 20px;
    `}


    h3{
        color: #ff9000;
        font-size: 24px;
        line-height: 36px;
        font-family: "Montserrat",sans-serif;
        font-weight: 700;  
        
        ${mediaQueries("mobile")`
            font-size: 20px;
            line-height: 30px;
        `}
    }
    .bloglink{
        color: #ff9000;
        font-weight: 700;
    }
    
    p{
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.2px;
        color: #000;

        ${mediaQueries("mobile")`
            font-size: 16px;
            line-height: 26px;
        `}
    }

    p:last-child{
        margin-bottom: 0;
    }
    .blog-listing {
        padding-left: 0;
    }

    .blog-listing li{
        width: 100%;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0.36px;
        margin-bottom: 15px;
        position: relative;
        padding-left: 25px;

        ${mediaQueries("mobile")`
            font-size: 16px;
            line-height: 26px;
            padding-left: 15px;
        `}

        &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 10px;
            background-color: #4b4b4b;
            width: 6px;
            height: 6px;
            border-radius: 100%;

            ${mediaQueries("mobile")`
                width: 4px;
                height: 4px;
            `}
        }
    }
`;

export const BlogImageWrapper  = styled.div`
    margin-bottom: 30px;
`;