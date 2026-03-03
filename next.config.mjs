/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Optional: allow remote book cover if you provide a URL later
      { protocol: "https", hostname: "**" }
    ]
  }
};
export default nextConfig;
