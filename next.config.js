/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: this site has no API routes, server actions, or dynamic
  // rendering, so `npm run build` emits a plain static `out/` folder that
  // can be uploaded to any cPanel/shared-hosting public_html — no Node.js
  // runtime required on the server. See DEPLOYMENT.md.
  output: "export",
};

module.exports = nextConfig;
