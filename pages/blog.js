import React from 'react'
import PageBanner from '../components/PageBanner3';
import BlogListings from '../components/BlogListing';
import Head from 'next/head';
import { data } from "../data/Seo";

const ListingBlog = () => {
  return (
    <>
       <Head>
        <title>{data.blog.title}</title>
        <meta name="description" content={data.blog.description}/>
        <meta name="keywords" content={data.blog.keyword} />
      </Head>
      <PageBanner 
        PageBannerBigTitle="Blog"
        PageBannerClass="pagebanner-section lightPurplBg noiseBg smallPart"
        PageBannerImgClass="pagebannerimg-col at-right-bottom" 
        PageBannerTitle="Blog"
        PageBannerGreenUnderlineText="@WEBENIX"
      />
      <BlogListings/>
    </>
  );
}

export default ListingBlog