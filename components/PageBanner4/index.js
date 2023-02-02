import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/PageBanner/PageBanner4.style";
import parse from "html-react-parser";

const PageBanner = (props) => {
  return (
    <>
      <s.PageBannerWrapper className={props.PageBannerClass}>
        <Container>
          <Row>
            <Col
              md={12}
              className="pagebannercontent-col headingUnderLine text-center"
            >
              <s.PageBannerContentPart>
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

export default PageBanner;
