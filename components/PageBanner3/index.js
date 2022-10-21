import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/PageBanner/PageBanner3.style";
 
const PageBanner = (props) => {
  return (
    <> 
     <s.PageBannerWrapper className={props.PageBannerClass}>
        <s.BackHeading className='backHeading'>{props.PageBannerBigTitle}</s.BackHeading>
        <Container>
          <Row>
              <Col md={12} className="pagebannercontent-col headingUnderLine text-center">
                <s.PageBannerContentPart >
                  <h1 className={props.headingClass}>{props.PageBannerTitle}</h1>
                  <span>{props.PageBannerGreenUnderlineText}</span>
                </s.PageBannerContentPart>
              </Col>
          </Row>
        </Container>
     </s.PageBannerWrapper>
    </>
  );
};

export default PageBanner