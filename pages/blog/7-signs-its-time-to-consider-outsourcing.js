import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import singleBlogBannerThumb from '../../public/images/blogs/main-banner-2.jpg';
import singleBlogImage02 from '../../public/images/singleblog02.jpg';

const SingleBlog = () => {
  return (
    <>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>Outsourcing</p>
                <h1 className='blog-title'>7 Signs its time to Consider Outsourcing</h1>
                <span className='blog-date'>September 08, 2020</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={singleBlogBannerThumb} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/>
              </Col>
              <s.BlogContentWrapper>
                <p>There is no denying the fact that today there is an additional constant rising pressure in the global market which creates a competitive environment and a thrive to be the best in the market. Under such circumstances, the only companies that lead the market are the one who work most efficiently and that too, by reducing their operational costs without compromising on their quality of services. Outsourcing business operations is an excellent option and is beneficial for a company if you are overwhelmed without business workload and find yourself too involved and engrossed in work every waking hour of the day.</p>
                <p>Here are 7 signs that will help you to consider outsourcing for your company.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>You cannot develop your new ideas</h3>
                <p>You need time to process your idea and implement them. But, if you are engrossed with operational work, you hardly have time left to develop your ideas that implement the growth of the business. Growing a business is a continuous process which requires the flow and implementation of new ideas. And, working on the same is crucial. Hence, outsourcing your developing business will leave you to concentrate on the growth of your company.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>You forget to do certain tasks</h3>
                <p>It is obvious that if you are overwhelmed with work, chances are you might miss on certain tasks, and at times it can be detrimental. Even the simplest of the tasks like answering emails or updating your website may slip out of your mind.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>You are spending too much time on things which you hate</h3>
                <p>You may just end up hating the job which you once loved because you are stuck in the office doing tasks that you hate. Such tasks are perfect for outsourcing which requires more of your time and energy.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>When a specific area of your business is struggling</h3>
                <p>Every employee cannot manage all the tasks. If you notice that a specific area of your business is struggling, it is advisable to outsource the task to a team or a freelancer and take the workload of your employees and improve their working efficiency.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>You are stressed out all the time</h3>
                <p>If you find yourself snapping out at everyone for no rhyme or reason or have no life outside your office, it is probably you are overburdened and stressed out to the maximum limit. It is best to outsource some of the operational tasks and alleviate your stress.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>You are failing to provide the customer service you desire to</h3>
                <p>For the success of any business, it is pertinent to provide exemplary customer service, especially today. Customers today want answers and solutions to their problems right away. But if you are preoccupied with other menial tasks, it is nearly impossible to dedicate the time to aspire to dedicate it to your customers. Outsource a part of your work and see yourself making time and providing noteworthy customer service to your customers.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>You cannot keep up with the asking demands of the company</h3>
                <p>If you cannot keep up with the demands of the company and failing to meet the simplest tasks, it is time to outsource your business and let the experts take some of the workloads of your plate.</p>
              </s.BlogContentWrapper>
              <s.BlogImageWrapper>
                <Link href="#"><a><Image src={singleBlogImage02} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/></a></Link>
              </s.BlogImageWrapper>
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