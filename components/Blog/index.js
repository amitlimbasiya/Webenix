import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import router from "../../utils/router";
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
                            <Link href={router.CONTACT}>
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
                                <Link href={router.SINGLEBLOG25}>
                                    <a>
                                        <s.blogImage>
                                            <Image src={phpBlog} alt="Php Blog" layout='raw' />
                                        </s.blogImage>
                                    </a>
                                </Link>
                                <s.blogCategory>outsourcing</s.blogCategory>
                                <s.blogTitle className='postHeading'>
                                    <Link href={router.SINGLEBLOG25}>
                                        <a>The ways to utilize an effective outsourcing strategy and achieve business success by eliminating the risks</a>
                                    </Link>
                                </s.blogTitle>
                                <Link href={router.SINGLEBLOG25}>
                                    <a className='blogLink'>Read more</a>
                                </Link>
                            </s.blogItem>
                        </Col>
                        <Col md={4} sm={6}>
                            <s.blogItem className='blogItem mb-sm-5 mb-4 mb-md-0'>
                                <Link href={router.SINGLEBLOG21}>
                                    <a>
                                        <s.blogImage>
                                            <Image src={optimizeBlog} alt="Optimize Blog" layout='raw' />
                                        </s.blogImage>
                                    </a>
                                </Link>
                                <s.blogCategory>outsourcing</s.blogCategory>
                                <s.blogTitle className='postHeading'>
                                    <Link href={router.SINGLEBLOG21}><a>Top Reasons to consider offshore development</a></Link>
                                </s.blogTitle>
                                <Link href={router.SINGLEBLOG21}>
                                    <a className='blogLink'>Read more</a>
                                </Link>
                            </s.blogItem>
                        </Col>
                        <Col md={4} sm={6}>
                            <s.blogItem className='blogItem'>
                                <Link href={router.SINGLEBLOG19}>
                                    <a>
                                        <s.blogImage>
                                            <Image src={reactBlog} alt="React Blog" layout='raw'/>
                                        </s.blogImage>
                                    </a>
                                </Link>
                                <s.blogCategory>outsourcing</s.blogCategory>
                                <s.blogTitle className='postHeading'>
                                    <Link href={router.SINGLEBLOG19}><a>A comparison between fixed price and time and material contract</a></Link>
                                </s.blogTitle>
                                <Link href={router.SINGLEBLOG19}>
                                    <a className='blogLink'>Read more</a>
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