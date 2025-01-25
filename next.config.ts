import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'styled-components']
  }
}

export default nextConfig
