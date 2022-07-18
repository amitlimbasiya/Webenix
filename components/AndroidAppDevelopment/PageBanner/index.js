import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/AndroidAppDevelopment/PageBanner.style"; 
import androidBannerIcon from "../../../public/images/androidAppDevelopment/androidBannerIcon.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section pagebg-about noiseBg">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>Android App <span className='textGreen'> Development</span></h1>
                  <p>Android is one of the commonest and fastest running platforms globally and with the presence of millions of android mobile applications, it is important to scale apart from the market. We help you in developing mobile apps that users will love to use frequently. </p>
                  <Link href="">
                    <a className='btn-default btn-arrow'>Know More</a>
                  </Link>
                </s.PageBannerContentPart>
              </Col>
              <Col md={5} className="pagebannerimg-col">
                <s.PageBannerImagePart className='pagebanner-imgpart'>
                  <Image src={androidBannerIcon} alt="Android Logo" className='img-fluid' layout="raw"/>
                </s.PageBannerImagePart>
              </Col>
          </Row>
        </Container>
     </s.PageBannerWrapper>

    </>
  );
};

export default PageBanner