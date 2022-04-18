/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  ...withPWA({
    pwa: {
      dest: 'public',
      disable: !isProduction
    }
  })
};

module.exports = nextConfig;
