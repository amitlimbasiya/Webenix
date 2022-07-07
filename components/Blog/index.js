import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/blog.style";
import phpBlog from '../../public/images/php-blog.png';
import reactBlog from '../../public/images/react-blog.png';
import optimizeBlog from '../../public/images/optimize-blog.png';

const Blog = () => {
    return (
        <>
        <s.blogSection className='blogSection'>
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

                <s.blogTop className='topHeading'>Our Blogs</s.blogTop>
                <s.blogListing className='blogListing'>
                    <Row>
                        <Col md={4} sm={6}>
                            <s.blogItem className='blogItem mb-sm-5 mb-4 mb-md-0'>
                                <Link href='/'>
                                    <a>
                                        <s.blogImage>
                                            <Image src={phpBlog} alt="Php Blog" layout='raw' />
                                        </s.blogImage>
                                    </a>
                                </Link>
                                <s.blogCategory>WEBSITE DEVELOPMENT</s.blogCategory>
                                <s.blogTitle className='postHeading'>
                                    <Link href='/'>
                                        <a>Why it is necessary to do regular updates of your WordPress website?</a>
                                    </Link>
                                </s.blogTitle>
                                <Link href='/'>
                                    <a className='blogLink'>Readmore</a>
                                </Link>
                            </s.blogItem>
                        </Col>
                        <Col md={4} sm={6}>
                            <s.blogItem className='blogItem mb-sm-5 mb-4 mb-md-0'>
                                <Link href='/'>
                                    <a>
                                        <s.blogImage>
                                            <Image src={optimizeBlog} alt="Optimize Blog" layout='raw' />
                                        </s.blogImage>
                                    </a>
                                </Link>
                                <s.blogCategory>WEBSITE DEVELOPMENT</s.blogCategory>
                                <s.blogTitle className='postHeading'>
                                    <Link href='/'>
                                        <a>Why it is necessary to do regular updates of your WordPress website?</a>
                                    </Link>
                                </s.blogTitle>
                                <Link href='/'>
                                    <a className='blogLink'>Readmore</a>
                                </Link>
                            </s.blogItem>
                        </Col>
                        <Col md={4} sm={6}>
                            <s.blogItem className='blogItem'>
                                <Link href='/'>
                                    <a>
                                        <s.blogImage>
                                            <Image src={reactBlog} alt="React Blog" layout='raw'/>
                                        </s.blogImage>
                                    </a>
                                </Link>
                                <s.blogCategory>WEBSITE DEVELOPMENT</s.blogCategory>
                                <s.blogTitle className='postHeading'>
                                    <Link href='/'>
                                        <a>Why it is necessary to do regular updates of your WordPress website?</a>
                                    </Link>
                                </s.blogTitle>
                                <Link href='/'>
                                    <a className='blogLink'>Readmore</a>
                                </Link>
                            </s.blogItem>
                        </Col>
                    </Row>
                </s.blogListing>
            </Container>
        </s.blogSection>
        </>
    );
};

export default Blog