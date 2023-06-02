/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/pages/ressources',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
