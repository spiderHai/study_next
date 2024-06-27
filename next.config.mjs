/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        ppr: 'incremental',
      },
};

export default nextConfig;
