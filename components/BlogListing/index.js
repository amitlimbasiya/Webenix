import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/BlogListing/BlogListing.style";
import phpBlog from '../../public/images/php-blog.png';
import router from "../../utils/router";
 
var settings = {
    infinite: false,
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
};

const BlogListings = (props) => {
  return (
    <> 
     <s.Listing>
      <Slider className='slickSlider' {...settings}>
        <s.blogItem className='blogItem text-center'>
            <Link href={router.SINGLEBLOG}>
                <a>
                    <s.blogImage>
                        <Image src={phpBlog} alt="Php Blog" layout='raw' />
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogImage>
                </a>
            </Link>
            <s.blogCategory className='orangeColor'>WEBSITE DEVELOPMENT</s.blogCategory>
            <s.blogTitle className='postHeading'>
                <Link href={router.SINGLEBLOG}>
                    <a>Why it is necessary to do regular updates of your WordPress website?</a>
                </Link>
            </s.blogTitle>
        </s.blogItem>
        <s.blogItem className='blogItem text-center'>
            <Link href={router.SINGLEBLOG}>
                <a>
                    <s.blogImage>
                        <Image src={phpBlog} alt="Php Blog" layout='raw' />
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogImage>
                </a>
            </Link>
            <s.blogCategory className='orangeColor'>WEBSITE DEVELOPMENT</s.blogCategory>
            <s.blogTitle className='postHeading'>
                <Link href={router.SINGLEBLOG}>
                    <a>Why it is necessary to do regular updates of your WordPress website?</a>
                </Link>
            </s.blogTitle>
        </s.blogItem>
        <s.blogItem className='blogItem text-center'>
            <Link href={router.SINGLEBLOG}>
                <a>
                    <s.blogImage>
                        <Image src={phpBlog} alt="Php Blog" layout='raw' />
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogImage>
                </a>
            </Link>
            <s.blogCategory className='orangeColor'>WEBSITE DEVELOPMENT</s.blogCategory>
            <s.blogTitle className='postHeading'>
                <Link href={router.SINGLEBLOG}>
                    <a>Why it is necessary to do regular updates of your WordPress website?</a>
                </Link>
            </s.blogTitle>
        </s.blogItem>
        <s.blogItem className='blogItem text-center'>
            <Link href={router.SINGLEBLOG}>
                <a>
                    <s.blogImage>
                        <Image src={phpBlog} alt="Php Blog" layout='raw' />
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogImage>
                </a>
            </Link>
            <s.blogCategory className='orangeColor'>WEBSITE DEVELOPMENT</s.blogCategory>
            <s.blogTitle className='postHeading'>
                <Link href={router.SINGLEBLOG}>
                    <a>Why it is necessary to do regular updates of your WordPress website?</a>
                </Link>
            </s.blogTitle>
        </s.blogItem>
        <s.blogItem className='blogItem text-center'>
            <Link href={router.SINGLEBLOG}>
                <a>
                    <s.blogImage>
                        <Image src={phpBlog} alt="Php Blog" layout='raw' />
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogImage>
                </a>
            </Link>
            <s.blogCategory className='orangeColor'>WEBSITE DEVELOPMENT</s.blogCategory>
            <s.blogTitle className='postHeading'>
                <Link href={router.SINGLEBLOG}>
                    <a>Why it is necessary to do regular updates of your WordPress website?</a>
                </Link>
            </s.blogTitle>
        </s.blogItem>
        <s.blogItem className='blogItem text-center'>
            <Link href={router.SINGLEBLOG}>
                <a>
                    <s.blogImage>
                        <Image src={phpBlog} alt="Php Blog" layout='raw' />
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogImage>
                </a>
            </Link>
            <s.blogCategory className='orangeColor'>WEBSITE DEVELOPMENT</s.blogCategory>
            <s.blogTitle className='postHeading'>
                <Link href={router.SINGLEBLOG}>
                    <a>Why it is necessary to do regular updates of your WordPress website?</a>
                </Link>
            </s.blogTitle>
        </s.blogItem>
      </Slider>
      <s.blogListing className='blogListing'>
        <Container>
          <Row>
            <Col lg={9} md={12} className="order-2 order-lg-1">  
                <s.BlogListWrapper className='bloglisting-wrapper'>                        
                    <s.blogItem className='blogItem wordpress'>
                        <Link href={router.SINGLEBLOG}>
                            <a><s.blogImage><Image src={phpBlog} alt="Php Blog" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>WORDPRESS</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG}><a>Why it is necessary to do regular updates of your WordPress website?</a></Link>
                        </s.blogTitle>
                        <p>If you are looking to create your website, then you must be thinking of WordPress. It is no news that WordPress powers nearly thirty-nine percent of the websites that you see across the Internet.</p>
                        <Link href={router.SINGLEBLOG}><a className='blogLink'>Let’s Read</a></Link>
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogItem>               
                    <s.blogItem className='blogItem wordpress'>
                        <Link href={router.SINGLEBLOG}>
                            <a><s.blogImage><Image src={phpBlog} alt="Php Blog" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>WORDPRESS</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG}><a>Why it is necessary to do regular updates of your WordPress website?</a></Link>
                        </s.blogTitle>
                        <p>If you are looking to create your website, then you must be thinking of WordPress. It is no news that WordPress powers nearly thirty-nine percent of the websites that you see across the Internet.</p>
                        <Link href={router.SINGLEBLOG}><a className='blogLink'>Let’s Read</a></Link>
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogItem>               
                    <s.blogItem className='blogItem development'>
                        <Link href={router.SINGLEBLOG}>
                            <a><s.blogImage><Image src={phpBlog} alt="Php Blog" layout='raw' /></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>DEVELOPMENT</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG}><a>Why it is necessary to do regular updates of your WordPress website?</a></Link>
                        </s.blogTitle>
                        <p>If you are looking to create your website, then you must be thinking of WordPress. It is no news that WordPress powers nearly thirty-nine percent of the websites that you see across the Internet.</p>
                        <Link href={router.SINGLEBLOG}><a className='blogLink'>Let’s Read</a></Link>
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogItem>               
                    <s.blogItem className='blogItem development'>
                        <Link href={router.SINGLEBLOG}>
                            <a><s.blogImage><Image src={phpBlog} alt="Php Blog" layout='raw' /></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>DEVELOPMENT</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG}><a>Why it is necessary to do regular updates of your WordPress website?</a></Link>
                        </s.blogTitle>
                        <p>If you are looking to create your website, then you must be thinking of WordPress. It is no news that WordPress powers nearly thirty-nine percent of the websites that you see across the Internet.</p>
                        <Link href={router.SINGLEBLOG}><a className='blogLink'>Let’s Read</a></Link>
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem marketing'>
                        <Link href={router.SINGLEBLOG}>
                            <a><s.blogImage><Image src={phpBlog} alt="Php Blog" layout='raw' /></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Marketing</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG}><a>Why it is necessary to do regular updates of your WordPress website?</a></Link>
                        </s.blogTitle>
                        <p>If you are looking to create your website, then you must be thinking of WordPress. It is no news that WordPress powers nearly thirty-nine percent of the websites that you see across the Internet.</p>
                        <Link href={router.SINGLEBLOG}><a className='blogLink'>Let’s Read</a></Link>
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem outsourcing'>
                        <Link href={router.SINGLEBLOG}>
                            <a><s.blogImage><Image src={phpBlog} alt="Php Blog" layout='raw' /></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Outsourcing</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG}><a>Why it is necessary to do regular updates of your WordPress website?</a></Link>
                        </s.blogTitle>
                        <p>If you are looking to create your website, then you must be thinking of WordPress. It is no news that WordPress powers nearly thirty-nine percent of the websites that you see across the Internet.</p>
                        <Link href={router.SINGLEBLOG}><a className='blogLink'>Let’s Read</a></Link>
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem seo'>
                        <Link href={router.SINGLEBLOG}>
                            <a><s.blogImage><Image src={phpBlog} alt="Php Blog" layout='raw' /></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>SEO</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG}><a>Why it is necessary to do regular updates of your WordPress website?</a></Link>
                        </s.blogTitle>
                        <p>If you are looking to create your website, then you must be thinking of WordPress. It is no news that WordPress powers nearly thirty-nine percent of the websites that you see across the Internet.</p>
                        <Link href={router.SINGLEBLOG}><a className='blogLink'>Let’s Read</a></Link>
                        <div className='datePart'>JULY 15, 2022</div>
                    </s.blogItem>
                </s.BlogListWrapper>
                <Col className='paginationPart'>
                  <Link href={""}><a className='d-none'>← Privious</a></Link>
                  <Link href={""}><a className="pagi">1</a></Link>
                  <Link href={""}><a className="pagi">2</a></Link>
                  <Link href={""}><a className="pagi">3</a></Link>
                  <Link href={""}><a className="pagi">4</a></Link>
                  <Link href={""}><a className="pagi">5</a></Link>
                  <Link href={""}><a>Next →</a></Link>
                </Col>
            </Col>
            <Col lg={3} md={12} className="order-1 order-lg-2 mb-5 mb-lg-0">
              <s.CategoryList>
                <s.catHeading>Blog Categories</s.catHeading>
                <ul className='catListPart' Id="filters">
                    <li><Link href="#"><a className="active" data-filter="*">All</a></Link></li>
                    <li><Link href="#"><a data-filter=".wordpress">WordPress</a></Link></li>
                    <li><Link href="#"><a data-filter=".seo">SEO</a></Link></li>
                    <li><Link href="#"><a data-filter=".marketing">Marketing</a></Link></li>
                    <li><Link href="#"><a data-filter=".outsourcing">Outsourcing</a></Link></li>
                    <li><Link href="#"><a data-filter=".development">Development</a></Link></li>
                </ul>
              </s.CategoryList>
            </Col>
          </Row>
        </Container>
      </s.blogListing>
     </s.Listing>
    </>
  );
};

export default BlogListings