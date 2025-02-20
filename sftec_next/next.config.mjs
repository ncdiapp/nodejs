/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*",
      },
    ];
  },
  images: {
    domains: ["localhost", "www.testapp.com", "160.32.215.226", "160.32.215.226:12355", "appbuilder20240308181532.azurewebsites.net"],
  },

};

export default nextConfig;
