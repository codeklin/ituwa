/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    unoptimized: false, // Enable optimization for production
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
}

export default nextConfig
