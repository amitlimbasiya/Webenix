import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import LkedinMarketing from '../../public/images/blogs/linkedin-marketing.jpg';
import Head from 'next/head';
import { data } from "../../data/Seo";

const SingleBlog = () => {
  return (
    <>
       <Head>
        <title>{data.singleblog7.title}</title>
        <meta name="description" content={data.singleblog7.description}/>
        <meta name="keywords" content={data.singleblog7.keyword} />
      </Head>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>Marketing</p>
                <h1 className='blog-title'>LinkedIn Marketing Best Strategies for 2021</h1>
                <span className='blog-date'>June 12, 2021</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={LkedinMarketing} alt="LinkedIn Marketing Best Strategies for 2021" className='imgwith-boxshadow' layout="raw"  placeholder='blur' quality='100' />
              </Col>
              <s.BlogContentWrapper>
                <p>LinkedIn is one of the most reputed Business to Business or B2B platforms, which can be utilized to create more resources and advertise the services provided by your firm. Suppose you are a business manager for a small or medium-sized business enterprise. In that case, you will want to look for a platform that offers excellent advertising opportunities without proving to be expensive. If you opt for the LinkedIn platform, you can easily reach out to a broader customer base, which will be quick to understand your firm&#39;s services, and the repose you receive will be better than other social media platforms. Some of the strategies that you should implement to improve marketing on LinkedIn for 2021 are as follows:</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>1. Use content marketing</h3>
                <p>You should use the LinkedIn platform for content marketing and provide precise details about your company, its size, and the services it offers. With the help of content marketing, you can create a stronger connection with your audience. Unlike other social media platforms on LinkedIn, you will find a discerning audience. Hence, you must provide adequate information and, if possible, data regarding your company. In the year 2021, you will find that more companies are going online with their services. Hence, you must stay ahead of the competition. To do so, you must give your audience and subsequently your customers a reason to believe that you are better than your competitors. The best way to convince them of your expertise is with adequate statistics, predictions, and information about your company&#39;s success. Thus, in the year 2021, content marketing will be an essential strategy to advertise successfully on LinkedIn.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>2. Optimize your company page</h3>
                <p>The LinkedIn platform is designed to help customers evaluate the services provided by other companies. Hence, you must optimize your company&#39;s page to help clients easily identify the services provided by your firm. It should be optimized for keyword searches and should have inbound links. In the year 2021, many companies will look to outsourcing various business activities of their respective firms. The business managers of the companies will look for suitable opportunities in platforms like LinkedIn. Hence, to ensure that your company features in these searches, you must select the relevant keywords and have internal links that will help the prospective clients evaluate the services provided by your firm. A well-designed company page optimized for the searches carried out by prospective clients will meet your customer&#39;s expectations.</p>
                <p>When you develop a LinkedIn marketing strategy, it is crucial to consider it a unique platform. LinkedIn has been designed to simplify business searches. Thus, the advertisements should be sophisticated and reflect the fact that you are an entrepreneur looking to expand your business enterprise. However, at the same time, it is crucial to connect with your audience and provide them with the information that they require. Thus, while developing LinkedIn advertisements, it is essential to remember that you are creating promotions for business managers like yourself. Therefore, you must provide information that will appeal to them.</p>
              </s.BlogContentWrapper>
              {/* <s.BlogImageWrapper>
                <Link href="#"><a><Image src={singleBlogImage02} alt="About Webenix" className='imgwith-boxshadow' layout="raw"  placeholder='blur' quality='100' /></a></Link>
              </s.BlogImageWrapper> */}
              <s.BlogContentWrapper>
                <p>If you are looking for a reliable web design & development <Link href="#"><a>outsourcing company</a></Link>, you can reach out to our experts at Webenix! We can help you <Link href="mailto:info@webenix.net"><a>info@webenix.net</a></Link></p>
              </s.BlogContentWrapper>
            </Row>
        </Container>
      </s.SingleBlogWrapper>
      <Blog/>
    </>
  )
}

export default SingleBlog