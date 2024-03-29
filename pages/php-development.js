import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import ServiceFeatureBox from '../components/ServiceFeatureBox';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const PHPDEVELOPMENT = () => {
  
  const [ServiceData, setServiceData] = useState([]);
  useEffect(() => {
    const services = [
        {
          key:1,
          ServiceBoxClass:"greenlightPart",
          ServiceIcon:"/images/f-Web-Development.svg",
          ServiceIconHeight:"90px",
          ServiceIconWidth:"90px",
          ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.69 179.26"><defs></defs><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M191.8,262.85c-20.53,1.32-32.31-45-41.43-53.19-17.88-16.12-54.46-22.79-33.83-42.63,9.54-9.18,27.16-20.29,34.64-27.5C166.3,125,155,88.11,175.64,84.06s30.14,20.79,45.89,32.51c10.44,7.76,23.57,9,34.84,14.72,7.76,3.9,12.35,15.13,5.08,22.7C216.45,200.85,226.61,260.61,191.8,262.85Z" transform="translate(-110.41 -83.62)"/></g></g></svg>',
          ServiceName:"PHP Web <br>Development"
        },
        {
          key:2,
          ServiceBoxClass:"redPart",
          ServiceIcon:"/images/f-Back-End-Developer.svg",
          ServiceIconHeight:"90px",
          ServiceIconWidth:"90px",
          ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.51 145.95"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M85.19,343.65c-33.57,51.44,30.58,75.1,71.14,75.1,39.9,0,85-15.05,85-61.3C241.31,238.4,142.82,255.38,85.19,343.65Z" transform="translate(-75.8 -272.8)"/></g></g></svg>',
          ServiceName:"PHP Backend <br> Development"
        },
        {
          key:3,
          ServiceBoxClass:"yellowPart",
          ServiceIcon:"/images/f-php-icon.svg",
          ServiceIconHeight:"90px",
          ServiceIconWidth:"90px",
          ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.06 161.27"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M164.87-57.64c0,43.16,25.6,58.53,38.69,33.24,10.1-19.49,22.46-15.17,45-12.76,23.14,2.48,29.6-28.57,49.89-35.9,34.33-12.4,10.67-32.18-5.23-45.33s-7.81-41-31.63-53.36c-19.35-10.08-25.41,27.43-59.78,41.05C155.2-112.2,164.87-96.83,164.87-57.64Z" transform="translate(-164.04 173.45)"/></g></g></svg>',
          ServiceName:"PHP <br>Frameworks"
        },        
        {
          key:4,
          ServiceBoxClass:"saffronPart",
          ServiceIcon:"/images/f-Third-Party-Integration-icon.svg",
          ServiceIconHeight:"90px",
          ServiceIconWidth:"90px",
          ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.57 136.84"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M490.89,413.52c-18.76,10.83-34.58-6.41-50.21-16.83-30.65-20.42-75.83,10.44-97.57-30.12-24.07-44.91,0-89.51,46.56-86.28C520,289.33,507.93,403.68,490.89,413.52Z" transform="translate(-333.63 -280.12)"/></g></g></svg>',
          ServiceName:"PHP API <br>Development"
        },
        {
          key:5,
          ServiceBoxClass:"purplePart",
          ServiceIcon:"/images/f-PHP-Custom-Development.svg",
          ServiceIconHeight:"90px",
          ServiceIconWidth:"90px",
          ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.1 209.89"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M435.81-82.8c4.35,8.53,4.6,19.29,6.12,28.85,1.41,8.9,7.62,25.12,14.35,31.6,11.63,11.21,37,10.53,45.15-6.4,9.31-19.42.76-43.82-2-64.86-4.27-32.48,20.81-39.47,25.13-71,1.65-12.09-2-29.33-14.27-35.24-15.62-7.51-33.56,2.45-48.37-8.81-5.54-4.21-28.85-31.47-38-3.65-3.29,10-5.42,20.18-7.85,30.36-2.35,9.79-5.15,19.32-10.12,28.11-6.64,11.74-16.55,24.66-9.86,38.17C404.67-98.33,427.72-98.66,435.81-82.8Z" transform="translate(-393.83 224.72)"/></g></g></svg>',
          ServiceName:"PHP Custom <br>Development"
        },
        {
          key:6,
          ServiceBoxClass:"lightPinkPart",
          ServiceIcon:"/images/f-eCommerce-Development.svg",
          ServiceIconHeight:"90px",
          ServiceIconWidth:"90px",
          ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.35 155.44"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M726.05,313.86c-33.8-13.77-36.35-47.47-57.44-59.89-20.67-12.18-42.86-.48-51.53,33.16-9.84,38.23-35.12,46.6-48.57,74.78-5.66,11.85-3.11,34.47,12,40.67,19.82,8.15,39.12-9.22,63.72-15,22.09-5.21,52.94-.34,73.77-1.55,20.42-1.19,42.19,1.71,54.76-17.95C781.07,355,776.72,334.5,726.05,313.86Z" transform="translate(-565.74 -249.28)"/></g></g></svg>',
          ServiceName:"PHP Ecommerce <br>Development"
        },
        {
          key:7,
          ServiceBoxClass:"pinkPart",
          ServiceIcon:"/images/f-PHP-Maintenance.svg",
          ServiceIconHeight:"90px",
          ServiceIconWidth:"90px",
          ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.35 155.44"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M726.05,313.86c-33.8-13.77-36.35-47.47-57.44-59.89-20.67-12.18-42.86-.48-51.53,33.16-9.84,38.23-35.12,46.6-48.57,74.78-5.66,11.85-3.11,34.47,12,40.67,19.82,8.15,39.12-9.22,63.72-15,22.09-5.21,52.94-.34,73.77-1.55,20.42-1.19,42.19,1.71,54.76-17.95C781.07,355,776.72,334.5,726.05,313.86Z" transform="translate(-565.74 -249.28)"/></g></g></svg>',
          ServiceName:"PHP <br>Maintenance"
        },
        {
          key:8,
          ServiceBoxClass:"greenPart",
          ServiceIcon:"/images/f-support-maintanance-icon.svg",
          ServiceIconHeight:"90px",
          ServiceIconWidth:"90px",
          ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.403 111.718"><path id="Path_3702" data-name="Path 3702" d="M376.577,111.929c12.441,26.766,3.242,57.368-20.547,68.351s-53.158-1.811-65.6-28.577-3.243-57.368,20.545-68.352S364.136,85.162,376.577,111.929Z" transform="translate(-279.483 -79.416)"/> <g id="Group_2780" data-name="Group 2780" transform="translate(0 0.556)"> <path id="Path_3708" data-name="Path 3708" d="M299.916,125.177c-1.009-2.438-.163-3.738-.231-6.01.677-.3,1.373-.58,2.078-.835-.056-1.2-.369-1.554-.742-1.836a2.148,2.148,0,0,1-1.054-1.5,5.74,5.74,0,0,0,1.111-1.781,21.487,21.487,0,0,0,.843-2.2,23.275,23.275,0,0,1,1.21-3.276c.556-.106.708.235.763.654a4.127,4.127,0,0,0,.211,1.217c.684-2.639-.983-3.45,1.009-6.354l.444.253a21.667,21.667,0,0,1,8.842-10.7,42.851,42.851,0,0,1,14.14-5.661c-.69-.051-.548-.453-.848-.81a45.644,45.644,0,0,1,17.214,1.2c5.777,1.37,11.217,3.455,16.47,4.878-2.759-1.956-6.174-5.065-10.268-7.31a24.589,24.589,0,0,0-6.335-2.509,12.554,12.554,0,0,0-6.04-.018,4.208,4.208,0,0,0-1.966-.82,12.108,12.108,0,0,0-2.193-.184c-1.419-.079-2.633-.037-3.154-1.025a19.577,19.577,0,0,0-11.463,2.427c-3.028,1.639-5.682,3.571-9.476,5.861-1.253.411-1.232-.7-2.031-1.233a38.951,38.951,0,0,1,6.238-4.3,40.8,40.8,0,0,0-4.543,1.365,6.105,6.105,0,0,1,1.562-1.28,24.184,24.184,0,0,1,2.1-1.21,19.7,19.7,0,0,0,1.85-1.149,1.723,1.723,0,0,0,.811-1.239c-3.016,2.077-7,4.075-10.492,6.722-3.473,2.624-6.4,5.82-7.318,8.819,2.044-1.808,4.082-4.561,6.751-6.4.754-.178,1.619-.5,2.353-.654.75-.132,1.344-.116,1.532.3-2.961,3.448-5.468,6.3-7.883,9.341a33.686,33.686,0,0,0-5.852,10.553c-.649,2.076-1.687,4.813-2.6,4.952.091-1.5-.916-.637-.957-1.932a2.144,2.144,0,0,0,1.231,2.369c.584.425.94.941.3,3.054q-1.459-.592-2.907-1.221c1.382,1.259,1,2.564.457,4.1-.526,1.518-1.19,3.3-.283,4.986-1.276,1.153-1.973-1.088-1.785-3.72-.812,2.928,1,3.308.908,5.6-.906-.737-1.724-1.509-2.587-2.318a3.17,3.17,0,0,1,.914,1.853,2.78,2.78,0,0,1-.367,1.614c-.558,1.018-1.428,1.95-1.827,2.73.327.068.973-.276,1.542-.223s1.035.486,1.129,2.073c-.2,1.4-.934.781-1.273,1.148.681.107,1.981,1.1,2.414,3.131-.8.542-1.567-1.146-2.461-1.163.129.809.345,1.522.426,2.2a4.588,4.588,0,0,1-.143,1.986c1.383,2.646,1.2-.464,2.535,1,.262,2.155-.424,2.49-1.38,2.518s-2.158-.275-2.824.812c-2.252-3.022-3.464-7.582-4.378-9.442a63.552,63.552,0,0,0,1.969,6.744c-.548-.09-.733,1.171-.942,2.042s-.542,1.366-1.525-.351a31.792,31.792,0,0,0,3.662,10.919,51.909,51.909,0,0,0,6.44,9.249c-.256-.99-.7-2.161-.038-2.333,2.372,2.574,1.129,2.94.906,3.985,2.148,1.68,3.365.393,5.374.752a18.488,18.488,0,0,0,1.44,2.894c.452.752.854,1.354,1.262,1.921a17.666,17.666,0,0,1,1.145,1.877,24.043,24.043,0,0,1,1.269,2.743l.99-1.512a3.541,3.541,0,0,0,2.561,2.223,5.016,5.016,0,0,1,3,1.95c-.061.412-1.408.064-2.49-.269,2.781,1.325,1.392,2.917,4.322,3.983q-1.535.2-3.132.347c2.1,1.346,5.57,2.6,3.616,3.437,2.425.2,5.2,1.3,8.192,2.245a30.967,30.967,0,0,0,8.9,1.831l-.689,1.425a7.07,7.07,0,0,1,2.973-.231c1.15.059,2.415.275,3.69.374.636.052,1.269.1,1.882.126a14.656,14.656,0,0,0,1.76-.079,4.351,4.351,0,0,0,2.625-1l.425.623a47.4,47.4,0,0,0,5.29-2.523,1.771,1.771,0,0,1,2.112,1.546c5.413-1.382,9.319-3.122,12.894-3.944a2.891,2.891,0,0,1,.749-1.815,14.094,14.094,0,0,1,1.944-2.051c1.539-1.454,3.488-3.011,5.083-4.534A39.906,39.906,0,0,0,380.1,165.308a45.847,45.847,0,0,0,3.5-7.3,50.1,50.1,0,0,0,2.131-7.73,52.73,52.73,0,0,0,.805-7.828,54.82,54.82,0,0,0-.408-7.65,53.242,53.242,0,0,0-3.811-13.946,11.568,11.568,0,0,0-2.7-4.022c-.637-.643-1.291-1.305-1.943-1.963-.671-.636-1.309-1.266-1.862-1.9a15.393,15.393,0,0,0,1.666,3.79,14.166,14.166,0,0,1,1.763,3.738,6.314,6.314,0,0,1-.783,3.713,29.409,29.409,0,0,0-1.649,3.372q.752-.741,1.5-1.52c1.074,1.745.918,2.466.809,3.041s-.171,1.032.85,2.464l-2.831.143a1.587,1.587,0,0,1,.74.954,3.213,3.213,0,0,1,.012,1.315,6.134,6.134,0,0,1-.992,2.356c.652.311,1.315.635,1.963.97-1.132,2.341-1.75,3.781-3.574,4.265l1.808-.027c-.609.371-.831,2.539-1.351,4.2-.568,1.659-1.266,2.748-2.46,1.132.269.7.986,1.489.416,2.779l-1.773-.327c-.105,1.971-.645,4.129-1.791,4.215a2.9,2.9,0,0,0-1.207-2.3c-.765,1.739-.941,2.8-.744,3.59a3.56,3.56,0,0,0,1.366,1.8A3.932,3.932,0,0,1,371,158.391c.247.788.093,1.891-.965,3.512l-.9-.728c-.036.743-.043,1.535-.136,2.284-.822.234-1.586.483-2.405.646.659,2.313-1.362,4.327-3.845,5.9-2.5,1.612-5.388,2.694-7.036,4.606a2.773,2.773,0,0,1-1.432.445,10.993,10.993,0,0,1-1.859.01c-.672-.035-1.37-.029-2.113-.016a9.909,9.909,0,0,0-2.281.4l.634,1.682c-1.573-.507-4.907-.639-8.017-1.638-3.122-.941-5.9-2.7-6.6-4.929-2.47.928.155.409-.13,1.8a9.794,9.794,0,0,1-1.6.188,5.1,5.1,0,0,1-1.22-.169,2.98,2.98,0,0,1-1.552-.98c-.752-.831-1.067-2-1.961-2.881-1.429-.107-1.022.244-.46.72s1.289,1,.337,1.392a4.791,4.791,0,0,0-3.992-1.218c-1.164.03-2.584.038-4.664-2,.08-1.14,1.591.208,2.43-.107-2.126-.172-4.642-1.616-6.991-3.641a67.584,67.584,0,0,1-6.53-6.828,67.48,67.48,0,0,1-4.793-11.012,34.547,34.547,0,0,1-1.775-12.288l-.659-.038a8.382,8.382,0,0,0,.432-2.447,22.821,22.821,0,0,0-.133-2.435,13,13,0,0,1,.189-5.122C300.6,124.038,300.241,124.6,299.916,125.177Z" transform="translate(-281.148 -79.801)"/></g></svg>',
          ServiceName:"PHP <br>Support"
        }
      ];
    setServiceData(services);
  }, []);
  return (
    <>
      <Head>
        <title>{data.phpdevelopment.title}</title>
        <meta name="description" content={data.phpdevelopment.description}/>
        <meta name="keywords" content={data.phpdevelopment.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgLavenderMist pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="PHP"
        PageBannerGreenTitle="Development"
        PageBannerContent="<p>With the executive experience, amplify your business requirements with the PHP  Development fulfilling the expectation of small business portals to large enterprise business models thriving to ease down the complex solutions.</p> <p>Develop a strong backend with the <strong>PHP Development Services</strong> and experience the strong functionality.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-php-icon.svg"
      />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="PHP Expertise"
        IntroMainTitle="With years of experience in Development, we provide the right and strong solutions for your business."
        IntroContent='
        <p>The strong and guaranteed  Development solutions help in showcasing the brand presence amongst the market with the rightfully integrated features for the <strong>PHP Web Development Services</strong></p>
        <p>Along with mapping down the best design, we make sure to integrate the right tools that function, ensuring the performance of the web application. With the help of the best developers, we have curated and been the best <strong>PHP Development Company in India</strong> with fantastic solutions to multiple businesses, so have been stated as the Best Development Company.</p>
      '/>
      <ServiceFeatureBox
        sectionTagLine="We Provide"
        sectionMainTitle="PHP Development Services"
        ServiceValue={ServiceData}          
      />  
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/> 
    <Blog/>
    </>
  );
}

export default PHPDEVELOPMENT