import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/BlogListing/BlogListing.style";
import WhyWPWebsite from '../../public/images/blogs/why-necessary.jpg';
import WPAutomation from '../../public/images/blogs/wordpress-automation.jpg';
import Topprediction from '../../public/images/blogs/predictions-facebook.jpg';
import TopThings from '../../public/images/blogs/top-things-landing-page.jpg';
import TopAdvcanced from '../../public/images/blogs/seo-techniques.jpg';
import Bestb2b from '../../public/images/blogs/best-b2b-marketing.jpg';
import LkedinMarketing from '../../public/images/blogs/linkedin-marketing.jpg';
import ManagedWP from '../../public/images/blogs/Is-managed-WordPress-hosting-worth-the-extra-price.jpg';
import WebAgenciesProductionCost from '../../public/images/blogs/How-Web-Agencies-can-reduce-production-cost-in-2021.jpg';
import SEOChange from '../../public/images/blogs/How-Will-SEO-Change-in-2021.jpg';
import MotivateRemoteSoftwareTeam from '../../public/images/blogs/How-to-motivate-and-engage-a-remote-software-team.jpg';
import AvoidCulturalOutSourcing from '../../public/images/blogs/How-to-avoid-cultural-pitfalls-in-outsourcing.jpg';
import WpSpeedOptimize from '../../public/images/blogs/How-to-speed-optimize-WordPress-website.jpg';
import SecureWordPressSite from '../../public/images/blogs/How-to-secure-WordPress-site.jpg';
import KeepWordPressSiteUpdated from '../../public/images/blogs/How-to-keep-your-WordPress-website-updated.jpg';
import TenWpWebsite from '../../public/images/blogs/Ten-plugins-you-must-have-for-your-WordPress-website.jpg';
import MakeVirtualEmployeesProductive from '../../public/images/blogs/How-to-Make-Virtual-Employees-Productive.jpg';
import FindOutsourcingPartner from '../../public/images/blogs/How-Shoulds-I-Find-the-Right-Outsourcing-Partner-in-India.jpg';
import ComparisonBetweenFixedPrice  from '../../public/images/blogs/A-comparison-between-fixed-price-and-time-and-material-contract.jpg';
import TimeConsiderOutsourcing  from '../../public/images/blogs/7-Signs-its-time-to-Consider-Outsourcing.jpg';
import TopResonsOffshireDevelopment  from '../../public/images/blogs/Top-Reasons-to-consider-offshore-development.jpg';
import OffshoreDevelopment  from '../../public/images/blogs/Offshore-development-best-practices-to-know-about.jpg';
import LeadingTrendsKnowAbout  from '../../public/images/blogs/Leading-offshore-development-trends-to-know-about.jpg';
import WaysUEISABSER  from '../../public/images/blogs/The-ways-to-utilize-an-effective-outsourcing-strategy-and-achieve-business-success-by-eliminating-the-risks.jpg';

import router from "../../utils/router";
 
var settings = {
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
};

