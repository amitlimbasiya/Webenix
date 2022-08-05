import React from 'react'
import PageBanner from '../components/PageBanner3';
import BlogListings from '../components/BlogListing';

const ListingBlog = () => {
  return (
    <>
      <PageBanner 
        PageBannerBigTitle="Blog"
        PageBannerClass="pagebanner-section lightPurplBg noiseBg"
        PageBannerImgClass="pagebannerimg-col at-right-bottom" 
        PageBannerTitle="Blog"
        PageBannerGreenUnderlineText="@WEBENIX"
      />
      <BlogListings/>
    </>
  );
}

export default ListingBlog