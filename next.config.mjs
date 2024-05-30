/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/team-challenge-marketplace-admin",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/team-challenge-marketplace-admin',
          basePath: false,
          permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig