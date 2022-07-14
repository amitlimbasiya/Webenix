import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/WordpressDevelopment/PageBanner.style"; 
import wordpressBannerIcon from "../../../public/images/wordpressDevelopment/wordpressBannerIcon.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section pagebg-about">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>WordPress <span className='textGreen'> Development</span></h1>
                  <p>In the digitally equipped world, it is important to keep up with the trends and implement them and so in the presence of highly qualified WordPress Developers, we provide fully custom services keeping up with the latest standard in WordPress Development globally.</p>
                  <p>With Webenix, we help you to escalate your business by providing the best Content Management Solution in varied ways stated under WordPress Development Services. </p>
                  <Link href="">
                    <a className='btn-default btn-arrow'>Know More</a>
                  </Link>
                </s.PageBannerContentPart>
              </Col>
              <Col md={5} className="pagebannerimg-col">
                <s.PageBannerImagePart className='pagebanner-imgpart'>
                  <Image src={wordpressBannerIcon} alt="Logo" className='img-fluid' layout="raw"/>
                </s.PageBannerImagePart>
              </Col>
          </Row>
        </Container>
     </s.PageBannerWrapper>

    </>
  );
};

export default PageBanner