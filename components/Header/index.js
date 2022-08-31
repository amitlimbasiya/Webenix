import React, { useEffect, useState} from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Image from 'next/image';
import Link from "next/link";
import * as s from "../../styles/components/header.style"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import LogoImage from "../../public/images/webenix-full-logo.svg";
import graphicsDesignIcon from '../../public/images/f-Graphics-Design.svg';
import webDesignIcon from '../../public/images/f-Web-Design.svg';
import uiUxIcon from '../../public/images/f-UIUX-Design.svg';
import codeigniteIcon from '../../public/images/f-codeignite-Icon.svg';
import codeIcon from '../../public/images/f-Web-Development.svg';
import eCommerceIcon from '../../public/images/f-eCommerce-Development.svg';
import mobileAppDesignIcon from '../../public/images/f-Mobile-App-Design.svg';
import MVPDevIcon from '../../public/images/f-MVP-Development.svg';
import CMSDevIcon from '../../public/images/f-CMS-Development.svg';
import smoIcon from '../../public/images/f-SMO.svg';
import seoIcon from '../../public/images/f-SEO.svg';
import ppcIcon from '../../public/images/f-PPC.svg';
import reactJsIcon from '../../public/images/f-Reactjs-Icon.svg';
import webFlowIcon from '../../public/images/f-web-flow-icon.svg';
import paymentGatwayIntegrationIcon from '../../public/images/payment-gatway-integration-icon.svg';
import outsourcingIndiaIcon from '../../public/images/outsourcing-India-icon.svg';
import itConsultingIcon from '../../public/images/it-consulting-icon.svg';
import startupConsultingIcon from '../../public/images/startup-consulting-icon.svg';
import shippingIntegrationIcon from '../../public/images/shipping-Integration-icon.svg';
import thirdPartyAPIntegrationIcon from '../../public/images/key.svg';
import supportMaintain from '../../public/images/supportIcon.svg';
import frontEndDevelopmentIcon from '../../public/images/f-Front-End-Developer.svg';
import laravelIcon from '../../public/images/f-laravel-icon.svg';
import wordpressDevIcon from '../../public/images/f-wordpress-icon.svg';
import shopifyIcon from '../../public/images/f-shopify-icon.svg';
import hubspotIcon from '../../public/images/f-hubspot-icon.svg';
import flutterIcon from '../../public/images/f-Flutter-Icon.svg';
import nodeJsIcon from '../../public/images/f-NodeJS-Icon.svg';
import angularIcon from '../../public/images/f-angular-icon.svg';
import expressJsIcon from '../../public/images/f-express-js-banner-icon.svg';
import nextJsIcon from '../../public/images/nextjs-icon.svg';
import androidAppIcon from '../../public/images/f-Android-App-Icon.svg';
import iosDevIcon from '../../public/images/f-Apple-ios.svg';
import appleIos from '../../public/images/f-iphone-icon.svg';
import ionicIcon from '../../public/images/f-ionicframework-icon.svg';
import progressiveIcon from '../../public/images/pwa-icon.svg';
import prototypeIcon from '../../public/images/f-design-prototype-icon.svg';
import psdHtmlIcon from '../../public/images/f-psd-html-icon.svg';
import responsiveIcon from '../../public/images/f-responsive-icon.svg';
import aspNetDevelopmentIcon from '../../public/images/asp-net-development-icon.svg';
import phpIcon from '../../public/images/f-php-icon.svg';
import madiIcon from '../../public/images/f-mobile-app-design-icon.svg';
import aboutIcon from '../../public/images/about-icon.svg';
import infrastructureIcon from '../../public/images/infrastrure-icon.svg';
import engagementModelIcon from '../../public/images/engagement-model-icon.svg';
import meetTheTeamIcon from '../../public/images/meet-the-team-icon.svg';
import careerIcon from '../../public/images/hire-dedicated-developers-icon.svg';
import confidentialityIcon from '../../public/images/confidentiality-icon.svg';
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

          <s.HeaderItemCenter className="header-item-center">
            <Nav className="menu" id="menu">
              <s.MenuSection className="menu-section">
                <s.MenuItemHasChildren className="menu-item menu-item-has-children">
                  <Link href="#"><a className="menulist-title">About</a></Link>
                    <span className="mobileClick submenu-icon"><FontAwesomeIcon icon={faAngleDown} /></span>
                    <s.MenuSub className="menu-subs menu-mega menu-column-4 no-spacing">
                      <s.MenuColumn className="menucolumn">
                        <s.MenuListItem className="menulist-item">
                          <s.MenuItemBlock className="menuitem-block">
                            <Link href={router.ABOUT}>
                              <a className="menuitem-box">
                                <s.MenuItemText className="menuitem-text">
                                <Image src={aboutIcon} alt="About Icon" layout="raw" />
                                  <p>About</p>
                                </s.MenuItemText>
                              </a>
                            </Link>
                          </s.MenuItemBlock>
                        </s.MenuListItem>
                        <s.MenuListItem className="menulist-item">
                          <s.MenuItemBlock className="menuitem-block">
                            <Link href={router.INFRASTRUCTURE}>
                              <a className="menuitem-box">
                                <s.MenuItemText className="menuitem-text">
                                <Image src={infrastructureIcon} alt="Infrastructure Icon" layout="raw" />
                                  <p>Infrastructure</p>
                                </s.MenuItemText>
                              </a>
                            </Link>
                          </s.MenuItemBlock>
                        </s.MenuListItem>
                        <s.MenuListItem className="menulist-item">
                          <s.MenuItemBlock className="menuitem-block">
                            <Link href={router.ENGAGEMENTSMODELS}>
                              <a className="menuitem-box">
                                <s.MenuItemText className="menuitem-text">
                                <Image src={engagementModelIcon} alt="Engagement Model Icon" layout="raw" />
                                  <p>Engagement Model</p>
                                </s.MenuItemText>
                              </a>
                            </Link>
                          </s.MenuItemBlock>
                        </s.MenuListItem>
                        <s.MenuListItem className="menulist-item">
                          <s.MenuItemBlock className="menuitem-block">
                            <Link href="#">
                              <a className="menuitem-box">
                                <s.MenuItemText className="menuitem-text">
                                <Image src={meetTheTeamIcon} alt="Meet The Team Icon" layout="raw" />
                                  <p>Meet the team</p>
                                </s.MenuItemText>
                              </a>
                            </Link>
                          </s.MenuItemBlock>
                        </s.MenuListItem>
                        <s.MenuListItem className="menulist-item">
                          <s.MenuItemBlock className="menuitem-block">
                            <Link href={router.CAREER}>
                              <a className="menuitem-box">
                                <s.MenuItemText className="menuitem-text">
                                <Image src={careerIcon} alt="Career Icon" layout="raw" />
                                  <p>Career</p>
                                </s.MenuItemText>
                              </a>
                            </Link>
                          </s.MenuItemBlock>
                        </s.MenuListItem>
                        <s.MenuListItem className="menulist-item">
                          <s.MenuItemBlock className="menuitem-block">
                            <Link href={router.CONFIDENTIALITY}>
                              <a className="menuitem-box">
                                <s.MenuItemText className="menuitem-text">
                                <Image src={confidentialityIcon} alt="Confidentiality Icon" layout="raw" />
                                  <p>Confidentiality</p>
                                </s.MenuItemText>
                              </a>
                            </Link>
                          </s.MenuItemBlock>
                        </s.MenuListItem>
                      </s.MenuColumn>
                    </s.MenuSub>
                </s.MenuItemHasChildren>
                <s.MenuItemHasChildren className="menu-item menu-item-has-children">
                  <Link href="#"><a className="menulist-title">Services</a></Link>
                  <span className="mobileClick submenu-icon"><FontAwesomeIcon icon={faAngleDown} /></span>
                  <s.MenuSub className="menu-subs menu-mega menu-column-3">
                    <s.MenuColumn className="menucolumn">
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Design </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          <Link href={router.GRAPHICSDESIGN}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                              <Image src={graphicsDesignIcon} alt="Graphics Design" layout="raw" />
                                <p>Graphics Design</p>
                              </s.MenuItemText>
                            </a>
                          </Link>
                          <Link href={router.WEBDESIGN}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={webDesignIcon} alt="Web Design Icon" layout='raw'/>
                                <p>Web Design</p>
                              </s.MenuItemText>
                            </a>
                          </Link>
                          <Link href={router.UIUX}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={uiUxIcon} alt="UI/UX Design Icon" layout='raw'/>
                                <p>UI/UX Design</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Development </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block twoPart">
                          <Link href={router.WEBDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                              <Image src={codeIcon} alt="Web Development Icon" layout='raw'/>
                                <p>Web Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.FRONTENDDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={frontEndDevelopmentIcon} alt="Frontend Development Icon" layout="raw" />
                                <p>Frontend Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.BACKENDDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={frontEndDevelopmentIcon} alt="Backend Development Icon" layout="raw" />
                                <p>Backend Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.ECOMMERCEDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                              <Image src={eCommerceIcon} alt="eCommerce Development Icon" layout='raw'/>
                                <p>eCommerce Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.CMSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={CMSDevIcon} alt="CMS Development" layout="raw" />
                                <p>CMS Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.MOBILEAPPDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={mobileAppDesignIcon} alt="Mobile App Design Icon" layout='raw'/>
                                <p>Mobile App Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.MVPDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text"> 
                                <Image src={MVPDevIcon} alt="MVP Development Icon" layout="raw" />
                                <p>MVP Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Digital Marketing </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          <Link href={router.SEO}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={seoIcon} alt="SEO Icon" layout='raw'/>
                                <p>SEO</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.SMO}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                              <Image src={smoIcon} alt="SMO Icon" layout='raw'/>
                                <p>SMO</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.PPC}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={ppcIcon} alt="PPC Icon" layout='raw'/>
                                <p>PPC</p>
                              </s.MenuItemText>
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Consulting & Stratergy </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          {/* <Link href="#">
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={outsourcingIndiaIcon} alt="Outsourcing to India Icon" layout="raw" />
                                <p>Outsourcing to India</p>
                              </s.MenuItemText>
                            </a>
                          </Link> */}
                          <Link href={router.ITCONSULTING}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={itConsultingIcon} alt="IT consulting Icon" layout="raw" />
                                <p>IT Consulting</p>
                              </s.MenuItemText>
                            </a>
                          </Link>
                          <Link href={router.STARTUPCONSULTING}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={startupConsultingIcon} alt="Startup Consulting" layout="raw" />
                                <p>Startup Consulting</p>
                              </s.MenuItemText>
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">API Integration </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block twoPart">
                          <Link href={router.PGI}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={paymentGatwayIntegrationIcon} alt="Payment Gateway Integration Icon" layout="raw" />
                                <p>Payment Gateway Integration</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.SHIPPINGINTEGRATION}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={shippingIntegrationIcon} alt="Shipping Integration Icon" layout="raw" />
                                <p>Shipping Integration</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.SMI}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={outsourcingIndiaIcon} alt="Social Media Integration Icon" layout="raw" />
                                <p>Social Media Integration</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.TPAI}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={thirdPartyAPIntegrationIcon} alt="third-party-API-Integration-icon" layout="raw" />
                                <p>Third Party API Integration</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Support & Maintanance</s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          <Link href={router.SUPPORTANDMAINTENANCE}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={supportMaintain} alt="Support and Maintanance icon" layout="raw" />
                                <p>Support and Maintanance</p>
                              </s.MenuItemText>
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                    </s.MenuColumn>
                  </s.MenuSub>
                </s.MenuItemHasChildren> 

                <s.MenuItemHasChildren className="menu-item menu-item-has-children">
                  <Link href="#" className="menulist-title">Technologies</Link>
                  <span className="mobileClick submenu-icon"><FontAwesomeIcon icon={faAngleDown} /></span>
                  <s.MenuSub className="menu-subs menu-mega menu-column-4">
                    <s.MenuColumn className="menucolumn">
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">PHP Frameworks </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          <Link href={router.PHPDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={phpIcon} alt="PHP Development Icon" layout="raw" />
                                <p>PHP Development</p>
                              </s.MenuItemText>
                            </a>
                          </Link>
                          <Link href={router.LARAVELDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={laravelIcon} alt="Laravel Development Icon" layout="raw" />
                                <p>Laravel Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.CODEIGNITERDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={codeigniteIcon} alt="Codeigniter" layout="raw" />
                                <p>Codeigniter</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">CMS Development </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          <Link href={router.WORDPRESSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={wordpressDevIcon} alt="Wordpress Deveopment Icon" layout="raw" />
                                <p>Wordpress Deveopment</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.SHOPIFYDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={shopifyIcon} alt="Shopify Development Icon" layout="raw" />
                                <p>Shopify Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.WEBFLOWDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={webFlowIcon} alt="Webflow Development" layout="raw" />
                                <p>Webflow Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HUBSPOTDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={hubspotIcon} alt="Hubspot Development" layout="raw" />
                                <p>Hubspot Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">JavaScript Development </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          <Link href={router.REACTJSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={reactJsIcon} alt="React JS Development" layout="raw" />
                                <p>React JS Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.NODEJSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={nodeJsIcon} alt="Node JS development" layout="raw" />
                                <p>Node JS development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.ANGULARJSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={angularIcon} alt="Angular JS Development" layout="raw" />
                                <p>Angular JS Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.EXPRESSJSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={expressJsIcon} alt="Express JS development" layout="raw" />
                                <p>Express JS development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          {/* <Link href={router.NEXTJSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={nextJsIcon} alt="Next JS development" layout="raw" />
                                <p>Next JS development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link> */}
                        </s.MenuItemBlock>
                      </s.MenuListItem>

                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Mobile App Development </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                        <Link href={router.ANDROIDAPPSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={androidAppIcon} alt="Android App Development" layout="raw" />
                                <p>Android App Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.IOSAPPSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={iosDevIcon} alt="iOS App Development" layout="raw" />
                                <p>iOS App Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.IPADAPPSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={appleIos} alt="iPad App Development" layout="raw" />
                                <p>iPad App Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Cross Platform </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                        <Link href={router.FLUTTERAPPSDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={flutterIcon} alt="Flutter App Development" layout="raw" />
                                <p>Flutter App Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.REACTNATIVEDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={reactJsIcon} alt="React Native Development" layout="raw" />
                                <p>React Native Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.IONICDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={ionicIcon} alt="IONIC Development" layout="raw" />
                                <p>IONIC Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.PROGRESSIVEDEVELOPMENT}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={progressiveIcon} alt="Progressive Web App Development" layout="raw" />
                                <p>Progressive Web App Development</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">UI/UX design </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          <Link href={router.DESIGNPROTOTYPE}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={prototypeIcon} alt="Design Prototype" layout="raw" />
                                <p>Design Prototype</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.MOBILEAPPDESIGN}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={madiIcon} alt="Mobile App Design" layout="raw" />
                                <p>Mobile App Design</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.PSDTOHTML}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={psdHtmlIcon} alt="PSD to HTML" layout="raw" />
                                <p>PSD to HTML</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.RESPONSIVEWEBDESIGN}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={responsiveIcon} alt="Responsive Web Design" layout="raw" />
                                <p>Responsive Web Design</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                    </s.MenuColumn>
                  </s.MenuSub>
                </s.MenuItemHasChildren> 

                <s.MenuItemHasChildren className="menu-item menu-item-has-children">
                  <Link href="#"><a className="menulist-title">Hire Developers</a></Link>
                  <span className="mobileClick submenu-icon"><FontAwesomeIcon icon={faAngleDown} /></span>
                  <s.MenuSub className="menu-subs menu-mega menu-column-4">
                    <s.MenuColumn className="menucolumn">
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Hire Designer </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                        <Link href={router.HIREGRAPHICSDESIGNER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={graphicsDesignIcon} alt="Hire Graphics Designer" layout="raw" />
                                <p>Hire Graphics Designer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HireWebDesigner}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={webDesignIcon} alt="Hire Web Designer" layout="raw" />
                                <p>Hire Web Designer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREUIUXDESIGNER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={uiUxIcon} alt="Hire UI/UX designer" layout="raw" />
                                <p>Hire UI/UX designer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Hire Web Developer </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          <Link href={router.HIREPHPDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={phpIcon} alt="Hire PHP Developer" layout="raw" />
                                <p>Hire PHP Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREDOTNETDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={aspNetDevelopmentIcon} alt="Hire .NET Developer" layout="raw" />
                                <p>Hire .NET Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIRLARAVELDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={laravelIcon} alt="Hire Laravel Developer" layout="raw" />
                                <p>Hire Laravel Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIRCODEIGNITERDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={codeigniteIcon} alt="Hire Codeigniter Developer" layout="raw" />
                                <p>Hire Codeigniter Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Hire CMS Developer </s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                          <Link href={router.HIREWORDPRESSDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={wordpressDevIcon} alt="Hire Wordpress Developer" layout="raw" />
                                <p>Hire Wordpress Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIRSHOPIFYRDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={shopifyIcon} alt="Hire Shopify Developer" layout="raw" />
                                <p>Hire Shopify Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREWEBFLOWDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={webFlowIcon} alt="Hire Webflow Developer" layout="raw" />
                                <p>Hire Webflow Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREHUBSPOTDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={hubspotIcon} alt="Hire Hubspot Developer" layout="raw" />
                                <p>Hire Hubspot Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>

                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Hire Mobile App Developer</s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                        <Link href={router.HIREANDROIDDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={androidAppIcon} alt="Hire Android Developer" layout="raw" />
                                <p>Hire Android Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREIOSDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={appleIos} alt="Hire iOS Developer" layout="raw" />
                                <p>Hire iOS Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREFLUTTERDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={flutterIcon} alt="Hire Flutter Developer" layout="raw" />
                                <p>Hire Flutter Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREIONICDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={ionicIcon} alt="Hire Ionic Developer" layout="raw" />
                                <p>Hire Ionic Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREREACTNATIVEDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={reactJsIcon} alt="Hire React Native Developer" layout="raw" />
                                <p>Hire React Native Developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                      <s.MenuListItem className="menulist-item">
                        <s.MenuListTitle className="menulist-title">Hire Frontend Developer</s.MenuListTitle>
                        <s.MenuItemBlock className="menuitem-block">
                        <Link href={router.HIREREACTJSDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={reactJsIcon} alt="Hire React JS developer" layout="raw" />
                                <p>Hire React JS developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIRENODEJSDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={nodeJsIcon} alt="Hire Node JS deveoper" layout="raw" />
                                <p>Hire Node JS deveopert</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREEXPRESSDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={expressJsIcon} alt="Hire Express JS developer" layout="raw" />
                                <p>Hire Express JS developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIRENEXTJSDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={nextJsIcon} alt="Hire Next JS developer" layout="raw" />
                                <p>Hire Next JS developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                          <Link href={router.HIREANGULARJSDEVELOPER}>
                            <a className="menuitem-box">
                              <s.MenuItemText className="menuitem-text">
                                <Image src={angularIcon} alt="Hire Angular JS developer" layout="raw" />
                                <p>Hire Angular JS developer</p>
                              </s.MenuItemText>
                              
                            </a>
                          </Link>
                        </s.MenuItemBlock>
                      </s.MenuListItem>
                    </s.MenuColumn>
                  </s.MenuSub>
                </s.MenuItemHasChildren> 

                <s.MenuItemHasChildren className="menu-item">
                    <Link href={router.BLOG} className="menulist-title">Blog</Link>
                </s.MenuItemHasChildren>

                <s.MenuItemHasChildren className="menu-item">
                    <Link href={router.WORK} className="menulist-title">Work</Link>
                </s.MenuItemHasChildren>
              </s.MenuSection>
            </Nav>
            <div id="menu-close-btn">
              <button type="button" className="menu-mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </s.HeaderItemCenter>

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
