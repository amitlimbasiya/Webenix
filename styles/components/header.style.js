import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../utils/mediaQuery";

export const HeaderMainWrapper  = styled.header` 
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    margin: 0 auto;
    z-index: 100;
    padding: 0px 30px;
    transition: 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;

    ${mediaQueries("llg")` 
        padding: 20px;
    `}

    ${mediaQueries("tablet")` 
    `}

    &.menu-fixed {
        background-color: #fff;
        padding: 0px 30px;
        box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
        transition: 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;

        ${mediaQueries("llg")` 
            padding: 20px;
        `}
    }

    &.menu-fixed .menu-item > a{
        ${mediaQueriesmin("llg")` 
            line-height: 80px;
        `}
    }
`;

export const HeaderWrapper  = styled.section` 
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const HeaderItemLeft  = styled.div` 
        
    margin-right: 15px;

    .navbar-brand{
        padding: 0;
        margin-right: 0; 
    }
    .navbar-brand img{
        height: auto;
        max-width: 318px;

        ${mediaQueriesmin("llg")` 
            max-width: 258px;
        `}

        ${mediaQueriesmin("xl")` 
            max-width: 258px;
        `}

        ${mediaQueriesmin("xll")` 
            max-width: 288px;
        `}
        
        ${mediaQueries("llg")` 
            max-width: 280px;
        `}
        ${mediaQueries("tablet")` 
            max-width: 250px;
        `}
        ${mediaQueries("sm")` 
            max-width: 200px;
        `}
    }

`;

export const HeaderItemCenter  = styled.div` 

    display: flex;
    margin-left: 0;
    & .menu-mobile-toggle{
        border:none !important;
    }
    ${mediaQueries("llg")` 
        .menu.nav{
            position: fixed;
            top: 79px;
            left: 0px;
            width: 100%;
            max-height: calc(100vh - 140px);
            overflow-y: auto;
            display: none;
            z-index: 111;
            background-color: #fff;
            -webkit-transition: all .5s ease-in-out;
            -webkit-transition: all .5s ease-in-out;
            transition: all .5s ease-in-out;
            right:0px;
        }

        & .menu-mobile-toggle{
            position: absolute;
            right: 20px;
            top: 30px;
            display: block;
            cursor: pointer;
            width: 25px;
            height: 25px;
            border: none;
            outline: none;
            margin-left: 0;
            margin-top: 0;
            background: none;
            -webkit-transition: .3s ease-in-out;
            transition: .3s ease-in-out;
            
        }
        & .menu-mobile-toggle span {
            display: block;
            position: absolute;
            width: 100%;
            height: 2px;
            left: 0;
            border: none;
            outline: none;
            opacity: 1;
            border-radius: .25rem;
            background: #000;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            transition: .25s ease-in-out
        }
        & .menu-mobile-toggle span:nth-child(1) {
            top: 0;
        }
        & .menu-mobile-toggle span:nth-child(2) {
            top: 8px
        }
        & .menu-mobile-toggle span:nth-child(3) {
            top: 16.5px;
        }

        .menu.nav.activeMenu{
            display:block;
            box-shadow: 0 5px 6px 0 rgb(32 33 36 / 28%);
        }
        
    `}

    ${mediaQueries("sm")` 
        .menu.nav{
            top:74px;
        }
    `}
    
    ${mediaQueriesmin("xl")` 
        .menu-mobile-toggle{
            display: none;
        }
    `}
    & .menu-mobile-arrow{
        display: none;
        font-size: 20px;
        line-height: 1;
        cursor: pointer;
        text-align: center;
        color: #000;
        background-color: transparent;
        font-family: 'DINPro-Medium';
        border: none;
        transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
    }

    ${mediaQueries("llg")` 
        & .menu-section{
            overflow-y: auto;
            overflow-x: hidden;
            width: 100%;
        }
    `}
    
`;


export const HeaderItemRight  = styled.div` 

    ${mediaQueries("llg")` 
        &.header-item-right{
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: absolute;
            right: 60px;
        }
    `}
    ${mediaQueries("sm")` 
        &.header-item-right{
            display: none;
        }
    `}
`;

export const MenuMobileHeader  = styled.div` 
    display: none;

    ${mediaQueries("llg")` 
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        top: 0;
        left: 0;
        right: 0;
        z-index: 110;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        background-color: #fff;
        height: 77px;
        padding: 0 20px;
    `}

    .menu-mobile-close{
        font-size: 20px;
        line-height: 1;
        cursor: pointer;
        text-align: center;
        color: #000;
        background-color: transparent;
        border: none;
        box-shadow:none !important;
    }
