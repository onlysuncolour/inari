/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
}
module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
  },
  ...nextConfig
});
