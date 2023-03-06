import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/BlogListing/BlogListing.style";
import WhyWPWebsite from "../../public/images/blogs/why-necessary.jpg";
import TopMobileAppDevTrend from "../../public/images/blogs/Top-10-Mobile-App-Development-Trends-in-2022.jpg";
import RightWebDevTechProject from "../../public/images/blogs/The-Right-Web-Development-Technology-For-Your-Project.jpg";
import CompleteOffshoreResourceHiring from "../../public/images/blogs/A-Complete-Offshore-Resource-Hiring-E-Guide.jpg";
import WPAutomation from "../../public/images/blogs/wordpress-automation.jpg";
import Topprediction from "../../public/images/blogs/predictions-facebook.jpg";
import TopThings from "../../public/images/blogs/top-things-landing-page.jpg";
import TopAdvcanced from "../../public/images/blogs/seo-techniques.jpg";
import Bestb2b from "../../public/images/blogs/best-b2b-marketing.jpg";
import LkedinMarketing from "../../public/images/blogs/linkedin-marketing.jpg";
import ManagedWP from "../../public/images/blogs/Is-managed-WordPress-hosting-worth-the-extra-price.jpg";
import WebAgenciesProductionCost from "../../public/images/blogs/How-Web-Agencies-can-reduce-production-cost-in-2021.jpg";
import SEOChange from "../../public/images/blogs/How-Will-SEO-Change-in-2021.jpg";
import MotivateRemoteSoftwareTeam from "../../public/images/blogs/How-to-motivate-and-engage-a-remote-software-team.jpg";
import AvoidCulturalOutSourcing from "../../public/images/blogs/How-to-avoid-cultural-pitfalls-in-outsourcing.jpg";
import WpSpeedOptimize from "../../public/images/blogs/How-to-speed-optimize-WordPress-website.jpg";
import SecureWordPressSite from "../../public/images/blogs/How-to-secure-WordPress-site.jpg";
import KeepWordPressSiteUpdated from "../../public/images/blogs/How-to-keep-your-WordPress-website-updated.jpg";
import TenWpWebsite from "../../public/images/blogs/Ten-plugins-you-must-have-for-your-WordPress-website.jpg";
import MakeVirtualEmployeesProductive from "../../public/images/blogs/How-to-Make-Virtual-Employees-Productive.jpg";
import FindOutsourcingPartner from "../../public/images/blogs/How-Shoulds-I-Find-the-Right-Outsourcing-Partner-in-India.jpg";
import ComparisonBetweenFixedPrice from "../../public/images/blogs/A-comparison-between-fixed-price-and-time-and-material-contract.jpg";
import TimeConsiderOutsourcing from "../../public/images/blogs/7-Signs-its-time-to-Consider-Outsourcing.jpg";
import TopResonsOffshireDevelopment from "../../public/images/blogs/Top-Reasons-to-consider-offshore-development.jpg";
import OffshoreDevelopment from "../../public/images/blogs/Offshore-development-best-practices-to-know-about.jpg";
import LeadingTrendsKnowAbout from "../../public/images/blogs/Leading-offshore-development-trends-to-know-about.jpg";
import ChecklistHiringOffshoreDevStartup from "../../public/images/blogs/checklist-for-hiring-offshore-development-team-for-your-startup.jpg";
import UltimateGuideToHireDedicatedDeveloperOverviewProcessTips from "../../public/images/blogs/ultimate-guide-to-hire-dedicated-developer-overview-process-tips.jpg";
import WaysUEISABSER from "../../public/images/blogs/The-ways-to-utilize-an-effective-outsourcing-strategy-and-achieve-business-success-by-eliminating-the-risks.jpg";
import TipsHireDedicatedProgrammers from "../../public/images/blogs/Tips-to-Hire-Dedicated-Programmers.jpg";
import Onshoreoffshore from "../../public/images/blogs/onshore-vs-offshore.jpg";
import HowOutsourceSoftwareDevelopmentEffectively from "../../public/images/blogs/How-To-Outsource-Software-Development-Effectively.jpg";
import ChooseDedicatedTeamModelToBuildNextGenProductCtoGuide from "../../public/images/blogs/choose-dedicated-team-model-to-build-next-gen-product-cto-guide.jpg";
import HowtoHireRemoteDevelopersWebMobileAppDevelopment from "../../public/images/blogs/how-to-hire-remote-developers-for-web-mobile-app-development-2023-guide.jpg";
import HireTheBestNextJsDeveloperForYourProjectYourUltimateGuide from "../../public/images/blogs/hire-the-best-next-js-developer-for-your-project-your-ultimate-guide.jpg";
import WhatDoYouNeedToConsiderWhileHiringOffshoreDevelopers from "../../public/images/blogs/what-do-you-need-to-consider-while-hiring-offshore-developers.jpg";
import HowToHireWebDeveloperThatWillBePerfectMatchForYourProject from "../../public/images/blogs/how-to-hire-a-web-developer-that-will-be-a-perfect-match-for-your-project.jpg";
import WhatIsHubspotCertifiedDeveloperWhyShouldYouHireOne from "../../public/images/blogs/what-is-a-hubspot-certified-developer-and-why-should-you-hire-one.jpg";
import WhyHiringAnOffshoreNextJsDeveloperMayBeTheRightChoiceForYourProject from "../../public/images/blogs/why-hiring-an-offshore-next-js-developer-may-be-the-right-choice-for-your-project.jpg";
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
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const BlogListings = (props) => {
  return (
    <>
      <s.Listing>
        <Slider className="slickSlider" {...settings}>
          <s.blogItem className="blogItem text-center">
            <Link href={router.SINGLEBLOG25}>
              <a>
                <s.blogImage>
                  <Image
                    src={WaysUEISABSER}
                    placeholder="blur"
                    alt="Eliminate the risks and utilize an effective Business Outsourcing Process in Business"
                    layout="responsive"
                  />
                  <div className="datePart">AUGUST 03, 2020</div>
                </s.blogImage>
              </a>
            </Link>
            <s.blogCategory className="orangeColor">OUTSOURCING</s.blogCategory>
            <s.blogTitle className="postHeading">
              <Link href={router.SINGLEBLOG25}>
                <a>
                  Eliminate the risks and utilize an effective Business
                  Outsourcing Process in Business
                </a>
              </Link>
            </s.blogTitle>
          </s.blogItem>
          <s.blogItem className="blogItem text-center">
            <Link href={router.SINGLEBLOG21}>
              <a>
                <s.blogImage>
                  <Image
                    src={TopResonsOffshireDevelopment}
                    placeholder="blur"
                    alt="Top-5 reasons to look for Offshore Development in the Business"
                    layout="responsive"
                  />
                  <div className="datePart">SEPTEMBER 01, 2020</div>
                </s.blogImage>
              </a>
            </Link>
            <s.blogCategory className="orangeColor">outsourcing</s.blogCategory>
            <s.blogTitle className="postHeading">
              <Link href={router.SINGLEBLOG21}>
                <a>
                  Top-5 reasons to look for Offshore Development in the Business
                </a>
              </Link>
            </s.blogTitle>
          </s.blogItem>
          <s.blogItem className="blogItem text-center">
            <Link href={router.SINGLEBLOG19}>
              <a>
                <s.blogImage>
                  <Image
                    src={ComparisonBetweenFixedPrice}
                    placeholder="blur"
                    alt="A comparison between fixed price and time and material contract"
                    layout="responsive"
                  />
                  <div className="datePart">SEPTEMBER 22, 2020</div>
                </s.blogImage>
              </a>
            </Link>
            <s.blogCategory className="orangeColor">outsourcing</s.blogCategory>
            <s.blogTitle className="postHeading">
              <Link href={router.SINGLEBLOG19}>
                <a>
                  A comparison between fixed price and time and material
                  contract
                </a>
              </Link>
            </s.blogTitle>
          </s.blogItem>
        </Slider>
        <s.blogListing className="blogListing">
          <Container>
            <Row>
              <Col lg={9} md={12} className="order-2 order-lg-1">
                <s.BlogListWrapper className="bloglisting-wrapper">

                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG39}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={
                              WhyHiringAnOffshoreNextJsDeveloperMayBeTheRightChoiceForYourProject
                            }
                            alt="Why Hiring an Offshore Next JS Developer May Be the Right Choice for Your Project"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG39}>
                        <a>
                          Why Hiring an Offshore Next JS Developer May Be the Right Choice for Your Project
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      You've definitely heard about Node.js development if you're tech-savvy and keep up with the newest developments in the app industry. Without a question, this is the programming language that developers use the most. And, therefore several companies think of hiring an offshore Next JS developer.
                    </p>
                    <Link href={router.SINGLEBLOG39}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">February 28, 2023</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG38}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={
                              WhatIsHubspotCertifiedDeveloperWhyShouldYouHireOne
                            }
                            alt="How To Hire A Web Developer That Will Be A Perfect Match For Your Project?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG38}>
                        <a>
                          What is a hubspot certified developer and why should you hire one?
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      HubSpot is a distinctive and potent system. Even the most seasoned web developers must go through a learning curve. With the help of its CMS certification program, HubSpot certifies developers who possess the skills and knowledge necessary to create websites using the HubSpot CMS. Every year, a developer must retake the certification exam.
                    </p>
                    <Link href={router.SINGLEBLOG38}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">February 28, 2023</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG37}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={
                              HowToHireWebDeveloperThatWillBePerfectMatchForYourProject
                            }
                            alt="How To Hire A Web Developer That Will Be A Perfect Match For Your Project?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG37}>
                        <a>
                          How To Hire A Web Developer That Will Be A Perfect Match For Your Project?
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      In our daily life, technology is essential. While it makes it easier for us to carry out routine chores in the most basic settings, it also creates space for ground-breaking innovations.
                    </p>
                    <Link href={router.SINGLEBLOG37}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">February 20, 2023</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG36}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={
                              WhatDoYouNeedToConsiderWhileHiringOffshoreDevelopers
                            }
                            alt="What Do You Need To Consider While Hiring Offshore Developers?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG36}>
                        <a>
                          What Do You Need To Consider While Hiring Offshore Developers?
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Enterprises can handle several operations all the time, and among them undertaking a development project might be a challenging task for businesses with busy schedules. Businesses today prefer hiring an offshore developer because of this.
                    </p>
                    <Link href={router.SINGLEBLOG36}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">February 20, 2023</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG35}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={
                              HireTheBestNextJsDeveloperForYourProjectYourUltimateGuide
                            }
                            alt="Hire the Best Next JS Developer for Your Project: Your Ultimate Guide"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG35}>
                        <a>
                          Hire the Best Next JS Developer for Your Project: Your Ultimate Guide
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Aiming to be dynamic and intensely engaging has been an aim of nearly every web page since JavaScript's invention in the mid-1990s. But, even dynamic web pages have drawbacks of their own.
                    </p>
                    <Link href={router.SINGLEBLOG35}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">February 20, 2023</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG34}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={
                              HowtoHireRemoteDevelopersWebMobileAppDevelopment
                            }
                            alt="How to Hire Remote Developers for Web & Mobile App Development (2023 Guide)"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG34}>
                        <a>
                          How to Hire Remote Developers for Web & Mobile App
                          Development (2023 Guide)
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Great Teams produce Great Results. The aforementioned is
                      especially true if you want to produce high-quality
                      software. Imagine you have a software project that needs
                      to be completed, but it is difficult to locate skilled and
                      experienced developers who can contribute to your success.
                    </p>
                    <Link href={router.SINGLEBLOG34}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">February 20, 2023</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG32}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={
                              UltimateGuideToHireDedicatedDeveloperOverviewProcessTips
                            }
                            alt="Ultimate Guide to Hire Dedicated Developer: Overview, Process, Tips"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG32}>
                        <a>
                          Ultimate Guide to Hire Dedicated Developer: Overview,
                          Process, Tips
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      You must have witnessed tremendous growth in virtual
                      enterprises since COVID-19. The need for software
                      developers is excellent in 2021. Businesses are converting
                      to automation and digital platforms, and as a result,
                      there is a growing need for platforms and software
                      engineers.
                    </p>
                    <Link href={router.SINGLEBLOG32}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">February 13, 2023</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG31}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={ChecklistHiringOffshoreDevStartup}
                            alt="Checklist for Hiring Offshore Development Team for
                          Your Startup"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG31}>
                        <a>
                          Checklist for Hiring Offshore Development Team for
                          Your Startup
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Hire Offshore Development Team, Hire Offshore Testing
                      Team, Hire Offshore Team, Over the past few years,
                      software development has advanced dramatically, and this
                      trend shows no signs of abating.
                    </p>
                    <Link href={router.SINGLEBLOG31}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">February 6, 2023</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem outsourcing">
                    <Link href={router.SINGLEBLOG33}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={
                              ChooseDedicatedTeamModelToBuildNextGenProductCtoGuide
                            }
                            alt="Choose Dedicated Team Model to Build Next Gen Product
                          (CTO Guide)"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      OUTSOURCING
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG33}>
                        <a>
                          Choose Dedicated Team Model to Build Next Gen Product
                          (CTO Guide)
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      While some outsource entire teams, others rely on
                      dedicated development team. Zapier, Slack, or GitLab are
                      just a few examples of successful businesses that take use
                      of distributed development and have teams located all over
                      the world. They view it as a clever method of hiring
                      intelligent individuals wherever they may be.
                    </p>
                    <Link href={router.SINGLEBLOG33}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">February 1, 2023</div>
                  </s.blogItem>     
                  <s.blogItem className="blogItem outsourcing">
                    <Link href={router.SINGLEBLOG25}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={WaysUEISABSER}
                            alt="Eliminate the risks and utilize an effective Business Outsourcing Process in Business"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      outsourcing
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG25}>
                        <a>
                          Eliminate the risks and utilize an effective Business
                          Outsourcing Process in Business
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Various Business Outsourcing processes are on the lookout
                      for innovative approaches to achieve a lot out of their
                      business objectives without too much investment.
                    </p>
                    <Link href={router.SINGLEBLOG25}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">August 03, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG24}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={LeadingTrendsKnowAbout}
                            alt="Do you know the latest Offshore Development Trends?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG24}>
                        <a>
                          Do you know the latest Offshore Development Trends?
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Offshore Development Trends are the reality, and several
                      emerging off it with this style gaining popularity
                      worldwide. Users do not want to settle for something less
                      in quality because the conditions are not conventional
                      while dealing with Offshore Developers
                    </p>
                    <Link href={router.SINGLEBLOG24}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">August 10, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG23}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={OffshoreDevelopment}
                            alt="Know the best practises for Offshore Outsourcing"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG23}>
                        <a>Know the best practises for Offshore Outsourcing</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Why should I look forward to Offshore Wind Development?
                      The arrangement, where team members separated by
                      time-zones and geographical boundaries work together to
                      make a project possible, forms the basis of Offshore
                      Development Best Practices.
                    </p>
                    <Link href={router.SINGLEBLOG23}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">August 17, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG22}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={Onshoreoffshore}
                            alt="Know the difference Onshore Vs Offshore Software Development"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG22}>
                        <a>
                          Know the difference Onshore Vs Offshore Software
                          Development
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Offshore development used to be the monopoly of India and
                      China until quite recently. The picture is changing with
                      various other countries like Malaysia and Eastern European
                      nations joining the bandwagon. The growing demand for
                      offshore development does leave the people curious about
                      the reason behind it. Also, the trend and future of
                      onshore development require scrutiny in light of the
                      companie&#39;s changing attitudes. So, let&#39;s take a
                      comparative look at offshore and onshore development and
                      arrive at a conclusion.
                    </p>
                    <Link href={router.SINGLEBLOG22}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">August 24, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG21}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={TopResonsOffshireDevelopment}
                            alt="Top-5 reasons to look for Offshore Development in the Business"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Development
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG21}>
                        <a>
                          Top-5 reasons to look for Offshore Development in the
                          Business
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Offshore Development has made working easier globally.
                      With the power of the internet, overseas development has
                      made networking and working together much easier.
                    </p>
                    <Link href={router.SINGLEBLOG21}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">September 01, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem outsourcing">
                    <Link href={router.SINGLEBLOG20}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={TimeConsiderOutsourcing}
                            alt="7 Signs to consider the right Time To Consider Outsourcing for your Business"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      OUTSOURCING
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG20}>
                        <a>
                          7 Signs to consider the right Time To Consider
                          Outsourcing for your Business
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      When is the right time to consider Outsourcing? Today, we
                      might be having this question because of the current
                      business working scenarios.
                    </p>
                    <Link href={router.SINGLEBLOG20}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">September 08, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem outsourcing">
                    <Link href={router.SINGLEBLOG19}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={ComparisonBetweenFixedPrice}
                            alt="A comparison between fixed price and time and material contract"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      OUTSOURCING
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG19}>
                        <a>
                          A comparison between fixed price and time and material
                          contract
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      If not selecting the right outsourcing partner was not
                      already daunting enough a task, choosing the right pricing
                      framework also matters a lot and is dependent on the
                      success of your outsourcing deals. Initially, the
                      outsourcing pricing models were only fixed-price
                      contracts.
                    </p>
                    <Link href={router.SINGLEBLOG19}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">September 15, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem outsourcing">
                    <Link href={router.SINGLEBLOG18}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={FindOutsourcingPartner}
                            alt="Is Choosing the right outsourcing partner a task? Not anymore."
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      OUTSOURCING
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG18}>
                        <a>
                          Is Choosing the right outsourcing partner a task? Not
                          anymore.
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      According to today’s scenario, working remotely and
                      Choosing the right outsourcing partner is a task that can
                      aid in the yielding of the best possible dividends.
                    </p>
                    <Link href={router.SINGLEBLOG18}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">September 22, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem outsourcing">
                    <Link href={router.SINGLEBLOG17}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={MakeVirtualEmployeesProductive}
                            alt="How to Make Virtual Employees Productive?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Outsourcing
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG17}>
                        <a>How to Make Virtual Employees Productive?</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Remote employee productivity or working virtually is on
                      the rise, especially considering the recent scenario. Even
                      though managing remote employees can be stressful enough
                      to want one tear of their hair, it is one of the greatest
                      competitive strengths.
                    </p>
                    <Link href={router.SINGLEBLOG17}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">September 29, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem wordpress">
                    <Link href={router.SINGLEBLOG16}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={TenWpWebsite}
                            alt="Ten plugins you must-have for your WordPress website"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      WordPress
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG16}>
                        <a>
                          Ten plugins you must-have for your WordPress website
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      The Best Plugins for WordPress Website bring essential
                      functions to your WordPress website. We may say that
                      plugins are the building blocks of your WordPress site.
                      Plugins boost the speed of the website.
                    </p>
                    <Link href={router.SINGLEBLOG16}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">November 02, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem wordpress">
                    <Link href={router.SINGLEBLOG15}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={KeepWordPressSiteUpdated}
                            alt="How to always Update WordPress Website?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      WordPress
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG15}>
                        <a>How to always Update WordPress Website?</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Update WordPress Website of your business regularly in
                      order to avoid any problems further. The updates keep your
                      themes, plugins, and WordPress version secure and up to
                      date.
                    </p>
                    <Link href={router.SINGLEBLOG15}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">November 09, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem wordpress">
                    <Link href={router.SINGLEBLOG14}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={SecureWordPressSite}
                            alt="How to secure WordPress site?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      WordPress
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG14}>
                        <a>How to secure WordPress site?</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      If you own a WordPress website, the question of its
                      security might have bothered you. The WordPress core
                      software is generally very secure and is regularly audited
                      by dedicated developers. But still, you should do your
                      best to keep your website safe and secure from hackers and
                      malware.
                    </p>
                    <Link href={router.SINGLEBLOG14}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">November 16, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem wordpress">
                    <Link href={router.SINGLEBLOG13}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={WpSpeedOptimize}
                            alt="Know your WordPress Site Speed Optimization for your business"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      WordPress
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG13}>
                        <a>
                          Know your WordPress Site Speed Optimization for your
                          business
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      While WordPress is a great platform, it suffers mostly
                      from one weakness-WordPress Site Speed Optimisation.
                    </p>
                    <Link href={router.SINGLEBLOG13}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">November 23, 2020</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem outsourcing">
                    <Link href={router.SINGLEBLOG12}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={AvoidCulturalOutSourcing}
                            alt="Know how to avoid the Cultural Pitfalls Outsourcing?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      OUTSOURCING
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG12}>
                        <a>
                          Know how to avoid the Cultural Pitfalls Outsourcing?
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Outsourcing Problems occur when you outsource some of your
                      business activities to a company in a different
                      geographical location, it is essential to ensure that you
                      prove to be a supportive and encouraging business
                      enterprise.
                    </p>
                    <Link href={router.SINGLEBLOG12}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">June 01, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem outsourcing">
                    <Link href={router.SINGLEBLOG11}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={MotivateRemoteSoftwareTeam}
                            alt="How to motivate and engage a remote software team?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      OUTSOURCING
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG11}>
                        <a>
                          How to motivate and engage a remote software team?
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      If you are a business manager or a team lead, you will be
                      responsible to motivate and engage remote software teams
                      too.
                    </p>
                    <Link href={router.SINGLEBLOG11}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">June 03, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem outsourcing">
                    <Link href={router.SINGLEBLOG10}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={WebAgenciesProductionCost}
                            alt="How Website Development Costs can be reduced in 2021?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      OUTSOURCING
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG10}>
                        <a>
                          How Website Development Costs can be reduced in 2021?
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Why should you take your business totally on online
                      platforms? The best reason that a business can look up to
                      is Web Agencies Reduce Production Cost to develop the best
                      Websites.
                    </p>
                    <Link href={router.SINGLEBLOG10}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">June 05, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem seo">
                    <Link href={router.SINGLEBLOG9}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={SEOChange}
                            alt="How will SEO change the marketing reach in your business in 2022?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">SEO</s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG9}>
                        <a>
                          How will SEO change the marketing reach in your
                          business in 2022?
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Reference URL In the year 2021, you will observe a
                      complete change in how online searches are carried out.
                      The question is will SEO change the algorithm of content
                      marketing in business?
                    </p>
                    <Link href={router.SINGLEBLOG9}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">June 07, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem wordpress">
                    <Link href={router.SINGLEBLOG8}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={ManagedWP}
                            alt="Is WordPress Hosting Worth the Extra price?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      WORDPRESS
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG8}>
                        <a>Is WordPress Hosting Worth the Extra price?</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      WordPress is one of the most efficient platforms to create
                      websites, eCommerce portals, social media platforms,
                      online forums, and other similar web-hosted services.
                    </p>
                    <Link href={router.SINGLEBLOG8}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">June 10, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem marketing">
                    <Link href={router.SINGLEBLOG7}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={LkedinMarketing}
                            alt="LinkedIn Marketing Best Strategies for 2021"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Marketing
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG7}>
                        <a>LinkedIn Marketing Best Strategies for 2021</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      LinkedIn is one of the most reputed Business to Business
                      or B2B platforms, which can be utilized to create more
                      resources and advertise the services provided by your
                      firm. Suppose you are a business manager for a small or
                      medium-sized business enterprise.
                    </p>
                    <Link href={router.SINGLEBLOG7}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">June 12, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem marketing">
                    <Link href={router.SINGLEBLOG6}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={Bestb2b}
                            alt="Increase lead generation through best B2B Marketing Strategies that you need to know"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Marketing
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG6}>
                        <a>
                          Increase lead generation through best B2B Marketing
                          Strategies that you need to know
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      When it comes to B2B marketing strategies, the challenge
                      you will face is reaching out to the correct customer
                      base.
                    </p>
                    <Link href={router.SINGLEBLOG6}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">June 14, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem seo">
                    <Link href={router.SINGLEBLOG5}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={TopAdvcanced}
                            alt="Know how to conquer Top Advanced SEO techniques to increase the interaction in your website"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">SEO</s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG5}>
                        <a>
                          Know how to conquer Top Advanced SEO techniques to
                          increase the interaction in your website
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      With the help of Top advanced SEO techniques, websites
                      will attract more web traffic and customer interaction.
                    </p>
                    <Link href={router.SINGLEBLOG5}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">June 15, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem marketing">
                    <Link href={router.SINGLEBLOG4}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={Topprediction}
                            alt="Top Predictions for Facebook Advertising in 2021"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      Marketing
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG4}>
                        <a>Top Predictions for Facebook Advertising in 2021</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      If you plan to use Facebook as a platform to promote the
                      products and services offered by your company, you must
                      understand how your prospective clients will perceive
                      these business promotions. For example, you need to stay
                      updated with the latest trends to impact the platform.
                    </p>
                    <Link href={router.SINGLEBLOG4}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">June 20, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem seo">
                    <Link href={router.SINGLEBLOG3}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={TopThings}
                            alt="Know what Landing Page Should have to make the best of it."
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">SEO</s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG3}>
                        <a>
                          Know what Landing Page Should have to make the best of
                          it.
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Do you know what your website’s landing page should have?
                      We all know having the website of your company makes it a
                      huge difference but how can we make the best?{" "}
                    </p>
                    <Link href={router.SINGLEBLOG3}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">August 10, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem wordpress">
                    <Link href={router.SINGLEBLOG2}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={WPAutomation}
                            alt="Know more about WordPress Automation Tools and Tips"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      WORDPRESS
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG2}>
                        <a>
                          Know more about WordPress Automation Tools and Tips
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      If you are having the website on WordPress, which is
                      overall the best platform, it is important that you know
                      the full proof usage of the WordPress that can be
                      benefitted handling the websites.
                    </p>
                    <Link href={router.SINGLEBLOG2}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">August 16, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem wordpress">
                    <Link href={router.SINGLEBLOG1}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={WhyWPWebsite}
                            alt="Why Updating WordPress Website mandatory?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      WORDPRESS
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG1}>
                        <a>Why Updating WordPress Website mandatory?</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Today, WordPress is the main platform where every website
                      is developed for better content management.
                    </p>
                    <Link href={router.SINGLEBLOG1}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">AUGUST 13, 2021</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG26}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={TipsHireDedicatedProgrammers}
                            alt="Tips to Hire Dedicated Programmers"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      DEVELOPMENT
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG26}>
                        <a>Tips to Hire Dedicated Programmers</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Okay, so here's the deal. It doesn't matter if you're a
                      startup, a medium-sized business, or a multinational
                      conglomerate; having your mobile app is essential. Apps on
                      mobile devices account for 70% of all digital media
                      consumption in the United States. You need a first-rate
                      digital presence and efficiency across all platforms, not
                      just smartphones. These are essential to the success of
                      your company.
                    </p>
                    <Link href={router.SINGLEBLOG26}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">OCTOBER 13, 2022</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG27}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={HowOutsourceSoftwareDevelopmentEffectively}
                            alt="How To Outsource Software Development Effectively?"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      DEVELOPMENT
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG27}>
                        <a>
                          How To Outsource Software Development Effectively?
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      In-house software development teams are expensive to
                      maintain.
                    </p>
                    <Link href={router.SINGLEBLOG27}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">OCTOBER 13, 2022</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG28}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={TopMobileAppDevTrend}
                            alt="Top 10 Mobile App Development Trends in 2022"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      DEVELOPMENT
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG28}>
                        <a>Top 10 Mobile App Development Trends in 2022</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      In the 21st century, the growth of mobile phones has
                      fundamentally altered company models, modes of business,
                      and market structures.
                    </p>
                    <Link href={router.SINGLEBLOG28}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">OCTOBER 13, 2022</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG29}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={RightWebDevTechProject}
                            alt="The Right Web Development Technology For Your Project"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      DEVELOPMENT
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG29}>
                        <a>
                          The Right Web Development Technology For Your Project
                        </a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Choosing the right web development technologies is crucial
                      and one that could greatly influence the end result of
                      your project.
                    </p>
                    <Link href={router.SINGLEBLOG29}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">OCTOBER 13, 2022</div>
                  </s.blogItem>
                  <s.blogItem className="blogItem development">
                    <Link href={router.SINGLEBLOG30}>
                      <a>
                        <s.blogImage>
                          <Image
                            placeholder="blur"
                            src={CompleteOffshoreResourceHiring}
                            alt="A Complete Offshore Resource Hiring-E-Guide"
                            layout="responsive"
                          />
                        </s.blogImage>
                      </a>
                    </Link>
                    <s.blogCategory className="orangeColor">
                      DEVELOPMENT
                    </s.blogCategory>
                    <s.blogTitle className="postHeading">
                      <Link href={router.SINGLEBLOG30}>
                        <a>A Complete Offshore Resource Hiring-E-Guide</a>
                      </Link>
                    </s.blogTitle>
                    <p>
                      Throughout the world, there is a growing trend of
                      outsourcing development work.
                    </p>
                    <Link href={router.SINGLEBLOG30}>
                      <a className="blogLink">Let&#39;s Read</a>
                    </Link>
                    <div className="datePart">OCTOBER 13, 2022</div>
                  </s.blogItem>
                </s.BlogListWrapper>
              </Col>
              <Col lg={3} md={12} className="order-1 order-lg-2 mb-5 mb-lg-0">
                <s.CategoryList>
                  <s.catHeading>Blog Categories</s.catHeading>
                  <ul className="catListPart" Id="filters">
                    <li>
                      <Link href="#">
                        <a className="active" data-filter="*">
                          All
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a data-filter=".wordpress">WordPress</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a data-filter=".seo">SEO</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a data-filter=".marketing">Marketing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a data-filter=".outsourcing">Outsourcing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a data-filter=".development">Development</a>
                      </Link>
                    </li>
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

export default BlogListings;
