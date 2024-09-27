/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '/**', // Adjust this if necessary based on URL
          },
        ],
      },
};

export default nextConfig;
