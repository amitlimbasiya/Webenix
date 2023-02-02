import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/PageBanner/PageBanner.style";
import parse from "html-react-parser";

const PageBanner = (props) => {
  return (
    <>
      <s.PageBannerWrapper className={props.PageBannerClass}>
        <Container>
          <Row>
            <Col md={7} className="pagebannercontent-col">
              <s.PageBannerContentPart>
                <h1>
                  {props.PageBannerTitle}{" "}
                  <span className="textGreen">
                    {props.PageBannerGreenTitle}
                  </span>
                </h1>
                <div>{parse(props.PageBannerContent)}</div>
              </s.PageBannerContentPart>
            </Col>
            <Col md={5} className={props.PageBannerImgClass}>
              <s.PageBannerImagePart className="pagebanner-imgpart">
                <Image
                  src={props.PageBannerImage}
                  alt="Logo"
                  className="img-fluid"
                  height={props.PageBannerImageHeight}
                  width={props.PageBannerImageWidth}
                />
              </s.PageBannerImagePart>
            </Col>
          </Row>
        </Container>
      </s.PageBannerWrapper>
    </>
  );
};

export default PageBanner;
