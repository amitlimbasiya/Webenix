import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import ComparisonBetweenFixedPrice  from '../../public/images/blogs/A-comparison-between-fixed-price-and-time-and-material-contract.jpg';
import Head from 'next/head';
import { data } from "../../data/Seo";

const SingleBlog = () => {
  return (
    <>
       <Head>
        <title>{data.singleblog19.title}</title>
        <meta name="description" content={data.singleblog19.description}/>
        <meta name="keywords" content={data.singleblog19.keyword} />
      </Head>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>Outsourcing</p>
                <h1 className='blog-title'>A comparison between fixed price and time and material contract</h1>
                <span className='blog-date'>September 22, 2020</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={ComparisonBetweenFixedPrice} alt="A comparison between fixed price and time and material contract" className='imgwith-boxshadow' layout="raw"  placeholder='blur' quality='100'/>
              </Col>
              <s.BlogContentWrapper>
                <p>If not selecting the right outsourcing partner was not already daunting enough a task, choosing the right pricing framework also matters a lot and is dependent on the success of your outsourcing deals. Initially, the outsourcing pricing models were only fixed-price contracts, but as their demand grew, their pricing framework is also now anything but simple.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Fixed Price Model Pricing Framework</h3>
                <p>The fixed-price contract model is a one-time deal, where the outsourcing partner provides their services for a sum amount, for the stated period in the contract. The fixed price framework is ideal in the cases when the needs, parameters and pricings are highly predictable; otherwise, the chances of the pricing being constant are doubtable.</p>
                <ul className='blog-listing'>
                  <li>Projects that are comparatively small, simple and have limited scopes</li>
                  <li>When there is a limited budget or fixed budget for a project</li>
                  <li>When there are strict deadline to meet long with clear and simple instructions laid down</li>
                  <li>MVPs</li>								
                </ul>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Time and Material Model Pricing Framework</h3>
                <p>The time and material contract is completely different from a fixed price contract and bears no similarities with the same. The time and material contract necessitates the billing of their clients by the hourly labour in a project, irrespective of the duration of the project. Also, the client has the rights to make last-minute changes to the project and add additional requirements to the project. It is understandable that the projects are crucial, sensitive and requires much more time than simple and straightforward projects, hence the higher invoice.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>The right project for Time and Material Model Pricing Framework</h3>
                <ul className='blog-listing'>
                  <li>The projects which demand dynamic outcomes and are long-term</li>
                  <li>The scope of the project is limitless and yet not known to both the parties</li>
                  <li>When you want flexibility in your project and want modifications in the same while you vary the workloads</li>								
                </ul>
                <p>There is no fixed rule in choosing which billing is better and which billing incurs a loss. Whether the pricing is suitable for both the parties or not depends on the project, hence it is advisable to discuss the scope of the project and the demands of the project thoroughly before agreeing to sign either of the contracts. One must have clear specifications and goals in their minds about the outcome of their projects, before deciding on the pricing framework of their contract. Choosing the right pricing framework may be a challenging task but the correct estimation of the project and anticipation will aid in making the right decision.</p>
                <p>Whether you choose to go forward with the fixed price or the time and material contract for your company with the outsourcing partner depends on the project needs. It is essential to understand and analyse the different aspects of both types of contracts and weigh the advantages and disadvantages of the same and how they can be appropriate for the projects. The pricing framework of a certain outsourcing partner works well for a particular company so it will work in the same pattern for your company is not mandatory.</p>
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