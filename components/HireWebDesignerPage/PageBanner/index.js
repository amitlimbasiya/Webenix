import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireWebDesignerPage/PageBanner.style"; 
import PageBannerImg from "../../../public/images/hireWebDesigner/hireWebDesigner-banner.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section pagebg-hirewordpressdeveloper">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>Hire <span className='textGreen'>Web</span> Designer</h1> 
                  <p>Being among the preferred designer agencies for enterprise Wordpress implementation we are leading Wordpress designer Company who provide turnkey services and one stop shop for all your design, designer and maintenance business needs.</p>
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



