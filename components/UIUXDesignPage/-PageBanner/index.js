import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/UIUXDesignPage/PageBanner.style"; 
import uiUxIcon from '../../../public/images/uiuxDesign/uiux-banner.svg';
  
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section pagebg-about">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>UI/UX Design</h1>
                  <p>Webenix provides the best services in <strong>UI/UX Design</strong> rightly made for your business taking care of the user experience with accurate responsiveness for multiple screen sizes. Taking care of the most minor details we fulfil customer satisfaction.</p>
                  <Link href="#">
                    <a className='btn-default btn-arrow'>Know More</a>
                  </Link>
                </s.PageBannerContentPart>
              </Col>
              <Col md={5} className="pagebannerimg-col">
                <s.PageBannerImagePart className='pagebanner-imgpart'>
                  <Image src={uiUxIcon} alt="Logo" className='img-fluid' layout="raw"/>
                </s.PageBannerImagePart>
              </Col>
          </Row>
        </Container>
     </s.PageBannerWrapper>

    </>
  );
};

export default PageBanner