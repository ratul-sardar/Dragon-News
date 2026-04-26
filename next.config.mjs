/** @type {import('next').NextConfig} */

const redirect_id = "1";

const nextConfig = {
  /* config options here */
  reactCompiler: true,

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
