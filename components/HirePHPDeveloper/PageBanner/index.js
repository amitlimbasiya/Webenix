import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HirePHPDeveloper/PageBanner.style"; 
import PageBannerImg from "../../../public/images/hirePhpDeveloper/hirePHPDeveloper-banner.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section noiseBg">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>Hire <span className='textGreen'>PHP</span> Developers</h1> 
                  <p>At WEBENIX, we have been implementing enterprise grade PHP web platforms since over a decade. Our expertise in diverse PHP frameworks ensures you have one stop solution for all your PHP development needs.</p>
                  <p>Hire PHP developers to avail future-proof PHP solutions.</p>
                  <Link href="">
                    <a className='btn-default btn-arrow'>Know More</a>
                  </Link>
                </s.PageBannerContentPart>
              </Col>
              <Col md={5} className="pagebannerimg-col">
                <s.PageBannerImagePart className='pagebanner-imgpart'>
                  <Image src={PageBannerImg} alt="Logo" className='img-fluid' layout="raw"/>
                </s.PageBannerImagePart>
              </Col>
          </Row>
        </Container>
     </s.PageBannerWrapper>

    </>
  );
};

export default PageBanner



