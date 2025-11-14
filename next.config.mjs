/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable source maps in production to prevent code exposure
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
    unoptimized: true,
  },
  // Compress output (enabled by default, but explicit for clarity)
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
