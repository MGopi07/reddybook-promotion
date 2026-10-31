/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/match-previews',
        destination:
          'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+Match+Previews.&type=phone_number&app_absent=0',
        permanent: false,
      },
      {
        source: '/analysis',
        destination:
          'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+Match+Analysis.&type=phone_number&app_absent=0',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
