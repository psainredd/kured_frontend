/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    hiatusMode:false,
    apiUrl: 'http://localhost:8080',
    wsUrl :'ws://localhost:8080'
  }
}

module.exports = nextConfig
