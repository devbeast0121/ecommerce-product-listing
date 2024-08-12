/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
        ],
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.externals.push('sharp')
        }
        return config
    },
}

module.exports = nextConfig