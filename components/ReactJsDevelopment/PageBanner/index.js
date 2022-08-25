import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/ReactJsDevelopment/PageBanner.style"; 
import reactjsIcon from "../../../public/images/reactjsDevelopment/reactjsBannerIcon.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section pagebg-about noiseBg">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>React JS <span className='textGreen'> Development</span></h1>
                  <p>Do not worry about your application choking with the lower speed, let our expert React JS Developers build a strong component-based architecture for the better translation of the business process in real-time. </p>
                  <p>From looking after your needs specifically, we create a strong React JS Web Application that functions smoothly and is considered to be a highly-engaging mobile app right for your business. </p>
                  <Link href="#">
                    <a className='btn-default btn-arrow'>Know More</a>
                  </Link>
                </s.PageBannerContentPart>
              </Col>
              <Col md={5} className="pagebannerimg-col">
                <s.PageBannerImagePart className='pagebanner-imgpart'>
                  <Image src={reactjsIcon} alt="React js Logo" className='img-fluid' layout="raw"/>
                </s.PageBannerImagePart>
              </Col>
          </Row>
        </Container>
     </s.PageBannerWrapper>

    </>
  );
};

export default PageBanner