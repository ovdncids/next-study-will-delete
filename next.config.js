/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ["/"]
  },
  async rewrites() {
    return [
      {
        source: "/proxy/api/:path*",
        destination: `${process.env.NEXT_PRIVATE_BACKEND_API_URL}/api/:path*`
      }
    ]
  }
}

module.exports = nextConfig
