/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Video thumbnails on the training page.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
};

export default nextConfig;
