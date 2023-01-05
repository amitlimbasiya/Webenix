import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/about.style";
import aboutCompanyImg from '../../public/images/about-webenix.svg';
import router from "../../utils/router";

const About = () => {
    return (
    <>
    <s.aboutCompany className='aboutCompany'>
        <Container>
            <Row className='align-items-center justify-content-between'>
                <Col className="aboutContentbox" lg={6} md={7} sm={12}>
                    <s.compnayHeading>About <s.greenText className="textGreen">WEBENIX</s.greenText></s.compnayHeading>
                    <s.copnayText>
                        At Webenix, our clear vision is to provide the highest quality in everything we develop and design for our clients. Our team of highly qualified developers is dedicated to delivering the precise product you are looking for. With the growing demand for IT services worldwide, we strive to stand out by delivering exceptional products and exceptional service to our valued customers. If you're looking for a team of experienced developers, look no further than Webenix. Hire our developers today and see the difference for yourself!
                    </s.copnayText>
                    <Link href={router.ABOUT}>
                        <a className="btn-default btn-arrow">KNOW MORE</a>
                    </Link>
                </Col>
                <Col lg={5} md={5} sm={8} className="mx-sm-auto mx-md-0 pr">
                    <Image src={aboutCompanyImg} alt="About Webenix" className='img-fluid' layout="responsive"/>
                </Col>
            </Row>
        </Container>
    </s.aboutCompany>
    </>
  );
};

export default About