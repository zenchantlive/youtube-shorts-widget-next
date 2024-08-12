/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
        ],
      },
    ];
  },
  serverRuntimeConfig: {
    auth0: {
      secret: process.env.AUTH0_SECRET,
      baseURL: process.env.AUTH0_BASE_URL,
      issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      session: {
        cookieSecret: process.env.AUTH0_SECRET,
        cookieLifetime: 60 * 60 * 8,
        cookieSameSite: 'lax',
        storeIdToken: false,
        storeAccessToken: false,
        storeRefreshToken: false,
      },
      oidcClient: {
        httpTimeout: 2500,
        clockTolerance: 10000,
      },
    },
  },
};