`;

export const MenuMobileTitle  = styled.div` 

`;

export const MenuSection  = styled.ul` 
    padding: 0;
    margin: 0;
`;

export const MenuItemHasChildren  = styled.li` 
    display: inline-block; 
    ${mediaQueries("llg")` 
        position: relative;
    `}
    &.openMenu .mobileClick{
        transform: rotate(-180deg);
    }
    .mobileClick{
        display: none;
        ${mediaQueries("llg")` 
            display: flex;
            position: absolute;
            top: 16px;
            right: 25px;
            padding: 5px;
            cursor: pointer;
        `}
        ${mediaQueries("mobile")` 
            top: 10px;
            right: 15px;
        `}

        svg{
            width: 14px;
        }
    }
    
    ${mediaQueriesmin("llg")`
        margin-left: 25px;  
    `}
    ${mediaQueriesmin("xl")`
        margin-left: 25px;  
    `}
    ${mediaQueriesmin("xll")` 
        margin-left: 30px;  
    `}
    ${mediaQueriesmin("xxl")` 
        margin-left: 50px; 
    `}

    ${mediaQueries("llg")`
        display: block;
        line-height: 1;
        margin: 0;
    `}

 
    &:first-child{
        margin-left: 0px;
    }

    &.menu-item > a{
        color: #000;
        
        line-height: 100px;
        letter-spacing: 0.4px;
        margin-bottom: 0px;
        font-family: "DINPro-Medium";
        margin-top: 0;  
        text-decoration: none;
        padding: 0;
        transition: 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        position: relative;
        font-size: 16px;

        ${mediaQueriesmin("llg")` 
            font-size: 16px;
        `}

        ${mediaQueriesmin("xl")` 
            font-size: 18px;
        `}
        ${mediaQueriesmin("xxl")` 
            font-size: 18px;
        `}
        ${mediaQueriesmin("xll")` 
            font-size: 20px;
        `}
        ${mediaQueries("xl")` 
            line-height: 80px;
        `}
       
        ${mediaQueries("llg")` 
            display: block;
            line-height: 60px;
            padding: 0 30px;
            border-bottom: 1px solid #E0E0E0;
        `}
        ${mediaQueries("mobile")` 
            padding: 0 20px;
            line-height: 50px;
        `}
    }
    
    &.menu-item-has-children > a::after{           
        margin-left: 10px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #000;
        display: inline-block;
        position: relative;
        content: "";
        top: -3px;
        
        ${mediaQueries("llg")` 
            display: none;
        `}
    }

    ${mediaQueriesmin("lg")` 
        &:hover .menu-subs{
            // height:100%;
            // transform: translateY(0);
            // -webkit-transform: translateY(0);
        }        
    `} 

`;

export const MenuSub  = styled.div` 
    background: url("../images/megamenu-bg.jpg") no-repeat;
    background-size: cover;

    ${mediaQueriesmin("llg")` 
        position: absolute;
        z-index: 109;
        // margin-top: 25px;
        left: 30px;
        right: 30px;
        margin-left: auto;
        margin-right: auto;
        max-width:100%;
        // border-top: 22px solid transparent;
        display:none;
        width: calc(100% - 60px);
        box-shadow: 0px 0px 30px rgb(0, 0, 0, 0.15);
        -webkit-box-shadow: 0px 0px 30px rgb(0, 0, 0, 0.15);

        // &:after{
        //     content: "";
        //     position: absolute;
        //     // box-shadow: 0 5px 6px 0 rgb(32 33 36 / 28%);
        //     // -webkit-box-shadow: 0 5px 6px 0 rgb(32 33 36 / 28%);
        //     width: 100%;
        //     height: 100%;
        //     top: 0;
        //     z-index: -1;
        // }
    `} 
    &.menu-column-4.no-spacing .menucolumn{
        .menuitem-block{
            margin-bottom: 0px;
        }
        ${mediaQueries("llg")`
            display: none;
            grid-row-gap: 0px;
        `}
        .menulist-item{
            ${mediaQueries("llg")`
                margin-bottom: 0px;
            `}
        }
    }
    &.menu-column-4.no-spacing .menucolumn{
        ${mediaQueries("llg")`
            // display: none;
        `}
    }
    &.menu-column-4 .menucolumn{
        display:grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 50px;

        ${mediaQueries("llg")`
            grid-column-gap: 20px;
            grid-row-gap: 20px;
            grid-template-columns: repeat(2, 1fr);
            display: none;
        `}
        ${mediaQueries("llg")`
        //    .menuitem-block{
        //         margin-bottom: 20px;
        //     }
        `}
        ${mediaQueries("mobile")`
            grid-template-columns: 1fr;
            
           .menuitem-block{
            // margin-top: 10px;
            // display: none;
            margin-bottom: 0;
            }
        `}
        .menulist-item:last-child{
            ${mediaQueries("llg")`
                margin-bottom: 0px;
            `}
        }
    }
    
    &.menu-column-3 .menucolumn{
        display:grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 50px;   
        grid-row-gap: 20px;
        
        ${mediaQueries("llg")`
            grid-column-gap: 20px;
            grid-row-gap: 20px;
            grid-template-columns: repeat(2, 1fr);
            display: none;
        `}
        ${mediaQueries("mobile")`
            grid-template-columns: 1fr;
        `}
        .menuitem-block{
            ${mediaQueries("llg")`
                grid-column-gap: 20px;
            `}
            ${mediaQueries("mobile")`
                // display:none;
            `}
        }
    }


