import React from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/PageBanner/PageBanner2.style";

const PageBanner2 = (props) => {
  return (
    <>
      <s.PageBannerWrapper className="pagebanner-section engagement_bg top-right">
        <Container>            
          <h1>{props.PageBannerTitle}</h1>
        </Container>
      </s.PageBannerWrapper>   
    </>

  )
}

export default PageBanner2