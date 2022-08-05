import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const SingleBlogWrapper  = styled.div`
    
    padding-bottom: 60px;

    img{
        max-width: 100%;
        height: auto;
    }
    .container{
        margin-top: 120px;
        max-width: 1230px; 
        padding-left: 20px;
        padding-right: 20px;

        .row{

            justify-content: space-between;

            .singleblog-banner-content .blog-category{
                font-size: 18px;
                letter-spacing: 1.6px;
                font-family: "DINPro-Bold";
                margin-bottom: 5px;
            }
            .orangeColor{color: #ff9000;}

            .blog-title{
                font-size: 34px;
                line-height: 44px;
                letter-spacing: 0.4px;
                color: #000;
                font-family: "Montserrat",sans-serif;
                font-weight: 700;               
            }
            .singleblog-banner-img{
                margin-top: 30px;
                margin-bottom: 50px;
            }
            .singleblog-banner-img img{               
                width: 100%;
                max-width: 100%;
                height: auto;
            }
            .imgwith-boxshadow{
                box-shadow: 0 8px 20px rgb(0 0 0 / 8%);
                border: 3px solid #fff;

            }

            .blog-date{
                font-family: "DINPro-Bold";
                font-size: 14px;
                color: #808080;
                letter-spacing: 1.6px;
                text-transform: uppercase;
            }            
        }
    }

`;

export const SingeBlogHeaderBg  = styled.div`
    padding-top: 100px;
    background-color: rgba(219,220,243,1);   
`;

export const BlogContentWrapper  = styled.div`
    display: inline-block;
    margin-bottom: 30px;


    h3{
        color: #ff9000;
        font-size: 24px;
        line-height: 36px;
        font-family: "Montserrat",sans-serif;
        font-weight: 700;       
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

        &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 10px;
            background-color: #4b4b4b;
            width: 6px;
            height: 6px;
            border-radius: 100%;
        }
    }
`;

export const BlogImageWrapper  = styled.div`
    margin-bottom: 30px;
`;