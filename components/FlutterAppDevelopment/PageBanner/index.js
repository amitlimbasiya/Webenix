import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/FlutterAppDevelopment/PageBanner.style"; 
import flutterBannerIcon from "../../../public/images/flutterAppDevelopment/flutterBannerIcon.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section pagebg-about noiseBg">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>Flutter App <span className='textGreen'> Development</span></h1>
                  <p>Flutter is considered to be the most demanded cross-platforms for developing any trendy applications. It allows the bizarre ideas with the real-time ability for the finest development. Flutter platform adds the cherry on cake because it shows the exact native experience that never goes out of style. </p>
                  <Link href="#">
                    <a className='btn-default btn-arrow'>Know More</a>
                  </Link>
                </s.PageBannerContentPart>
              </Col>
              <Col md={5} className="pagebannerimg-col">
                <s.PageBannerImagePart className='pagebanner-imgpart'>
                  <Image src={flutterBannerIcon} alt="Android Logo" className='img-fluid' layout="raw"/>
                </s.PageBannerImagePart>
              </Col>
          </Row>
        </Container>
     </s.PageBannerWrapper>

    </>
  );
};

export default PageBanner