const BlogListings = (props) => {
  return (
    <> 
     <s.Listing>
      <Slider className='slickSlider' {...settings}>
        <s.blogItem className='blogItem text-center'>
            <Link href={router.SINGLEBLOG25}>
                <a>
                    <s.blogImage>
                        <Image src={WaysUEISABSER} alt="The ways to utilize an effective outsourcing strategy and achieve business success by eliminating the risks" layout='raw' />
                        <div className='datePart'>AUGUST 03, 2020</div>
                    </s.blogImage>
                </a>
            </Link>
            <s.blogCategory className='orangeColor'>OUTSOURCING</s.blogCategory>
            <s.blogTitle className='postHeading'>
                <Link href={router.SINGLEBLOG25}>
                    <a>The ways to utilize an effective outsourcing strategy and achieve business success by eliminating the risks</a>
                </Link>
            </s.blogTitle>
        </s.blogItem>
        <s.blogItem className='blogItem text-center'>
            <Link href={router.SINGLEBLOG21}>
                <a>
                    <s.blogImage>
                        <Image src={TopResonsOffshireDevelopment} alt="Top Reasons to consider offshore development" layout='raw' />
                        <div className='datePart'>SEPTEMBER 01, 2020</div>
                    </s.blogImage>
                </a>
            </Link>
            <s.blogCategory className='orangeColor'>outsourcing</s.blogCategory>
            <s.blogTitle className='postHeading'>
                <Link href={router.SINGLEBLOG21}>
                    <a>Top Reasons to consider offshore development</a>
                </Link>
            </s.blogTitle>
        </s.blogItem>
        <s.blogItem className='blogItem text-center'>
            <Link href={router.SINGLEBLOG19}>
                <a>
                    <s.blogImage>
                        <Image src={ComparisonBetweenFixedPrice} alt="A comparison between fixed price and time and material contract" layout='raw' />
                        <div className='datePart'>SEPTEMBER 22, 2020</div>
                    </s.blogImage>
                </a>
            </Link>
            <s.blogCategory className='orangeColor'>outsourcing</s.blogCategory>
            <s.blogTitle className='postHeading'>
                <Link href={router.SINGLEBLOG19}>
                    <a>A comparison between fixed price and time and material contract</a>
                </Link>
            </s.blogTitle>
        </s.blogItem>
      </Slider>
      <s.blogListing className='blogListing'>
        <Container>
          <Row>
            <Col lg={9} md={12} className="order-2 order-lg-1">  
                <s.BlogListWrapper className='bloglisting-wrapper'>                        
                    <s.blogItem className='blogItem wordpress'>
                        <Link href={router.SINGLEBLOG1}>
                            <a><s.blogImage><Image src={WhyWPWebsite} alt="Why it is necessary to do regular updates of your WordPress website" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>WORDPRESS</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG1}><a>Why it is necessary to do regular updates of your WordPress website?</a></Link>
                        </s.blogTitle>
                        <p>If you are looking to create your website, then you must be thinking of WordPress. It is no news that WordPress powers nearly thirty-nine percent of the websites that you see across the Internet. It is one of the most straightforward tools available to individuals, entrepreneurs, and website developers to design and launch a website.</p>
                        <Link href={router.SINGLEBLOG1}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>AUGUST 13, 2021</div>
                    </s.blogItem>               
                    <s.blogItem className='blogItem wordpress'>
                        <Link href={router.SINGLEBLOG2}>
                            <a><s.blogImage><Image src={WPAutomation} alt="WordPress automation tools and tips" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>WORDPRESS</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG2}><a>WordPress automation tools and tips</a></Link>
                        </s.blogTitle>
                        <p>If you use WordPress to create your company&#39;s website, it is important to make maximum use of its tools and plugins to create a user-friendly and easy-to-visit website. WordPress is an open-source platform with a plethora of templates and tools that make it easier for amateur web developers to create websites.</p>
                        <Link href={router.SINGLEBLOG2}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>August 16, 2021</div>
                    </s.blogItem>      
                    <s.blogItem className='blogItem seo'>
                        <Link href={router.SINGLEBLOG3}>
                            <a><s.blogImage><Image src={TopThings} alt="Top Things Your Landing Page Should Have" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>SEO</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG3}><a>Top Things Your Landing Page Should Have</a></Link>
                        </s.blogTitle>
                        <p>When you develop the website for your company, your primary target will be to use the website as a marketing tool. Your company&#39;s website is the online interface between you and your prospective customers. Hence, your website should be informative and engaging. Moreover, web traffic is diverted to your website through the landing page.</p>
                        <Link href={router.SINGLEBLOG3}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>August 10, 2021</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem marketing'>
                        <Link href={router.SINGLEBLOG4}>
                            <a><s.blogImage><Image src={Topprediction} alt="Top Predictions for Facebook Advertising in 2021" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Marketing</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG4}><a>Top Predictions for Facebook Advertising in 2021</a></Link>
                        </s.blogTitle>
                        <p>If you plan to use Facebook as a platform to promote the products and services offered by your company, you must understand how your prospective clients will perceive these business promotions. For example, you need to stay updated with the latest trends to impact the platform.</p>
                        <Link href={router.SINGLEBLOG4}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>June 20, 2021</div>
                    </s.blogItem> 
                    <s.blogItem className='blogItem seo'>
                        <Link href={router.SINGLEBLOG5}>
                            <a><s.blogImage><Image src={TopAdvcanced} alt="Top Advanced SEO Techniques to Maximize Your Search Traffic" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>SEO</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG5}><a>Top Advanced SEO Techniques to Maximize Your Search Traffic</a></Link>
                        </s.blogTitle>
                        <p>It is a well-known fact that Search Engine Optimized or SEO managed website attracts more web traffic. In other words, if you have launched a website for your company, you must ensure that it has proper SEO protocols in place.</p>
                        <Link href={router.SINGLEBLOG5}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>June 15, 2021</div>
                    </s.blogItem>  
                    <s.blogItem className='blogItem marketing'>
                        <Link href={router.SINGLEBLOG6}>
                            <a><s.blogImage><Image src={Bestb2b} alt="The Best B2B Marketing Strategies to Increase Leads" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Marketing</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG6}><a>The Best B2B Marketing Strategies to Increase Leads</a></Link>
                        </s.blogTitle>
                        <p>When it comes to Business to Business or B2B marketing, the challenge you will face is reaching out to the correct customer base. B2B marketing is niche marketing and does not include the mass retail market. For example, if your company provides large-scale logistic support, you will have to address the specific need to make your customers aware of your services. Thus, developing the correct leads, designing a website that meets your requirements, and ensuring that your prospective clients recognize your benefits are all priorities. Some of the strategies that you can adopt to increase the leads for B2B marketing are as follows:</p>
                        <Link href={router.SINGLEBLOG6}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>June 14, 2021</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem marketing'>
                        <Link href={router.SINGLEBLOG7}>
                            <a><s.blogImage><Image src={LkedinMarketing} alt="LinkedIn Marketing Best Strategies for 2021" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Marketing</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG7}><a>LinkedIn Marketing Best Strategies for 2021</a></Link>
                        </s.blogTitle>
                        <p>LinkedIn is one of the most reputed Business to Business or B2B platforms, which can be utilized to create more resources and advertise the services provided by your firm. Suppose you are a business manager for a small or medium-sized business enterprise.</p>
                        <Link href={router.SINGLEBLOG7}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>June 12, 2021</div>
                    </s.blogItem>  
                    <s.blogItem className='blogItem wordpress'>
                        <Link href={router.SINGLEBLOG8}>
                            <a><s.blogImage><Image src={ManagedWP} alt="Is managed WordPress hosting worth the extra price?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>WORDPRESS</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG8}><a>Is managed WordPress hosting worth the extra price?</a></Link>
                        </s.blogTitle>
                        <p>WordPress is one of the most efficient platforms to create websites, eCommerce portals, social media platforms, online forums, and other similar web-hosted services. With the help of WordPress, you can gain access to a plethora of pre-designed templates that will make designing your website simpler.</p>
                        <Link href={router.SINGLEBLOG8}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>June 10, 2021</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem seo'>
                        <Link href={router.SINGLEBLOG9}>
                            <a><s.blogImage><Image src={SEOChange} alt="How Will SEO Change in 2021?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>SEO</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG9}><a>How Will SEO Change in 2021?</a></Link>
                        </s.blogTitle>
                        <p>It is a well-known fact that Search Engine Optimized or SEO managed website attracts more web traffic. In other words, if you have launched a website for your company, you must ensure that it has proper SEO protocols in place.</p>
                        <Link href={router.SINGLEBLOG9}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>June 07, 2021</div>
                    </s.blogItem>    
                    <s.blogItem className='blogItem outsourcing'>
                        <Link href={router.SINGLEBLOG10}>
                            <a><s.blogImage><Image src={WebAgenciesProductionCost} alt="How Web Agencies can reduce production cost in 2021?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>OUTSOURCING</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG10}><a>How Web Agencies can reduce production cost in 2021?</a></Link>
                        </s.blogTitle>
                        <p>If you are planning to take your company online, you will have to develop a website for your business enterprise that does justice to your firm&#39;s products and services. Designing a website requires expertise, and hence, you should outsource your requirements to a reputed web agency.</p>
                        <Link href={router.SINGLEBLOG10}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>June 05, 2021</div>
                    </s.blogItem>           
                    <s.blogItem className='blogItem outsourcing'>
                        <Link href={router.SINGLEBLOG11}>
                            <a><s.blogImage><Image src={MotivateRemoteSoftwareTeam} alt="How to motivate and engage a remote software team?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>OUTSOURCING</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG11}><a>How to motivate and engage a remote software team?</a></Link>
                        </s.blogTitle>
                        <p>If you are a business manager or a team lead, you will be tasked with managing not just the business aspect of your company. Still, you will also have to keep your team motivated and enthusiastic about their work.</p>
                        <Link href={router.SINGLEBLOG11}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>June 03, 2021</div>
                    </s.blogItem>     
                    <s.blogItem className='blogItem outsourcing'>
                        <Link href={router.SINGLEBLOG12}>
                            <a><s.blogImage><Image src={AvoidCulturalOutSourcing} alt="How to avoid cultural pitfalls in outsourcing?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>OUTSOURCING</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG12}><a>How to avoid cultural pitfalls in outsourcing?</a></Link>
                        </s.blogTitle>
                        <p>When you outsource some of your business activities to a company in a different geographical location, it is essential to ensure that you prove to be a supportive and encouraging business enterprise.</p>
                        <Link href={router.SINGLEBLOG12}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>June 01, 2021</div>
                    </s.blogItem>   
                    <s.blogItem className='blogItem wordpress'>
                        <Link href={router.SINGLEBLOG13}>
                            <a><s.blogImage><Image src={WpSpeedOptimize} alt="How to speed optimize WordPress website?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>WordPress</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG13}><a>How to speed optimize WordPress website?</a></Link>
                        </s.blogTitle>
                        <p>While WordPress is a great platform, it suffers mostly from one weakness &ndash; its slow speed. If you don&#39;t take the necessary precautions, you could end up having a sluggish website. That is not only a headache for your regular visitors, but can also cause you to lose subscribers and customers.</p>
                        <Link href={router.SINGLEBLOG13}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>November 23, 2020</div>
                    </s.blogItem>   
                    <s.blogItem className='blogItem wordpress'>
                        <Link href={router.SINGLEBLOG14}>
                            <a><s.blogImage><Image src={SecureWordPressSite} alt="How to secure WordPress site?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>WordPress</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG14}><a>How to secure WordPress site?</a></Link>
                        </s.blogTitle>
                        <p>If you own a WordPress website, the question of its security might have bothered you. The WordPress core software is generally very secure and is regularly audited by dedicated developers. But still, you should do your best to keep your website safe and secure from hackers and malware.</p>
                        <Link href={router.SINGLEBLOG14}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>November 16, 2020</div>
                    </s.blogItem> 
                    <s.blogItem className='blogItem wordpress'>
                        <Link href={router.SINGLEBLOG15}>
                            <a><s.blogImage><Image src={KeepWordPressSiteUpdated} alt="How to keep your WordPress website updated?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>WordPress</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG15}><a>How to keep your WordPress website updated?</a></Link>
                        </s.blogTitle>
                        <p>Your WordPress website should be updated manually. The updates keep your themes, plugins, and WordPress version secure and up to date. The minor releases are updated automatically by default. But, if the auto-update is disabled, then you will get notifications for an update. Updating WordPress is as easy as clicking an update button.</p>
                        <Link href={router.SINGLEBLOG15}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>November 09, 2020</div>
                    </s.blogItem>    
                    <s.blogItem className='blogItem wordpress'>
                        <Link href={router.SINGLEBLOG16}>
                            <a><s.blogImage><Image src={TenWpWebsite} alt="Ten plugins you must-have for your WordPress website" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>WordPress</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG16}><a>Ten plugins you must-have for your WordPress website</a></Link>
                        </s.blogTitle>
                        <p>The Plugins bring essential functions to your WordPress website. We may say that plugins are the building blocks of your WordPress site. Plugins boost the speed of the website. Plugins are multifunctional. Adding contact forms, improving SEO, creating online stores, or even offering email opt-ins are many plugin&#39;s functions.</p>
                        <Link href={router.SINGLEBLOG16}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>November 02, 2020</div>
                    </s.blogItem>    
                    <s.blogItem className='blogItem outsourcing'>
                        <Link href={router.SINGLEBLOG17}>
                            <a><s.blogImage><Image src={MakeVirtualEmployeesProductive} alt="How to Make Virtual Employees Productive?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Outsourcing</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG17}><a>How to Make Virtual Employees Productive?</a></Link>
                        </s.blogTitle>
                        <p>Remote work or working virtually is on the rise, especially considering the recent scenario. Even though managing remote employees can be stressful enough to want one tear of their hair, it is one of the greatest competitive strength. It is a lot easier to hire talented professionals without considering the location also</p>
                        <Link href={router.SINGLEBLOG17}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>September 29, 2020</div>
                    </s.blogItem>  
                    <s.blogItem className='blogItem outsourcing'>
                        <Link href={router.SINGLEBLOG18}>
                            <a><s.blogImage><Image src={FindOutsourcingPartner} alt="How Shoulds I Find the Right Outsourcing Partner in India?" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>OUTSOURCING</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG18}><a>How Shoulds I Find the Right Outsourcing Partner in India?</a></Link>
                        </s.blogTitle>
                        <p>For today&#39;s dynamic market, outsourcing is a boon and a blessing in disguise for every business. And since businesses today are dependent and look forward to expanding their business through outsourcing, it is crucial to choose the right outsourcing partner from India who can aid in the yielding of the best possible dividends.</p>
                        <Link href={router.SINGLEBLOG18}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>September 22, 2020</div>
                    </s.blogItem> 
                    <s.blogItem className='blogItem outsourcing'>
                        <Link href={router.SINGLEBLOG19}>
                            <a><s.blogImage><Image src={ComparisonBetweenFixedPrice} alt="A comparison between fixed price and time and material contract" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>OUTSOURCING</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG19}><a>A comparison between fixed price and time and material contract</a></Link>
                        </s.blogTitle>
                        <p>If not selecting the right outsourcing partner was not already daunting enough a task, choosing the right pricing framework also matters a lot and is dependent on the success of your outsourcing deals. Initially, the outsourcing pricing models were only fixed-price contracts.</p>
                        <Link href={router.SINGLEBLOG19}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>September 15, 2020</div>
                    </s.blogItem>     
                    <s.blogItem className='blogItem outsourcing'>
                        <Link href={router.SINGLEBLOG20}>
                            <a><s.blogImage><Image src={TimeConsiderOutsourcing} alt="7 Signs its time to Consider Outsourcing" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>OUTSOURCING</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG20}><a>7 Signs its time to Consider Outsourcing</a></Link>
                        </s.blogTitle>
                        <p>There is no denying the fact that today there is an additional constant rising pressure in the global market which creates a competitive environment and a thrive to be the best in the market. Under such circumstances, the only companies that lead the market are the one who work most efficiently.</p>
                        <Link href={router.SINGLEBLOG20}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>September 08, 2020</div>
                    </s.blogItem> 
                    <s.blogItem className='blogItem development'>
                        <Link href={router.SINGLEBLOG21}>
                            <a><s.blogImage><Image src={TopResonsOffshireDevelopment} alt="Top Reasons to consider offshore development" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Development</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG21}><a>Top Reasons to consider offshore development</a></Link>
                        </s.blogTitle>
                        <p>The internet has made the whole world a tightly knit entity. The emergence of natural communication enablers like file sharing, desktop sharing, video conferences, etc. has further eased the working without bothering about geographical boundaries. For any business, inviting the experts and giving them a place to work and stay is not budget-friendly always.</p>
                        <Link href={router.SINGLEBLOG21}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>September 01, 2020</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem development'>
                        <Link href={router.SINGLEBLOG22}>
                            <a><s.blogImage><Image src={TopResonsOffshireDevelopment} alt="onshore-vs-offshore-development-which-is-better" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Development</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG22}><a>onshore-vs-offshore-development-which-is-better</a></Link>
                        </s.blogTitle>
                        <p>Offshore development used to be the monopoly of India and China until quite recently. The picture is changing with various other countries like Malaysia and Eastern European nations joining the bandwagon. The growing demand for offshore development does leave the people curious about the reason behind it. Also, the trend and future of onshore development require scrutiny in light of the companie&#39;s changing attitudes. So, let&#39;s take a comparative look at offshore and onshore development and arrive at a conclusion.</p>
                        <Link href={router.SINGLEBLOG22}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>August 24, 2020</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem development'>
                        <Link href={router.SINGLEBLOG23}>
                            <a><s.blogImage><Image src={OffshoreDevelopment} alt="Offshore development best practices to know about" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Development</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG23}><a>Offshore development best practices to know about</a></Link>
                        </s.blogTitle>
                        <p>The arrangement, where team members separated by time-zones and geographical boundaries work together to make a project possible, forms the basis of offshore development. On the one hand, the companies enjoy cost-effective development, and at the other, the workers get to work in a flexible and more autonomous environment.</p>
                        <Link href={router.SINGLEBLOG23}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>August 17, 2020</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem development'>
                        <Link href={router.SINGLEBLOG24}>
                            <a><s.blogImage><Image src={LeadingTrendsKnowAbout} alt="Leading offshore development trends to know about" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>Development</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG24}><a>Leading offshore development trends to know about</a></Link>
                        </s.blogTitle>
                        <p>Offshore development is the reality, and several trends are emerging off it with this style gaining popularity worldwide. Users do not want to settle for something less in quality because the conditions are not conventional while dealing with developers offshore.</p>
                        <Link href={router.SINGLEBLOG24}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>August 10, 2020</div>
                    </s.blogItem>
                    <s.blogItem className='blogItem outsourcing'>
                        <Link href={router.SINGLEBLOG25}>
                            <a><s.blogImage><Image src={WaysUEISABSER} alt="The ways to utilize an effective outsourcing strategy and achieve business success by eliminating the risks" layout='raw'/></s.blogImage></a>
                        </Link>
                        <s.blogCategory className='orangeColor'>outsourcing</s.blogCategory>
                        <s.blogTitle className='postHeading'>
                            <Link href={router.SINGLEBLOG25}><a>The ways to utilize an effective outsourcing strategy and achieve business success by eliminating the risks</a></Link>
                        </s.blogTitle>
                        <p>Numerous organizations are on the lookout for innovative approaches to achieve a lot out of their business objectives without too much investment. Outsourcing your business is one methodology that can save you a lot of time, money, and disappointments, especially when you start and are on the way to constructing your business.</p>
                        <Link href={router.SINGLEBLOG25}><a className='blogLink'>Let&#39;s Read</a></Link>
                        <div className='datePart'>August 03, 2020</div>
                    </s.blogItem>         
                </s.BlogListWrapper>
            </Col>
            <Col lg={3} md={12} className="order-1 order-lg-2 mb-5 mb-lg-0">
              <s.CategoryList>
                <s.catHeading>Blog Categories</s.catHeading>
                <ul className='catListPart' Id="filters">
                    <li><Link href="#"><a className="active" data-filter="*">All</a></Link></li>
                    <li><Link href="#"><a data-filter=".wordpress">WordPress</a></Link></li>
                    <li><Link href="#"><a data-filter=".seo">SEO</a></Link></li>
                    <li><Link href="#"><a data-filter=".marketing">Marketing</a></Link></li>
                    <li><Link href="#"><a data-filter=".outsourcing">Outsourcing</a></Link></li>
                    <li><Link href="#"><a data-filter=".development">Development</a></Link></li>
                </ul>
              </s.CategoryList>
            </Col>
          </Row>
        </Container>
      </s.blogListing>
     </s.Listing>
    </>
  );
};

export default BlogListings