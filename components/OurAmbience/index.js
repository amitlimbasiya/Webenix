import React from 'react';
import Image from "next/image";
import { Col, Container, Row } from 'react-bootstrap';
import OurAmbienceIcon from '../../public/images/ambience-icon.png';
import OurAmbienceGallery01 from '../../public/images/Ambience-01.jpg';
import OurAmbienceGallery02 from '../../public/images/Ambience-02.jpg';
import OurAmbienceGallery03 from '../../public/images/Ambience-03.jpg';
import OurAmbienceGallery04 from '../../public/images/Ambience-04.jpg';
import OurAmbienceGallery05 from '../../public/images/Ambience-05.jpg';
import * as s from "../../styles/components/OurAmbience/OurAmbience.style";

const OurAmbience = () => {
  return (
    <>
      <s.OurAmbienceWrapper>
        <s.OurAmbienceTitle>  
          <Image src={OurAmbienceIcon} alt="OurAmbience" className='img-fluid' layout="raw"/>
              <h3>Our Ambience</h3>
        </s.OurAmbienceTitle>
        <s.OurAmbienceGallery>
        <Container fluid className='ambience-gallery-main'>
          <Row>
            <Col md={6} sm={6} className='ambience-gallery-wrapper'>
              <s.OurAmbienceGalleryBox><Image src={OurAmbienceGallery01} alt="OurAmbience" className='img-fluid' layout="raw"/></s.OurAmbienceGalleryBox>
              <s.OurAmbienceGalleryBox><Image src={OurAmbienceGallery02} alt="OurAmbience" className='img-fluid' layout="raw"/></s.OurAmbienceGalleryBox>
              <s.OurAmbienceGalleryBox><Image src={OurAmbienceGallery03} alt="OurAmbience" className='img-fluid' layout="raw"/></s.OurAmbienceGalleryBox>
              <s.OurAmbienceGalleryBox><Image src={OurAmbienceGallery04} alt="OurAmbience" className='img-fluid' layout="raw"/></s.OurAmbienceGalleryBox>
            </Col>
            <Col md={6} sm={6}>
              <s.OurAmbienceGalleryBox><Image src={OurAmbienceGallery05} alt="OurAmbience" className='img-fluid' layout="raw"/></s.OurAmbienceGalleryBox>
            </Col>
          </Row>
        </Container>
      </s.OurAmbienceGallery>
    </s.OurAmbienceWrapper>
    </>
  )
}

export default OurAmbience