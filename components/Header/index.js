import React, { useEffect, useState} from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Image from 'next/image';
import Link from "next/link";
import * as s from "../../styles/components/header.style"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import LogoImage from "../../public/images/webenix-full-logo.svg";
import webSiteDevelopmentIcon from '../../public/images/web-development-icon.svg';
import codeigniteIcon from '../../public/images/codeigniteIcon.svg';
import codeIcon from '../../public/images/codeIcon.svg';
import uiUxIcon from '../../public/images/ui-ux-icon.svg';
import webFlowIcon from '../../public/images/webFlowIcon.svg';
import websiteDesignIcon from '../../public/images/website-design-icon.svg';
import webDevelopmentIcon from '../../public/images/web-development-icon.svg';
import eCommerceIcon from '../../public/images/eCommerce-icon.svg';
import mobileAppDesignIcon from '../../public/images/mobile-app-design-icon.svg';
import paymentGatwayIntegrationIcon from '../../public/images/payment-gatway-integration-icon.svg';
import outsourcingIndiaIcon from '../../public/images/outsourcing-India-icon.svg';
import itConsultingIcon from '../../public/images/it-consulting-icon.svg';
import startupConsultingIcon from '../../public/images/startup-consulting-icon.svg';
import shippingIntegrationIcon from '../../public/images/shipping-Integration-icon.svg';
import thirdPartyAPIntegrationIcon from '../../public/images/key.svg';
import supportMaintain from '../../public/images/supportIcon.svg';
import frontEndDevelopmentIcon from '../../public/images/front-end-development-icon.svg';
import backendDevelopmentIcon from '../../public/images/backend-development-icon.svg';
import laravelIcon from '../../public/images/laravel-icon.svg';
import wordpressDevIcon from '../../public/images/wordpress-icon.svg';
import shopifyIcon from '../../public/images/shopify-icon.svg';
import hubspotIcon from '../../public/images/hubspot-icon.svg';
import flutterIcon from '../../public/images/flutter-icon.svg';
import reactjsIcon from '../../public/images/reactjsBannerIcon.svg';
import nodeJsIcon from '../../public/images/NodeJS-Icon.svg';
import angularIcon from '../../public/images/angular-icon.svg';
import expressJsIcon from '../../public/images/express-js-banner-icon.svg';
import nextJsIcon from '../../public/images/nextjs-icon.svg';
import androidAppIcon from '../../public/images/android-app-icon.svg';
import iosDevIcon from '../../public/images/apple-ios.svg';
import appleIos from '../../public/images/iphone-icon.svg';
import ionicIcon from '../../public/images/ionicframework-icon.svg';
import progressiveIcon from '../../public/images/pwa-icon.svg';
import prototypeIcon from '../../public/images/design-prototype-icon.svg';
import psdHtmlIcon from '../../public/images/psd-html-icon.svg';
import responsiveIcon from '../../public/images/responsive-icon.svg';
import aspNetDevelopmentIcon from '../../public/images/asp-net-development-icon.svg';
import phpIcon from '../../public/images/php-icon.svg';
import mvpIcon from '../../public/images/mvp-icon.svg';
import seoIcon from '../../public/images/seo-icon.svg';
import ppcIcon from '../../public/images/ppc-icon.svg';
import smoIcon from '../../public/images/smo-icon.svg';
import aboutIcon from '../../public/images/about-icon.svg';
import infrastructureIcon from '../../public/images/infrastrure-icon.svg';
import engagementModelIcon from '../../public/images/engagement-model-icon.svg';
import meetTheTeamIcon from '../../public/images/meet-the-team-icon.svg';
import careerIcon from '../../public/images/hire-dedicated-developers-icon.svg';
import confidentialityIcon from '../../public/images/confidentiality-icon.svg';
import CMSDevIcon from '../../public/images/cms-icon.svg';
import router from "../../utils/router";

const Header = () => {
  return (
    <>
      <s.HeaderMainWrapper className="megaheader-section">
        <s.HeaderWrapper className="wrapper">
          <s.HeaderItemLeft className="header-item-left">
              <Navbar.Brand href="/">
                    <Image src={LogoImage} alt="Logo" layout="raw"/>
              </Navbar.Brand> 
          </s.HeaderItemLeft>

          

          <s.HeaderItemRight className="header-item-right">
            <Link href={router.CONTACT}>
              <a className="btn-default">Contact Now</a>
            </Link> 
          </s.HeaderItemRight>
        </s.HeaderWrapper>
      </s.HeaderMainWrapper>
      {/* <s.Demo>
          
      </s.Demo> */}
    </>
  );
};

export default Header;
