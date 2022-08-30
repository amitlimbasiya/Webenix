import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../../components/Blog';
import * as s from "../../styles/components/SingleBlog.style";
import singleBlogBannerThumb from '../../public/images/blogs/main-banner-4.jpg';
import Head from 'next/head';
import { data } from "../../data/Seo";

const SingleBlog = () => {
  return (
    <>
      <Head>
        <title>{data.singleblog21.title}</title>
        <meta name="description" content={data.singleblog21.description}/>
        <meta name="keywords" content={data.singleblog21.keyword} />
      </Head>
      <s.SingleBlogWrapper className='singleblog-section'>
        <s.SingeBlogHeaderBg className='noiseBg'></s.SingeBlogHeaderBg>
        <Container>
            <Row>
              <Col lg={12} md={12} className="mb-5 mb-md-0 singleblog-banner-content">
                <p className='blog-category orangeColor'>Development</p>
                <h1 className='blog-title'>Top Reasons to consider offshore development</h1>
                <span className='blog-date'>September 01, 2020</span>
              </Col>
              <Col lg={12} md={12} className="singleblog-banner-img">
                <Image src={singleBlogBannerThumb} alt="About Webenix" className='imgwith-boxshadow' layout="raw"/>
              </Col>
              <s.BlogContentWrapper>
                <p>The internet has made the whole world a tightly knit entity. The emergence of natural communication enablers like file sharing, desktop sharing, video conferences, etc. has further eased the working without bothering about geographical boundaries. For any business, inviting the experts and giving them a place to work and stay is not budget-friendly always. So, they resort to the idea of offshore development. Listed here are the other best reasons, apart from cost-effectiveness, that form the premise of adopting offshore development.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Having the best brains for the job</h3>
                <p>Countries differ in the way their residents get an education. The education system, availability of courses, training programs provided are some of the prime factors that decide the quality of the workforce any country has. Those countries that lack skilled workers, but have a project that requires expertise not readily available in their native land use offshore experts for <Link href="#"><a>development processes</a></Link>. The offshore development offers the ease of getting the right people for the right job, which is why it is catching up with companies worldwide.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Easy team expansions without adding to infrastructure cost</h3>
                <p>When any member is added in the physical space of an office, it does require investing in infrastructure to give a suitable environment to work. This scaling-up costs can be reduced considerably by adopting offshore development. The experts from any part of the world can join the team and give their contributions without requiring the companies to invest in furniture, tools, and other equipment.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Better management of risk factors</h3>
                <p>By simple procedures like SLAs or Non-disclosure agreements, the companies can leverage the advantages of offshore development to achieve targets and enable better risk management. Cloud applications like Google Sheets and other similar tools allow easy tracking, better safety, and seamless management of projects. With offshore development, the contribution of ideas without facing the risk of the data leak etc. becomes possible.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Faster processes and product development</h3>
                <p>With offshore development support in hand, the companies can achieve the faster accomplishment of processes that ultimately reduces time-to-market for any product or tool. Easy onboarding happening over the internet, and dispensing of various formalities allow the companies to give assignments quickly to the developers. This promptness in the execution of ideas allows the companies to roll out products sooner than the competitors. Since the developers are working flexibly, but with the company&#39;s philosophy, it results in better and faster implementation of ideas, enabling the quicker introduction of newer products in the market.</p>
              </s.BlogContentWrapper>
              <s.BlogContentWrapper>
                <h3>Affordable developers available</h3>
                <p>The companies can reach more affordable developers stationed in another country where the labor cost is low. For example, India is one of the countries the world looks at for development experts who work at meager rates compared to the western side of the world. Thus, start-ups can take the help of affordable expertise through offshore development.</p>
                <p>Offshore development has become a pleasant reality for businesses who do not mind going beyond geographical boundaries to accomplish their projects. Benefits provided by it make it an intelligent approach rather than a fancy trend.</p>
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