import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import singleBlogBannerThumb from '../../public/images/blogs/onshore-vs-offshore.jpg';
import Head from 'next/head';
import { data } from "../../data/Seo";
import router from "../../utils/router";

const SingleBlog = () => {
  return (
    <>
      <Head>
        <title>{data.singleblog22.title}</title>
        <meta name="description" content={data.singleblog22.description}/>
        <meta name="keywords" content={data.singleblog22.keyword} />
      </Head>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>Development</p>
                <h1 className='blog-title'>Know the difference Onshore Vs Offshore Software Development</h1>
                <span className='blog-date'>August 24, 2020</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={singleBlogBannerThumb} alt="Know the difference Onshore Vs Offshore Software Development" className='imgwith-boxshadow' layout="raw"  placeholder='blur' quality='100' />
              </Col>
              <s.BlogContentWrapper>
                <p><strong>Offshore Development</strong> used to be the monopoly of India and China until quite recently. The picture is changing with various other countries like Malaysia and Eastern European nations joining the bandwagon. The growing demand for offshore development does leave the people curious about the reason behind it. Also, the trend and future of onshore development require scrutiny in light of the companies' changing attitudes. So, let's take a comparative look at <strong>Offshore VS Onshore Development</strong> and arrive at a conclusion.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Offshore development &ndash; pros and cons</h3>
                <p>Offshore development is not something strange to US companies. The country has outsourced applications worth billions of dollars in the past few years. They find it a reliable alternative because:</p>
                <ul className='blog-listing'>
								  <li><strong>It is exceptionally cost-effective: </strong>The lower cost of managing the offshore developers allows US companies to enjoy better cost control. The cheap labor available in overseas locations and their lower cost of living allows bringing down the applications’ price appreciably.</li>
								  <li><strong>Easy scaling up: </strong>When you need even 50 developers for a project, all you need is put a recruitment appeal to the online platforms. The surge in the applications received and quick onboarding helps to achieve scaling up needs comfortably.</li>
								  <li><strong>Pooling in varied skills becomes easy: </strong>Some projects may require various types like PHP developers, iPhone developers, web developers, coding experts, UI/UX experts, content developers, etc. Offshore development allows having an enriched pool of experts on board.</li>
							  </ul>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Cons</h3>
                <p>One of the significant concerns to tackle is that of the low quality of work. When the developers cannot deliver what is expected from them, it results in loss of time and money. Sometimes, the whole project is put on hold.</p>
                <p>Secondly, communication becomes a formidable pain when time-zones are different. The lack of communication leads to poor coordination, which affects the quality severely. Offshore developers, due to many reasons, are tied to the instructions they receive. Since there is no creative input, the applications fail to become future-proof or relevant to wider audiences.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Onshore development &ndash; pros and cons</h3>
                <p>Onshore development proves to be the right choice when a project extends over a long period.</p>
                <p>The main advantages are:</p>
                <ul className='blog-listing'>
								  <li><strong>Better delivery of expectations: </strong>Since the native developers have a better understanding of end-user&#39;s expectations, their projects prove to be more relevant and superior in creating the customer experience.</li>
								  <li><strong>Easy communication: </strong>The onshore developers and the companies are working on the same premise. They share the brand vision and work according to it. </li>
								  <li><strong>Better reliability: </strong> person sitting at some part of the world and sitting next to you naturally differ in terms of reliability. The ease of approaching, holding meetings on preferred time, and ease of assessment make onshore developers a plus point to consider.</li>
							</ul>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Cons</h3>
                <p>The most crucial setback associated with onshore development is the high cost. Neither the labor is cheap, nor the office maintenance infrastructure. The need to expand the workforce needs serious consideration and planning.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Which one to select?</h3>
                <p>It entirely depends upon the kind of application you want to achieve. If the project is short term, it is basic in functionalities and requires a variety of experts working at low cost; then, offshore development is the answer.</p>
                <p>On the other hand, when the project is expansive and needs improvements without requiring many experts to work, the better choice is &ndash; onshore development. No lack of budget also makes a suitable situation for <Link href="#"><a>hiring native developers</a></Link>.</p>
              </s.BlogContentWrapper>
              {/* <s.BlogImageWrapper>
                <Link href="#"><a><Image src={singleBlogImage02} alt="About Webenix" className='imgwith-boxshadow' layout="raw"  placeholder='blur' quality='100' /></a></Link>
              </s.BlogImageWrapper> */}
            <s.BlogContentWrapper>
                <h3>Conclusion:</h3>
                <p>The battle will still be going on as <strong>Onshore VS Offshore Software Development</strong> and it entirely depends upon the kind of application you want to achieve. If the project is short term, it is basic in functionalities and requires a variety of experts working at low cost; then, offshore development is the answer.</p>
                <p>On the other hand, when the project is expansive and needs improvements without requiring many experts to work, the better choice is – Onshore Development. No lack of budget also makes a suitable situation for <Link href={router.REACTNATIVEDEVELOPMENT}><a>hiring native developers</a></Link></p>
              </s.BlogContentWrapper>
            </Row>
        </Container>
      </s.SingleBlogWrapper>
      <Blog/>
    </>
  )
}

export default SingleBlog