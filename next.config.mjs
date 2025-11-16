const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
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
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
