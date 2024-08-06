/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
      // Customize the devtool setting based on the environment
      if (!dev) {
        // Set devtool for production
        config.devtool = 'source-map';
      } else {
        // Optionally set devtool for development
        config.devtool = 'eval-source-map';
      }
  
      return config;
    }
  };
  
  module.exports = nextConfig;
  