const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          subsets: ['cyrillic-ext', 'latin-ext'],
        },
      },
    ],
  },
};

module.exports = nextTranslate(nextConfig);
