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
                        Webenix is here with the clear vision of providing the best quality in what we can develop and design for you. With a team of highly qualified developers, you can acquire the product that you are precisely looking for. With the great boom in the IT industry globally, Webenix wants to stand for our valuable customers making a difference and knowing the meaning of the quality product.
                    </s.copnayText>
                    <Link href={router.ABOUT}>
                        <a className="btn-default btn-arrow">KNOW MORE</a>
                    </Link>
                </Col>
                <Col lg={5} md={5} sm={8} className="mx-sm-auto mx-md-0">
                    <Image src={aboutCompanyImg} alt="About Webenix" className='img-fluid' layout="raw"/>
                </Col>
            </Row>
        </Container>
    </s.aboutCompany>
    </>
  );
};

export default About