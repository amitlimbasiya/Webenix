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
    ]
  },
};

