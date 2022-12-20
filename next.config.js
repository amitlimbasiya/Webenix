/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig
module.exports = {
  experimental: {
      images: {
          layoutRaw: true,
          layoutFill: true,
          layoutIntrinsic :false,
          unoptimized: true
      },
      forceSwcTransforms: true,
  },
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/portfolio/usa-pipelining',
        destination: '/work/usa-pipelining',
        permanent: true,
      },
      {
        source: '/portfolio/southerntradelines',
        destination: '/work/southerntradelines',
        permanent: true,
      },
      {
        source: '/portfolio/diningedge',
        destination: '/work/diningedge',
        permanent: true,
      },
      {
        source: '/get-in-touch',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/logo-brand-identity-guidelines',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/why-outsourcing-top-5-reasons-benefits-instead-hiring',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/why-outsourcing-top-5-reasons-benefits-instead-hiring#!',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/#!',
        destination: '/blog',
        permanent: true,
      }
    ]
  },
};