`;

export const MenuColumn  = styled.div` 

    padding: 22px 50px 22px 50px;

    ${mediaQueries("xll")` 
        padding: 30px;
    `}
    ${mediaQueries("mobile")` 
        padding: 20px;
    `}
`;


export const MenuListItem  = styled.div` 

    ${mediaQueries("llg")` 
        float:left;
        width: 50%;
        margin-bottom:20px;
    `}
    ${mediaQueries("mobile")` 
        float:left;
        width: 100%;
        margin-bottom:15px;
    `}
    .menumain-title{
        color: #000;
        font-size: 22px;
        line-height: 32px;
        letter-spacing: 0.4px;
        margin: 10px 0px;
        font-family: "DINPro-Bold";

        .nav-link{
            color: #000;
            font-size: 22px;
            line-height: 32px;
            padding: 15px 20px;
            letter-spacing: 0.4px;
            margin-bottom: 0px;
            font-family: "DINPro-Bold";
            margin-top: 0;
            text-decoration: none;
            background: #fff;
            /* border-radius: 4px; */
            -webkit-box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
            box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
            display: block;


            ${mediaQueries("xll")` 
                padding: 12px 20px; 
                font-size: 20px;
                line-height: 30px;
            `}

            ${mediaQueries("xl")` 
                font-size: 18px;
                line-height: 28px;
            `}

            &:hover{
                background: rgba(255,255,255,0.5);
            }
        } 
    }
    

`;

export const MenuListTitle  = styled.h4` 

    color: #000;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0.4px;
    margin-bottom: 15px;
    font-family: "DINPro-Bold";
    position: relative;

    ${mediaQueries("xl")`
        font-size: 18px;
        line-height: 28px;
    `}
    ${mediaQueries("llg")`
        font-size: 16px;
        line-height: 26px;
    `}
    ${mediaQueries("mobile")`
        margin-bottom: 15px;
    `}

    .mobileClick{
        display: none;
        ${mediaQueries("mobile")` 
            display: flex;
            position: absolute;
            top: 0;
            right: 5px;
            padding: 5px;
            cursor: pointer;
        `}

        svg{
            width: 14px;
        }
    }
`;

export const MenuItemBlock  = styled.div` 

    .menuitem-box{
        display: grid;
        padding: 8px 10px 8px 10px;
        transition: all 0.3s ease;
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;

        &:hover{
            background-color: #fff;
        }

        &:hover .menuitem-icon{
            opacity: 1;
        }

        img{
            max-width: 20px;
            height: auto;
        }
    }
    &.twoPart{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 50px;

        ${mediaQueries("llg")`  
            grid-column-gap: 20px;
            grid-template-columns: 1fr;  
        `}
        
    }


`;

export const MenuItemText  = styled.div` 
    display: flex;
    margin-right: 10px;
    align-items: center;

    p{
        margin: 0;
        color: #000;
        font-size: 16px;
        line-height: 35px;
        letter-spacing: 0.4px;
        font-family: "DINPro-Regular";
        margin-left: 15px;

        ${mediaQueries("xll")`  
            font-size: 14px;
            line-height: 28px;
        `}
    }

`;

export const MenuItemIcon  = styled.div` 
    font-size: 18px;
    line-height: 20px;
    color: #000;
    opacity: 0;
    transition-delay: 0.1s;
`;

export const Demo  = styled.a` 
    
`;