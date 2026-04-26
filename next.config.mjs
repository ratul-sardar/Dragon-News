/** @type {import('next').NextConfig} */

const redirect_id = "01";

const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: `/news/${redirect_id}`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
