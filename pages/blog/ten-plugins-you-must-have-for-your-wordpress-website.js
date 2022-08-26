import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import singleBlogBannerThumb from '../../public/images/blogs/ten-plugins-for-wordpress.jpg';
import singleBlogImage02 from '../../public/images/singleblog02.jpg';

const SingleBlog = () => {
  return (
    <>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>WordPress</p>
                <h1 className='blog-title'>Ten plugins you must-have for your WordPress website</h1>
                <span className='blog-date'>November 02, 2020</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={singleBlogBannerThumb} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/>
              </Col>
              <s.BlogContentWrapper>
                <p>The Plugins bring essential functions to your WordPress website. We may say that plugins are the building blocks of your WordPress site. Plugins boost the speed of the website. Plugins are multifunctional. Adding contact forms, improving SEO, creating online stores, or even offering email opt-ins are many plugin&#39;s functions. Plugins can help you complete any work you do on the WordPress website.</p>
                <p>There are thousands of plugins to choose from on the market. But a specific type of works needs particular plugins. Here we are mentioning some of the best plugins for you to choose from. Go through the specifications and opt for the best plugins of your choice.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>UpdraftPlus</h3>
                <p>The most popular backup plugin for your WordPress website is UpdraftPlus. It helps to set automatic backup settings and store all the backup files safely in any location of your choice. With this plugin on your WordPress website, you don’t have to worry about losing themes or plugins after updates and removals. The most exciting thing is, you can get a UpdraftPlus plugin for free.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>WordFence security – Firewall and Malware Scan</h3>
                <p>The security of websites, themes, and plugins is the topmost priority for a user. The Wordfence security is the one plugin that you can rely on for the protection of your website. It contains Firewall security and Malware scan, which helps you monitor logins, traffics, and many more.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Redirection</h3>
                <p>A redirection plugin for the WordPress website is all you need for network disturbances. This plugin manages to control 301 redirections as well as keep track of the 404 errors. It tides up the loose ends of your site. Changing or installing a new website from the old one is secured with this plugin.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Yoast SEO</h3>
                <p>Yoast SEO is a popular website for optimizing your pages and analyzing your content for readability and keywords. In this way, you can balance the quality of the content with SEO. It ranks higher on search engines.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>MonsterInsights</h3>
                <p>MonsterInsights is the best analytical plugin for your WordPress website. It analyzes your website directly with Google. It helps to increase the traffic, subscribers, and revenue. MonsterInsight also gives useful stats of the WordPress website that give you a clear idea about your website&#39;s current condition.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>File manager</h3>
                <p>A file manager plugin in WordPress helps to download and manage files on your website. It gives you a preview of files as well.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>WP Super Cache</h3>
                <p>With WP Super Cache, you can improve the performance and speed of your WordPress site.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>WooCommerce</h3>
                <p>This is the latest top plugin for e-commerce. WooCommerce helps you set currencies, reviews and adding features of sorting, filtering. It gives you unlimited image set-ups and endless customization. If you are an online seller, then all you need is a woo commerce plugin on your WordPress website.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Contact form - 7</h3>
                <p>It is a top free contact form plugin in WordPress. Users of Contact form -7 can reach anyone through a streamlined contact form. It gives the reCAPTCHA feature as well as Akismet functionality to the user. It is one of the most famous contact form-related plugins in the market.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Advance custom field</h3>
                <p>The advanced custom field plugin is the plugin you need to control the edit screens and custom field data in your WordPress website.</p>
                <p>Another useful plugin is <strong>Duplicate Page</strong> you can custom create duplicate pages and add new pages.</p>
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