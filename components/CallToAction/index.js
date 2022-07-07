import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/CTA.style";

const CTA = () => {
    return (
        <>
            <Container>
                <s.ctaSection className='ctaBox'>
                    <s.ctaInner className='ctaBoxInner'>
                        <s.leftPart>
                            <s.bigHeading>Hello.</s.bigHeading>
                            <s.midHeading>Would love you to be our clientele...</s.midHeading>
                            <s.smHeading>Lets get in touch</s.smHeading>
                        </s.leftPart>
                        <s.rightPart>
                            <s.ctaBtn className='ctaBtn'>
                                <Link href='/'>
                                    <a className='btn-default'>Get a Quote</a>
                                </Link>
                            </s.ctaBtn>
                        </s.rightPart>
                    </s.ctaInner>
                </s.ctaSection>
            </Container>
        </>
    );
};

export default CTA