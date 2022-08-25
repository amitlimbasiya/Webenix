import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/PHPDevelopment/PageBanner.style"; 
import PHPIcon from "../../../public/images/php-icon.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section pagebg-about">
        <Container> 
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>PHP <span className='textGreen'> Development</span></h1>
                  <p>With the executive experience, amplify your business requirements with the PHP  Development fulfilling the expectation of small business portals to large enterprise business models thriving to ease down the complex solutions. </p>
                  <p>Develop a strong backend with the help of highly experienced  Developers and experience uncompromising performance. </p>
                  <Link href="#">
                    <a className='btn-default btn-arrow'>Know More</a>
                  </Link>
                </s.PageBannerContentPart>
              </Col>
              <Col md={5} className="pagebannerimg-col">
                <s.PageBannerImagePart className='pagebanner-imgpart'>
                  <Image src={PHPIcon} alt="Logo" className='img-fluid' layout="raw"/>
                </s.PageBannerImagePart>
              </Col>
          </Row>
        </Container>
     </s.PageBannerWrapper>

    </>
  );
};

export default PageBanner