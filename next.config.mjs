/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export -> deploy the `out/` folder to Cloudflare Pages (or any static host).
  output: "export",
  images: {
    // We use plain <img>, but keep this so next/image would also work statically.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
