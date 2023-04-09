/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl: process.env.REACT_APP_API_HOST || 'http://localhost:3001',
    subKey: process.env.API_KEY_SUBSCRIPTION || '',
  },
  compress: true,
  // TODO
  // basePath: '/',
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
