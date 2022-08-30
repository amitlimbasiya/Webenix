import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import singleBlogBannerThumb from '../../public/images/blogs/speed-optimize-wordpress.jpg';
import Head from 'next/head';
import { data } from "../../data/Seo";

const SingleBlog = () => {
  return (
    <>
      <Head>
        <title>{data.singleblog13.title}</title>
        <meta name="description" content={data.singleblog13.description}/>
        <meta name="keywords" content={data.singleblog13.keyword} />
      </Head>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>WordPress</p>
                <h1 className='blog-title'>How to speed optimize WordPress website?</h1>
                <span className='blog-date'>November 23, 2020</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={singleBlogBannerThumb} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/>
              </Col>
              <s.BlogContentWrapper>
                <p>While WordPress is a great platform, it suffers mostly from one weakness &ndash; its slow speed. If you don&#39;t take the necessary precautions, you could end up having a sluggish website. That is not only a headache for your regular visitors, but can also cause you to lose subscribers and customers. In this guide, we will discuss some of the effective ways to optimize your WordPress website. It will help you maintain a website that is zippy and responsive.</p>                
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Enable caching for website:</h3>
                <p>There are some plugins available for WordPress that fall under the caching category. You can use these plugins to improve your page loading time drastically, as well as the responsiveness of your site. Know what the best thing is? They are free of cost and extremely user-friendly. Install, enable, and let the plugins do their work.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Optimize images:</h3>
                <p>Optimizing images on your website will increase your website&#39;s speed to a great extent. There is a free plugin available for WordPress called WP-SmushIt, that can do it for you. It will reduce the size of the images on your website without reducing their quality. Plus, it does all this automatically whenever you upload a new image on your WordPress Website.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Optimize background processes:</h3>
                <p>Several tasks keep running in the background of a WordPress site. These processes include backups, publishing scheduled posts, automatic update checks, or search engines fetching content. Lightweight tasks like updates and post scheduling won&#39;t affect your website speed much. But heavy tasks like backups and search engine crawling can harm the speed of your website. To combat this, make sure your backups run at a low traffic time. You should also adjust the frequency of your backups. To increase your website speed further, limit post scheduling. In terms of crawling, you should monitor it using Google Search Console.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Use Content Delivery Network (CDN) in website:</h3>
                <p>A CDN or Content Delivery Network takes all your static files from your site and allows the viewers to download them as fast as they can. You can use StackPath Content Delivery Network for this purpose as it is very affordable and very easy-to-use. There is also a free plugin called Free-CDN that can do the same.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Reduce external HTTP requests:</h3>
                <p>HTTP requests are sent to the server whenever someone visits your WordPress website. These requests contain a variety of information that the server processes and acts upon. If the number of these requests increases, your website will become slow. To increase the page loading time of your website, you should always reduce external HTTP requests.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Reduce database calls:</h3>
                <p>Reducing database calls can be beneficial for your website. It reduces the burden of the website and makes it speedier and more responsive. There is a plugin, namely WP-Optimize, that can easily handle this matter for you. This plugin allows you to optimize your database, including spam, post revisions, drafts, and tables. This, in turn, reduces their overhead. Another plugin you can use along with this one is the WP-DB Manager. It can efficiently schedule dates for database optimization. So, you can eliminate the possibility of you forgetting to optimize your database.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Check site in GTmetrix or Google PageSpeed Insights:</h3>
                <p><Link href="https://gtmetrix.com/"><a target="_blank">GTmetrix</a></Link> and <Link href="https://developers.google.com/speed/pagespeed/insights/"><a target="_blank">Google Pagespeed Insights</a></Link> are free online tools available to test your website&#39;s performance. Using these tools can help you get a clear understanding of your website&#39;s speed and performance and make improvements accordingly.</p>
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