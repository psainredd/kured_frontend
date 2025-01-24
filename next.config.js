/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    hiatusMode:false,
    apiUrl: 'http://localhost:8080',
    wsUrl :'ws://localhost:8080',
    s3BaseUrl:'https://d2afjb22cegpz3.cloudfront.net'
  }
}

module.exports = nextConfig
