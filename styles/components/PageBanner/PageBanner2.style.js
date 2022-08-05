import styled, { css } from "styled-components";
import { mediaQueries, mediaQueriesmin } from "../../../utils/mediaQuery";

export const PageBannerWrapper  = styled.div` 

    position: relative;

    &.engagement_bg{
        background-image: url("images/engagement-pagebannebg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    &.top-right{overflow: hidden;}
    &.top-right::before{
        position: absolute;
        content: "";
        right: -50px;
        opacity: 1;
        top: -50px;
        z-index: 0;
        background-image: url("images/pagebanner-topright-shape.svg");
        width: 600px;
        height: 500px;
        background-repeat: no-repeat;
        background-position: top right;
        background-size: contain;
        animation: distract 6s ease-out infinite!important;
    }

    .container{      
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
        max-width: 1430px;
        align-items: center;
        padding-top: 100px;
        min-height: 600px;
        text-align: center;
        display: flex;     
        justify-content: center ;

        
        ${mediaQueries("llg")`
            padding-left: 30px;
            padding-right: 30px;
            min-height: 500px;
            padding-top: 50px;
            padding-bottom: 0;
        `}   
        
        ${mediaQueries("tablet")`
            min-height: 400px;
        `} 
    } 
    
    h1{ 
        font-family: 'Montserrat',sans-serif;
        font-weight: 900;
        font-size: 42px;
        letter-spacing: 0.2px;
        color: #000;
        margin-bottom: 0;
        max-width: 450px;
      

        ${mediaQueries("mobile")` 
            font-size: 32px;
        `} 
    }    

    @keyframes distract {
    0%,
    97%,
    to {
     -webkit-transform:scale(1);
     transform:scale(1)
    }
    20%,
    68% {
     -webkit-transform:scaleX(.90) scaleY(.98);
     transform:scaleX(.90) scaleY(.98)
    }
    48% {
     -webkit-transform:scaleX(1) scaleY(.96);
     transform:scaleX(1) scaleY(.96)
    }
    80% {
     -webkit-transform:scaleX(1) scaleY(.98);
     transform:scaleX(1) scaleY(.98)
    }
   }


`;