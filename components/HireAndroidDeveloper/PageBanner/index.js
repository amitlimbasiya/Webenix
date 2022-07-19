import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireAndroidDeveloper/PageBanner.style"; 
import PageBannerImg from "../../../public/images/hireAndroidDeveloper/hireAndroidDeveloper-banner.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section noiseBg">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>Hire <span className='textGreen'>Android App</span> Developers</h1> 
                  <p>Aimed to cross the $400 billion industry by 2026, Android mobile & tablet application is most lucrative for your business. Hire Android developer for your startup or enterprise platform.</p>
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



