import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import singleBlogBannerThumb from '../../public/images/blogs/keep-wordpress-website-updated.jpg';
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
                <h1 className='blog-title'>How to keep your WordPress website updated?</h1>
                <span className='blog-date'>November 09, 2020</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={singleBlogBannerThumb} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/>
              </Col>
              <s.BlogContentWrapper>
                <p>Your WordPress website should be updated manually. The updates keep your themes, plugins, and WordPress version secure and up to date. The minor releases are updated automatically by default. But, if the auto-update is disabled, then you will get notifications for an update. Updating WordPress is as easy as clicking an update button. WordPress will download the necessary files, formats and validate them according to need after your request to update. This way, your WordPress will be updated to the latest version.</p>
                <p>A beginner will be confused about updating a WordPress website. We are here to provide you the easiest and convenient way to update your WordPress website securely. Go through the following steps to get a clear idea about how a WordPress website can be updated.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Full back up current site.</h3>
                <p>Your WordPress site contains essential and necessary themes, media, and plugins. An update thoroughly screens the website; any bugs are deleted while filtering and updating. So, if your essential files contain any bug, then it will be deleted while updating. Fully back up the current WordPress site contents before getting an update to avoid such unwanted situation as mentioned.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Update WordPress version</h3>
                <p>Updating the WordPress version is a regular maintenance task. The easiest and safest way to update the WordPress version is described here. Follow the points mentioned below,</p>
                <ul className='blog-listing'>
                  <li>Firstly, log in to your account and go to the admin area of your WordPress website.</li>
                  <li>Hover your cursor to the dashboard button and click on the updates link.</li>
                  <li>WordPress will search the latest versions of the software for updates and installations.</li>
                  <li>The update page will show you the required updates. Now click on the WordPress update, and your WordPress version will start to update itself.</li>								
                </ul>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Update all plugins</h3>
                <p>The update page is divided into three-part. The first section is allotted for WordPress version updates, and the second section is allocated for plugin updates.</p>
                <p>Follow the same steps, as mentioned in the WordPress version update. But this time, click on the second section for plugin updates. The latest plugins are shown in this area. Tick the boxes of plugins you wish to update. WordPress will start to update and install the newest version of plugins of your choice as soon as you click on the plugin updates.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Update themes:</h3>
                <p>The last section in the update page of the WordPress website is allotted for themes update. If you want to update your WordPress website&#39;s themes, click on each box of your choice themes after following the same procedure described in the plugin update part. Updating the themes will install the latest themes on your WordPress website.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Check the full site and all functionality of the frontend and backend.</h3>
                <p>After updating the WordPress website, one should check out the functionality of the updated version. Whether the update is done automatically or manually, the versions, themes, and plugins should be checked properly. Run the website after every update. Put on every theme you installed and plugins downloaded. If you find any difficulty, consult an expert.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Remove unwanted themes/plugins from the website.</h3>
                <p>If you don&#39;t use some specific themes or plugins, then you should remove them. The WordPress website will hang or slow down for storing unwanted themes and plugins.</p>
                <p>Update your WordPress website for a seamless work experience.</p>
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