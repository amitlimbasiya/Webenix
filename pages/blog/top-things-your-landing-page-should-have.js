import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import singleBlogBannerThumb from '../../public/images/blogs/top-things-landing-page.jpg';
import singleBlogImage02 from '../../public/images/singleblog02.jpg';

const SingleBlog = () => {
  return (
    <>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>SEO</p>
                <h1 className='blog-title'>Top Things Your Landing Page Should Have</h1>
                <span className='blog-date'>August 10, 2021</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={singleBlogBannerThumb} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/>
              </Col>
              <s.BlogContentWrapper>
                <p>When you develop the website for your company, your primary target will be to use the website as a marketing tool. Your company&#39;s website is the online interface between you and your prospective customers. Hence, your website should be informative and engaging. Moreover, web traffic is diverted to your website through the landing page. The landing page thus works as the first interaction between you and your prospective clients. Therefore, website developers and SEO experts insist that the landing page should be designed so that the visitor is directed to your company&#39;s website easily. It should also have the necessary elements to help your visitor navigate the landing page onto the home page. In other words, your home page and your landing page should be distinct. Otherwise, it can create confusion, and your visitor might even leave your website without evaluating it thoroughly. Hence, you should ensure that the landing page of your company&#39;s website has all the elements necessary to ensure that visitor understands the essential aspects of your website and proceeds to navigate it. Some of the things that your landing page should have are as follows:</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>The landing page should be informative.</h3>
                <p>As mentioned earlier, your website&#39;s landing page is the first point of contact between your company and a prospective client. Hence, it should be informative and engaging. You must provide the necessary information that the visitor is looking for without making it long and convoluted. It should also have all the elements required to create a sense of intrigue in the visitor so that he proceeds to navigate your company&#39;s website. Therefore, the landing page should have a headline, which will give the visitor a basic idea of the products and services offered by your company. It should also have subheadings that will outline the primary features of the services or products provided by your firm. The landing page should also have screenshots or videos regarding of company, which will help customers associate with your firm. Sometimes it is a good idea to introduce customer testimonials on the landing page. This will help your customers gain confidence in the products and services offered by your company. Finally, the landing page should have the necessary links to connect to the other web pages on your website. The call to action buttons is needed to ensure the visitor is easily directed to the subsequent web pages. If your visitor does not continue to the next web pages, your website will not receive a higher ranking on the Search Engine Result Pages or SERPs.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Put the necessary links and objectives of your firm on the landing page.</h3>
                <p>You should not crowd the landing page with unnecessary links. This will make it challenging to navigate the website. Include only those links on the landing page that will take the visitors to the subsequent web pages. The landing page should make it easy for the visitor to navigate the website. Moreover, it is vital to keep the objective of your company precisely mentioned on the landing page. For example, if your company provides home services, it is essential to say it on the landing page. You will have to mention it in the form of a caption so that customers get a clear idea of the services provided by your firm, the geographical locations covered, and the quality of your service. This will help the visitor get a clear impression of your company, and he will want to proceed further with evaluating the services offered. Hence, the landing page should have all the necessary links and your firm&#39;s objective on the landing page.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>The landing page and the content source should match.</h3>
                <p>Visitors usually come to a website on being directed from another website or an advertisement. Hence, the information or content provided in the ad should match the information on the landing page. The content of the source and the landing page should match. If there is a disparity in communication, it will create confusion in the visitor, and he might even leave the website without checking the subsequent links. Hence, when you make the landing page of your company&#39;s website, you should keep in mind the information you have provided on the social media platforms, online advertisements, and the Pay Per Click advertisements. This will ensure that the visitors are not confused on seeing the landing page, and they are assured that they have come to the correct website.</p>
              </s.BlogContentWrapper>
              <s.BlogImageWrapper>
                <Link href=""><a><Image src={singleBlogImage02} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/></a></Link>
              </s.BlogImageWrapper>
              <s.BlogContentWrapper>
                <h3>Create an engaging landing page.</h3>
                <p>The landing page should be engaging and provide all the necessary information to the visitor. The landing page content should make adequate use of the keywords associated with your firm&#39;s services. When you use the keywords correctly, the search engine crawlers can quickly identify your company&#39;s website. Additionally, your website&#39;s information on the landing page should also be connected with the structured data of your website, similar to the other web pages. This will help in creating the rich snippet which is displayed on the SERPs. This is necessary to assure the visitor that they have identified the correct website and the company that will meet their requirements. Thus, creating the content of the landing page carefully is of vital importance. It should engage the interest of the visitor and persuade him to check out the subsequent web pages. If the landing page has engaging content, it will assure the visitor that the website will have similar content and meet the client requirements.</p>
                <p>When you develop the landing page of your company&#39;s website, you must evaluate the visitor&#39;s mind and the services provided by your firm. Providing overly technical content will prove to be counterproductive. The landing page should be informative, engaging and provide adequate information about your company. This is essential to help the customer understand that your company will meet the visitors&#39; expectations. Thus, creating a relevant landing page for your company&#39;s website is necessary to promote your company&#39;s products and services and create a loyal customer base.</p>
                <p>If you are looking for a reliable web design & development <Link href=""><a>outsourcing company</a></Link>, you can reach out to our experts at Webenix! We can help you <Link href="mailto:info@webenix.net"><a>info@webenix.net</a></Link></p>
              </s.BlogContentWrapper>
            </Row>
        </Container>
      </s.SingleBlogWrapper>
      <Blog/>
    </>
  )
}

export default SingleBlog