import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/ResponsiveWebDesign/PageBanner.style"; 
import responsiveIcon from "../../../public/images/responsive-icon.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section pagebg-about noiseBg">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>Responsive <span className='textGreen'>Web Design</span></h1>
                  <p>Let your business be the best looking from any device screen. Reach out to larger audiences with the better placing of CTA to be perfectly visible from every screen size. Do not worry, we at Webenix have the best team for creating such a masterpiece.</p>
                  <Link href="#">
                    <a className='btn-default btn-arrow'>Know More</a>
                  </Link>
                </s.PageBannerContentPart>
              </Col>
              <Col md={5} className="pagebannerimg-col">
                <s.PageBannerImagePart className='pagebanner-imgpart'>
                  <Image src={responsiveIcon} alt="Android Logo" className='img-fluid' layout="raw"/>
                </s.PageBannerImagePart>
              </Col>
          </Row>
        </Container>
     </s.PageBannerWrapper>

    </>
  );
};

export default PageBanner