import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/AboutPage/PageBanner.style"; 
import PageBannerImg from "../../../public/images/pagebg-about.svg";  
 
const PageBanner = () => {
  return (
    <> 
     <s.PageBannerWrapper className="pagebanner-section pagebg-about">
        <Container>
          <Row>
              <Col md={7} className="pagebannercontent-col">
                <s.PageBannerContentPart >
                  <h1>Meet <span className='textGreen'>WEBENIX!</span></h1>
                  <p>Webenix was founded in the year 2018 with a clear vision in mind of providing the best to our customers. Not only do we firmly believe in serving our best work but we make sure to always respect our customer’s time by immediate responses with the solutions globally accommodating time zone. Meeting the expectations of our customers, they will always have the best customer experience.</p>
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