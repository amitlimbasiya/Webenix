import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import singleBlogBannerThumb from '../../public/images/blogs/secure-wordpress-site.jpg';
import Head from 'next/head';
import { data } from "../../data/Seo";

const SingleBlog = () => {
  return (
    <>
      <Head>
        <title>{data.singleblog14.title}</title>
        <meta name="description" content={data.singleblog14.description}/>
        <meta name="keywords" content={data.singleblog14.keyword} />
      </Head>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>WordPress</p>
                <h1 className='blog-title'>How to secure WordPress site?</h1>
                <span className='blog-date'>November 16, 2020</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={singleBlogBannerThumb} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/>
              </Col>
              <s.BlogContentWrapper>
                <h3>Up-to-date with WordPress latest version:</h3>                
                <p>To make your WordPress website less vulnerable to hackers and malware, make sure that your WordPress software is up-to-date. Having older or obsolete versions of WordPress makes it more exposed to various security threats.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Update plugins:</h3>
                <p>WordPress is open-source software that goes through regular updates and bug-fixes. WordPress also offers hundreds of thousands of plugins that you can install on your website. To ensure maximum security, always keep these plugins updated.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Update themes:</h3>
                <p>Like plugins, WordPress also comes with a massive number of themes. Third-party developers regularly release updates for these themes as well. To increase your websites security and stability, install these updates in your software as soon as you get them.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Remove unwanted themes/plugins:</h3>
                <p>The more themes/plugins you install in your WordPress software, the more vulnerable it is to hacker&#39;s attacks. So always remember to uninstall the themes or plugins you don&#39;t need anymore.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Admin panel password should be strong:</h3>
                <p>Change the admin panel password if it is too easy to remember. Hackers might guess your password and gain access to the admin panel. Having a stronger password would reduce the chance of hackers guessing your password and infiltrating your admin panel.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Try to keep minimum the use of plugins:</h3>
                <p>To ensure your website&#39;s maximum security, try to reduce the use of plugins. Using more plugins is a delight for hackers, don&#39;t install new plugins unless you have to.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Use plugins that have maximum active installations and the latest updates:</h3>
                <p>Use plugins that have active installations. Third-party developers release updates for various plugins. Keeping these plugins updated reduces the possibility of your WordPress site getting hacked.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Use good hosting and the domain with SSL (HTTPS):</h3>
                <p>SSL is a protocol that encrypts the data transfer between your WordPress site and the user&#39;s browser. Using good hosting and domain with SSL makes it harder for hackers to sniff around and steal information. Once you enable SSL, your website will start using HTTPS instead of HTTP.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Use the WordPress security plugin with stored user login logs, IP address, and set login attempts limit:</h3>
                <p>To increase your website&#39;s security, use the security plugin that stores user login logs and IP address. It will help keep hackers at bay. For extra security, limit login attempts. This will eliminate the possibility of hackers trying different combinations to crack your website&#39;s password.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Use reCaptcha in login, register, and other forms on site:</h3>
                <p>Using reCaptcha in your website prevents spam from automated form submissions. It eradicates junk postings, spam user accounts, and the risk of hackers exploiting security holes on your website.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Change plugins and themes file edit permission, using the wp-config file in <br></br>define (&#39;DISALLOW_FILE_EDIT,&#39; true);</h3>
                <p>WordPress contains a built-in code editor that you can use to edit your theme and plugin files efficiently. As this can be done directly from the admin area, hackers can exploit it to infiltrate your website. You can eliminate this security risk by turning it off using the code &#39;DISALLOW_FILE_EDIT,&#39; true.</p>
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