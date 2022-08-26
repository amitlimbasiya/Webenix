import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import singleBlogBannerThumb from '../../public/images/blogs/wordpress-automation.jpg';

const SingleBlog = () => {
  return (
    <>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>WordPress</p>
                <h1 className='blog-title'>WordPress automation tools and tips</h1>
                <span className='blog-date'>August 16, 2021</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={singleBlogBannerThumb} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/>
              </Col>
              <s.BlogContentWrapper>
                <p>If you use WordPress to create your company&#39;s website, it is important to make maximum use of its tools and plugins to create a user-friendly and easy-to-visit website. WordPress is an open-source platform with a plethora of templates and tools that make it easier for amateur web developers to create websites. You can also use the same platform to create forums and online interactive platforms associated with your website. This will help you reach out to more prospective clients. Additionally, WordPress tools will help you create a professional website with a minimum technical expertise. Some of the automation tools offered by WordPress are as follows:</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Use WordPress tools to improve your blogging skills</h3>
                <p>If you want to promote your company&#39;s website on social media platforms and online forums, blogging is one of the best methods. Moreover, if you plan to use WordPress to blog about your firm, consider using the Akismet plugin. This simplifies the entire process of blogging by removing any spams without interacting with the sender. When you have the comments turned on, it will automatically delete the unnecessary comments and you will see only those that are worthwhile for your company. It will help promote your brand without any negative impact and unnecessary spam.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Follow up emails</h3>
                <p>For any company to thrive, it is necessary to stay in touch with the customers. One of the ways for keeping in touch with the clients is by sending follow-up emails. The WooCommerce platform, which is an extension of WordPress you can send multiple emails to your clients. You can send the emails in bulk to all your customers. After that, you can keep track of the same platform&#39;s responses and accordingly reply to the mails. These follow-up emails are necessary to assure your customers that your company provides seamless service.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Automatic updates</h3>
                <p>The WordPress platform provides regular updates to ensure its customers receive the best service. These updates can be in the form of security patches, changes in the operating system or upgrading of the entire security system. You can activate the automatic update system of WordPress and your website will be updated to the latest version automatically. WordPress will also provide you with back-ups if you need to revert to the older version. Thus, with WordPress&#39;s automation tools, can simplify your work.</p>
                <p>Therefore, WordPress provides comprehensive support to all its customers. Its automation tools make it easier to evaluate the changes that need to brought to your website to attract more customers. You can use the robust Content Management System or CMS offered by WordPress to create websites that have plugins that visitors can use to improve their experience and navigate your company&#39;s website with ease. Although it is an open-source platform WordPress provides new and unique plugins and tools to its customers to make it easier to create their websites, forums and social media platforms. Therefore, by using the platform&#39;s automation tools, you can attract more web traffic and increase your customer base significantly.</p>
              </s.BlogContentWrapper>
              {/* <s.BlogImageWrapper>
                <Link href="#"><a><Image src={singleBlogImage02} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/></a></Link>
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